<template>
    <div id="header">
        <HeaderContent pagename="left-content" position="left"></HeaderContent>
        <HeaderContent pagename="center-content" position="center"></HeaderContent>
        <HeaderContent pagename="right-content" position="right"></HeaderContent>
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
    gird-template-rows: 100px;
    grid-template-columns: 20px 100px 20px;
}
.is-left{
    color: red;
}
.is-right{
    color: blue;
}
.is-center{
    color: orange;
}

</style>
