<template>
    <div id="header">
        <HeaderContent v-for="item in contents" :pagename="item">
        </HeaderContent>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'

export default {
  name: 'Header',
  props: {
    headerPosition: Number
  },
  data () {
    return {
      contentsList: ['', 'ProfilePage', 'MainPage', 'ChatListPage', '']
    }
  },
  computed: {
    contents: function () {
      if (this.headerPosition > 2) {
        return ['back', '', '']
      } else {
        return this.contentsList.slice(this.headerPosition, this.headerPosition + 3)
      }
    }
  },
  components: {
    HeaderContent
  }
}
</script>

<style scoped>
#header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #ffffff;
    color: #ffffff;
    display:grid;
    grid-template-columns: 20% 60% 20%;
    padding-left: 0px;
    padding-right: 0px;
    z-index:0;
}
</style>
