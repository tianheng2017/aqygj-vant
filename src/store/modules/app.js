import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

const useAppStore = defineStore('app', () => {
    // 当前tabbar
    const currentTabbar = ref('home')

    // 首页是否显示地图
    const showMap = ref(true)

    // 当前九宫格数据
    const currentGrid = reactive({
        title: '',
        children: [],
    })
	
	return {
        showMap,
        currentGrid,
        currentTabbar,
	}
}, {
	persist: true
})

export default useAppStore