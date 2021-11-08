import { getCookie, setCookie, removeCookie } from '@/util/cookie.js'

import { Login } from "@/api/login.js";

const state = {
    token: getCookie() || null
}

const mutations = {
    // 设置tokne
    setToken(state, token) {
        state.token = token
        setCookie(token)
    }

}

const actions = {
    async denglu(context, obj) {
        // console.log(1);
        const data = await Login(obj)
        console.log(data.data.token);
        context.commit('setToken', data.data.token)
    }
}

const user = {
    namespaced: true,
    state,
    mutations,
    actions,
}

export default user