<template>
    <view class="max-w-xl m-auto">
        <van-config-provider :theme-vars="themeVars">
            <v-nav-bar title="发送消息" left-text="返回" />
            <van-form @submit="onSubmit" class="mt-2">
                <van-cell-group>
                    <van-field
                        v-model="formData.title"
                        name="标题"
                        label="标题"
                        placeholder="请输入标题"
                        clearable
                        label-class="font-bold"
                        :rules="[{ required: true, message: '请输入标题' }]"
                    />
                    <van-field
                        v-model="formData.content"
                        type="textarea"
                        name="内容"
                        label="内容"
                        placeholder="请输入内容"
                        clearable
                        maxlength="1000"
                        show-word-limit
                        label-class="font-bold"
                        :autosize="{minHeight: 200}"
                        :rules="[{ required: true, message: '请输入内容' }]"
                    />
                    <van-field
                        v-model="formData.attachment"
                        name="附件"
                        label="附件"
                        label-class="font-bold"
                    >
                        <template #input>
                            <van-uploader 
                                v-model="fileList" 
                                :after-read="afterRead" 
                                accept="file"
                                multiple
                            />
                        </template>
                    </van-field>
                    <van-field
                        v-model="formData.to_ids"
                        name="接收人"
                        label="接收人"
                        label-class="font-bold"
                    >
                        <template #input>
                            <van-collapse v-model="activeNames" :border="false">
                                <van-collapse-item title="点击选择接收人" name="to_ids">
                                    代码是写出来给人看的，附带能在机器上运行。
                                </van-collapse-item>
                            </van-collapse>
                        </template>
                    </van-field>
                    <van-field
                        v-model="formData.types"
                        is-link
                        readonly
                        name="picker"
                        label="消息类型"
                        placeholder="点击选择消息类型"
                        @click="showPicker = true"
                    />
                    <van-popup v-model:show="showPicker" position="bottom">
                        <van-picker
                            :columns="columns"
                            @confirm="onConfirm"
                            @cancel="showPicker = false"
                        />
                    </van-popup>
                </van-cell-group>
                <view class="mt-10 px-12">
                    <van-button round block type="primary" native-type="submit">提交</van-button>
                </view>
                </van-form>
        </van-config-provider>
    </view>
    <v-tabbar />
</template>

<script setup>
import { ref, reactive } from 'vue'

const themeVars = reactive({

})

const formData = reactive({
    username: '',
    content: '',
    attachment: '',
    to_ids: '',
    types: '通知消息',
})

const fileList = ref([
    // {
    //     url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
    //     status: 'uploading',
    //     message: '上传中...',
    // },
    // {
    //     url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
    //     status: 'failed',
    //     message: '上传失败',
    // },
])

const afterRead = (file) => {
    file.status = 'uploading';
    file.message = '上传中...';

    setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
    }, 1000);
}

const activeNames = ref([])

const result = ref('');
const showPicker = ref(false);
const columns = [
    { text: '通知消息', value: 1 },
    { text: '临时任务', value: 2 },
    { text: '工作任务', value: 3 },
    { text: '信息报告', value: 4 },
];

const onConfirm = ({ selectedOptions }) => {
    result.value = selectedOptions[0]?.text;
    showPicker.value = false;
};
</script>