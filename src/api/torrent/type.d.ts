declare namespace qBittorrentApi {
    export type GetTorrenListParmas = {
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
        NotDownloadedYet  = 0,
        //现在下载中
        NormalPriority = 1,
        //已下载完成
        HighPriority = 2,
    }

    //你想要操作的 torrent 的哈希值。 hashes 可以包含多个由 | 分隔的哈希值，以操作多个 torrent，或者设置为 all 以暂停所有 torrent。
    type TorrentsActionScope = string | 'all'

}
