<template>
	<view>
		<view class="uni-flex uni-row view-between" style="margin: 10px;">
			<view class="uni-flex uni-row view-center">
				<label>限时秒杀</label>
			</view>
			<view class="view-center">
				<lable>更多秒杀</lable>
			</view>
		</view>
		<view>
			<view class="uni-flex uni-row shop-box" v-for="index in list">
				<view class="uni-flex view-center"  style="margin: 10px;">
					<image class="shop-box-img" src="http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png"></image>
				</view>
				<view class="uni-flex uni-column"  style="margin: 5px;">
					<view class="uni-flex uni-row" style="margin-top: 10px;">
						<view class="shop-box-tag view-center uni-flex">
							<label>秒杀</label>
						</view>
						<text style="font-weight: bold;margin-left: 5px;">商品标题</text>
					</view>
					<view style="margin-top: 10px;">
						<text class="uni-ellipsis" style="font-size: 10px;">副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题</text>
					</view>
					<view class="uni-flex uni-row" style="margin-top: 10px;">
						<progress percent="50" color="#ff86a0" stroke-width="10" class="shop-box-progress"></progress>
						<label style="font-size: 12px;color: #ff86a0;">已售出5555件</label>
					</view>
					<view class="uni-flex uni-row view-between" style="margin-top: 5px;">
						<view>
							<text class="price">$69.00</text>
							<text class="oldPrice" style="margin-left: 10px;">$129.00</text>
						</view>
						<view>
							<button class="buy-button">去抢购</button>
						</view>
					</view>
					<view>
						<uni-countdown color="#00ff00" :second="60*60*24*2"></uni-countdown>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"hz-seckill",
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
		background: #fff;
		height: 150px;
		margin: 10px;
		border-radius: 10px;
	}
	.shop-box-img{
		width: 100px;
		height: 100px;
	}
	.shop-box-tag{
		font-size: 12px;
		font-weight: bold;
		background: #ff0000;
		color: #fff;
		border-radius: 5px;
		width: 35px;
	}
	.shop-box-progress{
		width: 50%;
		border-radius: 45px;
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
</style>