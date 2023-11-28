
<template>
	<view class="uni-page-body">
		<!-- 顶部导航栏 -->
		
		  <view class="footer-nav">
		    <!-- 底部导航容器 -->
		    <view class="nav-item" @click="onNavItemClick('home')">
		      <!-- 首页图标 -->
			  <image src="../../../static/img/qa.png" style="height: 20px;width: 20px;
			  position: absolute;
			  left: 80%;
			  top:0px;
			  "></image>
		      <text class="iconfont icon-home"></text>
		    </view>
		    <view class="nav-item" @click="onNavItemClick('search')">
		      <!-- 搜索图标 -->
			  <image src="../../../static/img/qa.png" style="height: 20px;width: 20px;
			  position: absolute;
			  left: 87%;
			  top:0px;
			  "></image>
		      <text class="iconfont icon-search"></text>
		    </view>
		    <view class="nav-item" @click="onNavItemClick('settings')">
		      <!-- 设置图标 -->
			  <image src="../../../static/img/qa.png" style="height: 20px;width: 20px;
			  position: absolute;
			  left: 94%;
			  top:0px;
			  "></image>
		      <text class="iconfont icon-settings"></text>
		    </view>
		  </view>
	
		  <!-- 组件外层容器 -->
		  <view class="status-container" style="background: linear-gradient(to bottom, #ffff72, #fff475);">
		    <!-- 圆形标识 -->
  <view class="avatar" @click="openImagePicker" style="position: relative;
  left: 12px;">
    <img :src="imageUrl" class="avatar-image" />
    <uni-icons type="camera" size="32" class="camera-icon" />
  </view>
    <!-- 标题和副标题容器 -->
    <view class="status-info" style="position: relative;
	left: 20px;">
      <!-- 标题 -->
      <text class="status-title">用户名称</text>
      <!-- 副标题 -->
      <text class="status-subtitle">资料完善度80%</text>
    </view>
		  </view>
		
		

		
	<!-- 信息统计容器 -->
	  <view class="stats-container">
	    <!-- 统计信息的容器 -->
	    <view class="stat-item" v-for="(item, index) in stats" :key="index">
	      <!-- 循环每个统计项 -->
	      <text class="stat-value">{{ item.value }}</text>
	      <!-- 显示统计值 -->
	      <text class="stat-label">{{ item.label }}</text>
	      <!-- 显示统计标签 -->
	    </view>
	  </view>
	
	
	
	
		
  <view class="experience-bar-container">
	<view class="mybox" 
	style="border-radius: 5px; 
	border: 1px solid #dcdcdc;
	background-color: #fafafa; 
	position: relative;
	height: 90px;
	width: 100%;
	top: 130px;
	left: 20px;
	">
		<view class="mytext"
		style="position: absolute;
		height: 30px;
		width: 100px;"
		>
			<text>狮王</text>
		</view>
		<view class="myvip"
		style="border-radius: 5px;
		background-color: orange;
		position: absolute;
		height: 30px;
		width: 100px;
		top: 2px;
		left: 70%;
		"
		>
			<text style="position: relative;
			left: 25%;
			top: 3px;">我的会员</text>
		</view>
		<view class="current-experience-icon" :style="{ left: fillWidth + '%' }">🌟</view>
		
			<view class="experience-bar">
		    <view class="experience-bar-fill" 
				:style="{ width: fillWidth + '%' }"></view>
				<view class="experience-level-node"
				v-for="level in levels" 
				key="level" 
				:style="{ left: calculateNodePosition(level) + '%' }"></view>
				
		  </view>
			
		  <view class="experience-levels">
		    <!-- 循环生成经验级别 -->
			  
		    <view v-for="level in levels" 
			  key="level" 
			  :class="experience-level">LV{{ level }}</view>
		  </view>
		</view>
	</view>
	
	  <view class="feature-list" style="position: relative;
	  top: 100px;
	  border: 1px solid #dcdcdc;
	  width: 90%;
	  left: 20px;
	  border-radius: 10px;">
	  <text style="position: absolute;
	  left: 22px;">社区服务</text>
	  
	    <!-- 功能列表容器 -->
	    <view class="feature-item" v-for="(feature, index) in features" :key="index">
	      <!-- 功能项 -->
	      <image class="feature-icon" :src="feature.icon" />
	      <!-- 功能图标 -->
	      <text class="feature-text">{{ feature.text }}</text>
	      <!-- 功能文字 -->
	    </view>
	  </view>
	<!-- 通知栏  -->
	  <view class="notification-bar" style="position: relative;
	  top: 100px;">
	    <!-- 通知栏的主要内容 -->
	    <view class="notification-content">
	      <text class="notification-text">这里是通知内容，点击查看详情。</text>
	    </view>
	    <!-- 通知栏右侧的操作按钮，如关闭通知 -->
	    <view class="notification-action">
	      <text class="close-button" @click="closeNotification">✕</text>
	    </view>
	  </view>
	
	
