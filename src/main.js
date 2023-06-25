import {
	createSSRApp
} from "vue"
import App from "./App.vue"
import store from '@/store'
import { ConfigProvider } from 'vant'
import '@/style/index.css'
import 'vant/lib/index.css'

export function createApp() {
	const app = createSSRApp(App)
		.use(store)
		.use(ConfigProvider)
	return {
		app,
	}
}