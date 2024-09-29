<script lang="ts" setup>
import {ref} from 'vue'
import { navigateTo} from '@tarojs/taro'
const version = ref("Loading ....")

const JumpPage = (url:string) => {
  navigateTo({
    url : url
  })
}
</script>

<template>
  <Button>Jump Debug Page</Button>
  <text>{{ version }}</text>
</template>

<style scoped>

</style>