<div class="horizontal-scroll-list" @touchmove="handletouchmovent" 
style="position: relative;
top: 70px;
height: 170px;"
>
    <div class="list-container" ref="listContainer">
      <!-- 使用 v-for 渲染左右滑动列表项 -->
      <div
        class="list-item"
		style=" 
  flex-direction: column; /* 垂直排列图标和文字 */
  align-items: center; /* 水平居中对齐 */
  padding: 50px; /* 间距 */
  position: relative;
 
  "
        v-for="item in itemList"
        :key="item.id"
        :class="{ selected: item.id === selectedItemId }"
        @click="selectItem(item)"
      >
        <image :src="item.text" style="height: 30px;
		width: 30px;
		margin-bottom: 5px; /* 图标和文字的间距 */"></image>
		<text>text</text>
      </div>
    </div>
  </div>
  
  
  <!-- 选项列表 -->
    <view class="options-container" style="position: relative;
	top: 0px;"
	>
      <!-- 选项列表部分 -->
      <view class="option-item" v-for="(option, index) in options" :key="index" @click="onOptionClick(option.action)">
        <view class="option-icon-container">
          <image class="option-icon" :src="option.icon" />
        </view>
        <text class="option-text">{{ option.text }}</text>
        <text class="option-extra">{{ option.extra }}</text>
        <view class="option-forward">
          <text class="iconfont icon-forward">&#xe617;</text> <!-- 示例使用字体图标 -->
        </view>
      </view>
    </view>
	</view>
</template>

