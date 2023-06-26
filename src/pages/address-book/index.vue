<template>
    <view class="max-w-xl m-auto">
        <v-nav-bar title="通讯录" left-text="" :left-arrow="false" />
        <van-tabs 
            v-model:active="active" 
            type="card" 
            color="#07c160"
            background="#fff"
            class="my-3" 
        >
            <van-tab title="内部通讯录" name="a" type="card">
                <van-search v-model="value" placeholder="请在16位联系人中搜索" />
                <van-index-bar>
                    <van-index-anchor index="A" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
            </van-tab>
            <van-tab title="应急救援通讯录" name="b">
                <view class="font-bold text-center my-2">通用救援电话</view>
                <van-grid :column-num="4">
                    <van-grid-item icon="photo-o" text="火警119" />
                    <van-grid-item icon="photo-o" text="公安110" />
                    <van-grid-item icon="photo-o" text="急救中心120" />
                    <van-grid-item icon="photo-o" text="交通事故122" />

                    <van-grid-item icon="photo-o" text="水上求救12395" />
                    <van-grid-item icon="photo-o" text="森林火警95119" />
                    <van-grid-item icon="photo-o" text="红十字会999" />
                    <van-grid-item icon="photo-o" text="供电局9598" />
                </van-grid>

                <view class="font-bold text-center my-2">公司内部应急救援通讯录</view>
                <van-grid :column-num="4" class="font-bold">
                    <van-grid-item text="名称" />
                    <van-grid-item text="职务" />
                    <van-grid-item text="姓名" />
                    <van-grid-item text="电话" />
                </van-grid>
                <van-grid :column-num="4">
                    <van-grid-item text="应急救援小组" />
                    <van-grid-item text="组长" />
                    <van-grid-item text="系统管理员" />
                    <van-grid-item text="13888888888" />
                </van-grid>

                <view class="font-bold text-center my-2">外部应急救援通讯录</view>
                <van-grid :column-num="2" class="font-bold">
                    <van-grid-item text="部门" />
                    <van-grid-item text="电话" />
                </van-grid>
                <van-grid :column-num="2">
                    <van-grid-item text="园区安监办" />
                    <van-grid-item text="13888888888" />
                </van-grid>
            </van-tab>
        </van-tabs>
    </view>
    <v-tabbar />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const active = ref('a')

</script>