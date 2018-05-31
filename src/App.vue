<template>
    <div id="app">
          <transition :name="transitionName" mode="out-in">
              <router-view></router-view>
          </transition>
    </div>
</template>

<script>

const pathDict = {
  'profile': 0,
  '': 1,
  'chat_list': 2,
  'chat': 3 }

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from, next) {
      const toPath = to.path.split('/').slice(-1)[0]
      const fromPath = from.path.split('/').slice(-1)[0]
      this.transitionName = (pathDict[toPath] - pathDict[fromPath]) > 0 ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eff2f7;
  margin-top: 0;
  height: 100%;
  overflow:hidden;
} 

body {
  margin: 0;

}

.slide-left-enter-active{
    overflow: hidden;
    transition: all .5s ease;
}

.slide-left-enter{
    transform: translateX(100%);
}

.slide-left-leave{
    transition: all .5s;
}

.slide-left-leave-to{
    transform: translateX(-100%);
}
.slide-left-leave-active{
    display:block;
}

.slide-right-enter-active{
    overflow: hidden;
    transition: all .5s ease;
}

.slide-right-enter{
    transform: translateX(-100%);
}

.slide-right-leave{
    transition: all .5s;
}

.slide-right-leave-to{
    transform: translateX(100%);
}
.slide-right-leave-active{
    display:block;
}
</style>
