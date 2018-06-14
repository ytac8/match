<template>
    <div id="chat-page">
        <Header :header-position="headerPosition"></Header>
        <div id="chat-disp">
            <div class="title">
                <span class="name">Tamaki</span>
            </div>
            <div id="messages"> <MessageItem v-for="item in items" :key="item.id" :from="item.from" :message="item.message" :icon-url="item.iconUrl"> </MessageItem>
            </div>
            <div class="message-input">
                <input id="input-box" type="text" placeholder="message" class="text-input" v-model="input"></input>
                <SendButton v-on:send="send"></SendButton>
            </div> </div>
    </div>
</template>

<script>
import MessageItem from '../components/MessageItem.vue'
import Header from '../components/Header.vue'
import SendButton from '../components/SendButton.vue'

export default {
  name: 'ChatPage',
  data () {
    return {
      headerPosition: 3,
      input: '',
      items: []
    }
  },
  mounted: function () {
    let messages = document.getElementById('messages')
    messages.scrollTo(0, messages.scrollHeight)
  },
  methods: {
    send: function () {
      if (this.input !== '') {
        let lastId = this.items[this.items.length - 1].id
        this.items.push(
          { id: lastId + 1,
            iconUrl: 'static/img/profile/ponpoko.jpg',
            message: this.input,
            from: 'me'
          })
      }
      this.message = ''
      this.$nextTick(function () {
        document.getElementById('input-box').value = ''
      })
    },
    check: function () {
      console.log(this.items)
    }
  },
  watch: {
    items: function () {
      this.$nextTick(function () {
        let messages = document.getElementById('messages')
        messages.scrollTo(0, messages.scrollHeight)
      })
    }
  },
  components: {
    MessageItem,
    Header,
    SendButton
  }
}
</script>

<style scoped>

#chat-page {
    height:100%;
}

#chat-disp { 
    height: calc(100% - 62px - 51px);
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
    height: calc(100% - 80px);
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
