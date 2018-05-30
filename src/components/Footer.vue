<template>
    <div class="footer">
        <LikeButton button-name="like"></LikeButton>
        <LikeButton button-name="dislike"></LikeButton>
    </div>
</template>

<script>
import LikeButton from '../components/LikeButton.vue'

export default {
  name: 'Footer',
  components: {
    LikeButton
  }

}
</script>

<style scoped>

.footer {
    position:fixed;
    bottom:0px;
    width: calc(100% - 40px);
    margin:10px;
    margin-top: 0px;
    padding:10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

</style>
