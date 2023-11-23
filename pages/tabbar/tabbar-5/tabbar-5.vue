
<template>
	<view class="uni-page-body">
		<!-- 头像 -->
	<view class="headicon">
		
	</view>
		
		
		
  <view class="experience-bar-container">
	<view class="myvip" 
	style="border-radius: 5px; 
	border: 1px solid black;
	background-color: beige; 
	position: absolute;
	height: 80px;
	width: 100%;
	">
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
  top: 50px;
  width: 90%;
  
}

.experience-bar {
  height: 5px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  top: 40px;
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
  top: 40px;
}

.experience-level {
  /* 根据您的设计添加样式 */
}
.current-experience-icon {
  position: absolute;
  top: 20px; /* 调整以适应你的设计 */
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
</style>
