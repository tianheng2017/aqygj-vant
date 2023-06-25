<template>
    <van-config-provider :theme-vars="themeVars">
        <van-nav-bar title="重庆纳斯天燃气有限公司" :border="false">
            <template #left>
                <view class="text-white f-15">九龙坡区</view>
            </template>
            <template #right>
                <view class="text-white f-15">设置</view>
            </template>
        </van-nav-bar>
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'


const themeVars = reactive({
    navBarBackground: '#13B55B',
    navBarTitleTextColor: '#fff',
})

</script>

<style scoped>
    .f-15 {
        font-size: 15px;
    }
</style>