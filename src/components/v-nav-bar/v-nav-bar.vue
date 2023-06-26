<template>
    <van-config-provider :theme-vars="themeVars">
        <van-nav-bar
            :title="title"
            :left-text="leftText"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
        />
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
    title: {
        type: String,
        default: '标题'
    },
    leftText: {
        type: String,
        default: '返回'
    },
    leftArrow: {
        type: Boolean,
        default: true
    }
})

const themeVars = reactive({
    navBarBackground: '#1c7243',
    navBarTitleTextColor: '#fff',
    navBarTextColor: '#fff',
    navBarIconColor: '#fff',
})

const onClickLeft = () => {
    uni.navigateBack()
}
</script>