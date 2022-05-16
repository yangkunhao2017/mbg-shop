<template>
  <scroll-view class="scroll-view_H" scroll-x="true">
    <view class="scroll-view-item_H">全部</view>
    <view class="scroll-view-item_H">3C电器</view>
    <view class="scroll-view-item_H">家居用品</view>
    <view class="scroll-view-item_H">酒水饮料</view>
    <view class="scroll-view-item_H">炒货</view>
    <view class="scroll-view-item_H">鲜果蔬菜</view>
    <view class="scroll-view-item_H">床上用品</view>
    <view class="scroll-view-item_H">服装</view>
  </scroll-view>
</template>

<script>
export default {
  name: "hz-scroll-view"
}
</script>

<style scoped>
/*去掉滚动条*/
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  background: #ffffff;
}
.scroll-view-item_H {
  display: inline-block;
  width: 80px;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  font-size: 12px;
}
</style>