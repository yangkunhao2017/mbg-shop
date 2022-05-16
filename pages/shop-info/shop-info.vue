<template>
	<view>
		<view class="shop-img-box">
			<!-- 轮播组件 -->
			<swiper class="screen-swiper square-dot" style="height: 100%" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item, index) in bannerList" :key="index" @click="toPage(item.to)">
					<image :src='item.url' mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="price-box uni-flex uni-column">
			<view class="uni-flex view-vertical-center">
				<text class="price" style="margin-left: 10px;">$900.0</text>
				<text class="sellNum" style="margin-left: 10px;">优惠价</text>
			</view>
			<view class="uni-flex view-vertical-center">
				<text class="oldPrice" style="margin-left: 10px;">原价$900.0</text>
				<text class="sellNum" style="margin-left: 10px;">|</text>
				<text class="sellNum" style="margin-left: 10px;">已售:99件</text>
			</view>
		</view>
		<view class="title-box">
			<view>
				<text class="uni-ellipsis">商品标题</text>
			</view>
			<view>
				<text class="uni-ellipsis">商品副标题</text>
			</view>
		</view>
		<view>
			<rich-text nodes="<h1>fdsf</h1><h1>fdsf</h1><h1>fdsf</h1><h1>fdsf</h1><h1>fdsf</h1><h1>fdsf</h1><h1>fdsf</h1>">
				
			</rich-text>
		</view>
	</view>
	<view class="goods-carts">
		<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList:[{
					url:'http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png',
					to:''
				}],
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
			}
		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style>
	.shop-img-box{
		height: 450px;
	}
	.price-box{
		background: #ffaa00;
		height: 70px;
	}
	.price{
		color: #ffffff;
		font-weight: bold;
		font-size: 20px;
	}
	.oldPrice{
		color: #ffffff;
		text-decoration:line-through;
	}
	.sellNum{
		color: #ffffff;
	}
	.title-box{
		background: #fff;
		font-weight: bold;
		padding: 10px;
	}
	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
