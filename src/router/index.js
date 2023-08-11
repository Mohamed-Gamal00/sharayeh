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
      path: '/recently-added',
      name: 'RecentlyAdded',
      component: () => import('../views/recentlyAdded/RecentlyAddedView.vue')
    },
    /* children */
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
        {
          path: 'address',
          name: 'address',
          component: () => import('../components/profile/AddressCom.vue')
        },
      ]
    },
    /* end children */
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/basket/BasketView.vue')
    },
    {
      path: '/sims',
      name: 'sim',
      component: () => import('../views/sim/SIMcardsView.vue')
    },
    {
      path: '/sim-info/:simId',
      name: 'sim-info',
      component: () => import('../views/sim/InfoView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactViw.vue')
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
