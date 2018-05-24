<template>
    <div id="main-page">
        <MainContent></MainContent>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MainContent from '../components/MainContent'

export default {
  name: 'MainPage',
  components: {
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
