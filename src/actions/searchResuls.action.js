import { Youtube, TokenService } from "../services"
import { showLoading, hideLoading } from "react-redux-loading-bar"
import { replace, goBack } from "connected-react-router"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_LOADING = "SEARCH_LOADING"
export const SEARCH_ERROR = "SEARCH_ERROR"

export const searchAction_Loading = data => ({
  type: SEARCH_LOADING,
  payload: data
})

export const searchAction = searchQuery => (dispatch, getState) => {
  let isLoading = true

  const currentState = getState()
  dispatch(searchAction_Loading(isLoading))
  dispatch(showLoading())

  Youtube.search(searchQuery, currentState.router.location.query)
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
      dispatch({
        type: SEARCH_ERROR,
        payload: err
      })
      isLoading = false
      dispatch(searchAction_Loading(isLoading))
      dispatch(hideLoading())
      if (err.response.status >= 400) {
        dispatch(replace("/"))
        dispatch(goBack(-10))
        TokenService.removeToken()
      }
    })
}
