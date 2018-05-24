<template>
    <div id="logo">
        <img src="static/img/match.svg" alt="match logo">
        <p id="match">match</p>
    </div>
</template>


<script>

export default {
  name: 'Logo'
}
</script>

<style scoped>
img {
    height:200px;
    position: relative;
    left: 50%;
    transform:translateX(-50%);
}

#match {
    font-size: 35px;
    font-weight: bold;
    color: #ed1e79;
    text-align:center;
    position:relative;
    top:-30px;
}
</style>
