
<template>
	<view class="uni-page-body">
	    <view class="uni-input-wrapper">
			<image class="search-icon" src="../../../static/components/searchicon.jpg"></image>
	        <input class="uni-input" confirm-type="search" placeholder="请输入搜索内容:" />
			<view> <button class="mini-btn" type="default" size="mini">搜索</button></view>
			<image class="search-icon" src="../../../static/after.jpg"></image>
	    </view>
		
			<view class="swiper">
					  <swiper 
					    indicator-dots="true" 
					    autoplay="true" 
					    interval="3000" 
					    duration="500">
<!-- 					    <swiper-item v-for="(item, index) in items" :key="index">
					      <image :src="item" class="slide-image"></image>
					    </swiper-item> -->
						<swiper-item>
							<image src="../../../static/856f5566381b1dc750550025a13ae26.png" style="width: 100%;
							
							height: 150px;"></image>
						</swiper-item>
						<swiper-item>
							<div style="background-color: red; width: 100%;height: 100%;align-items: center;display: flex; justify-content: center;">
								<span style="color: yellow;text-align: center;">
									国务院关于印发“十四五”就业促进规划的通知
								</span>
							</div>
						</swiper-item>
					  </swiper>
				</view>
				<view style="border: 1px solid #dcdcdc;
				border-radius: 10px;">
					<view class="module">
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">私人定制</text></view>
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">实用功能</text></view>
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">小班课堂</text></view>
					</view>
					<view class="module">
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">企业合作</text></view>
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">线下拓展</text></view>
						<view class="flex-item2" style="background-image: url('../../../static/边框1.png');background-size: 120% 100%;background-position: center;background-repeat: no-repeat;"><image class="search-icon" src="../../../static/img/icon2.png"></image><text class="text2">导师推荐</text></view>
					</view>
				</view>
		<view class="module2">
			<!-- <view class="flex-item4"><text class="text3"></text></view> -->
			<view class="flex-item5" style="background-image: url('../../../static/logo5.png');background-size: 100% 100%;background-position: left;background-repeat: no-repeat;
			position: relative;
			left: -10px;"></view>
			<view class="flex-item5" style="background-image: url('../../../static/img/tabbar/热榜.png');background-size: 110% 100%;background-position: center;background-repeat: no-repeat;
			width: 250px;">
				<view class="flex-item6"
				style="font-size: 20px;"> 热榜</view>
				<image src="../../../static/img/热度1.png" style="height: 35px;width: 35px;"></image>
				<view class="flex-item4"><text class="hot">111111111111</text></view>
				<image src="../../../static/img/热度2.png" style="height: 35px;width: 35px;"></image>
				<view class="flex-item4"><text class="hot">222222222222</text></view>
				<image src="../../../static/img/热度3.png" style="height: 35px;width: 35px;"></image>
				<view class="flex-item4"><text  class="hot">333333333333</text></view>
				<view class="flex-item3"></view>
				<view class="flex-item4"></view>
			</view>
		</view>
		<view class="module"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			items:[
				"../../../static/logo5.png",
				"../../../static/logo2.png",
				"../../../static/logo1.png",
			],
			      // 选项数据
			      options: ['上手', '进阶', '精通'],
			cuindex:0,
			intervalId: null,
		};
	},
	onLoad() {},
	methods: {
			 startSlideshow() {
			      this.intervalId = setInterval(() => {
			        this.nextImage();
			      }, 3000);
			    },	
			    nextImage() {
	      this.cuindex = (this.cuindex + 1) % this.items.length;
			    },
				    drawArtText() {
				      // 获取Canvas元素的上下文
				      const canvas = this.$refs.canvas
				      const ctx = canvas.getContext('2d')
				      
				      // 设置艺术字的样式，如字体、大小、颜色等
				      ctx.font = '40px Arial'
				      ctx.fillStyle = 'red'
				      
				      // 清空Canvas
				      ctx.clearRect(0, 0, canvas.width, canvas.height)
				      
				      // 绘制艺术字
				      ctx.fillText('你好', 50, 50) // 这里的坐标和文本内容可以根据需求进行调整
				    }
		},
	mounted() {
	    this.startSlideshow();
	  },
	
};
</script>

<style>
.search-icon{
	width: 25px;
	height: 25px;
}
.lunbo{
	display: flex;
	width: 100%;
	height: 100px;
}
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
	height: 80px;
	width: 100%;
	
}
	.module2{
			display: flex;
			flex-direction: row;
			height: 200px;
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
		height: 42px;
		width: 350px;
		border-radius: 50px;
		border:1px solid blue;
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
	    padding: 8px 13px;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    background-color: #FFFFFF;
		position: relative;
		left: 17px;
		
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
		line-height: 80px;
	/* 	background-image: url('../../../static/img/tabbar/边框.png');
		background-size: 100% 100%; */
		margin: 5px;
	}
	.flex-item3 {
		width: 20%;
		height: 20%;
		text-align: center;
		line-height: 60px;
	}
	.flex-item4 {
		width: 80%;
		height: 20%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/img/tabbar/聊天.png'); */
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}
	.flex-item5 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0px;
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 60px;
		/* background-image: url('../../../static/logo.png'); */
	}
	.flex-item6 {
		width: 100%;
		height: 20%;
		text-align: center;
		line-height: 60px;
	}

	.uni-page-body{
		display: flex;
		flex-direction: column;
		/* background-image: url('../../../static/邮箱.png');
		background-position: 50% 100%;
		
		background-repeat: no-repeat; */
		
		/* background-size: 100% 100%; */
		/* background:linear-gradient(to bottom,#FFff00,#ffffff); */
		background-color: #FFFFFF;
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
		color:black;
		font-size: 20px;
	}
	.text3{
		color:pink;
		font-size: 50px;
	}
	.text4{
		color:gold;
		font-size: 40px;
	}
	.hot{
		color:red;
		text-decoration: underline;
	}
	
	
	

	

</style>
