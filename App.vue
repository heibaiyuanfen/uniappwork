<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		/* setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000); */
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>



<style lang="scss">

@import '@/uni_modules/tuniaoui-vue3/index.css';
	
uni-page-body {
		background-color: #F5F5F5 !important;
		min-height: 100% !important;
		height: auto !important;
	}

</style>


