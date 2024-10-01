<template>
  <view class="index">
    <nut-navbar title="首页"></nut-navbar>

    <DownLoadInfo class="downloadList"></DownLoadInfo>


  </view>
</template>

<script setup>
import {ref} from 'vue'
import './index.less'
import DownLoadInfo from '../../components/DownLoadInfo/index.vue'

const tabSwitch = () => {

}

const active = ref(0)

</script>
