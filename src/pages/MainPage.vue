<template>
    <div id="main-page">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
// import MainContent from '../components/MainContent'

export default {
  name: 'MainPage',
  data () {
    return {
      hello: 'hello'
    }
  },
  components: {
    Header
    // Footer,
    // MainContent
  }
}
</script>

<style scoped>

</style>
