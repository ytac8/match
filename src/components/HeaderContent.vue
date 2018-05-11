<template>
    <div id="header-icon" v-bind:class="classObject">
        <p>{{position}}</p>
    </div>
</template>

<script>
export default {
  props: ['position', 'pagename'],
  data () {
    return {
      'page-name': this.pagename
    }
  },
  computed: {
    classObject: function () {
      return {
        'is-left': this.position === 'left',
        'is-center': this.position === 'center',
        'is-right': this.position === 'right'
      }
    }
  }
}
</script>

<style scoped>
</style>
