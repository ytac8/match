<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <MainContent 
            v-for="(user, index) in userData"
            :key=user.id 
            :user="user" 
            v-on:remove="userData.splice(index, 1)"></MainContent>
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
      headerPosition: 1,
      userData: [
        {id: 0, name: '輝夜 月', profile: "輝夜月だよ〜〜〜∠( 'ω')／", img: 'runatan.jpg'},
        {id: 1, name: 'キズナアイ', profile: 'はいどーも！バーチャルユーチューバーのキズナアイです!', img: 'aitan.jpg'},
        {id: 2, name: 'ぽんぽこ', profile: 'こんばんにんにん！ぽんぽこだよ！', img: 'ponpoko.jpg'}
      ]
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
