import { getCookie, setCookie, removeCookie } from '@/util/cookie.js'

import { Login } from "@/api/login.js";

const state = {
    token: getCookie() || null
}

const mutaction = {
    // 设置tokne
    // setToken(state, token)
}

const actions = {
    async denglu(context, obj) {
        const data = await Login(obj)
        console.log(data);
    }
}

const user = {
    namespace: true,
    state,
    mutaction,
    actions,
}

export default user