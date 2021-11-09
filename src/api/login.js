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

// 发送验证码
export function sumPhone(params) {
    return request({
        method: 'get',
        url: '/captcha/sent',
        params
    })
}