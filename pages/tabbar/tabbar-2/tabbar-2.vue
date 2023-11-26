<!-- style="background-image: url('../../../static/img/tabbar/积分.png');" -->
<template>
	<view class="uni-page-body">
		  <view class="table">
		    <view class="row" v-for="(item, index) in tableData" :key="index">
		      <view class="cell" v-for="(cell, index) in item" :key="index">
		        <text class="vip-tag">VIP</text>
		        <text>{{ cell }}</text>
		      </view>
		    </view>
		  </view>
		    <view class="container">
		      <!-- 总体布局容器 -->
		      <view class="menu-item" v-for="(item, index) in menuItems" :key="index">
		        <!-- 单个菜单项 -->
		        <image :src="item.icon" class="icon"></image> <!-- 菜单图标 -->
		        <text>{{ item.text }}</text> <!-- 菜单文本 -->
		      </view>
		    </view>
		  <view>
		    <!-- 第一个通知栏 -->
		    <view class="notification-bar">
		      <text class="notification-text">会员升级狂欢活动，每月仅需9.99元起！</text>
		    </view>
		    
		    <!-- 第二个通知栏 -->
		    <view class="notification-bar">
		      <text class="notification-text">今日新鲜直播：水煮三文鱼，人气主播现场教学</text>
		    </view>
		  </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			      tableData: [
			        ['会员升级', '兑换奖品'],
			        ['积分商城', '每日抽奖'],
			        // 其他行...
			      ],
			      // 菜单项数据，包含图标和文本
			      menuItems: [
			        { icon: './../../static/邮箱.png', text: '会员升级' },
			        { icon: './../../static/logo5.png', text: '兑换奖品' },
			        // 添加更多菜单项...
			      ],
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>

	.uni-page-body{
		display: flex;
		flex-direction: column;
		/* background-image: url('../../../static/邮箱2.png'); */
		background-position: 80% 80%;
		
		background-repeat: no-repeat;
		
		 background-size: 100% 100%;
	}
.table {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  
  
}
.row {
  display: flex;
}
.cell {
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 10px;
  position: relative;
  width: 100px;
  height: 40px;
}
.vip-tag {
  position: absolute;
  top: -1px;
  left: -1px;
  padding: 2px;
  background-color: #ffd700; /* 黄金色 */
  color: white;
  font-size: 12px;
  border: 1px solid #000;
  border-bottom: none;
  border-right: none;
}
.container {
  display: flex; /* 使用flex布局 */
  flex-direction: row; /* 主轴为水平方向 */
  flex-wrap: wrap; /* 当行不足以放下所有项时换行 */
  justify-content: space-around; /* 项目在主轴上的对齐方式为平分空间 */
  align-items: center; /* 项目在交叉轴上的对齐方式为居中 */
}

.menu-item {
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 主轴为垂直方向 */
  align-items: center; /* 项目在交叉轴上的对齐方式为居中 */
  padding: 10px; /* 内边距 */
}

.icon {
  width: 50px; /* 图标宽度 */
  height: 50px; /* 图标高度 */
  margin-bottom: 5px; /* 图标与文本之间的间距 */
}
.notification-bar {
  background-color: #f5f5f5; /* 通知栏背景色 */
  border-bottom: 1px solid #dcdcdc; /* 底部边框线 */
  padding: 10px; /* 内边距 */
}

.notification-text {
  color: #333; /* 文本颜色 */
  font-size: 14px; /* 字体大小 */
}
</style>
