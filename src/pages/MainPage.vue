<template>
    <div id="main-page">
        <Header :left-content="left", :center-content="center", :right-content="left"></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import MainContent from '../components/MainContent'

export default {
  name: 'MainPage',
  data () {
    return {
      hello: 'hello'
    }
  },
  // conputed: {
  //       return function(){

  //       }
  // },
  components: {
    Header,
    // Footer,
    MainContent
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
}

.card {
    background-color: #eff2f7;
}

</style>
