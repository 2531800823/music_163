// 首页接口

import resquest from '@/util/request.js'




// 轮播图
export function getLunbo() {
    return resquest({
        url: '/banner',
        method:"get"
    })
}


// 热门推荐
export function getHotTui() {
    return resquest({
        url: '/personalized',
        method:"get"
    })
}

// 排行榜的接口 
export function getTop(id) {
    return resquest({
        url: '/playlist/detail?id='+id,
        method:"get"
    })
}

