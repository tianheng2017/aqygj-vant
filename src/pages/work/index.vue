<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar title="工作台" left-text="" :left-arrow="false" />
            <van-cell 
                v-for="v in list" 
                :title="v.title" 
                :icon="v.icon" 
                :index="v.id"
                title-class="text-sm ml-2"
                is-link
            >
                <template #right-icon>
                    <van-icon name="arrow" color="#999999" class="right-icon"/>
                </template>
            </van-cell>
        </van-config-provider>
    </view>
    <v-tabbar />
</template>

<script setup>
import { ref, reactive } from 'vue'

const themeVars = reactive({
    cellIconSize: '30px',
    cellLineHeight: '30px',
})

const list = ref([
    { id: 1, icon: 'https://h5.aqygj.com/h5/icon/42.png', title: '风险辨识'},
    { id: 2, icon: 'https://h5.aqygj.com/h5/icon/41.png', title: '隐患排查'},
    { id: 3, icon: 'https://h5.aqygj.com/h5/icon/77.png', title: '待办事项'},
    { id: 4, icon: 'https://h5.aqygj.com/h5/icon/71.png', title: '通知公告'},
    { id: 5, icon: 'https://h5.aqygj.com/h5/icon/51.png', title: '流程管理'},
    { id: 6, icon: 'https://h5.aqygj.com/h5/icon/46.png', title: '作业安全'},
    { id: 7, icon: 'https://h5.aqygj.com/h5/icon/70.png', title: '培训教育'},
    { id: 8, icon: 'https://h5.aqygj.com/h5/icon/98.png', title: '两单两卡'},
])

</script>

<style>
.right-icon {
    line-height: 30px !important;
}
</style>