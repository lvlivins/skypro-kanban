import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: 'new-task',
              name: 'newTask',
              component: () => import('@/views/NewTaskView.vue')
            },
            {
              path: 'exit',
              name: 'exit',
              component: () => import('@/views/ExitModalView.vue')
            },
            {
              path: 'task/:id',
              name: 'task',
              component: () => import('@/views/TaskModalView.vue')
            }
          ]
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: NotFoundView
        }
      ]
    }]
})

router.beforeEach((to, from, next) => {
  const userInfo = localStorage.getItem('userInfo') // если в localStorage есть userInfo, роутер не выкинет на /login и пустит на главную

  let user = null

  if (userInfo) {
    try {
      user = JSON.parse(userInfo)
    } catch (error) {
      user = null
    }
  }

  if (to.meta.requiresAuth && (!user || !user.token)) { // есть ли объект пользователя + токен
    next('/login')
    return
  }
  next()
})

export default router

