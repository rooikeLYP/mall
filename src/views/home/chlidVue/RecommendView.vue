<template>
<!--  两种实现办法：1、封装为单个组件并组合调用-->
  <recommend>
      <recommend-item v-for="item in recommends">
        <a :href="item.link" slot="recommendImage">
          <img :src="item.image" alt="">
        </a>
        <div slot="recommendText">{{item.title}}</div>
      </recommend-item>
  </recommend>
<!-- 2、整个封装为一个组件 -->
<!--  <div class="recommend">-->
<!--    <div v-for="item in recommends" class="recommend-item">-->
<!--      <a :href="item.link"><img :src="item.image" alt=""></a>-->
<!--      <div>{{item.title}}</div>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
  import RecommendItem from "@/components/common/Recommend/RecommendItem";
  import Recommend from "@/components/common/Recommend/recommend";
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Recommend,
      RecommendItem
    }
  }
</script>

<style scoped>
  /*.recommend {*/
  /*  display: flex;*/
  /*  width: 100%;*/
  /*  text-align: center;*/
  /*  font-size: 14px;*/

  /*  padding: 10px 0 20px;*/
  /*  border-bottom: 8px solid #eee;*/
  /*}*/
  .recommend-item {
    flex: 1;
  }
  /*.recommend-item img {*/
  /*  width: 70px;*/
  /*  height: 70px;*/
  /*  margin-bottom: 10px;*/
  /*}*/
</style>