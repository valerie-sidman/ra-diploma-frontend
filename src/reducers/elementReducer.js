import {
  FETCH_ELEMENT_REQUEST,
  FETCH_ELEMENT_FAILURE,
  FETCH_ELEMENT_SUCCESS,
  SELECT_SIZE,
  INCREASE_THE_NUMBER,
  DECREASE_THE_NUMBER,
  DEFAULT_THE_NUMBER
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
        className: '',
      }
    ],
  },
  quantity: 1,
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
    case SELECT_SIZE:
      const { sizeId } = action.payload;
      const sizeIndex = state.element.sizes.findIndex((size) => size.size === sizeId);
      const newSizes = state.element.sizes;

      if (newSizes[sizeIndex].className.includes('selected')) {
        newSizes[sizeIndex].className = 'catalog-item-size';
      } else {
        newSizes.forEach((c) => c.className = 'catalog-item-size');
        newSizes[sizeIndex].className = 'catalog-item-size selected';
      }

      const newStateElement = state.element;
      newStateElement.sizes = newSizes;

      return {
        ...state,
        element: newStateElement,
      }
    case INCREASE_THE_NUMBER:
      let newQuantityInc = state.quantity;
      if (state.quantity >= 1 && state.quantity < 10) {
        const increaseQuantity = state.quantity += 1;
        newQuantityInc = increaseQuantity;
      }
      return {
        ...state,
        quantity: newQuantityInc,
      }
    case DECREASE_THE_NUMBER:
      let newQuantityDec = state.quantity;
      if (state.quantity > 1 && state.quantity <= 10) {
        const decreaseQuantity = state.quantity -= 1;
        newQuantityDec = decreaseQuantity;
      }
      return {
        ...state,
        quantity: newQuantityDec,
      }
    case DEFAULT_THE_NUMBER:
      let defaultQuantity = state.quantity;
      defaultQuantity = 1;
      return {
        ...state,
        quantity: defaultQuantity,
      }
    default:
      return state;
  }
}
