<template>
	<view>
		<view class="menu-box">
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view :class="this.menuSelectIndex!=index?'scroll-view-item_H':'scroll-view-item_H-action'"
				 v-for="index in 10" @click="changeSelectIndex(index)">手机{{index}}</view>
			</scroll-view>
		</view>
		<view class="shop-list uni-flex uni-column">
			<view class="uni-flex shop-list-banner">
				<image class="banner-img" mode="scaleToFill" src="http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png"></image>
			</view>
			<view class="uni-flex view-warp">
				<view class="shop-list-item" v-for="index in shopList">
					<view>
						<image class="shop-img" mode="scaleToFill" src="http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png"></image>
					</view>
					<view>
						<text class="uni-ellipsis" style="font-size: small;font-weight: bold;">商品标题1111111111</text>
					</view>
					<view>
						<text style="color: red;font-weight: bold;">$600.0</text>
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
				menuSelectIndex:0,
				shopList:[{},{},{}]
			}
		},
		methods: {
			changeSelectIndex(e){
				console.log(e)
				this.menuSelectIndex=e;
			}
		}
	}
</script>

<style>
	.menu-box{
		/* height: 60px; */
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100px;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 36rpx;
		margin: 10px;
	}
	.scroll-view-item_H-action {
		display: inline-block;
		width: 100px;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 36rpx;
		border-bottom: 2px solid #0000ff;
		margin: 10px;
	}
	.view-box{
		background: #ffffff;
	}
	.shop-list{
		background: #ffffff;
	}
	.shop-list-banner{
		height: 160px;
		margin: 5px;
	}
	.shop-list-item{
		margin: 2vw;
		height: 200px;
		width: 46vw;
		border-radius: 5px;
		box-shadow: 5px 5px 10px #c1c1c1;
	}
	.banner-img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.shop-img{
		width: 100%;
		height: 150px;
	}
</style>
