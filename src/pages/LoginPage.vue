<template>
    <div id="login-page">
        <div id="login-content">
            <Logo></Logo>
            <div id="error" :v-if="error">{{ loginErrorMsg }}</div>
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
      isValid: false,
      error: false,
      loginErrorMsg: ''
    }
  },
  methods: {
    login: function () {
      let url = 'LoginServlet'
      let params = new URLSearchParams()
      params.append('userId', this.userId)
      params.append('password', this.password)
      this.axios.post(url, params).then((response) => {
        this.userId = response.data.userId
        this.token = response.data.token
        this.isValid = response.data.isValid
      }).then(() => {
        if (this.isValid) {
          localStorage.setItem('token', this.token)
          localStorage.setItem('isValid', this.isValid)
          localStorage.setItem('userId', this.userId)
          this.$router.push({name: 'MainPage'})
        } else {
          this.loginErrorMsg = 'IDかパスワードが違います'
        }
      }).catch(function (error) {
        this.loginErrorMsg = 'サーバエラーです'
        console.log(error)
      })
    }

  },
  watch: {
    loginError: function () {
      this.error = true
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

#error{
    color: red;
}

</style>
