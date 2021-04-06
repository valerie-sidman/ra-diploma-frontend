import { SENDING_TO_CART, REMOVE_FROM_CART, CHANGE_FIELD } from '../actions/actionTypes';

// id: null,
// name: '',
// size: '',
// quantity: null,
// price: '',

const initialState = {
  cartItems: [],
  fields: {
    phoneField: '',
    addressField: '',
  }
};

export default function sendingToCartReducer(state = initialState, action) {
  switch (action.type) {
    case SENDING_TO_CART:
      const { id, name, size, quantity, price } = action.payload;
      const findedItem = state.cartItems.findIndex(cartItem =>
        cartItem.id === id && cartItem.size === size);
      const newCartItems = state.cartItems;
      if (findedItem >= 0) {
        newCartItems[findedItem].quantity += quantity;
      } else {
        newCartItems.push({ id, name, size, quantity, price });
      }
      return {
        ...state,
        cartItems: newCartItems,
      }
    case REMOVE_FROM_CART:
      const { removingId } = action.payload;
      const removingItemIndex = state.cartItems.findIndex(cartItem =>
        cartItem.id === removingId);
      const newRemItems = state.cartItems;
      newRemItems.splice(removingItemIndex, 1);
      return {
        ...state,
        cartItems: newRemItems,
      }
    case CHANGE_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return state;
  }
}
