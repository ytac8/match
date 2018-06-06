<template>
    <div id=box draggable="true"
        @touch="dragstart"
        @touchmove="drag"
        @dragend="leave">
    </div>
</template>

<script>

export default {
  data () {
    return {
      positionDiff: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    dragstart: function (e) {
      let dragObj = document.getElementById('box')
      let boxLeft = dragObj.getBoundingClientRect().left
      let boxTop = dragObj.getBoundingClientRect().top
      this.positionDiff.x = e.gesture.center.pageX - boxLeft
      this.positionDiff.y = e.gesture.center.pageY - boxTop
      dragObj.style.position = 'absolute'
    },
    drag: function (e) {
      let touchX = e.changedTouches[0].pageX
      let touchY = e.changedTouches[0].pageY
      let dragObj = document.getElementById('box')
      dragObj.style.left = touchX - this.positionDiff.x + 'px'
      dragObj.style.top = touchY - this.positionDiff.y + 'px'
    },
    leave: function (e) {
      // console.log(e.target.getBoundingClientRect())
    }
  }
}
</script>

<style>

#box{
    height:100px;
    width:100px;
    background-color:blue;
}
</style>
