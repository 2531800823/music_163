// 路由权限控制

import router from './index'
import store from '@/store'




router.beforeEach((to, from, next) => {
    // 判断路由 元 信息 是否要判断权限
    if (to.meta.quanxian) {
        // 登录就去
        if (store.getters.user) {
            next()
        } else {
            // 否则就去首页
            next('/')
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {

})



export default router