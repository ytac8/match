<template>
    <div id="chat-box">
        <Header :header-position="headerPosition"></Header>
        <div id="chat-list">
            <v-ons-list>
                <v-ons-list-header>メッセージ</v-ons-list-header>
                <ChatListItem v-for="item in items" :key="item.chatId" :item="item" ></ChatListItem>
            </v-ons-list>
        </div>
    </div>
</template>

<script>
import ChatListItem from '../components/ChatListItem.vue'
import Header from '../components/Header.vue'

export default {
  name: 'ChatListPage',
  data () {
    return {
      headerPosition: 2,
      userId: localStorage.getItem('userId'),
      items: []
    }
  },
  created () {
    this.setUserData()
  },
  methods: {
    setUserData () {
      let url = 'ChatListServlet'
      // let url = 'http://localhost:8080/match/ChatListServlet'
      this.axios.get(url + '?userId=' + this.userId)
        .then((response) => {
          this.items = response.data
        })
    }
  },
  components: {
    ChatListItem,
    Header
  }

}
</script>

<style scoped>
#chat-box {
    height:100% ;
}
#chat-list {
    height:calc(100% - 56px);
    overflow:auto;
}
</style>
