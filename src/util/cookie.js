import Cookie from 'js-cookie'

// 设置一个常量 token 名
const TOKEN_KEY = 'liu-token'


// 获取 token
export function getCookie() {
    return Cookie.get(TOKEN_KEY)
}

// 设置 token
export function setCookie(val) {
    if (typeof (val) !== 'string') {
        let str = JSON.stringify(val)
        console.log(str);
        return Cookie.set(TOKEN_KEY, str)
    }
    console.log(1);

    return Cookie.set(TOKEN_KEY, val)
}

// 删除 token
export function removeCookie() {
    return Cookie.remove(TOKEN_KEY)
}

// import Cookie from 'js-cookie'

// // 设置一个常量 token 名
// const TOKEN_KEY = 'liu-token'


// // 获取 token
// export function getCookie() {

//     let val = Cookie.get(TOKEN_KEY)
//     if (val instanceof String) {
//         return JSON.parse(val)
//     }
//     return val
// }

// // 设置 token
// export function setCookie(val) {
//     console.log(val);
//     if (val instanceof Object) {
//         return Cookie.set(TOKEN_KEY, JSON.stringify(val))
//     }
//     return Cookie.set(TOKEN_KEY, val)
// }

// // 删除 token
// export function removeCookie() {
//     return Cookie.remove(TOKEN_KEY)
// }