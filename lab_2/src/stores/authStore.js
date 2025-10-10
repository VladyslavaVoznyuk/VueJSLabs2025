import { reactive, readonly, provide, inject, ref } from 'vue'
import * as auth from '../services/auth'

const key = Symbol('auth')

export function createAuthStore() {
  const user = ref(null)
  const isAuthenticated = ref(!!localStorage.getItem('mock_token'))

  async function login(email, password) {
    const res = await auth.login(email, password)
    if (res.token) {
      localStorage.setItem('mock_token', res.token)
      user.value = res.user
      isAuthenticated.value = true
      return true
    } else {
      return false
    }
  }

  function logout() {
    localStorage.removeItem('mock_token')
    user.value = null
    isAuthenticated.value = false
  }

  async function register(payload) {
    const res = await auth.register(payload)
    if (res.token) {
      localStorage.setItem('mock_token', res.token)
      user.value = res.user
      isAuthenticated.value = true
    }
    return res
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  }
}

let _store = null

export function provideAuth(app) {
  _store = createAuthStore()
  app.provide(key, _store)
}

export function useAuth() {
  if (!_store) {
    _store = createAuthStore()
  }
  return _store
}
