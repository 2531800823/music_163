import Vue from 'vue'
import Vuex from 'vuex'

import user from './moules/user'
import getters from './getter'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    getters,
    plugins: [vuexLocal.plugin]
})

export default store