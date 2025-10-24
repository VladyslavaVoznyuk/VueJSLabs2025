import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import { useAuth } from '../stores/authStore'

const AdminLayout = () => import('../components/AdminLayout.vue')
const Dashboard = () => import('../views/admin/Dashboard.vue')
const Users = () => import('../views/admin/Users.vue')
const UserDetails = () => import('../views/admin/UserDetails.vue')
const Reports = () => import('../views/admin/Reports.vue')

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { public: true } },
  { path: '/login', name: 'Login', component: Login, meta: { public: true } },
  { path: '/register', name: 'Register', component: Register, meta: { public: true } },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: { name: 'Dashboard' } },
      { path: 'dashboard', name: 'Dashboard', component: Dashboard },
      { path: 'users', name: 'Users', component: Users },
      { path: 'user/:id', name: 'UserDetails', component: UserDetails, props: true },
      { path: 'reports', name: 'Reports', component: Reports },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link-active',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  if (to.meta?.requiresAuth && !auth.isAuthenticated.value) {
    return next({ name: 'Login', query: { redirect: to.fullPath } })
  }
  next()
})

export default router
