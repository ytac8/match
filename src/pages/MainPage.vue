<template>
    <div id="main-page">
        <Header :left-content="leftContent" :center-content="centerContent" :right-content="leftContent"></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MainContent from '../components/MainContent'

export default {
  name: 'MainPage',
  data () {
    return {
      'leftContent': 'match',
      'centerContent': 'match',
      'rightContent': 'match'
    }
  },
  components: {
    Header,
    Footer,
    MainContent
  }
}
</script>

<style scoped>

.card {
    background-color: #eff2f7;
}

</style>
