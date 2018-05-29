import Vue from 'vue'
import Router from 'vue-router'

// import Header from '../components/Header.vue'
import MainPage from '../pages/MainPage.vue'
import ChatListPage from '../pages/ChatListPage.vue'
import ChatPage from '../pages/ChatPage.vue'
import LoginPage from '../pages/LoginPage.vue'

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
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }

  ]
})
