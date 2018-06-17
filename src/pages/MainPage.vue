<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <MainContent 
            v-for="(user, index) in userData"
            :key=user.userId 
            :user="user" 
            v-on:remove="userData.splice(index, 1)"></MainContent>
        <!-- <div style="background-color:red; width:100%; height:10%; z-index:10; position:fixed; bottom:0;" @click="hello"></div> -->
        <Footer :user-id="topUserId" v-on:remove="remove"></Footer>
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
      dataCount: 0,
      userData: [],
      topUserId: ''
    }
  },
  created () {
    this.setUserData()
  },
  methods: {
    setUserData () {
      // let url = 'MainPageServlet'
      let url = 'http://localhost:8080/match2/MainPageServlet'
      this.axios.get(url).then((response) => {
        this.userData = response.data
      }).then(() => {
        this.topUserId = this.userData[this.userData.length - 1].userId
      })
    },
    remove: function () {
      this.userData.splice(this.userData.length - 1, 1)
    }
  },
  watch: {
    userData: function () {
      this.topUserId = this.userData[this.userData.length - 1].userId
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
