<template>
    <van-config-provider :theme-vars="themeVars">
        <van-notice-bar 
            scrollable 
            background="#13B55B"
            color="#fff"
            speed="60"
            left-icon="volume-o" 
            text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" 
        />
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'


const themeVars = reactive({
    noticeBarFontSize: '15px',
})
</script>