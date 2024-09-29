<script lang="ts" setup>
import {useReady} from "@tarojs/taro";
import {useMetaDataStore} from "@/store";
import {ArrowDown, ArrowUp} from '@nutui/icons-vue-taro'
import {netSpeedShow} from "../../utils/netSpeed";

const metadata = useMetaDataStore();

useReady(() => {
  metadata.getData()
})
</script>

<template>
  <view>

    <nut-cell v-for="torrent in metadata.metadata?.torrents"
              :key="torrent.infohash_v1"
              :sub-title="(torrent.progress * 100).toFixed(2) + '%'"
              :title="torrent.name"
              center round-radius="8">
      <template #desc>
        <text class="UploadSpeed">
          <ArrowUp />
          {{ netSpeedShow(torrent.upspeed) }}
        </text>
        <text class="DownLoadSpeed">
          <ArrowDown/>
          {{ netSpeedShow(torrent.dlspeed) }}
        </text>

      </template>
    </nut-cell>
  </view>
</template>

<style scoped>
.DownLoadSpeed{
  color: greenyellow;
}
.UploadSpeed{
  color: skyblue;
}
</style>
