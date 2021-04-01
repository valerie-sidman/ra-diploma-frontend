import {
  HIGHLIGHTING_MENU_ITEM
} from '../actions/actionTypes';

const initialState = {
  clickedItem: 'main',
}

export default function toggleStateReducer(state = initialState, action) {
  switch (action.type) {
    case HIGHLIGHTING_MENU_ITEM:
      const { clickedItem } = action.payload;
      return {
        ...state,
        clickedItem: clickedItem
      }
    default:
      return state;
  }
}
