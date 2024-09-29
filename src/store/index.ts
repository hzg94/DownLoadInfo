import {defineStore} from 'pinia'
import {MetaDataApi} from "@/api";
import {AxiosResponse} from "axios";

type MetaDataStoreType = {
  rid: number,
  refresh_interval: number
  metadata: MetadataType | null
}

export const useMetaDataStore = defineStore('metaData', {
  state: (): MetaDataStoreType => {
    return {
      rid: 0,
      refresh_interval: 1500,
      metadata: null
    }
  },
  actions: {
    init(res: AxiosResponse<MetadataType>) {
      this.metadata = res.data
    },
    Update(res: AxiosResponse<MetadataType>) {
      this.metadata.torrents = this.ForUpdate(this.metadata.torrents, res.data.torrents)
    },
    ForUpdate(OriginObject: any, UpdateObject: any) {
      let res = OriginObject;
      for (const updateObjectKey in UpdateObject) {
        res[updateObjectKey] = {
          ...res[updateObjectKey],
          ...UpdateObject[updateObjectKey]
        }
      }
      return res
    },
    getData() {
      setInterval(() => {
        MetaDataApi.getMetaData(this.rid).then(res => {
          this.rid = res.data.rid
          if (this.metadata || !res.data.full_update) {
            this.Update(res)
          } else {
            this.init(res)
          }
        })
      }, this.refresh_interval)
    },
  },
})
