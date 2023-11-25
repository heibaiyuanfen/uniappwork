
<template>
	<view class="uni-page-body">
		<!-- 头像 -->
	<view class="headicon"
	style="border-radius: 50%;
	border: 1px solid black;
	height: 50px;
	width: 50px;
	position: absolute;">
	<image></image>
	</view>
		
		
		
  <view class="experience-bar-container">
	<view class="mybox" 
	style="border-radius: 5px; 
	border: 1px solid black;
	background-color: beige; 
	position: absolute;
	height: 100px;
	width: 100%;
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
	
<div class="horizontal-scroll-list" @touchmove="handletouchmovent" 
style="position: absolute;
top: 400px;"
>
    <div class="list-container" ref="listContainer">
      <!-- 使用 v-for 渲染左右滑动列表项 -->
      <div
        class="list-item"
        v-for="item in itemList"
        :key="item.id"
        :class="{ selected: item.id === selectedItemId }"
        @click="selectItem(item)"
      >
        <image :src="item.text" ></image>
      </div>
    </div>
  </div>
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
			  }
	},
	  computed: {
	    fillWidth() {
			
	      return (this.currentExperience / this.maxExperience) * 100;
	    },

	  },

	  
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
  height: 200px; /* 例如，设置高度为200px */

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
</style>
