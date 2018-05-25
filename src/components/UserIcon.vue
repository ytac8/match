<template>
    <div class="thumbnail" :style="styleObject"></div>
</template>

<style scoped>
.thumbnail {
    display: inline-block;
    background-color: #ccc;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 5px;
    width: 60px;
    height: 60px;
    border-radius:50%;
    border: 2px solid #fce8f9;
    background-size: 60px 60px;
}

.thumnail-not-read {
    color: red;
}
</style>

<script>
export default {
  name: 'UserIcon',
  props: {
    imgUrl: String
  },
  data () {
    return {
      styleObject: {
        backgroundImage: 'url(' + this.imgUrl + ')'
      }
    }
  }
}
</script>
