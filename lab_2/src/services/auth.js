import { getUserById, saveUser } from './mockApi'

const fakeDBKey = 'mock_users'

function generateToken() {
  return 'token_' + Math.random().toString(36).slice(2)
}

export async function login(email, password) {
  const users = JSON.parse(localStorage.getItem(fakeDBKey) || '[]')
  const user = users.find((u) => u.email === email)
  if (user && password === 'password') {
    return { token: generateToken(), user }
  }
  return {}
}

export async function register({ name, email, password }) {
  const users = JSON.parse(localStorage.getItem(fakeDBKey) || '[]')
  if (users.find((u) => u.email === email)) {
    return { error: 'Email taken' }
  }
  const user = { id: String(Date.now()), name, email }
  users.push(user)
  localStorage.setItem(fakeDBKey, JSON.stringify(users))
  return { token: generateToken(), user }
}
