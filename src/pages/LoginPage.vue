<template>
    <div id="login-page">
        <div id="logo">
            <img src="static/img/match.svg" alt="match logo">
            <p id="match">match</p>
            <LoginButton></LoginButton>
        </div>

    </div>
</template>


<script>
import LoginButton from '../components/LoginButton.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginButton
  }
}
</script>

<style scoped>
#login-page{
    height: 100%;
    background-color: white;
}

#logo {
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
    font-family: serif;
    font-size: 35px;
    color: red;
    text-align:center;
    position:relative;
    top:-30px;
}

</style>
