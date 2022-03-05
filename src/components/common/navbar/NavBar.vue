<template>
  <div class="nav-bar">
    <div class="left-nav-bar"><slot name="left"></slot></div>
    <div class="center-nav-bar"><slot name="center"></slot></div>
    <div class="right-nav-bar"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    computed: {
      navBarStyle() {
        return
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    line-height: 44px;
    background: #ff8198;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
  }
  .left-nav-bar, .right-nav-bar {
    width: 64px;
    /*display: inline-block;*/
  }

  .center-nav-bar {
    flex: 1;
    /*width: 60%;*/
    /*display: inline-block;*/
  }
</style>