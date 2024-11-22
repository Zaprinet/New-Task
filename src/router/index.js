import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: 'billing',
      component: () => import('@/views/BillingView.vue')
    },
    {
      path: '/2',
      name: 'second',
      component: () => import('@/views/SecondCompView.vue')
    },
    {
      path: '/3',
      name: 'third',
      component: () => import('@/views/ThirdComponentView.vue')
    },
    {
      path: '/4',
      name: 'fourth',
      component: () => import('@/views/FourthComponentView.vue')
    },
    {
      path: '/5',
      name: 'fifth',
      component: () => import('@/views/FifthComponentView.vue')
    },
    {
      path: '/6',
      name: 'Sixth',
      component: () => import('@/views/SixthComponentView.vue')
    },
    {
      path: '/7',
      name: 'Seventh',
      component: () => import('@/views/SeventhComponentView.vue')
    },
    {
      path: '/8',
      name: 'Eight',
      component: () => import('@/views/EightComponentView.vue')
    },
    {
      path: '/abaainput',
      name: 'AbaaInput',
      component: () => import('@/views/AbaaInputView.vue')
    },
    {
      path: '/textinput',
      name: 'Text',
      component: () => import('@/components/InputComponent/TextInput.vue')
    },
  ]
})

export default router
