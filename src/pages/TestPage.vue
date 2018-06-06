<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <Test></Test>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Test from '../components/Test.vue'

export default {
  name: 'TestPage',
  data () {
    return {
      headerPosition: 1
    }
  },
  components: {
    Header,
    Footer,
    Test
  }
}
</script>

<style scoped>

/* #test{ */
/*     height: 500px; */
/*     width: 100%; */
/*     position: relative; */
/* } */
</style>
