import request from '@/util/request.js'


// 获取歌单
export function getPlayList(params) {
    return request({
        url: '/top/playlist',
        method: 'get',
        params
   })
}

// 获取歌单分类
export function getPlayListType() {
    return request({
        url: '/playlist/catlist',
        method: 'get',
   })
}