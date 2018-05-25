<template>
    <div class="message-row" :class="isMe">
        <div class="message-block">
            <UserIcon v-if="isMe === 'other'" :img-url="iconUrl"></UserIcon>
            <div :class="isMe"><p class="balloon">{{message}}</p></div>
        </div>
    </div>
</template>

<script>
import UserIcon from '../components/UserIcon.vue'

export default {
  name: 'MessageItem',
  props: {
    from: String,
    message: String,
    iconUrl: String
  },
  computed: {
    isMe: function () {
      return this.from === 'me' ? 'me' : 'other'
    }
  },
  components: {
    UserIcon
  }
}
</script>

<style scoped>


.message-row {
    width: 100%;
    display: flex;
    min-height:45px;
}

.me{
   flex-direction: row-reverse;
}

.other{
    flex-direction:row;
}

.message-block {
    display: flex;
}

.me .balloon{
    background-color:#dfd9e0;
}

.other .balloon{
    background-color:#fce8f9;
    margin-top: 20px;
}

.balloon{
    text-align: left;
    border-radius: 5px;
    max-width:200px; 
    word-wrap: break-word;
    padding: 10px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 7px;
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
