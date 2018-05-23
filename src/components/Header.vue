<template>
    <div id="header">
        <HeaderContent :pagename="leftContent" position="left"></HeaderContent>
        <HeaderContent :pagename="centerContent" position="center"></HeaderContent>
        <HeaderContent :pagename="rightContent" position="right"></HeaderContent>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'

export default {
  name: 'Header',
  props: ['leftContent', 'centerContent', 'rightContent'],
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
