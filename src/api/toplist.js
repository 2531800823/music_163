// 请求排行榜接口

import request from '@/util/request.js'


// 获取全部排行分类
export function getTopList() {
    return request({
        url:"/toplist"
    })
}

// 获取排行详情
export function getTopXiang(id) {
    return request({
        url: "/playlist/detail?id="+id,
        method:'get',
    })
}

// 获取歌单评论
export function getListPing(id,params) {
    return request({
        url: "/comment/playlist?id="+id,
        method: 'get',
        params
    })
}