<template>
  <view class="content">
      <swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
        <swiper-item v-for="index in 3">
          <image class="banner-img" src="../../static/temp.png" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
      <hz-search-input @search="search"></hz-search-input>
      <hz-scroll-view  @changeSelect="changeSelect"></hz-scroll-view>
<!--      <view class="uni-flex uni-row view-warp">-->
        <hz-shop-card :shoplist="shopList"></hz-shop-card>
<!--      </view>-->
    </view>
</template>

<script>
import HzShopCard from "../../components/hz-shop-card/hz-shop-card";
import HzSearchInput from "../../components/hz-search-input/hz-search-input";
import HzScrollView from "../../components/hz-scroll-view/hz-scroll-view";
export default {
  components: {HzScrollView, HzSearchInput, HzShopCard},
  data() {
    return {
      shopList:[{},{},{},{},{},{},{},{},{}],
    }
  },

  methods: {
    //获取从hz-scroll-view传递过来的数据,并执行api请求，获取该id下的商品列表
    changeSelect(e) {
      console.log(e);
    },
    //获取从hz-search-input传递过来的数据,并执行api请求，获取该搜索值下的商品列表
    search(e) {
      console.log(e);
    }
  }
}
</script>

<style>
/*去掉按钮边框*/
button:after{ border: none; }

.banner-img{
  width: 100%;
  height: 100%;
}

</style>
