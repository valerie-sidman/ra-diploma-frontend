import {
  FETCH_ELEMENT_REQUEST,
  FETCH_ELEMENT_FAILURE,
  FETCH_ELEMENT_SUCCESS,
  // SELECT_SIZE
} from '../actions/actionTypes';

const initialState = {
  element: {
    id: '',
    category: '',
    title: '',
    images: [],
    sku: '',
    manufacturer: '',
    color: '',
    material: '',
    reason: '',
    season: '',
    price: '',
    sizes: [
      {
        size: '',
        avalible: Boolean,
      }
    ],
  },
  loadingElement: false,
  elementError: null,
}

export default function elementReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ELEMENT_REQUEST:
      return {
        ...state,
        element: state.element,
        loadingElement: true,
        elementError: null,
      }
    case FETCH_ELEMENT_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        element: state.element,
        loadingElement: false,
        elementError: error,
      }
    case FETCH_ELEMENT_SUCCESS:
      const { element } = action.payload;
      return {
        ...state,
        element,
        loadingElement: false,
        elementError: null,
      }
    // case SELECT_SIZE:
    //   const { sizeId } = action.payload;
    //   const sizeIndex = state.element.sizes.findIndex((size) => size.id === sizeId);
    //   const newSizes = state.element.sizes;
    //   newSizes.forEach((c) => c.className = 'catalog-item-size');
    //   newSizes[sizeIndex].className = 'catalog-item-size selected';
    //   return {
    //     ...state,
    //     element: {
    //       sizes: newSizes,
    //     }
    //   }
    default:
      return state;
  }
}
