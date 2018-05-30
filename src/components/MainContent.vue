<template>
    <div id="main-content">
        <v-ons-card :style="styleObject">
            <div id="content">
                <img src="" alt="">
                <div id="profile">
                    <p id="name">{{user.name}}</p>
                    <p id="work-per-week"></p>
                    <p id="self-intro">{{user.profile}}</p>
                </div>
            </div>
        </v-ons-card>
    </div>
</template>
<script>

export default {
  props: {
    user: Object
  },
  data () {
    return {
      styleObject: {
        color: 'white',
        backgroundImage: 'url(static/img/profile/' + this.user.img + ')'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="postcss" scoped>
#main-content{
    height:calc(100% - 56px - 100px);
    width: 100%;
    margin:0;
}

.card {
    height: 100%;
    width: calc(100% - 16px);
    background-color: white;
    background-position: center center;
    background-repeat: no-repeat;
}

#profile {
    background-color: gray;
    opacity: 0.6;
}

</style>
