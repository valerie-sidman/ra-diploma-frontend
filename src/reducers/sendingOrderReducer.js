import {
  SEND_AN_ORDER_REQUEST,
  SEND_AN_ORDER_FAILURE,
  SEND_AN_ORDER_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  sendLoading: false,
  sendError: null,
}

export default function sendingOrderReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_AN_ORDER_REQUEST:
      return {
        ...state,
        sendLoading: true,
        sendError: null,
      }
    case SEND_AN_ORDER_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        sendLoading: false,
        sendError: error,
      }
    case SEND_AN_ORDER_SUCCESS:
      return {
        ...state,
        sendLoading: false,
        sendError: null,
      }
    default:
      return state;
  }
}
