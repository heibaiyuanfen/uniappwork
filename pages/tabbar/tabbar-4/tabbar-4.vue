<template>
	<view class="uni-page-body">
		<view class="calendar-box"
		style="width: 60%;
		height: 40px;">
		<tn-calendar  v-model="selectDate" mode="date"></tn-calendar>	
		</view>
		<!-- <TnCalendar v-model="selectDate" mode="date" /> -->
		
	</view>
</template>




<script>
import TnCalendar from '@/uni_modules/tuniaoui-vue3/components/calendar/src/calendar.vue'
import { ref } from 'vue'

const selectDate = ref('')



export default {
	data() {
		return {
			type:2,
			result: '',
			lunarResult:''
		};
	},
	onLoad() {},
	methods: {
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
