<template>
    <div id="app">
          <transition :name="transitionName">
              <router-view></router-view>
          </transition>
    </div>
</template>

<script>

const pathDict = {
  'login': -1,
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
      const toPath = to.path.split('/')[1]
      const fromPath = from.path.split('/')[1]
      this.transitionName = (pathDict[toPath] - pathDict[fromPath]) >= 0 ? 'slide-left' : 'slide-right'
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
    transition: all .5s ease;
}
.slide-left-enter{
    opacity:0;
    transform: translateX(100%);
}
.slide-left-enter-to{
    transform: translateX(0%);
}
.slide-left-leave-active{
    transition: all .5s;
}
.slide-left-leave{
    transform: translateX(0%);
}
.slide-left-leave-to{
    opacity:0;
    transform: translateX(-100%);
}

.slide-right-enter-active{
    transition: all .5s;
}
.slide-right-enter{
    opacity:0;
    transform: translateX(-100%);
}
.slide-right-enter-to{
    transform: translateX(0%);
}
.slide-right-leave-active{
    transition: all .5s ease;
}
.slide-right-leave{
    transform: translateX(0%);
}
.slide-right-leave-to{
    opacity:0;
    transform: translateX(100%);
}
</style>
