// 登录


import request from '@/util/request.js'

// 登录账号
export function Login(params) {
    return request({
        method: 'get',
        url: '/login/cellphone',
        params
    })
}