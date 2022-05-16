<template>
	<view :style="list.length <= oneRowNum ? `height:180rpx` : `height:380rpx`">
		<swiper :style="list.length <= oneRowNum ? `height:160rpx` : `height:380rpx`">
			<swiper-item v-for="itemList in newList">
				<view class="uni-flex uni-row view-warp menu-swiper-item">
					<view class="uni-flex uni-column view-center" v-for="index in itemList" :style="{width: 100/oneRowNum+'%'}">
						<image class="tab-img" src="http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png"></image>
						<text>签到有礼</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script>
	export default {
		name:"hz-grid-swiper",
		data() {
			return {
				
			};
		},
		props:{
			list: {
				type: Array,
				default: () => {
					return [{},{},{},{}];
				}
			},
			oneRowNum:{
				type:Number,
				default:4,
			}
		},
		computed: {
			newList() {
				if (this.list.length) {
					let data = this.splitData(this.list, this.oneRowNum * 2);
					return data;
				}
			}
		},
		methods:{
			/**
			 * 数据分组
			 * @param {Array} oArr - 原数组列表
			 * @param {Number} length - 单个数组长度
			 * @return {Array}  arr - 分组后的新数组
			 */
			splitData(oArr = [], length = 1) {
				let arr = [];
				let minArr = [];
				oArr.forEach(c => {
					if (minArr.length === length) {
						minArr = [];
					}
					if (minArr.length === 0) {
						arr.push(minArr);
					}
					minArr.push(c);
				});
				return arr;
			},
		}
	}
</script>

<style>
	.tab-img {
		width: 98rpx;
		height: 98rpx;
		margin-bottom: 10rpx;
		border-radius: 15px;
	}
	.menu-swiper-item {
		background: #fff;
		height: 100%;
		width: 100%;
	}
</style>