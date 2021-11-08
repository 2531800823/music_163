import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import * as filters from '@/util/filters.js'
import '@/util/components.js'
import store from '@/store/'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 放入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
