// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import Vue2TouchEvents from 'vue2-touch-events'
// import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueOnsen)
Vue.use(Vue2TouchEvents)
// Vue.use(VueSocketio, 'localhost')
Vue.router = router

let checkExpirationTime = function () {
  if (localStorage.getItem('expirationTime') == null) { return false } else if (new Date(localStorage.getItem('expirationTime')) < Date.now()) {
    return false
  } else {
    return true
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !checkExpirationTime()) {
    next({path: '/login', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
