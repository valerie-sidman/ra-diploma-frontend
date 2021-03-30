import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  CHANGE_CATEGORIES_CLASSNAME
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  loadingCategories: false,
  error: null,
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: state.categories,
        loadingCategories: true,
        error: null,
      }
    case FETCH_CATEGORIES_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        categories: state.categories,
        loadingCategories: false,
        error,
      }
    case FETCH_CATEGORIES_SUCCESS:
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        loadingCategories: false,
        error: null,
      }
    case CHANGE_CATEGORIES_CLASSNAME:
      const { categoryId } = action.payload;
      const categoryIndex = state.categories.findIndex((category) => category.id === categoryId);
      const newCategories = state.categories;
      newCategories.forEach((c) => c.className = 'nav-link');
      newCategories[categoryIndex].className = 'nav-link active';
      return {
        ...state,
        categories: newCategories,
      }
    default:
      return state;
  }
}
