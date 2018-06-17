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
import $ from 'jquery'

export default {
  name: 'MainContent',
  props: {
    user: Object,
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
      let dragDistanceCriterion = window.parent.screen.width * 0.20
      let touchX = e.gesture.center.pageX
      let touchY = e.gesture.center.pageY
      let objPosition = {x: touchX - this.positionDiff.x, y: touchY - this.positionDiff.y}

      if (Math.abs(touchX - this.firstTouchPosition.x) < dragDistanceCriterion) {
        let toPosition = {x: this.originalPosition.x, y: this.originalPosition.y}
        this.move(toPosition, 300)
      } else {
        let deltaX = objPosition.x - this.originalPosition.x
        let deltaY = objPosition.y - this.originalPosition.y
        let grad = deltaY / deltaX
        let toPosition = {x: deltaX * 7, y: grad * deltaX * 7}
        if (deltaX > 0) {
          this.moveAndLike(toPosition, 900)
        } else {
          this.moveAndDislike(toPosition, 900)
        }
      }
    },

    move: function (toPosition, interval) {
      $('#' + this.id).animate(
        {
          top: toPosition.y + 'px',
          left: toPosition.x + 'px'
        }, interval, 'swing'
      )
    },

    moveAndLike: function (toPosition, interval) {
      let vm = this
      $('#' + this.id).animate(
        {
          top: toPosition.y + 'px',
          left: toPosition.x + 'px'
        }, interval, 'swing', function () {
          vm.$emit('remove', true)
        }
      )
    },

    moveAndDislike: function (toPosition, interval) {
      let vm = this
      $('#' + this.id).animate(
        {
          top: toPosition.y + 'px',
          left: toPosition.x + 'px'
        }, interval, 'swing', function () {
          vm.$emit('remove', false)
        }
      )
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

