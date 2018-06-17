<template>
    <div id="main-page">
        <Header :header-position="headerPosition"></Header>
        <ProfileContent></ProfileContent>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ProfileContent from '@/components/ProfileContent'

export default {
  name: 'ProfilePage',
  data () {
    return {
      headerPosition: 0,
      userId: localStorage.getItem('userId'),
      userData: {}
    }
  },
  components: {
    Header,
    ProfileContent
  }
}
</script>

<style scoped>

#main-page{
    height:100%;
    width: 100%;
    position: relative;
}


</style>
