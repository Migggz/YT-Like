import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "../actions"

const initState = {
  data: [],
  isLoading: false,
  error: null
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload
      }
    }
    case SEARCH_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SEARCH_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}
