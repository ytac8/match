<template>
    <div class="main-content" :id=id draggable="true"
                @touch="dragstart"
                @touchmove="drag"
                @dragend="touchLeave">
            <v-ons-card :style="styleObject">
            <div class="profile">
                <p class="name">{{user.userName}}</p>
                <p class="work-per-week">週{{user.workPerWeek}}回</p>
                <p class="self-intro">{{user.profile}}</p>
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
      id: 'user' + this.user.userId,
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
        backgroundImage: 'url(' + this.user.imgUrl + ')'
      }
    }
  },
  methods: {
    // drag開始時の処理
    dragstart: function (e) {
      let dragObj = this.$el
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
      let dragObj = this.$el
      dragObj.style.left = (touchX - this.positionDiff.x) + 'px'
      dragObj.style.top = (touchY - this.positionDiff.y) + 'px'
    },

    // drag終了時の処理
    touchLeave: function (e) {
      let dragDistanceCriterion = window.parent.screen.width * 0.10
      let touchX = e.gesture.center.pageX
      let touchY = e.gesture.center.pageY
      let objPosition = {x: touchX - this.positionDiff.x, y: touchY - this.positionDiff.y}
      let dragObj = this.$el

      if (Math.abs(touchX - this.firstTouchPosition.x) < dragDistanceCriterion) {
        let toPosition = {x: this.originalPosition.x, y: this.originalPosition.y}
        let animate = this.move(dragObj, objPosition, toPosition, 500)
        animate.onfinish = function () {
          dragObj.style.left = toPosition.x + 'px'
          dragObj.style.top = toPosition.y + 'px'
        }
      } else {
        let deltaX = objPosition.x - this.originalPosition.x
        let deltaY = objPosition.y - this.originalPosition.y
        let grad = deltaY / deltaX
        let toPosition = {x: deltaX * 6, y: grad * deltaX * 6}
        let animate = this.move(dragObj, objPosition, toPosition, 1000)
        let vm = this
        animate.onfinish = function () {
          dragObj.style.left = toPosition.x + 'px'
          dragObj.style.top = toPosition.y + 'px'
          vm.$emit('remove')
        }
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
    background-color: rgba(0.5,0.6,0.5, 0.5);
    width: 100%;
    height: 35%;
    position:relative;
}
.name {
    opacity:1;
    color:white;
    font-size: 28px;
    font-weight:bold;
    padding-left: 20px;
    padding-top: 40px;
    margin:0px;
}
.self-intro {
    opacity:1;
    color:white;
    font-size: 16px;
    padding-left: 20px;
}
</style>

