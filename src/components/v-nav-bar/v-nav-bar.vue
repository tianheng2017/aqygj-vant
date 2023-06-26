<template>
    <van-config-provider :theme-vars="themeVars">
        <van-nav-bar 
            :title="title" 
            :left-text="leftText" 
            :left-arrow="leftArrow" 
            :right-text="rightText"
            @click-left="onClickLeft" 
            @click-right="onClickRight" 
        />
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'

const themeVars = reactive({
    navBarBackground: '#1c7243',
    navBarTitleTextColor: '#fff',
    navBarTextColor: '#fff',
    navBarIconColor: '#fff',
})

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
    },
    rightText: {
        type: String,
        default: ''
    }
})

const emits = defineEmits(['right-func'])

const onClickLeft = () => {
    uni.navigateBack()
}

const onClickRight = () => {
    emits('right-func')
}
</script>