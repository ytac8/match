<template>
    <div class="like-button">
        <img :src="likeImg">
    </div>
</template>

<script>
export default {
  name: 'LikeButton',
  props: {
    buttonName: String
  },
  computed: {
    likeImg: function () {
      return (this.buttonName === 'like') ? 'static/img/icons/' + this.buttonName + '.png' : 'static/img/icons/' + this.buttonName + '.png'
    }
  },
  methods: {
    tapped: function (like) {
      alert(like)
    }
  }
}
</script>

<style scoped>
.like-button{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    z-index:0
}

img{
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}

</style>
