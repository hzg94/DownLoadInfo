import request from "@/utils/Request";


const getMetaData = (rid: number) => {
  return request.get<MetadataType>('/sync/maindata', {
    params: {
      rid: rid
    }
  })
}


export default {
  getMetaData
}
