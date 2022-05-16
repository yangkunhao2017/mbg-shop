<template>
	<view>
		<view class="uni-flex uni-row view-between" style="margin: 10px;">
			<view class="uni-flex uni-row view-center">
				<label>推荐商品</label>
			</view>
			<view class="view-center">
				<lable>更多推荐</lable>
			</view>
		</view>
		<view class="uni-flex uni-row view-warp">
			<view class="uni-flex uni-column shop-box" v-for="index in list">
				<view>
					<image class="shop-box-img" mode="scaleToFill" src="http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png"></image>
				</view>
				<view class="uni-flex uni-row" style="margin-top: 10px;margin-left: 5px;">
					<view class="shop-box-tag view-center uni-flex">
						<label>推荐</label>
					</view>
					<text class="uni-ellipsis" style="font-weight: bold;margin-left: 5px;">商品标题商品标题商品标标</text>
				</view>
				<view style="margin-top: 10px;">
					<text class="uni-ellipsis" style="font-size: 10px;margin-left: 5px;">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</text>
				</view>
				<view class="uni-flex uni-row view-between" style="margin-top: 10px;margin-left: 5px;">
					<view>
						<view>
							<text class="price">$69.00</text>
						</view>
						<view style="margin-top: 5px;">
							<text class="oldPrice">$129.00</text>
						</view>
					</view>
					<view style="margin-top: 10px;">
						<button class="buy-button">去购买</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"hz-hot-goods",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:Array,
				default: ()=> {
					return [{},{},{}];
				}
			},
		}
	}
</script>

<style>
	.shop-box{
		width: 48%;
		height: 260px;
		margin: 1%;
		background: #fff;
		border-radius: 10px;
	}
	.shop-box-img{
		width: 100%;
		height: 130px;
	}
	.price{
		color: #ff0000;
		font-weight: bold;
		font-size: 20px;
	}
	.oldPrice{
		color: #d1cecf;
		text-decoration:line-through;
	}
	.buy-button{
		background: #ff0000;
		color: #fff;
		border-radius: 25px;
		font-size: 12px;
	}
	.shop-box-tag{
		font-size: 12px;
		font-weight: bold;
		background: #ff0000;
		color: #fff;
		border-radius: 5px;
		width: 35px;
	}
</style>