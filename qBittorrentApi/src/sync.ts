import {torrent} from "./index";
import Request, {ApiResult} from "./utils/Request";

interface MainDataType {
  rid: number,
  full_update?: boolean,
  torrents?: torrentType,
  torrents_removed?: Array<any>,
  categories?: categoriesType,
  categories_removed?: Array<any>,
  tags?: Array<any>,
  tags_removed?: Array<any>,
  server_state: ServerStateType
}

type torrentType = Record<string, torrent>

type categoriesType = Record<string, categories>

type categories = {
  name: string
  savePath: string
}


type ServerStateType = {
  // all time download bit
  alltime_dl: number
  // all time upload bit
  alltime_ul: number

  average_time_queue: number,
  connection_status: string,
  // dht node number
  dht_nodes: number,

  //download
  dl_info_data: number,
  dl_info_speed: number,
  dl_rate_limit: number,
  //upload
  up_info_data: number,
  up_info_speed: number,
  up_rate_limit: number

  //disk free space
  free_space_on_disk: number

  // global share ratio
  global_ratio: number

  // queue io job number
  queued_io_jobs: number
  queueing: boolean

  read_cache_hits: string,
  read_cache_overload: string,
  write_cache_overload: string

  // refresh
  refresh_interval: number

  total_buffers_size: number,
  total_peer_connections: number,
  total_queued_size: number,
  total_wasted_session: number,

  use_alt_speed_limits: boolean,
  use_subcategories: boolean,
}


/**
 * Get main data
 * @param {number} rid
 * @return {ApiResult<string>}
 */
const getMainData = (rid: number): ApiResult<MainDataType> => {
  return Request.request<MainDataType>({
    method: 'GET',
    url: '/sync/maindata',
    params: {
      rid: rid
    }
  })
}


export default {
  getMainData
}

