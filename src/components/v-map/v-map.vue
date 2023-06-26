<template>
    <van-config-provider :theme-vars="themeVars">
        <van-row class="mt-3" v-if="appStore.showMap">
            <map 
                style="width: 100%;height: 300px;"
                :latitude="29.501814"
                :longitude="106.476767"
            ></map>
        </van-row>
        <!-- 九宫格子菜单 -->
        <template v-else>
            <van-row class="mt-3">
                <van-col span="24">
                    <view class="text-white text-xl font-bold text-center">
                        {{ appStore.currentGrid.title }}
                    </view>
                </van-col>
            </van-row>
            <van-row justify="start">
                <van-col 
                    v-for="currentGridItem in appStore.currentGrid.children"
                    :key="currentGridItem.id"
                    span="8" 
                    :gutter="15"
                    class="mt-3"
                >
                    <van-button block type="success" size="normal">{{ currentGridItem.title }}</van-button>
                </van-col>
            </van-row>
        </template>
    </van-config-provider>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import { reactive } from 'vue'

const appStore = useAppStore()

const themeVars = reactive({
    buttonNormalFontSize: '15px',
    buttonSuccessBorderColor: 'rgba(0, 0, 0, 0.1)',
})

</script>