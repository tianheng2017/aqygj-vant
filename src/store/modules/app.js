import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

const useAppStore = defineStore('app', () => {
    // 当前tabbar
    const currentTabbar = ref('home')

    // 首页是否显示地图
    const showMap = ref(true)

    // 当前九宫格数据
    const currentGrid = reactive({
        // 九宫格ID
        id: 0,
        // 九宫格标题
        title: '',
        // 九宫格子菜单
        children: [],
    })

    // 当前子菜单数据
    const currentSubMenu = reactive({
        // 子菜单ID
        id: 0,
        // 子菜单索引
        index: 0,
    })
    
    // 子菜单点击事件
    const subMenuClick = (currentGridItem, index) => {
        // 设置当前子菜单数据
        currentSubMenu.id = currentGridItem.id
        currentSubMenu.index = index
        // 跳转到子菜单页面
        uni.navigateTo({
            url: currentGridItem.url
        })
    }
	
	return {
        showMap,
        currentGrid,
        currentTabbar,
        currentSubMenu,
        subMenuClick,
	}
}, {
	persist: true
})

export default useAppStore