<template>
    <div v-if="visible" id="header-icon" v-bind:class="classObject">
        <router-link :to="pageLink"><img :src="srcUrl" :alt="pagename"></router-link>
    </div>
</template>

<script>
export default {
  name: 'HeaderContent',
  props: {
    visible: Boolean,
    position: String,
    pagename: String
  },
  data () {
    return {
      srcUrl: 'static/img/' + this.pagename + '.svg',
      pageLink: '/' + this.pagename
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
