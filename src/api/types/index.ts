

declare namespace qBittorrentApi {
  type torrent = {
    name: string

    eta: number

    downloaded: number
    downloaded_session: number

    completed: number
    completion_on: number

    download_path: string
    content_path: string
    save_path: string

    //api doc [https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#get-torrent-list]
    /**
     * error	Some error occurred, applies to paused torrents <br/>
     发生了一些错误，影响了暂停的 torrent <br/>
     missingFiles	Torrent data files is missing <br/>
     种子数据文件缺失 <br/>
     uploading	Torrent is being seeded and data is being transferred <br/>
     种子正在播种，数据正在传输 <br/>
     pausedUP	Torrent is paused and has finished downloading <br/>
     种子已暂停并完成下载<br/>
     queuedUP	Queuing is enabled and torrent is queued for upload <br/>
     已启用排队，上传任务已添加到队列中<br/>
     stalledUP	Torrent is being seeded, but no connection were made<br/>
     种子状态：正在发种，但未建立连接<br/>
     checkingUP	Torrent has finished downloading and is being checked<br/>
     Torrent 下载完成并正在检查中<br/>
     forcedUP	Torrent is forced to uploading and ignore queue limit<br/>
     迅雷被迫上传并忽略队列限制<br/>
     allocating	Torrent is allocating disk space for download<br/>
     种子正在为下载分配磁盘空间<br/>
     downloading	Torrent is being downloaded and data is being transferred<br/>
     种子正在下载中，数据正在传输<br/>
     metaDL	Torrent has just started downloading and is fetching metadata<br/>
     任务已经启动下载，正在获取元数据<br/>
     pausedDL	Torrent is paused and has NOT finished downloading<br/>
     迅雷已暂停下载，还未完成<br/>
     queuedDL	Queuing is enabled and torrent is queued for download<br/>
     队列已启用，且种子已排队下载<br/>
     stalledDL	Torrent is being downloaded, but no connection were made<br/>
     正在下载 Torrent，但未建立连接<br/>
     checkingDL	Same as checkingUP, but torrent has NOT finished downloading<br/>
     与检查 UP 相同，但下载的 torrent 还未完成<br/>
     forcedDL	Torrent is forced to downloading to ignore queue limit<br/>
     盗版被迫下载以忽略队列限制<br/>
     checkingResumeData	Checking resume data on qBt startup<br/>
     检查 qbT 启动时的简历数据<br/>
     moving	Torrent is moving to another location<br/>
     BitTorrent 正迁往其他位置<br/>
     unknown Unknown status<br/>
     未知状态
     */
    state: "error" | "missingFiles" | "uploading" | "pausedUP" | "queuedUP" | "stalledUP" | "checkingUP" | "forcedUP" | "allocating" | "downloading" | "metaDL" | "pausedDL" | "queuedDL" | "stalledDL" | "checkingDL" | "forcedDL" | "checkingResumeData" | "moving" | "unknown"

    // download limit and now speed
    dl_limit: number
    dlspeed: number
    upspeed: number
    // timestamp 10
    added_on: number

    amount_left: number
    auto_tmm: boolean

    availability: number

    category: string

    inactive_seeding_time_limit: number
    max_inactive_seeding_time: number
    max_ratio: number
    max_seeding_time: number

    progress: number

    // bt hash
    infohash_v1: string
    infohash_v2: string
    magnet_uri: string

    last_activity: number

    f_l_piece_prio: boolean
    force_start: boolean
  }
}
