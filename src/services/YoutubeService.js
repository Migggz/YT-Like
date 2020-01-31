import axios from "axios"
import { API_TOKEN, YOUTUBE_API } from "../constants"
import { TokenService } from "."

const defaultParams = {
  part: "snippet",
  maxResults: 15
}

export default class Youtube {
  static search(query, routerQuery) {
    const queryParams = Object.fromEntries(new URLSearchParams(routerQuery))

    if (Object.keys(queryParams).length > 1) {
      return axios.get(`${YOUTUBE_API}/search`, {
        params: {
          ...defaultParams,
          key: API_TOKEN || TokenService.getToken(),
          q: query || routerQuery.query,
          order: queryParams.sort
        }
      })
    } else {
      return axios.get(`${YOUTUBE_API}/search`, {
        params: {
          ...defaultParams,
          key: API_TOKEN || TokenService.getToken(),
          q: query || routerQuery.query
        }
      })
    }
  }
}
