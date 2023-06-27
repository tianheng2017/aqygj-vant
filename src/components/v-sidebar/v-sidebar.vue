<template>
    <van-config-provider :theme-vars="themeVars">
        <van-sidebar v-model="appStore.currentSubMenu.index">
            <van-sidebar-item 
                v-for="(currentGridItem, index) in appStore.currentGrid.children" 
                :title="currentGridItem.title"
                :key="currentGridItem.id"
                @click="appStore.subMenuClick(currentGridItem, index)"
                replace
            />
        </van-sidebar>
    </van-config-provider>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import { reactive } from 'vue'

const appStore = useAppStore()

const themeVars = reactive({

})

</script>