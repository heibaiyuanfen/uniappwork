<template>
	<view class="uni-page-body">

		
		
		<view class="calendar-box"
		style="width: 60%;
		height: 40px;
		position: absolute;
		top: 250px;">
		<tn-calendar  v-model="selectDate" mode="date"></tn-calendar>	
		</view>
		<!-- <TnCalendar v-model="selectDate" mode="date" /> -->

		<view style="position: absolute;
		top: 250px;
		background-color: white;
		width: 40%;
		left: 60%;
		">
			<tn-collapse>
			  <tn-collapse-item v-for="(item, index) in list1" :key="index" :title="item.title" :disabled="item.disabled">
			    <view class="collapse-item-content">
			      {{ item.content }}
			    </view>
			  </tn-collapse-item>
			</tn-collapse>
			
		</view>
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

		};
	},
	onLoad() {},
	methods: {
	},

};
</script>

<style>

  .collapse-item-content {
    word-wrap: break-word;
  }
</style>
