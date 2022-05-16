<template>
  <view class="content">
    <view class="shop-list uni-flex uni-column">
      <view class="uni-flex shop-list-banner">
        <image class="banner-img" mode="scaleToFill" src="../../static/temp.png"></image>
      </view>
      <hz-search-input></hz-search-input>
      <hz-scroll-view></hz-scroll-view>
      <view class="uni-flex uni-row view-warp">
        <hz-shop-card :shoplist="shopList"></hz-shop-card>
      </view>
    </view>
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

  }
}
</script>

<style>

/*去掉按钮边框*/
button:after{ border: none; }


.shop-list{
  background: #ffffff;
}
.shop-list-banner{
  height: 160px;
  margin: 5px;
}
.banner-img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

</style>
