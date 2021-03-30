import {
  FETCH_HITS_REQUEST,
  FETCH_HITS_FAILURE,
  FETCH_HITS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  hits: [],
  loading: false,
  error: null,
}

export default function hitsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HITS_REQUEST:
      return {
        ...state,
        hits: state.hits,
        loading: true,
        error: null,
      }
    case FETCH_HITS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        hits: state.hits,
        loading: false,
        error,
      }
    case FETCH_HITS_SUCCESS:
      const { hits } = action.payload;
      return {
        ...state,
        hits,
        loading: false,
        error: null,
      }
    default:
      return state;
  }
}
