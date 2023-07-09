import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/ProfileView.vue'),
      redirect: '/profile/client-info',
      children: [
        {
          path: 'client-info',
          name: 'client-info',
          component: () => import('../components/profile/PersonalCom.vue')
        },
        {
          path: 'mysim',
          name: 'mysim',
          component: () => import('../components/profile/MySIMCom.vue')
        },
        {
          path: 'complaints',
          name: 'complaints',
          component: () => import('../components/profile/ComplaintsCom.vue')
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: () => import('../components/profile/PrivacyCom.vue')
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../components/profile/OrdersCom.vue')
        },
      ]
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/basket/BasketView.vue')
    },
    {
      path: '/chipset',
      name: 'chipset',
      component: () => import('../views/chipset/ChipsetView.vue')
    },
    {
      path: '/server-erro',
      name: 'servererror',
      component: () => import('../views/ServerError.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'errorpage',
      component: () => import(/* webpackChunkName: "errorpage" */ '../views/ErrorView.vue')
    }
  ]
})

export default router
