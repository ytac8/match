<template>
    <div id="header">
        <HeaderContent :pagename="left-content" position="left"></HeaderContent>
        <HeaderContent :pagename="center-content" position="center"></HeaderContent>
        <HeaderContent :pagename="right-content" position="right"></HeaderContent>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'

export default {
  name: 'Header',
  props: ['left-content', 'center-content', 'right-content'],
  components: {
    HeaderContent
  }
}
</script>

<style scoped>
#header{
    display:grid;
    grid-template-columns: 20% 60% 20%;
    padding-left: 0px;
    padding-right: 0px;
}

</style>
