// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

// import style
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

import FastClick from 'fastclick'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 引入store文件，让数据共享，所以home文件下的Header可以使用{{this.$store.state.city}}
  components: { App }, /* ES6省略写法， 等于= {APP: 'APP'} */
  template: '<App/>'
})
