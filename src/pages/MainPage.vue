<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import MainContent from '../components/MainContent'

export default {
  name: 'MainPage',
  data () {
    return {
      headerPosition: 1
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
