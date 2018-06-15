<template>
    <div class="like-button" @touch="tapped">
        <img :src="likeImg">
    </div>
</template>

<script>
export default {
  name: 'LikeButton',
  props: {
    buttonName: String,
    userId: String
  },
  data () {
    return {
      isLike: (this.buttonName === 'like')
    }
  },
  computed: {
    likeImg: function () {
      return this.isLike ? 'static/img/icons/' + this.buttonName + '.png' : 'static/img/icons/' + this.buttonName + '.png'
    }
  },
  methods: {
    tapped: function () {
      let userObj = document.getElementById('user' + this.userId)
      let objPosition = {x: 0, y: 0}
      let toPosition = (this.isLike) ? {x: 500, y: 56} : {x: -500, y: 56}
      let animate = this.move(userObj, objPosition, toPosition, 1000)
      let vm = this
      animate.onfinish = function () {
        userObj.style.left = toPosition.x + 'px'
        userObj.style.top = toPosition.y + 'px'
        vm.$emit('remove')
      }
    },
    move: function (dragObj, fromPosition, toPosition, interval) {
      let dragAnimate = dragObj.animate([{
        top: fromPosition.y + 'px',
        left: fromPosition.x + 'px'
      },
      {
        top: toPosition.y + 'px',
        left: toPosition.x + 'px',
        easing: 'ease-in'

      }], 200)
      return dragAnimate
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
