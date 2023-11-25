<template>
	<view class="uni-page-body">

		
		
		<view class="calendar-box"
		style="width: 60%;
		height: 50px;
		position: absolute;
		top: 250px;">
		<tn-calendar  v-model="selectDate" mode="date"></tn-calendar>	
		</view>
		<!-- <TnCalendar v-model="selectDate" mode="date" /> -->


		
		
		<scroll-view class="scroll-page" scroll-y="true" style="position: absolute; width: 40%; top: 250px;left: 60%;">
			<view class="page">
			<view class="head">
			  <!-- 头部标题和未完成任务数量 -->
			  <text class="title">今天你有{{ uncompletedTasks.length }}个待办</text>
			  <!-- 更多操作图标，使用字体图标或图片 -->
			  <text class="icon">···</text>
			</view>
<view class="list-container">
      <view v-for="(item, index) in uncompletedTasks" :key="`uncompleted-${index}`" class="list-item">
        <!-- 当点击复选框时，触发toggleTaskCompletion方法 -->
        <!-- <checkbox class="checkbox" :value="item.completed" @change="toggleTaskCompletion(item)"></checkbox> -->
        <text class="item-title">{{ item.title }}</text>
        <text class="item-subtitle">{{ item.subtitle }}</text>
		<!-- 显示任务创建的时间 -->
		<!-- <text class="item-time">创建时间: {{ new Date(item.createdTime).toLocaleString() }}</text>
		 -->
		 <text class="item-time">创建时间: {{ formatTime(item.createdTime) }}</text>
      </view>
    </view>

    <!-- 已完成任务列表 -->
    <!-- 使用v-if来动态显示已完成任务列表 -->
    <view v-if="completedTasks.length > 0" class="completed-tasks-container">
	<text class="title">今天的任务（完成 {{ completedTasks.length }}）</text>
      <view v-for="(item, index) in completedTasks" :key="`completed-${index}`" class="completed-task">
        <text class="completed-item-title">{{ item.title }}</text>
		<text class="item-time">创建时间: {{ formatTime(item.createdTime) }}</text>
      </view>
    </view>
	   <!-- 提交按钮 -->
<!-- 	    <view class="submit-button-container">
	      <button @click="submitTasks">提交</button>
	    </view> -->
			

				</view>
		</scroll-view>
	</view>
</template>




<script>
export default {
	data() {
		return {
			type:2,
			result: '',
			lunarResult:'',
			 list1: [{
			            title: '关雎',
			            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
			            disabled: false
			          },
			          {
			            title: '长歌行',
			            content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！',
			            disabled: false
			          },
			          {
			            title: '秋风辞',
			            content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！',
			            disabled: false
			          }
			        ],
      tasks: [
        { title: '今天能量早餐', subtitle: '今天加油', completed: false ,createdTime: Date.now()},
        { title: '今天深呼吸', subtitle: '今天放松', completed: false ,createdTime: Date.now()},
        { title: '今天要记得微笑', subtitle: '保持微笑', completed: true,createdTime: Date.now() },
      ],

		};
	},
	onLoad() {},
	methods: {
		    // 切换任务的完成状态
		    toggleTaskCompletion(task) {
				this.tasks.completed = !this.tasks.completed
				
		      // task.completed = !task.completed;
		      // 由于我们修改了任务的属性，Vue将自动重新计算uncompletedTasks和completedTasks
		    },
			submit(){
				this.$forceUpdate();
			},
			formatTime(time) {
			    const date = new Date(time);
			    let hours = date.getHours();
			    let minutes = date.getMinutes();
			
			    // 将小时和分钟转换为两位数形式，例如：'07:05'
			    hours = hours < 10 ? '0' + hours : hours;
			    minutes = minutes < 10 ? '0' + minutes : minutes;
			
			    return `${hours}:${minutes}`;
			  }
	},
	computed:{
		    // 计算未完成的任务列表
		    uncompletedTasks() {
		      return this.tasks.filter(task => !task.completed);
		    },
		    // 计算已完成的任务列表
		    completedTasks() {
		      return this.tasks.filter(task => task.completed);
		    }
	},
	filters: {
	    // 添加一个过滤器来格式化时间
	    // formatDate(value) {
	    //   const date = new Date(value);
	    //   return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	    // }
	  }

};
</script>

<style>

  .collapse-item-content {
    word-wrap: break-word;
  }
  .page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .scroll-page{
	  height: 200px;
  }
  
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .icon {
    font-size: 24px;
  }
  
  .list-container {
    flex: 1;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
  .list-item {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  
  .item-title {
    font-size: 16px;
    color: #333;
  }
  
  .item-subtitle {
    font-size: 14px;
    color: #666;
  }
  
  .footer {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #fff;
  }
  
  .footer-item {
    display: flex;
    align-items: center;
  }
  .emoji {
  font-size: 24px;
  margin-right: 5px;
}

.footer-text {
  font-size: 14px;
  color: #333;
}

.completed-tasks-container {
  padding: 10px;
}

.completed-task {
  background-color: #e0e0e0; /* 已完成任务的背景色 */
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.completed-item-title {
  text-decoration: line-through; /* 完成任务的删除线 */
  color: #999; /* 已完成任务的文本颜色 */
}

.checkbox {
  margin-right: 10px;
}
.item-time {
  color: #888;
  font-size: 12px;
  margin-top: 5px;
}
</style>
