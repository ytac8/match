<template>
    <div id="header-icon">
        <img v-if="pagename != ''" :src="srcUrl" :alt="pagename" @click="linkTo()">
    </div>
</template>

<script>
export default {
  name: 'HeaderContent',
  props: {
    pagename: String
  },
  data () {
    return {
      srcUrl: 'static/img/icons/' + this.pagename + '.svg'
    }
  },
  methods: {
    linkTo: function () {
      if (this.pagename === 'back') {
        this.$router.go(-1)
      } else { this.$router.push({name: this.pagename}) }
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
