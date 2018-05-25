<template>
    <div id="chat-list">
        <v-ons-list>
            <v-ons-list-header>メッセージ</v-ons-list-header>
            <ChatListItem v-for="item in items" :key="item.id" :item-name="item.name" :item-message="item.message" :item-img="item.img"></ChatListItem>
        </v-ons-list>
    </div>
</template>

<style scoped>
#chat-list {
    padding-top: 10px;
}
</style>

<script>
import ChatListItem from '../components/ChatListItem.vue'

export default {
  name: 'ChatListPage',
  data () {
    return {
      items: [
        {id: 0, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'},
        {id: 1, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'},
        {id: 2, name: 'tamaki', message: 'こんにちは', img: 'static/img/profile.jpg'}
      ]
    }
  },
  components: {
    ChatListItem
  }

}
</script>


