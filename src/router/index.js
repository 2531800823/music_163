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
        component: () => import('@/views/home/geshou/GeshouXiang.vue'),
        children: [
          {
            path: '',
            name: 'liu',
            component: () => import('@/views/home/geshou/components/GeHot.vue')
          }, {
            path: 'suoyou',
            component: () => import('@/views/home/geshou/components/SuoYou.vue')
          }, {
            path: 'xiangmv',
            component: () => import('@/views/home/geshou/components/XiangMV.vue')
          }, {
            path: 'yiren',
            name: 'YiRen',
            component: () => import('@/views/home/geshou/components/YiRen.vue')
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
  {
    // 跳转个人详情页
    path: '/user',
    name: 'user',
    meta: { quanxian: true },
    component: () => import('@/components/myuser/MyUser.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
