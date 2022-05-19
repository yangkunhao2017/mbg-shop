<template>
	<view class="content">
		<view class="uni-flex uni-row">
      <button :class="this.listType==0?'active':''" class="item-index" @click="changeType(0)">全部</button>
      <button :class="this.listType==1?'active':''" class="item-index" @click="changeType(1)">待发货</button>
      <button :class="this.listType==2?'active':''" class="item-index" @click="changeType(2)">待收货</button>
      <button :class="this.listType==3?'active':''" class="item-index" @click="changeType(3)">已完成</button>
    </view>
    <view>
      <view class="uni-flex uni-row list-box view-center">
        <view class="image-box">
          <image src="../../static/temp.png" mode="aspectFill"></image>
        </view>
        <view class="uni-flex uni-row view-between info-box">
         <view class="uni-flex uni-column">
           <view>
             <text>商品标题</text>
           </view>
           <view>
             <text>价格</text>
           </view>
         </view>
          <view class="uni-flex uni-column view-center">
            <view>
              <text>状态</text>
            </view>
            <view>
              <button class="option-button">option</button>
            </view>
          </view>

        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listType:0,
			}
		},
    onLoad(e){
      this.listType = e.type;
    },
		methods: {
			changeType(e){
        this.listType = e;
      }
		}
	}
</script>

<style>
/*去掉按钮边框*/
button:after{ border: none; }

.item-index{
  width: 25vw;
  height: 50px;
  line-height: 50px;
  border-radius: 0px;
  text-align: center;
  color: #000000;
  font-size: 16px;
  background-color: #ffffff;
}

.item-index.active{
  border-bottom: 1px solid #ff5a00;
}

.list-box {
  margin-top: 10px;
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #cccccc;
}

.list-box .image-box{
  width: 50px;
  height: 50px;
}

.list-box .image-box image{
  width: 100%;
  height: 100%;
}

.info-box {
  width: 100%;
  margin-left: 10px;
}

.option-button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #ff5a00;
  font-size: 16px;
  border-radius: 0px;
  background-color: #ffffff;
}
</style>
