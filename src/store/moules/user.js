// import { getCookie, setCookie, removeCookie } from '@/util/cookie.js'

import { Login, sumPhone } from "@/api/login.js";

const state = () => {
    return {
        user: null,
    }
}

const mutations = {
    // 设置tokne和user
    setToken(state, user) {
        state.user = user
    },
    // 删除 token 和 user
    removeToken(state) {
        state.user = null
    }
}



const actions = {
    // 用手机号登录
    async denglu(context, obj) {
        try {
            const data = await Login(obj)
            console.log(data);
            if (data.data.code !== 200) {
                return data.data.msg
            }
            context.commit('setToken', data.data)
        } catch (error) {
            console.log(error.name);
            console.log(error);
            console.log(error.message);
            return error.message
        }

    },
    // 用验证码登录
    async yanDeng(context, obj) {
        const { data } = await sumPhone(obj)
        if (data.data.code !== 200) {
            return data.data.msg
        }
    },

}

const user = {
    namespaced: true,
    state,
    mutations,
    actions,
}

export default user