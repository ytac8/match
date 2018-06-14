<template>
    <div id="chat-box">
        <Header :header-position="headerPosition"></Header>
        <div id="chat-list">
            <v-ons-list>
                <v-ons-list-header>メッセージ</v-ons-list-header>
                <ChatListItem v-for="item in items" :key="item.chatId" :item="item"></ChatListItem>
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
      items: []
    }
  },
  created () {
    this.setUserData()
  },
  methods: {
    check: function () {
      console.log(this.info)
    },
    setUserData () {
      this.axios.get('http://localhost:8080/match/ChatListServlet')
        .then((response) => {
          this.items = response.data
          console.log(response.data)
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
