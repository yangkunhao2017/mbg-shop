<template>
	<view>
		<!-- 轮播组件 -->
		<swiper class="screen-swiper square-dot" style="height: 520rpx" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item, index) in bannerList" :key="index" @click="toPage(item.to)">
				<image :src='item.url' mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<view class="uni-flex uni-row view-vertical-center">
			<view class="uni-flex uni-row view-vertical-center view-search">
				<uni-icons type="search" ></uni-icons>
				<input class="uni-input" v-model="this.searchValue" placeholder="请输入商品名"/>
				<uni-icons type="closeempty"></uni-icons>
			</view>
			<view class="uni-flex view-center" style="width: 50px;">
				<text @click="search">搜索</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-head",
		data() {
			return {
				searchValue:'',
			};
		},
		props:{
			bannerList:{
				type:Array,
				default:[{
					url:'http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png',
					to:''
				}]
			}
		},
		methods:{
			toPage(e){
				uni.navigateTo({
					url:e,
				})
			},
			search(){
				console.log(this.searchValue);
			}
		}
	}
</script>

<style>
	.view-search{
		border: 2px solid #ffffff;
		border-radius: 10px;
	}
	.uni-input {
		height: 15rpx;
		font-size: 15rpx;
		padding: 15rpx 0rpx;
		flex: 1;
	}
</style>