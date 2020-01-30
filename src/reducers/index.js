import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import SearchReducer from "./searchReducer"
import { loadingBarReducer } from "react-redux-loading-bar"

export default history =>
  combineReducers({
    searchResults: SearchReducer,
    router: connectRouter(history),
    loadingBar: loadingBarReducer
  })
