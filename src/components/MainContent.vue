<template>
    <v-ons-card :style="styleObject">
        <div id="content">
            <img src="" alt="">
            <div id="profile">
                <p id="name">{{name}}</p>
                <p id="work-per-week"></p>
                <p id="self-intro"></p>
            </div>
        </div>
    </v-ons-card>
</template>
<script>
export default {
  data () {
    return {
      name: 'tamaki',
      styleObject: {
        color: 'white',
        'background-image': 'url(static/img/profile.jpg)'
      }

    }
  }

}
</script>

<style lang="postcss" scoped>
.card {
    height: 500px;
}

#profile {
    background-color: gray;
    opacity: 50%;
}

</style>
