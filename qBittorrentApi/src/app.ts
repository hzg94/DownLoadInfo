import Request, { ApiResult} from './utils/Request'

/**
 * Get application version
 * @return {ApiResult<string>}
 */
const getVersion = (): ApiResult<string> => {
  return Request.request<string>({
    method: 'GET',
    url: '/app/version'
  })
}


export default {
  getVersion,
}
