import { Youtube } from "../services"
import { showLoading, hideLoading } from "react-redux-loading-bar"
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
  dispatch(showLoading())

  Youtube.search(searchQuery)
    .then(res => {
      isLoading = false
      dispatch(searchAction_Loading(isLoading))
      dispatch(hideLoading())
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data,
        isLoading: false
      })
    })
    .catch(err => {
      isLoading = false
      dispatch(searchAction_Loading(isLoading))
      dispatch(hideLoading())
      dispatch({
        type: SEARCH_ERROR,
        payload: err
      })
    })
}
