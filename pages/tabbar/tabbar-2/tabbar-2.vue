<!-- style="background-image: url('../../../static/img/tabbar/积分.png');" -->
<template>
	<view class="uni-page-body">
		
		<!-- 搜索框 -->
		<view class="uni-input-wrapper">
			<image class="search-icon" src="../../../static/components/searchicon.jpg"></image>
		    <input class="uni-input" confirm-type="search" placeholder="请输入搜索内容:" />
			<view> <button class="mini-btn" type="default" size="mini">搜索</button></view>
			<image class="search-icon" src="../../../static/after.jpg"></image>
		</view>
	  <!-- 主容器，包裹整个推荐学习模块 -->
	  <view class="recommend-container">
		<!-- 模块标题区域 -->
		<view class="recommend-header">
		  <text class="recommend-title">今日推荐学习</text>
		</view>
		<!-- 推荐内容列表区域 -->
		<view class="recommend-content">
		  <!-- 列表项，使用v-for指令渲染每个推荐项 -->
		  <view class="recommend-item" v-for="(item, index) in recommendList" :key="index">
			<!-- 推荐项文本内容 -->
			<text class="recommend-text">{{ item }}</text>
		  </view>
		</view>
	  </view>
		
		
		
		<!-- 表格 -->
		  <view class="table">
		    <view class="row" v-for="(item, index) in tableData" :key="index">
		      <view class="cell" v-for="(cell, index) in item" :key="index">
		        <text class="vip-tag">VIP</text>
		        <text style="position: relative;
				left: 45px;
				top: 5px;">{{ cell }}</text>
		      </view>
		    </view>
		  </view>
		  
		  
  <view class="feature-container">
    <!-- 组件顶部区域，包含VIP标识和标题 -->
    <view class="feature-header">
       <text class="vip-tag" style="position: relative;">VIP</text>
      <image class="header-icon" src="../../../static/after.jpg"></image>
      <text class="header-title">辛巴小助手</text>
    </view>
    
    <!-- 功能列表区域 -->
    <view class="feature-list">
      <!-- 循环渲染列表项 -->
      <view class="feature-item" v-for="(item, index) in features" :key="index" @click="handleClick(item)">
        <image class="item-icon" :src="item.icon"></image>
        <text class="item-title">{{ item.title }}</text>
      </view>
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
      // 功能列表数据
      features: [
        { icon: '../../../static/after.jpg', title: '会员升级' },
        { icon: '../../../static/after.jpg', title: '每日抽奖' },
		 { icon: '../../../static/after.jpg', title: '每日抽奖' },
		  { icon: '../../../static/after.jpg', title: '每日抽奖' },
		 { icon: '../../../static/after.jpg', title: '每日抽奖' },
		  { icon: '../../../static/after.jpg', title: '每日抽奖' },
        // 添加更多功能项...
      ],
				        // 推荐内容数据，替换为实际内容
				        recommendList: [
				          '新用户首购优惠（一）。',
				          '签到即可领取每日好礼以及积分奖励。'
				          // 这里可以根据实际需要添加更多推荐项
				        ],
		};
	},
	onLoad() {},
	methods: {
		    handleClick(item) {
		      // 处理点击事件
		      console.log('Clicked on feature:', item.title);
		      // 实现跳转或其他逻辑
		    }
	}
};
</script>

<style>

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
	
	
	
	/* 搜索框 */
	.search-icon{
		width: 25px;
		height: 25px;
	}
	.mini-btn {
	    margin-right: 30rpx;
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
	
	
.table {
   position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-top: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  width: 95%;
  left: 10px;
  
}
.row {
  display: flex;
}
.cell {
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  position: relative;
  width: 100px;
  height: 55px;
  width: 50%;  
  
}
.vip-tag {
  position: absolute;
  top: 2px;
  left: 2px;
  padding: 2px;
  background-color: #ffd700; /* 黄金色 */
  color: white;
  font-size: 12px;
  border: 1px solid #000;
  border-bottom: none;
  border-right: none;
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

/* 主容器样式，包含整个推荐模块 */
.recommend-container {
  border: 1px solid #ccc; /* 边框样式 */
  border-radius: 5px; /* 圆角效果 */
  padding: 10px; /* 内边距设置 */
  margin: 10px; /* 外边距设置 */
  height: 150px;
}

/* 模块标题区域样式 */
.recommend-header {
  border-bottom: 1px solid #ccc; /* 标题下的分割线 */
  padding-bottom: 5px; /* 标题下内边距 */
  margin-bottom: 10px; /* 标题与内容列表的间距 */
}

/* 模块标题文本样式 */
.recommend-title {
  font-size: 18px; /* 字体大小设置 */
  font-weight: bold; /* 字体加粗 */
}

/* 推荐内容列表项样式 */
.recommend-item {
  padding: 5px 0; /* 列表项的上下内边距 */
}

/* 推荐内容文本样式 */
.recommend-text {
  font-size: 14px; /* 字体大小设置 */
}


/* 组件容器样式 */
.feature-container {
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角 */
  padding: 10px; /* 内边距 */
}

/* 组件头部样式 */
.feature-header {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 子项垂直居中 */
  margin-bottom: 10px; /* 与功能列表的间距 */
}



/* 头部图标样式 */
.header-icon {
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
  margin-right: 5px; /* 与标题的间距 */
  position: relative;
  left: 30%;
}

/* 头部标题样式 */
.header-title {
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 加粗 */
    width: 50%;         /* 设置宽度为父元素的 50% */
    margin: 0 auto;     /* 水平居中 */
  
    /* 可选：如果你还想垂直居中 */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 功能列表样式 */
.feature-list {
  display: flex; /* 使用flex布局 */
  flex-wrap: wrap; /* 允许换行 */
  justify-content: space-around; /* 水平间距平均分布 */
}

/* 单个功能项样式 */
.feature-item {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中 */
  padding: 2px; /* 内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角 */
  margin: 5px; /* 间距 */
}

/* 功能项图标样式 */
.item-icon {
  width: 30px; /* 图标宽度 */
  height: 30px; /* 图标高度 */
  margin-right: 10px; /* 与文本的间距 */
}

/* 功能项标题样式 */
.item-title {
  font-size: 14px; /* 字体大小 */
}
</style>
