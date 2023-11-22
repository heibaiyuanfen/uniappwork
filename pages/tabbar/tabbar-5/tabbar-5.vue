
<template>
	<view class="uni-page-body">
	    <view class="uni-input-wrapper">
	        <input class="uni-input" confirm-type="search" placeholder="请输入搜索内容:" />
			<view> <button class="mini-btn" type="default" size="mini">搜索</button></view>
	    </view>
		<view class="module">
			
		</view>
		<view class="module">
			
		</view>
		<view class="module"></view>
		<view class="module">
		</view>
		<view class="module2">
		</view>
		<view class="module2">
		</view>

		<view class="module2">
			<view class="flex-item4"><text class="text3"></text></view>
			<view class="flex-item5" style="background-image: url('../../../static/logo5.png');background-size: 80% 100%;background-position: center;background-repeat: no-repeat;"><text class="text3"></text></view>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
	display: flex;
	flex-direction: column;
}
	.module {
	display: flex;
	flex-direction: row;
	height: 60px;
	width: 100%;
	
}
	.module2{
			display: flex;
			flex-direction: row;
			height: 110px;
			width: 100%;
			text-align: center;
	}
	
	.uni-input {
	    height: 28px;
	    line-height: 28px;
	    font-size: 15px;
	    padding-right: 0%;
	    flex: 1;
	    background-color: #FFFFFF;
	}
	.uni-input-wrapper {
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
	    padding: 8px 13px;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    background-color: #FFFFFF;
	}
	.mini-btn {
	    margin-right: 30rpx;
	}
	.flex-item {
		width: 33.3%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/logo.png'); */
	}
	.flex-item2 {
		width: 33.3%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		background-image: url('../../../static/img/tabbar/边框.png');
		background-size: 100% 100%;
	}
	.flex-item3 {
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 60px;
	}
	.flex-item4 {
		width: 60%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/img/tabbar/聊天.png'); */
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}
	.flex-item5 {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/logo.png'); */
	}
	.flex-item5 {
		width: 60%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/logo.png'); */
	}
	.uni-page-body{
		display: flex;
		flex-direction: column;
		background-image: url('../../../static/邮箱4.png');
		background-position: 50% 50%;
		
		background-repeat: no-repeat;
		
		 background-size: 100% 100%;
	}
	.advertisement{
		height: 100%;
		width: 100%;
	}
	.text1{
		color: rgba(200,0,0,1);
		font-size: 30px;
	}
	.log2{
		height:100px ;
		weight:25px;
		/* background-image: url('../../../static/logo.png'); */
	}
	.text2{
		color:yellowgreen;
		font-size: 25px;
	}
	.text3{
		color:pink;
		font-size: 50px;
	}
	.text4{
		color:gold;
		font-size: 40px;
	}
</style>
