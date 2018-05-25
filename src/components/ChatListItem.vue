<template>
    <v-ons-list-item modifier="longdivider">
        <div class="left">
            <UserIcon :img-url="itemImg"></UserIcon>
        </div>
        <div class="center">
            <span class="list-item__title">{{itemName}}</span>
            <span class="list-item__subtitle">{{itemMessage}}</span>
        </div>
    </v-ons-list-item>
</template>

<style scoped>
.name{
    font-weight: bolder;
    color: gray;
}
.text {
    color: gray;
}

</style>

<script>
import UserIcon from './UserIcon.vue'

export default {
  name: 'ChatListItem',
  props: {
    itemImg: String,
    itemName: String,
    itemMessage: String
  },
  components: {
    UserIcon
  },
  data () {
    return {
    }
  }
}
</script>