<script>
export default {
	
	data() {
		return {
			title: 'Hello',
			      currentExperience: 60, // 当前经验值
			      maxExperience: 60, // 升级所需的最大经验值
				  levels: [0, 1, 2, 3, 4, 5],
				  list:["../../../static/logo1.png",
				  "../../../static/logo1.png",
				  "../../../static/logo1.png"],
				        itemList: [
				          { id: 1, text: '../../../static/logo1.png' },
				          { id: 2, text: '../../../static/logo1.png' },
				          { id: 3, text: '../../../static/logo1.png' },
				          // 添加更多项目
				        ],
				        selectedItemId: null,
				        // 添加其他属性以跟踪滑动和选择
						 imageUrl: '../../../static/logo1.png', // 替换为你的默认头像路径
						       // 统计数据
						       stats: [
						         { value: 0, label: '关注' },
						         { value: 0, label: '粉丝数' },
						         { value: 0, label: '收藏' },
						         { value: 0, label: '我的内容' }
						       ],
						      // 功能列表数据
						      features: [
						        {
						          icon: '../../../static/logo1.png', // 图标路径
						          text: '积分商城' // 文字说明
						        },
								{
								  icon: '../../../static/logo1.png', // 图标路径
								  text: '积分商城' // 文字说明
								},
								{
								  icon: '../../../static/logo1.png', // 图标路径
								  text: '积分商城' // 文字说明
								},
						        // ...其他功能数据
						      ],
							  showNotification: true,
						 // 选项列表数据
						      options: [
						        {
						          icon: '/path/to/setting-icon.png', // 设置图标路径
						          text: '设置',
						          extra: '', // 如果有额外信息显示在这里
						          action: 'setting' // 对应的动作或页面
						        },
						        {
						          icon: '/path/to/favorites-icon.png', // 收藏图标路径
						          text: '收藏',
						          extra: '新', // 额外信息
						          action: 'favorites'
						        },
								{
								  icon: '/path/to/favorites-icon.png', // 收藏图标路径
								  text: '收藏',
								  extra: '新', // 额外信息
								  action: 'favorites'
								},
								{
								  icon: '/path/to/favorites-icon.png', // 收藏图标路径
								  text: '收藏',
								  extra: '新', // 额外信息
								  action: 'favorites'
								},
						        // ...其他选项
						      ]
				  
		};
	},
	onLoad() {},
	methods: {
		calculateNodePosition(level){
			if(level===0){
				return 0;
			};
			if(level ===5){
				return 100;
			}
			if(level!=0&&level!=5){
				return ((level))/((this.levels.length-1))*100;
			}
		},
		    selectItem(item) {
		      this.selectedItemId = item.id;
		      // 处理项目选择逻辑
		    },
			  handleSwipe(event) {
			    const delta = event.deltaX; // 获取水平方向的滑动距离
			    this.$refs.listContainer.scrollLeft += delta; // 更新滚动位置
			  },
			  handletouchmovent(event){
				        const deltaX = event.changedTouches[0].clientX - this.startX;
				        this.$refs.listContainer.scrollLeft += deltaX;
			  },
			  openFilePicker() {
			        this.$refs.fileInput.click(); // 打开文件选择器
			      },
			      handleFileChange(event) {
			        const file = event.target.files[0];
			        if (file) {
			          // 执行上传文件的逻辑
			          // 可以使用uni.uploadFile或其他上传方法将文件上传到服务器
			          // 上传成功后更新this.imageUrl为新头像的URL
			          // 例如：this.imageUrl = '新头像的URL';
			        }
			      },
				    openImagePicker() {
				      uni.chooseImage({
				        count: 1, // 最多选择一张图片
				        success: (res) => {
				          const tempFilePath = res.tempFilePaths[0];
				          // 执行上传文件的逻辑
				          // 可以使用uni.uploadFile或其他上传方法将文件上传到服务器
				          // 上传成功后更新this.imageUrl为新头像的URL
				          // 例如：this.imageUrl = '新头像的URL';
				        },
				      });
				    },
					    onNavItemClick(page) {
					      // 处理导航项点击事件，可以根据page值进行页面跳转或其他逻辑
					      console.log('Navigation item clicked:', page);
					    },
					    closeNotification() {
					      // 处理关闭通知栏的事件
					      this.showNotification = false;
					    },
					 onOptionClick(action) {
					      // 处理选项点击事件
					      console.log('Option clicked:', action);
					      // 根据action进行页面跳转或其他逻辑
					    },
	},
	  computed: {
	    fillWidth() {
			
	      return (this.currentExperience / this.maxExperience) * 100;
	    },

	  },

	  
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
	
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
	display: flex;
	flex-direction: column;
}
.experience-bar-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  width: 90%;
  
}

.experience-bar {
  height: 5px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  top: 60px;
}

.experience-bar-fill {
  background-color: #ffd700;
  height: 100%;
  position: absolute;
  left: 0;
  top: 5;
}

.experience-levels {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  position: relative;
  top: 60px;
}

.experience-level {
  /* 根据您的设计添加样式 */
}
.current-experience-icon {
  position: absolute;
  top: 40px; /* 调整以适应你的设计 */
  /* 根据需要调整图标样式 */
  transform: translateX(-50%);
}
.experience-level-node {
	
  position: absolute;
  bottom: 0px; /* 调整以适应经验条的高度 */
  width: 5px;
  height: 5px;
  background-color: #000000; /* 节点的颜色 */
  border-radius: 50%; /* 圆形节点 */
  transform: translateX(-50%); /* 确保节点中心对准其位置 */
}
.scroll-view {  
  overflow: auto;  
}  
/* .scroll-item {  
  height: 50px;  
  line-height: 50px;  
  text-align: center;  
}  */



/* 添加左右滑动列表的样式 */
.horizontal-scroll-list {
  /* 设置组件的宽度和高度以适应你的需求 */
 width: 100%;


  /* 设置溢出以启用水平滚动 */
  overflow-x: auto;
  white-space: nowrap; /* 防止文本折行 */
}

.list-container {
  display: inline-block; /* 创建一个内联块容器以容纳列表项 */
  /* 添加其他样式以控制列表项的外观和间距 */
}

.list-item {
  display: inline-block; /* 让列表项在水平方向上排列 */
  /* 添加列表项的样式，如背景色、边框等 */
  margin-right: 10px; /* 可以根据需要调整间距 */
}

.selected {
  /* 选中项目的样式 */
}

.avatar {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  
  
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

.camera-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
}

