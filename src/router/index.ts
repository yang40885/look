import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Five.vue'),
      children: [
        {
          path: '/',
          name: 'workspace',
          component: () => import('@/views/Four.vue')
        },
        {
          path: '/repos',
          name: 'repos',
          component: () => import('@/views/Two.vue'),
          children: [
            {
              path: '/repos/',
              name: 'overview',
              component: () => import('@/views/Repos/WWW.vue')
            },
            {
              path: '/repos/recent',
              name: 'recent',
              component: () => import('@/views/Repos/FFF.vue')
            },
            {
              path: '/repos/openSource',
              name: 'openSource',
              component: () => import('@/views/Repos/TTT.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/One.vue')
    },
    {
      path: '/:pathMatched(.*)*',
      name: 'Not Found',
      props: (route: { params: { pathMatched: string } }) => ({
        pathMatched: `/${route.params.pathMatched}`
      }),
      component: () => import('@/views/Three.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin') === '1'
  if (to.name !== 'login' && !isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
