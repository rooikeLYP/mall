<template>
  <div id="app">
    <router-view></router-view>
    <main-tabber></main-tabber>
  </div>
</template>

<style>
@import "assets/css/base.css";
</style>
<script>
  import MainTabber from "@/components/content/MainTabber";

  export default {
    components: {
      MainTabber,
    }
  }
</script>