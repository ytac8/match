<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <MainContent 
            :user="userData" 
        ></MainContent>
        <!-- <div style="background-color:red; width:100%; height:10%; z-index:10; position:fixed; bottom:0;" @click="hello"></div> -->
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
      headerPosition: 0,
      userData:
        {id: 0, name: '輝夜 月', profile: "輝夜月だよ〜〜〜∠( 'ω')／", img: 'runatan.jpg'}
    }
  },
  methods: {
    remove: function () {
      this.userData.splice(this.userData.length - 1, 1)
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

#main-page{
    height:100%;
    width: 100%;
    position: relative;
}


</style>
