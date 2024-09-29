import request from "@/utils/Request";

const getVersion = () => {
  return request.get('/app/version')
}


export default {
  getVersion,
}
