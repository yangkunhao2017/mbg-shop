<template>
  <scroll-view class="scroll-view_H" scroll-x="true">
    <view class="scroll-view-item_H" :class="this.selectItem==0?'scroll-view-item_H-active':''" @click="changeSelect(0)">全部</view>
    <view class="scroll-view-item_H" :class="this.selectItem==1?'scroll-view-item_H-active':''" @click="changeSelect(1)">3C电器</view>
    <view class="scroll-view-item_H" :class="this.selectItem==2?'scroll-view-item_H-active':''" @click="changeSelect(2)">家居用品</view>
    <view class="scroll-view-item_H" :class="this.selectItem==3?'scroll-view-item_H-active':''" @click="changeSelect(3)">酒水饮料</view>
    <view class="scroll-view-item_H" :class="this.selectItem==4?'scroll-view-item_H-active':''" @click="changeSelect(4)">炒货</view>
    <view class="scroll-view-item_H" :class="this.selectItem==5?'scroll-view-item_H-active':''" @click="changeSelect(5)">鲜果蔬菜</view>
    <view class="scroll-view-item_H" :class="this.selectItem==6?'scroll-view-item_H-active':''" @click="changeSelect(6)">床上用品</view>
    <view class="scroll-view-item_H" :class="this.selectItem==7?'scroll-view-item_H-active':''" @click="changeSelect(7)">服装</view>
  </scroll-view>
</template>

<script>
export default {
  name: "hz-scroll-view",
  data(){
    return{
      selectItem: 0,
    }
  },
  methods:{
    changeSelect(index){
      this.selectItem = index;
      this.$emit('changeSelect',index)
    }
  }
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
.scroll-view-item_H-active {
  color: #ff5a00;
  border-bottom: 1px solid #ff5a00;
}
</style>