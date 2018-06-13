<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <MainContent 
            v-for="(user, index) in userData"
            :key=user.id 
            :user="user" 
            v-on:remove="userData.splice(index, 1)"></MainContent>
        <div style="background-color:red; width:100%; height:10%; z-index:10; position:fixed; bottom:0;" @click="hello"></div>
        <Footer :user-info="userData[userData.length - 1]" v-on:remove="remove"></Footer>
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
      headerPosition: 1,
      userData: [
        {id: 0, name: '輝夜 月', profile: "輝夜月だよ〜〜〜∠( 'ω')／", img: 'runatan.jpg'},
        {id: 1, name: 'キズナアイ', profile: 'はいどーも！バーチャルユーチューバーのキズナアイです!', img: 'aitan.jpg'},
        {id: 2, name: 'ぽんぽこ', profile: 'こんばんにんにん！ぽんぽこだよ！', img: 'ponpoko.jpg'}
      ]
    }
  },
  computed: {
    dataset: function () {
      this.axios.get('http://localhost:8080/match/MainPageServlet').then((response) => {
        console.log('aa')
      })
    }

  },
  methods: {
    remove: function () {
      this.userData.splice(this.userData.length - 1, 1)
    },
    hello: function () {
      this.axios.get('http://localhost:8080/match/MainPageServlet').then((response) => {
        console.log('aa')
      })
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
