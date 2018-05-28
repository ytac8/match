<template>
    <Header :left-content="leftPage" :center-content="nowPage" :right-content="leftPage"></Header>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'basePage',
  props: {
    nowPage: String,
    leftPage: String,
    rightPage: String
  },
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
}

#header {
    margin-top: 0;
}

</style>
