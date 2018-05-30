<template>
    <div id="main-content">
        <v-ons-card :id=id :style="styleObject" draggable="true"
                @touch="dragstart"
                @touchmove="drag"
                @dragend="leave">
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

// import {Tween, Easing} from 'es6-tween'

export default {
  name: 'MainContent',
  props: {
    user: Object
  },
  data () {
    return {
      positionDiff: {
        x: 0,
        y: 0
      },
      styleObject: {
        color: 'white',
        backgroundImage: 'url(static/img/profile/' + this.user.img + ')'
      },
      id: 'user' + this.user.id
    }
  },
  methods: {
    dragstart: function (e) {
      let dragObj = document.getElementById('user' + this.user.id)
      let boxLeft = dragObj.getBoundingClientRect().left
      let boxTop = dragObj.getBoundingClientRect().top
      this.positionDiff.x = e.gesture.center.pageX - boxLeft
      this.positionDiff.y = e.gesture.center.pageY - boxTop
      dragObj.style.position = 'absolute'
    },
    drag: function (e) {
      let touchX = e.changedTouches[0].pageX
      let touchY = e.changedTouches[0].pageY
      let dragObj = document.getElementById('user' + this.user.id)
      dragObj.style.left = touchX - this.positionDiff.x + 'px'
      dragObj.style.top = touchY - this.positionDiff.y + 'px'
    },
    leave: function (e) {
      // console.log(e.target.getBoundingClientRect())
    }
    // throwRight: function (e) {
    //   console.log('aaa')
    //   new Tween(this.$el, {x: 0, backgroundColor: '#fc0'}).to({x: 200, backgroundColor: '#0cf'}, 2000).easing(Easing.Elastic.InOut).start()
    // }
  },
  components: {
  }
}
</script>

<style lang="postcss" scoped>
#main-content{
    height:calc(100% - 56px - 100px);
    width: 100%;
    margin:0;
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
