import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/discover',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/home/components/Tuij.vue')
      }, {
        path: 'top',
        component: () => import('../views/home/components/Top.vue')
      }, {
        path: 'gedan',
        component: () => import('../views/home/components/Gedan.vue')
      }, {
        path: 'dian',
        component: () => import('../views/home/components/Dian.vue')
      }, {
        path: 'geshou',
        component: () => import('../views/home/components/Geshou.vue')
      }, {
        path: 'newdie',
        component: () => import('../views/home/components/Newdie.vue')
      },
      {
        path: 'artist',
        component: () => import('@/views/geshou/GeshouXiang.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/geshou/components/GeHot.vue')
          }, {
            path: 'suoyou',
            component: () => import('@/views/geshou/components/SuoYou.vue')
          }, {
            path: 'xiangmv',
            component: () => import('@/views/geshou/components/XiangMV.vue')
          }, {
            path: 'yiren',
            component: () => import('@/views/geshou/components/YiRen.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/mymusic',
    name: 'Mymusic',
    component: () => import('../views/mymusic/Mymusic.vue')
  }
  ,
  {
    path: '/firend',
    name: 'Firend',
    component: () => import('../views/firend/Firent.vue')
  }
  ,
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
