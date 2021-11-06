import request from '@/util/request.js'


// 获取歌手部分信息和热门歌曲
export function getGeShou(id) {
    return request({
        method: 'get',
        url: '/artists?id=' + id
    })
}



// 歌手专辑内容
export function getAlbum(params) {
    return request({
        method: 'get',
        url: '/artist/album',
        params
    })
}

// 获得歌手 mv 信息     mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064
export function getMV(params) {
    return request({
        method: 'get',
        url: '/artist/mv',
        params
    })
}

// 获得歌手 介绍 信息     
export function getDesc(params) {
    return request({
        method: 'get',
        url: '/artist/desc',
        params
    })
}