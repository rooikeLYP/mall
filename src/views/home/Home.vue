<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <main-swiper :banners="banners" :recommends="recommends"></main-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {getHomeMultidata} from "@/network/home";
  import MainSwiper from "@/views/home/chlidVue/MainSwiper";
  import RecommendView from "@/views/home/chlidVue/RecommendView";

  export default {
    name: "Home",
    components: {
      RecommendView,
      MainSwiper,
      NavBar,
    },
    data() {
      return{
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: white;
  }
</style>
