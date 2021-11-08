// 搜索


import request from '@/util/request.js'

// 获取搜索联想
export function getKeyWords(keyword) {
    return request({
        method: 'get',
        url: '/search/suggest?keywords=' + keyword
    })
}

// 获取热门联想
export function getHotKeyWords() {
    return request({
        method: 'get',
        url: '/search/hot'
    })
}