<template>
    <div id="login-page">
        <div id="login-content">
            <Logo></Logo>
            <input name="user-id" type="text" placeholder="user name" class="text-input" v-model="userId">
            <input name="password" type="password" placeholder="password" class="text-input" v-model="password">
            <div id="login-button">
                <span id="login-text" @touch="login" >Login</span>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  name: 'LoginPage',
  data () {
    return {
      userId: '',
      password: '',
      token: '',
      isValid: false
    }
  },
  methods: {
    login: function () {
      let url = 'http://localhost:8080/match/LoginServlet'
      let params = new URLSearchParams()
      params.append('userId', this.userId)
      params.append('password', this.password)
      this.axios.post(url, params).then((response) => {
        console.log(response)
        this.userId = response.data.userId
        this.token = response.data.token
        this.isValid = response.data.isValid
      })

      console.log(this.userId)
      console.log(this.token)
      localStorage.clear()
      // this.$router.push({name: 'MainPage'})
    }

  },
  components: {
    Logo
  }
}
</script>

<style scoped>
#login-page{
    height: 100%;
    background-color: white;
}

#login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}

img {
    height:200px;
    position: relative;
    left: 50%;
    transform:translateX(-50%);
}

#match{
    font-size: 35px;
    font-weight: bold;
    color: #ed1e79;
    text-align:center;
    position:relative;
    top:-30px;
}

.text-input{
    border: solid 1px #ccc;
    border-radius: 5px; 
    padding:10px;
    margin:5px;
}

#login-button { 
    background-color: #3a589e;
    width: 200px;
    height: 40px;
    color: white;
    margin-top: 3px;
    border-radius: 10px;
    text-align: center;
}

#login-text {
    position: relative;
    font-weight: bold;
    top: 25%;
}

</style>
