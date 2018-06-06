import Vue from 'vue'
import Router from 'vue-router'

// import Header from '../components/Header.vue'
import MainPage from '@/pages/MainPage.vue'
import ChatListPage from '@/pages/ChatListPage.vue'
import ChatPage from '@/pages/ChatPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import TestPage from '@/pages/TestPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/chat_list',
      name: 'ChatListPage',
      component: ChatListPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat/:id',
      name: 'ChatPage',
      component: ChatPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
