<template>
    <div id="header">
        <HeaderContent :visible="visible" :pagename="leftContent" position="left"></HeaderContent>
        <HeaderContent :visible="visible" :pagename="centerContent" position="center"></HeaderContent>
        <HeaderContent :visible="visible" :pagename="rightContent" position="right"></HeaderContent>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'

export default {
  name: 'Header',
  props: {
    leftContent: String,
    centerContent: String,
    rightContent: String
  },
  computed: {
    visible: function () {
      return true
    }
  },
  components: {
    HeaderContent
  }
}
</script>

<style scoped>
#header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #ffffff;
    color: #ffffff;
    display:grid;
    grid-template-columns: 20% 60% 20%;
    padding-left: 0px;
    padding-right: 0px;
}
</style>
