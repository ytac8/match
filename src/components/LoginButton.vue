<template>
    <div id="login-button">
        <span id="login-text" @touch="login" >Sign in with Facebook</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LoginButton',
  data () {
    return {
      parameter: 0
    }
  },
  methods: {
    login () {
      let sessId = function guid () {
        function s4 () {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
      }
      localStorage.setItem('sessId', sessId)

      let fbUrl = 'https://www.facebook.com/v3.0/dialog/oauth?' +
                'client_id=858585164342416' +
                '&redirect_uri=https://localhost:8080/#/login' +
                '&state={sessId=' + sessId() + '}'
      console.log(fbUrl)
      window.location.href = fbUrl
    },
    checkLoginState () {
    },
    statusChangeCallback (response) {
    },
    testAPI () {
    }
  }
}
</script>

<style scoped>
#login-button {
    background-color: #3a589e;
    width: 200px;
    height: 40px;
    color: white;
    border-radius: 10px;
    text-align: center;

}

#login-text {
    position: relative;
    font-weight: bold;
    top: 25%;
}
</style>

