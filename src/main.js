// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/variable.styl'
import './assets/css/function.styl'
import './assets/css/mine.styl'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://192.168.1.63:8080/'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
