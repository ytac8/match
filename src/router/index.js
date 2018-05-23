import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage.vue'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
