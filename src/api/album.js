import request from '@/util/request.js'


// 获取热门新碟
export function getAlbum() {
    return request({
        method: 'get',
        url:"/album/newest"
    })
}


// 获取全部新碟
export function getAllAlbum(params) {
    return request({
        method: 'get',
        url: "/album/new",
        params
    })
}