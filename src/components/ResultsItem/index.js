import React, { useEffect } from "react"
import {
  isVideo,
  YOUTUBE_VIDEO_LINK,
  isChannel,
  YOUTUBE_CHANNEL_LINK,
  isPlaylist,
  YOUTUBE_PLAYLIST_LINK
} from "../../constants"
import { highlightSearchKeyword } from "../../utils"

const ResultsItem = ({ query, data }) => {
  const addDefaultSrc = e =>
    (e.target.src = "https://via.placeholder.com/245x245?text=Error%20Loading%20Image")

  useEffect(() => {}, [data])

  return (
    <li>
      <a
        href={
          isVideo(data.id.kind)
            ? YOUTUBE_VIDEO_LINK + data.id.videoId
            : isChannel(data.id.kind)
            ? YOUTUBE_CHANNEL_LINK + data.id.channelId
            : isPlaylist(data.id.kind)
            ? YOUTUBE_PLAYLIST_LINK + data.id.playlistId
            : "#"
        }
        className="results-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`results-item_figure ${
            isPlaylist(data.id.kind) ? "results-item_figure--playlist" : ""
          }`}
        >
          <img
            onError={addDefaultSrc}
            src={data.snippet.thumbnails.high.url}
            alt={data.snippet.title}
            className={isChannel(data.id.kind) ? "results-item_figure--channel" : ""}
          />
        </div>
        <div className="results-item_content">
          <h3 className="results-item_title">{data.snippet.title}</h3>
          <span className="results-item_channel">{data.snippet.channelTitle}</span>
          <p
            className="results-item_desc"
            dangerouslySetInnerHTML={{
              __html: highlightSearchKeyword(query, data.snippet.description)
            }}
          />
        </div>
      </a>
    </li>
  )
}

export default ResultsItem
