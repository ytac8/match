<template>
  <div id="app">
    <Header :left-content="leftContent" :center-content="centerContent" :right-content="leftContent"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      'leftContent': 'match',
      'centerContent': 'match',
      'rightContent': 'match'
    }
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eff2f7;
  height: 100%;
}

</style>
