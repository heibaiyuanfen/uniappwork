<template>
	<view class="uni-page-body">
		<view class="calendar-box"
		style="width: 70%;
		height: 50px;">
			<tui-calendar ref="calendar" lunar  :type="type" @change="change"></tui-calendar>
		</view>
	</view>
</template>

<script>
import tuiDatetime from "../../../components/tui-datetime/tui-datetime.vue"
import tuiCalendar from "../../../components/tui-calendar/tui-calendar.js"
export default {
	comments:{
		tuiDatetime,
		tuiCalendar,
	},
	data() {
		return {
			type:2,
			result: '',
			lunarResult:''
		};
	},
	onLoad() {},
	methods: {
  	selectDate() {
		
  		this.$refs.calendar && this.$refs.calendar.show();
  	},
change(e) {
  		console.log(e);
  		if (this.type == 1) {
  			this.result = e.result + ' ' + e.week;
  			let date = `${e.lunar.lYear}-${e.lunar.lMonth}-${e.lunar.lDay}`;
  			this.lunarResult = `${e.lunar.gzYear}年，${e.lunar.gzMonth}月，${e.lunar.gzDay}日 。生肖：${e.lunar.Animal}。日期：${e.lunar.IMonthCn + e.lunar.IDayCn}(${date})`;
  		} else {
  			this.result = `${e.startDate} 至 ${e.endDate}`;
  			let sDate = `${e.startLunar.IMonthCn + e.startLunar.IDayCn}(${e.startLunar.lYear}-${e.startLunar.lMonth}-${e.startLunar.lDay})`;
  			let eDate = `${e.endLunar.IMonthCn + e.endLunar.IDayCn}(${e.endLunar.lYear}-${e.endLunar.lMonth}-${e.endLunar.lDay})`;
  			this.lunarResult = `${sDate} 至 ${eDate}`;
  		}
  	}			

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

</style>
