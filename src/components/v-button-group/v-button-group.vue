<template>
    <van-config-provider :theme-vars="themeVars">
        <van-row justify="space-between" class="mt-3">
            <van-col span="5">
                <van-button block type="success" size="small">
                    搜一搜
                </van-button>
            </van-col>
            <van-col span="5">
                <van-button block type="success" size="small">
                    查一查
                </van-button>
            </van-col>
            <van-col span="5">
                <van-button block type="success" size="small">
                    扫一扫
                </van-button>
            </van-col>
            <van-col span="5">
                <van-button block type="success" size="small">
                    问一问
                </van-button>
            </van-col>
            <van-col span="4">
                <van-button block type="success" size="small">
                    看一看
                </van-button>
            </van-col>
        </van-row>
    </van-config-provider>
</template>

<script setup>
import { reactive } from 'vue'


const themeVars = reactive({
    buttonSmallFontSize: '15px',
    buttonSuccessBorderColor: 'rgba(0, 0, 0, 0.1)',
})

</script>