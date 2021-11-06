
import request from '../util/request'

// 分类获取全部歌手
export const getGeshou = (params) => {
    return request({
        url: '/artist/list',
        method: 'get',
        params
    })
}

// 获取最热歌手
export const getHotGeShou = (params) => {
    return request({
        url: '/artist/list',
        method: 'get',
        params
    })
}