.footer-nav {
  display: flex;
  justify-content: space-around; /* 项目间隔均匀分布 */
  padding: 10px 0;
  background-color: #FFFFFF; /* 背景颜色 */
  border-top: 1px solid #CCCCCC; /* 顶部边框 */
}

.nav-item {
  flex: 1; /* 确保每个导航项都有相同的空间 */
  text-align: center; /* 图标居中 */
}

.iconfont {
  font-family: 'iconfont'; /* 指定字体图标的字体族名 */
  font-size: 20px; /* 图标大小 */
}


/* 信息容器样式 */
.stats-container {
  display: flex;
  justify-content: space-around; /* 项目间隔均匀分布 */
  padding: 10px;
  background-color: #ffffff; /* 背景颜色 */
}

.stat-item {
  display: flex;
  flex-direction: column; /* 使数值和标签垂直排列 */
  align-items: center; /* 水平居中对齐 */
}

.stat-value {
  font-size: 20px; /* 数值的字体大小 */
  font-weight: bold; /* 加粗字体 */
  color: #000; /* 数值的字体颜色 */
}

.stat-label {
  font-size: 14px; /* 标签的字体大小 */
  color: #666; /* 标签的字体颜色 */
}



/* 功能列表容器 */


.feature-list {
  display: flex;
  justify-content: space-around; /* 使功能项均匀分布 */
  background-color: #ffffff; /* 容器背景颜色 */
}

.feature-item {
  display: flex;
  flex-direction: column; /* 垂直排列图标和文字 */
  align-items: center; /* 水平居中对齐 */
  padding: 10px; /* 间距 */
  position: relative;
  top: 10px;
}

.feature-icon {
  width: 30px; /* 图标宽度 */
  height: 30px; /* 图标高度 */
  margin-bottom: 5px; /* 图标和文字的间距 */
}

.feature-text {
  color: #333; /* 文字颜色 */
  font-size: 14px; /* 文字大小 */
}
/* 通知栏样式 */
.notification-bar {
  display: flex;
  justify-content: space-between; /* 内容和操作按钮分开 */
  align-items: center;
  background-color: #FFEB3B; /* 通知栏背景颜色 */
  color: #333; /* 通知文字颜色 */
  padding: 10px; /* 通知栏内边距 */
  border-bottom: 1px solid #CCC; /* 底部边框 */
}

.notification-content {
  flex-grow: 1; /* 让内容占据大部分空间 */
}

.notification-text {
  /* 可以在这里调整通知文本的样式 */
}

.notification-action {
  /* 可以在这里调整操作按钮的样式 */
}

.close-button {
  cursor: pointer; /* 鼠标悬停时的手型图标 */
  padding: 0 10px; /* 操作按钮的内边距 */
  font-size: 16px; /* 操作按钮的字体大小 */
}


/* 选项列表 */
.options-container {
  background-color: #FFFFFF;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #EEE;
}

.option-icon-container {
  margin-right: 10px;
}

.option-icon {
  width: 24px;
  height: 24px;
}

.option-text {
  flex-grow: 1;
  font-size: 16px;
}

.option-extra {
  margin-right: 10px;
  color: #FF0000; /* 额外信息的文本颜色，如红色 */
}

.option-forward {
  /* 向前的箭头或图标 */
}

.iconfont {
  font-family: 'iconfont'; /* 指定字体图标的字体族名 */
  font-size: 16px;
}
/* 组件外层容器样式 */
.status-container {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 子项垂直居中对齐 */
}

/* 圆形标识样式 */
.status-circle {
  width: 40px; /* 圆形直径 */
  height: 40px; /* 圆形直径 */
  border-radius: 50%; /* 设置为50%，使之成为圆形 */
  border: 1px solid #000; /* 边框颜色 */
  display: flex; /* 使用flex布局使内部文本居中 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-right: 10px; /* 与标题的间距 */
}

/* 圆形内的文本样式 */
.status-text {
  font-size: 12px; /* 字体大小 */
  font-weight: bold; /* 加粗 */
}

/* 标题样式 */
.status-title {
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 加粗 */
  margin-bottom: 4px; /* 与副标题的间距 */
}

/* 副标题样式 */
.status-subtitle {
  font-size: 12px; /* 字体大小 */
}

/* 标题和副标题容器样式 */
.status-info {
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 子项竖直排列 */
}
</style>
