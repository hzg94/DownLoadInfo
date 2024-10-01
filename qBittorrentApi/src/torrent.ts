import Request, { ApiResult} from './utils/Request'
import {torrent} from "./index";


export type GetTorrentListParams = {
  // 按给定键对 torrent 进行排序。可以使用响应 JSON 数组中的任何字段（如下文所述）作为排序键进行排序。
  sort: string
  //启用反向排序。默认为 false
  reverse: boolean
  //限制返回的 torrent 数量
  limit: number
  // 设置偏移量（如果小于 0，则从末尾开始）
  offset: number
  //通过哈希值过滤。可以包含多个哈希值，用 | 分隔。
  hashes: string
}

export enum PiecesDownLoadState {
  //尚未下载
  NotDownloadedYet = 0,
  //现在下载中
  NormalPriority = 1,
  //已下载完成
  HighPriority = 2,
}

//你想要操作的 torrent 的哈希值。 hashes 可以包含多个由 | 分隔的哈希值，以操作多个 torrent，或者设置为 all 以暂停所有 torrent。
export type TorrentsActionScope = string | 'all'

/**
 * Get torrent list
 * @param {GetTorrentListParams} params
 * @returns {ApiResult<torrent[]>} torrent array
 */
const GetTorrentList = (params?: GetTorrentListParams): ApiResult<torrent[]> => {
  return Request.request<torrent[]>({
    method: 'GET',
    url: '/torrents/info',
    params: params
  })
}

/**
 * Get torrent pieces' states
 * @param {string} hash
 * @returns {ApiResult<PiecesDownLoadState[]>}  pieces state array
 */
const GetTorrentPiecesStates = (hash: string): ApiResult<PiecesDownLoadState[]> => {
  return Request.request<PiecesDownLoadState[]>({
    method: 'GET',
    url: '/torrents/pieceStates',
    params: {
      hash
    }
  })
}

/**
 * Get torrent pieces' hashes
 * @param {string} hash
 * @returns {ApiResult<string[]>}  hashes array
 */
const GetTorrentPiecesHashes = (hash: string): ApiResult<string[]> => {
  return Request.request<string[]>({
    method: 'GET',
    url: '/torrents/pieceHashes',
    params: {
      hash
    }
  })
}

/**
 * Pause torrents
 * @param {TorrentsActionScope} hashes
 * @returns {ApiResult<void>}  null body
 */
const PauseTorrents = (hashes: TorrentsActionScope): ApiResult<void> => {
  return Request.request<void>({
    method: 'GET',
    url: '/torrents/pause',
    params: {
      hashes
    }
  })
}

/**
 * Resume torrents
 * @param {TorrentsActionScope} hashes
 * @returns {ApiResult<void>}  null body
 */
const ResumeTorrents = (hashes: TorrentsActionScope): ApiResult<any> => {
  return Request.request({
    method: 'GET',
    url: '/torrents/resume',
    params: {
      hashes
    }
  })
}


/**
 * Delete torrents
 * @param {TorrentsActionScope} hashes
 * @param {boolean} deleteFiles
 * @returns {ApiResult<void>}  null body
 */
const DeleteTorrents = (hashes: TorrentsActionScope, deleteFiles: boolean): ApiResult<void> => {
  return Request.request<void>({
    method: 'GET',
    url: '/torrents/delete',
    params: {
      hashes,
      deleteFiles
    }
  })
}

/**
 * Recheck torrents
 * @param {TorrentsActionScope} hashes
 * @returns {ApiResult<void>}  null body
 */
const RecheckTorrents = (hashes: TorrentsActionScope): ApiResult<void> => {
  return Request.request<void>({
    method: 'GET',
    url: '/torrents/recheck',
    params: {
      hashes
    }
  })
}

/**
 * Reannounce torrents
 * @param {TorrentsActionScope} hashes
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const ReannounceTorrents = (hashes: TorrentsActionScope): ApiResult<void> => {
  return Request.request<void>({
    method: 'GET',
    url: '/torrents/reannounce',
    params: {
      hashes
    }
  })
}


export default {
  GetTorrentList,
  GetTorrentPiecesStates,
  GetTorrentPiecesHashes,

  PauseTorrents,
  ResumeTorrents,
  DeleteTorrents,
  RecheckTorrents,
  ReannounceTorrents
}
