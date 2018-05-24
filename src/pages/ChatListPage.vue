<template>
    <div id="chat-list">
        <v-ons-list>
            <v-ons-list-header>メッセージ</v-ons-list-header>
            <ChatListItem item-user="" item-message="" item-img=""></ChatListItem>
            <ChatListItem item-user="" item-message="" item-img=""></ChatListItem>
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
  components: {
    ChatListItem
  }

}
</script>


