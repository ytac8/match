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
            <input type="text" placeholder="message" class="text-input" v-model="input"></input>
            <SendButton></SendButton>
        </div>
    </div>
</template>

<script>
import MessageItem from '../components/MessageItem.vue'
import SendButton from '../components/SendButton.vue'
export default {
  name: 'ChatPage',
  data () {
    return {
      input: '',
      items: [
        {id: 1, iconUrl: 'static/img/profile.jpg', message: 'tamaki', from: 'tamaki'},
        {id: 2, iconUrl: 'static/img/profile.jpg', message: 'konchiha', from: 'me'},
        {id: 3, iconUrl: 'static/img/profile.jpg', message: 'wahahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', from: 'tamaki'},
        {id: 4, iconUrl: 'static/img/profile.jpg', message: 'konchihaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', from: 'me'}
      ]
    }
  },
  components: {
    MessageItem,
    SendButton
  }
}
</script>

<style scoped>

#chat-page { 
    height: calc(100% - 62px - 56px);
}

.title{
    height: 40px;
    padding: 20px;
    margin-top: 6px;
    font-size: 32px;
    font-weight: bold;
    background-color:white;
}

#messages{
    height: calc(100% - 86px);
    overflow: auto;
}

.message-input{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: white;
    display:grid;
    grid-template-columns: 88% 12%;
}
.text-input{
    border: solid 1px #ccc;
    border-radius: 5px; 
    padding:10px;
    margin:10px;

}


</style>
