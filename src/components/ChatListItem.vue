<template>
    <v-ons-list-item modifier="longdivider">
        <div class="left">
            <UserIcon></UserIcon>
        </div>
        <div class="center">
            <span class="list-item__title">{{name}}</span>
            <span class="list-item__subtitle">{{message}}</span>
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
      name: 'tamaki',
      message: 'hahahaha',
      helo: 'hello',
      items: ['hello', 'world']
    }
  }
}
</script>

