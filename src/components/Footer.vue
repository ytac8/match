<template>
    <div class="footer">
        <LikeButton button-name="like"
            :user-id="userId" 
            v-on:remove="$emit('remove')">
        </LikeButton>
        <LikeButton button-name="dislike"
            :user-id="userId" 
            v-on:remove="$emit('remove')">
        </LikeButton>
    </div>
</template>

<script>
import LikeButton from '../components/LikeButton.vue'

export default {
  name: 'Footer',
  props: {
    userId: String
  },
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
