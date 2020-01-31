export const WEBSITE_NAME = "YT-Like"
export const WEBSITE_LINK = "https://yt-like.magedmohamed.me"
export const API_KEY = "API_TOKEN"
export const API_TOKEN = process.env.REACT_APP_TOKEN
export const YOUTUBE_API = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_LINK = "https://www.youtube.com/watch?v="
export const YOUTUBE_PLAYLIST_LINK = "https://www.youtube.com/playlist?list="
export const YOUTUBE_CHANNEL_LINK = "https://www.youtube.com/channel/"

export const isVideo = type => type === "youtube#video"
export const isChannel = type => type === "youtube#channel"
export const isPlaylist = type => type === "youtube#playlist"
