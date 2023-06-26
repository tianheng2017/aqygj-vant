<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar title="消息" left-text="" :left-arrow="false" />
            <van-cell 
                v-for="v in list" 
                :value="v.value"
                :index="v.id" 
                title-class="text-sm ml-2" 
                is-link 
            >
                <template #title>
                    <span class="custom-title">{{ v.title }}</span>
                    <van-tag 
                        v-if="!v.is_read" 
                        type="danger" 
                        class="ml-1" 
                        round
                    >未读</van-tag>
                </template>
            </van-cell>
        </van-config-provider>
    </view>
    <v-tabbar />
</template>

<script setup>
import { ref, reactive } from 'vue'

const themeVars = reactive({

})

const list = ref([
    { id: 1, title: '证书过期', is_read: 0, value: '2023-06-22 11:38:10' },
    { id: 2, title: '设备检维修', is_read: 0, value: '2023-05-15 15:26:10' },
    { id: 3, title: '证书过期', is_read: 1, value: '2023-04-08 08:33:10' },
])

</script>