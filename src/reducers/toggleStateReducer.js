import {
  TOGGLE_CLASSNAME,
  TOGGLE_SEARCH,
  CHANGE_FIELD,
  DELAY_SEARCH
} from '../actions/actionTypes';

const initialState = {
  clickedItem: 'main',
  search: {
    isClicked: false,
    searchField: '',
    timeout: 0,
    searchFieldLoupe: ''
  }
}

export default function toggleStateReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CLASSNAME:
      const { clickedItem } = action.payload;
      return {
        ...state,
        clickedItem: clickedItem,
      }
    case TOGGLE_SEARCH:
      const { search } = action.payload;
      return {
        ...state,
        search: search,
      }
    case CHANGE_FIELD:
      const { name, value } = action.payload;
      return {
        ...state,
        search: {
          ...state.search,
          [name]: value
        }
      }
    case DELAY_SEARCH:
      const { timeout } = action.payload;
      return {
        ...state,
        search: {
          ...state.search,
          timeout
        }
      }
    default:
      return state;
  }
}
