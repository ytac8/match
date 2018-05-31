<template>
    <div class="main-content" :id=id draggable="true"
                @touch="dragstart"
                @touchmove="drag"
                @dragend="touchLeave">
            <v-ons-card :style="styleObject">
            <div class="content">
                <div class="profile">
                    <p class="name">{{user.name}}</p>
                    <p class="work-per-week"></p>
                    <p class="self-intro">{{user.profile}}</p>
                </div>
            </div>
        </v-ons-card>
    </div>
</template>
<script>
export default {
  name: 'MainContent',
  props: {
    user: Object
  },
  data () {
    return {
      id: 'user' + this.user.id,
      originalPosition: {
        x: 0,
        y: 56
      },
      positionDiff: {
        x: 0,
        y: 0
      },
      firstTouchPosition: {
        x: 0,
        y: 0
      },
      styleObject: {
        color: 'white',
        backgroundImage: 'url(static/img/profile/' + this.user.img + ')'
      }
    }
  },
  methods: {
    // drag開始時の処理
    dragstart: function (e) {
      let dragObj = document.getElementById('user' + this.user.id)
      let boxLeft = dragObj.getBoundingClientRect().left
      let boxTop = dragObj.getBoundingClientRect().top
      this.positionDiff.x = e.gesture.center.pageX - boxLeft
      this.positionDiff.y = e.gesture.center.pageY - boxTop
      this.firstTouchPosition.x = e.gesture.center.pageX
      this.firstTouchPosition.y = e.gesture.center.pageY
      dragObj.style.position = 'absolute'
    },
    // drag中の処理
    drag: function (e) {
      let touchX = e.changedTouches[0].pageX
      let touchY = e.changedTouches[0].pageY
      let dragObj = document.getElementById('user' + this.user.id)
      dragObj.style.left = (touchX - this.positionDiff.x) + 'px'
      dragObj.style.top = (touchY - this.positionDiff.y) + 'px'
    },

    // drag終了時の処理
    touchLeave: function (e) {
      let dragDistanceCriterion = window.parent.screen.width * 0.9
      let touchX = e.gesture.center.pageX
      let touchY = e.gesture.center.pageY
      let objPosition = {x: touchX - this.positionDiff.x, y: touchY - this.positionDiff.y}

      if (Math.abs(touchX - this.firstTouchPosition.x) < dragDistanceCriterion) {
        let toPosition = {x: this.originalPosition.x, y: this.originalPosition.y}
        this.move('user' + this.user.id, objPosition, toPosition, 500)
      } else {
        // this.$emit('remove')
      }
    },

    move: function (objectId, fromPosition, toPosition, interval) {
      let dragObj = document.getElementById(objectId)
      let dragAnimate = dragObj.animate([{
        top: fromPosition.y + 'px',
        left: fromPosition.x + 'px'
      },
      {
        top: toPosition.y + 'px',
        left: toPosition.x + 'px',
        easing: 'ease-in'

      }], 200)
      dragAnimate.onfinish = function () {
        dragObj.style.left = toPosition.x + 'px'
        dragObj.style.top = toPosition.y + 'px'
      }
    }
  },
  components: {
  }
}
</script>

<style lang="postcss" scoped>
.main-content{
    height:calc(100% - 56px - 100px);
    width: 100%;
    margin:0;
    position: absolute;
    z-index:3
}

.card {
    height: 100%;
    width: calc(100% - 16px);
    background-color: white;
    background-position: center center;
    background-repeat: no-repeat;
}

.profile {
    background-color: gray;
    opacity: 0.6;
}
</style>
