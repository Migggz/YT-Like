import axios from "axios"
import { API_TOKEN, YOUTUBE_API } from "../constants"

export default class Youtube {
  static search(query) {
    return axios.get(`${YOUTUBE_API}/search`, {
      params: {
        part: "snippet",
        key: API_TOKEN,
        q: query,
        maxResults: 15
      }
    })
  }
}
