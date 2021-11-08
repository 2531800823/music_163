import Cookie from 'js-cookie'

// 设置一个常量 token 名
const TOKEN_KEY = 'liu-token'


// 获取 token
export function getCookie() {
    return Cookie.get(TOKEN_KEY)
}

// 设置 token
export function setCookie(val) {
    return Cookie.set(TOKEN_KEY, val)
}

// 删除 token
export function removeCookie() {
    return Cookie.remove(TOKEN_KEY)
}