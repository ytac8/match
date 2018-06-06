<template>
    <div id="chat-list">
        <Header :header-position="headerPosition"></Header>
        <v-ons-list>
            <v-ons-list-header>メッセージ</v-ons-list-header>
            <ChatListItem v-for="item in items" :key="item.id" :item="item"></ChatListItem>
        </v-ons-list>
    </div>
</template>

<script>
import ChatListItem from '../components/ChatListItem.vue'
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  name: 'ChatListPage',
  data () {
    return {
      info: null,
      headerPosition: 2,
      items: [
        {id: 0, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile/aitan.jpg'},
        {id: 1, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile/runatan.jpg'},
        {id: 2, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile/ponpoko.jpg'}
      ]
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
  },
  methods: {
    check: function () {
      console.log(this.info)
    }
  },
  components: {
    ChatListItem,
    Header
  }

}
</script>

<style scoped>
#chat-list {
    height:100%
}
</style>
