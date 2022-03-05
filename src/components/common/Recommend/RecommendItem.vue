<template>
  <div class="recommendItem">
    <div><slot name="recommendImage"></slot></div>
    <div><slot name="recommendText"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "RecommendItem"
  }
</script>

<style scoped>
  .recommendItem {
    flex: 1;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 8px #eee solid;
  }
  .recommendItem img{
    width: 70px;
    height: 70px;
    /*vertical-align: middle;*/
    margin-bottom: 5px;

  }
</style>