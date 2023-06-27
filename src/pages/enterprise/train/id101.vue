<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar 
                :title="appStore.currentGrid.title" 
                left-text="返回" 
                back-url="/pages/index/index"
            />
            <v-sidebar />
        </van-config-provider>
    </view>
    <v-tabbar />
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import { reactive } from 'vue'

const appStore = useAppStore()

const themeVars = reactive({

})

</script>