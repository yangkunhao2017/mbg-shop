<template>
  <view class="shop-list-item" v-for="shop in shoplist">
    <view>
      <image class="shop-img" mode="scaleToFill" :src="shop.image!=null?shop.image:'../../static/temp.png'"></image>
    </view>
    <view>
      <text class="uni-ellipsis" style="font-size: small;font-weight: bold;">{{shop.name!=null?shop.name:'商品标题'}}</text>
    </view>
    <view>
      <text style="color: red;font-weight: bold;">{{shop.price!=null?shop.price:'$600.0'}}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "hz-shop-card",
  props:{
    shoplist:{
      type:Array,
      default:()=>[]
    }
  },
}
</script>

<style scoped>

.shop-list-item{
  margin: 2vw;
  height: 200px;
  width: 46vw;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #c1c1c1;
}

.shop-img{
  width: 100%;
  height: 150px;
}
</style>