<template>
    <van-config-provider :theme-vars="themeVars">
        <van-grid :column-num="3" class="mt-3">
            <van-grid-item 
                v-for="gridsItem in grids.enterprise"
                :key="gridsItem.id"
                icon-color="#fff" 
                :icon="gridsItem.icon" 
                :text="gridsItem.title" 
                @click="gridEvent(gridsItem)"
            />
        </van-grid>
    </van-config-provider>
</template>

<script setup>
import { grids } from '@/config/grids'
import useAppStore from '@/store/modules/app'
import { showToast } from 'vant'
import { reactive } from 'vue'

const appStore = useAppStore()

const themeVars = reactive({
    gridItemContentBackground: '#13B55B',
    gridItemTextColor: '#fff',
    gridItemIconSize: '32px',
    gridItemTextFontSize: '15px',
})

// 九宫格点击事件
const gridEvent = (gridsItem) => {
    // 如果存在子菜单，则隐藏地图显示子菜单，否则显示地图
    if (gridsItem.children.length) {
        appStore.showMap = false
        appStore.currentGrid.title = gridsItem.title
        appStore.currentGrid.children = gridsItem.children
    } else {
        appStore.showMap = true
        showToast('该功能需要定制，请联系软件提供商')
    }
}
</script>