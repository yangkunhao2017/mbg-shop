<template>
  <view class="uni-flex uni-row search-box view-center">
    <uni-icons type="search" size="20"></uni-icons>
    <input type="text" placeholder="搜索商品"/>
    <button>搜索</button>
  </view>
</template>

<script>
export default {
  name: "hz-search-input"
}
</script>

<style scoped>
.search-box {
  height: 30px;
  background: #f5f5f5;
  border-radius: 10px;
  margin: 5px;
}
.search-box input{
  width: 80%;
  height: 100%;
  border: none;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
}
.search-box button{
  width: 20%;
  height: 100%;
  border: none;
  background: #ff6700;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
}
</style>