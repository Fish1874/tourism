// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // vue-awesome-swiper插件
import store from './store' // vuex共享数据
import ElementUI from 'element-ui'

// import style
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

import FastClick from 'fastclick' // 解决移动端300毫秒延迟的问题

import axios from 'axios'
// 配置请求根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios // 通过挂载到原型上，所有的组件都可以通过this直接访问到$http，从而去发起请求

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 键和值一样，直接写一个就行了
  store, // 引入store文件，让数据共享，所以home文件下的Header可以使用{{this.$store.state.city}}
  components: { App }, /* ES6省略写法， 等于= {APP: 'APP'} */
  template: '<App/>'
})
