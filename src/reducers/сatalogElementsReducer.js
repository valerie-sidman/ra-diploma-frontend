import {
  FETCH_CATALOG_ELEMENTS_REQUEST,
  FETCH_CATALOG_ELEMENTS_FAILURE,
  FETCH_CATALOG_ELEMENTS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  catalogElements: [],
  loadingCatalogElements: false,
  elementsError: null,
}

export default function сatalogElementsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_ELEMENTS_REQUEST:
      return {
        ...state,
        catalogElements: state.catalogElements,
        loadingCatalogElements: true,
        elementsError: null,
      }
    case FETCH_CATALOG_ELEMENTS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        catalogElements: state.catalogElements,
        loadingCatalogElements: false,
        elementsError: error,
      }
    case FETCH_CATALOG_ELEMENTS_SUCCESS:
      const { catalogElements } = action.payload;
      return {
        ...state,
        catalogElements,
        loadingCatalogElements: false,
        elementsError: null,
      }
    default:
      return state;
  }
}
