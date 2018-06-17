<template>
    <div id="chat-page">
        <Header :header-position="headerPosition"></Header>
        <div id="chat-disp">
            <div class="title">
                <span class="name">Tamaki</span>
            </div>
            <div id="messages"> <MessageItem v-for="item in items" :key="item.messageId" :from="item.from" :message="item.message" :icon-url="item.imgUrl"> </MessageItem>
            </div>
            <div class="message-input">
                <input id="input-box" type="text" placeholder="message" class="text-input" v-model="input"></input>
                <SendButton v-on:send="send"></SendButton>
            </div> 
        </div>
        <!-- <div style="background-color:red; position:fixed; bottom:50; width:100%; height:40px;" @touch="check"></div> -->

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
      userId: localStorage.getItem('userId'),
      input: '',
      items: []
    }
  },
  created () {
    this.setItems()
  },
  mounted: function () {
    let messages = document.getElementById('messages')
    messages.scrollTo(0, messages.scrollHeight)
  },
  methods: {
    setItems () {
      // let url = 'ChatServlet?id=' + this.$route.params.id
      let url = 'http://localhost:8080/match2/ChatServlet?id=' + this.$route.params.id
      let vm = this
      this.axios.get(url).then((response) => {
        this.items = response.data.map(function (e) {
          if (e.from === vm.userId) {
            e.from = 'me'
          } else {
            e.from = 'other'
          }
          return e
        })
      })
    },
    send: function () {
      if (this.input !== '') {
        this.items.push(
          {
            iconUrl: 'static/img/profile/ponpoko.jpg',
            message: this.input,
            from: 'me'
          })

        let datetime = this.getNowDate()
        let params = new URLSearchParams()
        params.append('userFrom', this.userId)
        params.append('message', this.input)
        params.append('matchId', this.$route.params.id)
        params.append('time', datetime)

        // let url = 'ChatServlet'
        let url = 'http://localhost:8080/match2/ChatServlet'
        this.axios.post(url, params)
          .then(response => {
            // console.log(response.data.message)
          }).catch(error => {
            console.log(error)
          })
      }
      this.input = ''
      this.$nextTick(function () {
        document.getElementById('input-box').value = ''
      })
    },
    getNowDate () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
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
