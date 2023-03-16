import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // redirect: '/home',
      name: 'Root',
      component: () => import('@/layout/Container.vue'),
      children: [
        // {
        //   path: '/home',
        //   name: 'Home',
        //   component: () => import('@/views/Home.vue')
        // }
      ],
    }
  ]
})

export default router
