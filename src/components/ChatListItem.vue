<template>
    <div class="message-item" :id="'user' + chatId">
        <v-ons-list-item modifier="longdivider"
            @touch="dragstart"
            @touchmove="drag"
            @touchend="touchEnd"
            @dragend="dragEnd"
        >
                <div class="left">
                    <UserIcon :img-url="userImg"></UserIcon>
                </div>
                <div class="center">
                    <span class="list-item__title">{{userName}}</span>
                    <span class="list-item__subtitle">{{lastMessage}}</span>
                </div>
        </v-ons-list-item>
    </div>
</template>


<script>
import UserIcon from './UserIcon.vue'

export default {
  name: 'ChatListItem',
  props: {
    item: Object
  },
  components: {
    UserIcon
  },
  data () {
    return {
      routerLink: 'chat/:' + this.item.id,
      dragCriterion: 2,
      originalPosition: 0,
      positionDiff: 0,
      firstTouchPosition: 0,
      isDeleteTabOpend: 0,
      chatId: this.item.id,
      lastMessage: this.item.message,
      userName: this.item.name,
      userImg: this.item.img
    }
  },
  methods: {
    // drag開始時の処理
    dragstart: function (e) {
      let dragObj = document.getElementById('user' + this.chatId)
      let boxLeft = dragObj.getBoundingClientRect().left
      this.firstTouchPosition = e.gesture.center.pageX
      this.positionDiff = this.firstTouchPosition - boxLeft
    },

    // drag中の処理
    drag: function (e) {
      let dragObj = document.getElementById('user' + this.chatId)
      let touchX = e.changedTouches[0].pageX
      let objPosition = touchX - this.positionDiff
      if (objPosition > 0) {
        dragObj.style.left = '0px'
      } else {
        dragObj.style.left = objPosition + 'px'
        dragObj.style.position = 'relative'
      }
    },
    // tapだけしたときの処理
    touchEnd: function (e) {
      let nowTouchPoint = e.changedTouches[0].pageX
      let touchDistance = Math.abs(this.firstTouchPosition - nowTouchPoint)
      if (touchDistance < this.dragCriterion && this.isDeleteTabOpend === 0) {
        this.$router.push({name: 'ChatPage', params: {id: this.chatId}})
      } else if (touchDistance < this.dragCriterion && this.isDeleteTabOpend === 1) {
        this.isDeleteTabOpend = 0
        let obj = document.getElementById('user' + this.chatId)
        let objPosition = obj.getBoundingClientRect().left
        let toPosition = 0
        let animate = this.move(obj, objPosition, toPosition, 300)
        animate.onfinish = function () {
          obj.style.left = toPosition + 'px'
        }
      }
    },

    // drag終了時の処理
    dragEnd: function (e) {
      let dragObj = document.getElementById('user' + this.chatId)
      let criterion = window.parent.screen.width * 0.2
      let touchX = e.gesture.center.pageX
      let objPosition = touchX - this.positionDiff

      if (objPosition < -criterion) {
        this.isDeleteTabOpend = 1
        let toPosition = -criterion
        let animate = this.move(dragObj, objPosition, toPosition, 300)
        animate.onfinish = function () {
          dragObj.style.left = toPosition + 'px'
        }
      } else if (objPosition < -criterion / 2 && this.isDeleteTabOpend === 0) {
        this.isDeleteTabOpend = 1
        let toPosition = -criterion
        let animate = this.move(dragObj, objPosition, toPosition, 300)
        animate.onfinish = function () {
          dragObj.style.left = toPosition + 'px'
        }
      } else if (objPosition < 0) {
        this.isDeleteTabOpend = 0
        let toPosition = 0
        let animate = this.move(dragObj, objPosition, toPosition, 300)
        animate.onfinish = function () {
          dragObj.style.left = toPosition + 'px'
        }
      }
    },

    move: function (dragObj, fromPosition, toPosition, interval) {
      let dragAnimate = dragObj.animate([{
        left: fromPosition + 'px'
      },
      {
        left: toPosition + 'px',
        easing: 'ease-in'
      }], interval)
      return dragAnimate
    }

  }
}
</script>

<style scoped>
.message-item{
    width:100%
}

</style>
