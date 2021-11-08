<template>
  <div id="app">
    <router-view />
    <tabBar v-show="$route.meta.navShow" />
  </div>
</template>
<script>
import tabBar from "@/components/tabBar";
export default {
  components: {
    tabBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
