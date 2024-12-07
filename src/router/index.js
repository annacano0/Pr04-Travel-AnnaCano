import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),

    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/views/DestinationShow.vue'),
      children:[
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceShow.vue'),
        },
      ],
      props: (route) => ({
        ...route.params,
        slug: route.params.slug,
        id: parseInt(route.params.id),
      }),
    },
    {
      path: '/itb',
      name: 'itb',
      component: () => import('@/views/ItbView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
    },
  ],
})

export default router
