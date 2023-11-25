<template>
	<view class="uni-page-body">
		<!-- 搜索框 -->
		<view class="uni-input-wrapper">
			<image class="search-icon" src="../../../static/components/searchicon.jpg"></image>
		    <input class="uni-input" confirm-type="search" placeholder="请输入搜索内容:" />
			<view> <button class="mini-btn" type="default" size="mini">搜索</button></view>
			<image class="search-icon" src="../../../static/after.jpg"></image>
		</view>
		
		
		<!-- 导航栏 -->
		  <view class="navbar">
		    <!-- 导航栏容器 -->
		    <view class="navbar-indicator"></view> <!-- 指示器 -->
		    <view class="navbar-item" v-for="(item, index) in navbarItems" :key="index" @click="selectItem(index)">
		      <!-- 循环导航项并设置点击事件 -->
		      <text :class="{'navbar-text': true, 'active': currentIndex === index}">{{ item }}</text>
		    </view>
		  </view>
		
		
		
		
		
		  <view class="container">
		    <!-- 功能列表项 -->
		    <view class="list2-item" v-for="item2 in list" :key="item2.title" style="background-color: white;
			height: 40px;
			" >
		      <!-- 图标 -->
		      <image class="icon2" :src="item2.icon"></image>
		      <!-- 标题和描述 -->
		      <view class="content2">
		        <text class="title">{{ item2.title }}</text>
		        <text class="description">{{ item2.description }}</text>
		      </view>

		      <!-- 这里的图标可以根据您的资源替换 -->
		      <image class="action-icon" src="../../../static/logo1.png"></image>
		    </view>
		  </view>
		
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
			navbarItems: ['推荐', '好友圈', '企业圈', '群聊'], // 导航项数据
			currentIndex: 0, // 当前选中的导航项索引
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
		      list: [
		        {
		          icon: '../../../static/logo1.png',
		          title: '电话',
		          description: '这个问题没什么大不了的，我再讲一遍～'
		        },
				{
				  icon: '../../../static/logo1.png',
				  title: '电话',
				  description: '这个问题没什么大不了的，我再讲一遍～'
				},
				{
				  icon: '../../../static/logo1.png',
				  title: '电话',
				  description: '这个问题没什么大不了的，我再讲一遍～'
				},]
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
			  },
			      selectItem(index) {
			        // 更新当前选中的导航项
			        this.currentIndex = index;
			      },
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
		width: 325px;
		border-radius: 50px;
		border:1px solid blue;
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
	    padding: 8px 13px;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    background-color: #FFFFFF;
	}
	
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
		display: flex;
		flex-direction: column;
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



.container {
  
  position: absolute;
  top: 90px;
  height: 40px;
  width: 90%;
  left: 10px;
  ;
}

.list2-item {
  display: flex;
  align-items: center;
  border: 2px solid #FFD700; /* 边框颜色 */
  margin-bottom: 10px; /* 间隔 */
  padding: 10px;
  border-radius: 10px; /* 边框圆角 */
}

.icon2 {
  width: 20px; /* 图标大小 */
  height: 20px;
  margin-right: 10px;
}
.content2 {
  flex-grow: 1;
}

.title {
  font-size: 18px; /* 标题大小 */
  color: #000; /* 标题颜色 */
  font-weight: bold; /* 字体加粗 */
}

.description {
  font-size: 14px; /* 描述大小 */
  color: #555; /* 描述颜色 */
}

.action-button {
  background-color: #FF4500; /* 按钮背景颜色 */
  color: #FFFFFF; /* 按钮文字颜色 */
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
}

.action-icon {
  width: 20px; /* 操作图标大小 */
  height: 20px;
  margin-left: 10px;
}





.navbar {
  display: flex;
  position: relative;
  padding: 10px 0;
}

.navbar-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 25%; /* 由于有四个元素，指示器宽度设置为25% */
  background-color: #FFD700; /* 指示条颜色 */
  transition: transform 0.3s ease; /* 平滑过渡动画 */
  transform: translateX(0); /* 初始位置 */
}

.navbar-item {
  flex: 1;
  text-align: center;
}

.navbar-text {
  font-size: 16px;
  color: #000;
  padding: 10px 0;
}

.navbar-text.active {
  font-weight: bold;
  color: #FFD700; /* 当前选中项的颜色 */
}

/* 根据currentIndex动态更新指示器位置 */
.navbar-indicator {
  transform: translateX(calc(100% * var(--current-index)));
}

</style>
