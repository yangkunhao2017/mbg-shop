<template>
	<view>
		<home-head></home-head>
		<hz-grid-swiper></hz-grid-swiper>
		<hz-seckill></hz-seckill>
		<hz-hot-goods></hz-hot-goods>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			uni.stopPullDownRefresh();
		},
		methods: {
		}
	}
</script>

<style>

</style>
