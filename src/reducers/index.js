import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import SearchReducer from "./searchReducer"

export default history =>
  combineReducers({
    searchResults: SearchReducer,
    router: connectRouter(history)
  })
