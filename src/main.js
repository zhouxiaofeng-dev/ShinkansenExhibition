import Vue from 'vue'
import App from './App.vue'
//引入路由
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import "./assets/icon/iconfont.css"
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
