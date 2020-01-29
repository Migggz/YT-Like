import { Youtube } from "../services"
import { API_TOKEN } from "../constants"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_LOADING = "SEARCH_LOADING"
export const SEARCH_ERROR = "SEARCH_ERROR"

export const searchAction_Loading = data => ({
  type: SEARCH_LOADING,
  payload: data
})

export const searchAction = searchQuery => (dispatch, getState) => {
  let isLoading = true

  dispatch(searchAction_Loading(isLoading))
  Youtube.get("/search", {
    params: {
      part: "snippet",
      key: API_TOKEN,
      q: searchQuery,
      maxResults: 10
    }
  })
    .then(res => {
      isLoading = false
      dispatch(searchAction_Loading(isLoading))
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data,
        isLoading: false
      })
    })
    .catch(err => {
      isLoading = false
      dispatch(searchAction_Loading(isLoading))
      dispatch({
        type: SEARCH_ERROR,
        payload: err
      })
    })
}
