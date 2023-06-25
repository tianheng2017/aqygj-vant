<template>
    <van-config-provider :theme-vars="themeVars">
        <van-tabbar 
            route
            v-model="appStore.currentTabbar" 
            active-color="#07C160"
            class="max-w-xl tabbar-center"
        >
            <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item name="search" icon="phone-o" to="/pages/address-book/index">通讯录</van-tabbar-item>
            <van-tabbar-item name="msg" icon="envelop-o" badge="20" to="/pages/msg/index">消息</van-tabbar-item>
            <van-tabbar-item name="work" icon="qr" to="/pages/work/index">工作台</van-tabbar-item>
            <van-tabbar-item name="user" icon="user-o" to="/pages/user/index">我的</van-tabbar-item>
        </van-tabbar>
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const themeVars = reactive({
    tabbarBackground: '#F7F7FA',
    tabbarItemActiveBackground: '#F7F7FA',
    tabbarHeight: '60px',
    tabbarItemIconSize: '28px',
    tabbarItemTextColor: '#999999',
    tabbarItemFontSize: '13px',
})
</script>

<style scoped>
    .tabbar-center {
        right: 0;
        margin: 0 auto;
    }
</style>