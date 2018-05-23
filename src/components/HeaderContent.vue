<template>
    <div id="header-icon" v-bind:class="classObject">
        <img :src="srcUrl" :alt="pagename">
    </div>
</template>

<script>
export default {
  name: 'HeaderContent',
  props: {
    position: String,
    pagename: String
  },
  data () {
    return {
      srcUrl: 'static/img/' + this.pagename + '.svg'
    }
  },
  computed: {
    classObject: function () {
      return {
        'is-left': this.position === 'left',
        'is-center': this.position === 'center',
        'is-right': this.position === 'right'
      }
    }
  }
}
</script>

<style scoped>
#header-icon{
    height: 56px;
}

img{
    width: 38px;
    height: 38px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
</style>
