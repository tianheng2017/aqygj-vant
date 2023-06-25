<template>
    <view class="max-w-xl m-auto bg-green">
        <!-- 顶栏 -->
        <v-nav-bar-index />
        <!-- 内容区 -->
        <view class="px-3">
            <!-- 个人信息 -->
            <v-user-info />
            <!-- 通知栏 -->
            <v-notice />
            <!-- 九宫格 -->
            <v-grids />
            <!-- 搜查扫问看按钮 -->
            <v-button-group />
            <!-- 地图 -->
            <v-map />
        </view>
        <!-- 底栏 -->
        <v-tabbar />
    </view>
</template>