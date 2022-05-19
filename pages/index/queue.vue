<template>
	<view>
    <view>
      <swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
        <swiper-item v-for="index in 3">
          <image class="banner-img" src="../../static/temp.png" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
		<view>
      <uni-list>
        <uni-list-item title="编号" note="订单号" rightText="您" v-for="x in 10">
        </uni-list-item>
      </uni-list>
    </view>
	</view>
</template>

<script>
  export default {
    data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
