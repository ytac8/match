<template>
    <div id="login-button">
        <span id="login-text">Sign in with Facebook</span>
    </div>
</template>


<script>

export default {
  name: 'LoginButton'
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

