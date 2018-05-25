<template>
    <div id="chat-page">
        <div class="title">
            <span class="name">Tamaki</span>
        </div>
        <div id="messages">
            <MessageItem v-for="item in items" :key="item.id" :from="item.from" :message="item.message" :icon-url="item.iconUrl">
                <p class="message">{{item.message}}</p>
            </MessageItem>
        </div>
        <div class="message-input">
            <el-input placeholder="message" v-model="input"></el-input>
        </div>
    </div>
</template>

<script>
import MessageItem from '../components/MessageItem.vue'
export default {
  name: 'ChatPage',
  data () {
    return {
      input: '',
      items: [
        {id: 1, iconUrl: 'static/img/profile.jpg', message: 'tamaki', from: 'tamaki'},
        {id: 2, iconUrl: 'static/img/profile.jpg', message: 'konchiha', from: 'me'},
        {id: 3, iconUrl: 'static/img/profile.jpg', message: 'wahahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', from: 'tamaki'},
        {id: 4, iconUrl: 'static/img/profile.jpg', message: 'konchihaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', from: 'me'}
      ]
    }
  },
  components: {
    MessageItem
  }
}
</script>

<style scoped>

.title{
    height: 40px;
    padding: 20px;
    margin-top: 6px;
    margin-bottom: 6px;
    font-size: 32px;
    font-weight: bold;
    background-color:white;
}

#messages{
    display:flex;
    flex-direction: column;
}

.message-input{
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 10px;
    background-color: white;
    display:grid;
    grid-template-columns: 80% 20%;
}

</style>
