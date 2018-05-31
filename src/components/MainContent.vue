<template>
    <div class="main-content" :id=id draggable="true"
                @touch="dragstart"
                @touchmove="drag"
                @dragend="touchLeave">
            <v-ons-card :style="styleObject">
            <div class="content">
                <img id="hello" alt="koncha">
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

    drag: function (e) {
      let touchX = e.changedTouches[0].pageX
      let touchY = e.changedTouches[0].pageY
      let dragObj = document.getElementById('user' + this.user.id)
      dragObj.style.left = (touchX - this.positionDiff.x) + 'px'
      dragObj.style.top = (touchY - this.positionDiff.y) + 'px'
    },

    touchLeave: function (e) {
      let dragDistanceCriterion = window.parent.screen.width * 0.15
      let dragObj = document.getElementById('user' + this.user.id)
      let touchX = e.gesture.center.pageX
      // let touchY = e.gesture.center.pageY
      if (Math.abs(touchX - this.firstTouchPosition.x) < dragDistanceCriterion) {
        dragObj.style.position = 'absolute'
        dragObj.style.left = this.originalPosition.x + 'px'
        dragObj.style.top = this.originalPosition.y + 'px'
      } else {
        this.$emit('remove')
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
