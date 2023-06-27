<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar 
                :title="appStore.currentGrid.title" 
                left-text="返回" 
                back-url="/pages/index/index"
            />
            <van-row>
                <van-col>
                    <v-sidebar/>
                </van-col>
                <van-col span="20">
                    <van-grid direction="horizontal" :column-num="3" class="font-bold">
                        <van-grid-item text="类型" />
                        <van-grid-item text="主题" />
                        <van-grid-item text="培训时间" />
                    </van-grid>
                    <van-grid direction="horizontal" :column-num="3">
                        <van-grid-item text="月度培训计划" />
                        <van-grid-item text="锅炉培训" />
                        <van-grid-item text="03-29 21:00" />
                        <van-grid-item text="其他" />
                        <van-grid-item text="新员工培训" />
                        <van-grid-item text="04-29 21:00" />
                    </van-grid>
                </van-col>
            </van-row>
            
            
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