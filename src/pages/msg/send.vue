<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar title="发送消息" left-text="返回" />
        </van-config-provider>
    </view>
    <v-tabbar />
</template>

<script setup>
import { reactive } from 'vue'

const themeVars = reactive({

})
</script>