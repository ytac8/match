<template>
    <div id="login-page">
        <div id="login-content">
            <Logo></Logo>
            <LoginButton></LoginButton>
        </div>
    </div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import Logo from '../components/Logo.vue'

export default {
  name: 'LoginPage',
  methods: {
    login: function () {
      localStorage.setItem('isLoggedIn', 'true')
      this.$router.push({name: 'MainPage'})
    }
  },
  components: {
    LoginButton,
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

</style>
