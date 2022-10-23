import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) next()
    else {
      alert('You do not have permissions to access')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
