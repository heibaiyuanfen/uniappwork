<template>
	<view class="uni-page-body">
		<tui-calendar lunar></tui-calendar>
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
