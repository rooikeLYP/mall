<template>
  <div class="tab-bar-item" @click="tabberItemCLick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBerItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      tabberItemCLick() {
        this.isActive = !this.isActive;
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
    text-underline: none;
    /*line-height: 49px;*/
  }

  .tab-bar-item img{
    height: 24px;
    vertical-align: middle;
    /*width: 24px;*/
  }

  .active{
    :color: ;
  }
</style>
