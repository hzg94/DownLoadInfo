import request from "@/utils/Request";
import type { AxiosResponse } from "axios";

/**
 * Get torrent list
 * @param {GetTorrenListParmas} parmas
 * @returns {Promise<AxiosResponse<Array<torrent>>>} torrent array
 */
const GetTorrenList = (params: qBittorrentApi.GetTorrenListParmas) => {
    return request.get<Array<qBittorrentApi.torrent>>('/torrents/info', {
        params: params
    })
}

/**
 * Get torrent pieces' states
 * @param {string} hash
 * @returns {Promise<AxiosResponse<Array<qBittorrentApi.PiecesDownLoadState>>>}  pieces state array
 */
const GetTorrentPiecesStates = (hash: string) => {
    return request.get<Array<qBittorrentApi.PiecesDownLoadState>>('/torrents/pieceStates', {
        params: {
            hash
        }
    })
}

/**
 * Get torrent pieces' hashes
 * @param {string} hash
 * @returns {Promise<AxiosResponse<Array<string>>>}  hashes array
 */
const GetTorrentPiecesHashes = (hash: string) => {
    return request.get<Array<qBittorrentApi.PiecesDownLoadState>>('/torrents/pieceStates', {
        params: {
            hash
        }
    })
}

/**
 * Pause torrents
 * @param {qBittorrentApi.TorrentsActionScope} hashes
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const PauseTorrents = (hashes: qBittorrentApi.TorrentsActionScope) => {
    return request.get<void>('/torrents/pause', {
        params: {
            hashes
        }
    })
}

/**
 * Resume torrents
 * @param {qBittorrentApi.TorrentsActionScope} hashes
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const ResumeTorrents = (hashes: qBittorrentApi.TorrentsActionScope) => {
    return request.get<void>('/torrents/resume', {
        params: {
            hashes
        }
    })
}


/**
 * Delete torrents
 * @param {qBittorrentApi.TorrentsActionScope} hashes
 * @param {boolean} deleteFiles
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const DeleteTorrents = (hashes: qBittorrentApi.TorrentsActionScope,deleteFiles: boolean) => {
    return request.get<void>('/torrents/delete', {
        params: {
            hashes,
            deleteFiles
        }
    })
}

/**
 * Recheck torrents
 * @param {qBittorrentApi.TorrentsActionScope} hashes
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const RecheckTorrents = (hashes: qBittorrentApi.TorrentsActionScope) => {
    return request.get<void>('/torrents/recheck', {
        params: {
            hashes
        }
    })
}

/**
 * Reannounce torrents
 * @param {qBittorrentApi.TorrentsActionScope} hashes
 * @returns {Promise<AxiosResponse<void>}  null body
 */
const ReannounceTorrents = (hashes: qBittorrentApi.TorrentsActionScope) => {
    return request.get<void>('/torrents/reannounce', {
        params: {
            hashes
        }
    })
}





export default {
    GetTorrenList,
    GetTorrentPiecesStates,
    GetTorrentPiecesHashes,

    PauseTorrents,
    ResumeTorrents,
    DeleteTorrents,
    RecheckTorrents,
    ReannounceTorrents
}
