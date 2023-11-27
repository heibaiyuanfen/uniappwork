import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
import piui from "sadais-piui";

// 全局属性配置
const piuiConfig = {}

Vue.use(piui, piuiConfig);
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
