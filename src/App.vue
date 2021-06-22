<template>
  <div id="app">
    <router-view />
    <tabBar />
  </div>
</template>
<script>
import tabBar from '@/components/tabBar'
export default {
  components:{
    tabBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: #f3f3f3;
  color: #2c3e50;
  overflow:-Scroll;
  overflow-x:hidden;
}

</style>
