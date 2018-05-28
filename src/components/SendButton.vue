<template>
    <div id="send-button">
        <img @click=send() src="static/img/icons/send.png" alt="send">
    </div>
</template>

<script>
export default {
  name: 'SendButton',
  data () {
    return {

    }
  },
  methods: {
    send: function () {
      alert('hello')
    }
  }
}
</script>

<style scoped>
img {
    display:block;
    height: 30px;
    width: 30px;
    position: relative;
    top: 50%;
    transform:translateY(-50%);
}

#send-button {
    /* padding-left: 15px */
}
</style>
