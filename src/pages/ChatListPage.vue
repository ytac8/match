<template>
    <div id="chat-list">
        <Header :header-position="headerPosition"></Header>
        <v-ons-list>
            <v-ons-list-header>メッセージ</v-ons-list-header>
            <ChatListItem v-for="item in items" :key="item.id" :item-name="item.name" :item-message="item.message" :item-img="item.img"></ChatListItem>
        </v-ons-list>
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
      items: [
        {id: 0, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'},
        {id: 1, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'},
        {id: 2, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'}
      ]
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
