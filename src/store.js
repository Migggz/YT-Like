import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import history from "./history"
import createRootReducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [routerMiddleware(history), thunk]

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

let store

export default function configureStore(preloadedState = {}) {
  store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  )
  return store
}
