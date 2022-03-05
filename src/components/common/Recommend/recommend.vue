<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "recommend"
  }
</script>

<style scoped>
  .recommend {
    display: flex;
  }
</style>