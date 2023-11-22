
<template>
	<view class="uni-page-body">
  <view class="experience-bar-container">
    <view class="experience-bar">
      <view class="experience-bar-fill" 
		:style="{ width: fillWidth + '%' }"></view>
    </view>
    <view class="experience-levels">
      <!-- 循环生成经验级别 -->
      <view v-for="level in 6" 
	  key="level" 
	  :class="experience-level">LV{{ level }}</view>
    </view>
  </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			      currentExperience: 20, // 当前经验值
			      maxExperience: 100, // 升级所需的最大经验值
		};
	},
	onLoad() {},
	methods: {
		setRating(index) {
		      this.currentRating = index;
		    }
	},
	  computed: {
	    fillWidth() {
	      return (this.currentExperience / this.maxExperience) * 100;
	    }
	  }
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
}

.experience-bar {
  height: 20px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.experience-bar-fill {
  background-color: #ffd700;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.experience-levels {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.experience-level {
  /* 根据您的设计添加样式 */
}

</style>
