import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import ChatListPage from '../pages/ChatListPage.vue'
import LoginPage from '../pages/LoginPage.vue'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/chat_list',
      name: 'ChatListPage',
      component: ChatListPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }

  ]
})
