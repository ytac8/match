<template>
    <div class="main-content" >
        <v-ons-card :style="styleObject">
            <div class="profile">
                <p class="name">{{userData.userName}}</p>
                <p class="work-per-week">週{{userData.workPerWeek}}回</p>
                <p class="self-intro">{{userData.profile}}</p>
            </div>
        </v-ons-card>
    </div>
</template>
<script>

export default {
  name: 'ProfileContent',
  data () {
    return {
      userId: localStorage.getItem('userId'),
      userName: '',
      workPerWeek: '',
      profile: '',
      userData: {},
      styleObject: {
        color: 'white',
        backgroundImage: ''
      }
    }
  },
  created () {
    this.setUserData()
  },
  watch: {
    userData: function () {
      this.userName = this.userData.userName
      this.workPerWeek = this.userData.workPerWeek
      this.profile = this.userData.workPerWeek
      this.styleObject.backgroundImage = 'url(' + this.userData.imgUrl + ')'
    }
  },
  methods: {
    setUserData () {
      // let url = 'ProfileServlet'
      let url = 'http://localhost:8080/match2/ProfileServlet'
      this.axios.get(url + '?userId=' + this.userId).then((response) => {
        this.userData = response.data
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-content{
    height:calc(100% - 56px - 100px);
    width: 100%;
    margin:0;
    position: absolute;
    z-index:3
}

.card {
    height: 100%;
    width: calc(100% - 16px);
    background-color: white;
    background-position: center center;
    background-repeat: no-repeat;
}

.profile {
    background-color: rgba(0.5,0.6,0.5, 0.5);
    width: 100%;
    height: 35%;
    position:relative;
}
.name {
    opacity:1;
    color:white;
    font-size: 28px;
    font-weight:bold;
    padding-left: 20px;
    padding-top: 40px;
    margin:0px;
}
.self-intro {
    opacity:1;
    color:white;
    font-size: 16px;
    padding-left: 20px;
}
</style>

