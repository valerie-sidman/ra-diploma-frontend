import {
  FETCH_HITS_REQUEST,
  FETCH_HITS_FAILURE,
  FETCH_HITS_SUCCESS,

  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,

  CHANGE_CATEGORIES_CLASSNAME,

  FETCH_CATALOG_ELEMENTS_REQUEST,
  FETCH_CATALOG_ELEMENTS_FAILURE,
  FETCH_CATALOG_ELEMENTS_SUCCESS,

  FETCH_MORE_ELEMENTS_SUCCESS,

  FETCH_ELEMENT_REQUEST,
  FETCH_ELEMENT_FAILURE,
  FETCH_ELEMENT_SUCCESS,

  SELECT_SIZE,

  INCREASE_THE_NUMBER,
  DECREASE_THE_NUMBER,
  DEFAULT_THE_NUMBER,

  TOGGLE_CLASSNAME,
  TOGGLE_SEARCH,

  CHANGE_FIELD,

  DELAY_SEARCH,

  SENDING_TO_CART,
  REMOVE_FROM_CART,

  SEND_AN_ORDER_REQUEST,
  SEND_AN_ORDER_FAILURE,
  SEND_AN_ORDER_SUCCESS

} from './actionTypes';

// HITS

export function fetchHitsRequest() {
  return {
    type: FETCH_HITS_REQUEST,
  }
}

export function fetchHitsFailure(hitsError) {
  return {
    type: FETCH_HITS_FAILURE,
    payload: { hitsError }
  }
}

export function fetchHitsSuccess(hits) {
  return {
    type: FETCH_HITS_SUCCESS,
    payload: { hits }
  }
}

export const fetchHits = (dispatch) => {
  dispatch(fetchHitsRequest());
  fetch('https://ra-diploma-backend.herokuapp.com/api/top-sales', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      dispatch(fetchHitsSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchHitsFailure(e.message))
    })
}

// CATEGORIES

export function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  }
}

export function fetchCategoriesFailure(categoriesError) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: { categoriesError }
  }
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: { categories }
  }
}

export const fetchCategories = (dispatch) => {
  dispatch(fetchCategoriesRequest());
  fetch('https://ra-diploma-backend.herokuapp.com/api/categories', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      data.forEach(o => o.className = 'nav-link');
      return data;
    })
    .then((data) => {
      data.unshift({ id: -1, title: 'Все', className: 'nav-link active' });
      return data;
    })
    .then((data) => {
      dispatch(fetchCategoriesSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchCategoriesFailure(e.message))
    })
}

// CATEGORIES CLASSNAME

export function changeCategoryClassName(categoryId) {
  return {
    type: CHANGE_CATEGORIES_CLASSNAME,
    payload: { categoryId }
  }
}

// CATALOG ELEMENTS

export function fetchCatalogElementsRequest() {
  return {
    type: FETCH_CATALOG_ELEMENTS_REQUEST,
  }
}

export function fetchCatalogElementsFailure(catalogElementsError) {
  return {
    type: FETCH_CATALOG_ELEMENTS_FAILURE,
    payload: { catalogElementsError }
  }
}

export function fetchCatalogElementsSuccess(catalogElements) {
  return {
    type: FETCH_CATALOG_ELEMENTS_SUCCESS,
    payload: { catalogElements }
  }
}

// MORE ELEMENTS SUCCESS for fetchCatalogElements

export function fetchMoreElementsSuccess(moreElements) {
  return {
    type: FETCH_MORE_ELEMENTS_SUCCESS,
    payload: { moreElements }
  }
}

export const fetchCatalogElements = (dispatch, categoryId, offset, query) => {
  dispatch(fetchCatalogElementsRequest());
  if (query) {
    if (categoryId >= 0 && offset) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?categoryId=${categoryId}&offset=${offset}&q=${query}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchMoreElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else if (categoryId >= 0) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?categoryId=${categoryId}&q=${query}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchCatalogElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else if (offset) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?offset=${offset}&q=${query}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchMoreElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?q=${query}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchCatalogElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    }
  } else if (!query) {
    if (categoryId >= 0 && offset) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?categoryId=${categoryId}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchMoreElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else if (categoryId >= 0) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?categoryId=${categoryId}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchCatalogElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else if (offset) {
      fetch(`https://ra-diploma-backend.herokuapp.com/api/items?offset=${offset}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchMoreElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    } else {
      fetch('https://ra-diploma-backend.herokuapp.com/api/items', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }).then((response) => response.json())
        .then((data) => {
          dispatch(fetchCatalogElementsSuccess(data))
        })
        .catch((e) => {
          dispatch(fetchCatalogElementsFailure(e.message))
        })
    }
  }
}

// ELEMENT

export function fetchElementRequest() {
  return {
    type: FETCH_ELEMENT_REQUEST,
  }
}

export function fetchElementFailure(elementError) {
  return {
    type: FETCH_ELEMENT_FAILURE,
    payload: { elementError }
  }
}

export function fetchElementSuccess(element) {
  return {
    type: FETCH_ELEMENT_SUCCESS,
    payload: { element }
  }
}

export const fetchElement = (dispatch, elementId) => {
  dispatch(fetchElementRequest());
  fetch(`https://ra-diploma-backend.herokuapp.com/api/items/${elementId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      data.sizes.forEach(o => o.className = 'catalog-item-size');
      return data;
    })
    .then((data) => {
      dispatch(fetchElementSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchElementFailure(e.message))
    })
}

// SELECT SIZE

export function selectSize(sizeId) {
  return {
    type: SELECT_SIZE,
    payload: { sizeId }
  }
}

// COUNTER
export function increaseQuantity() {
  return {
    type: INCREASE_THE_NUMBER,
  }
}

export function decreaseQuantity() {
  return {
    type: DECREASE_THE_NUMBER,
  }
}

export function defaultQuantity() {
  return {
    type: DEFAULT_THE_NUMBER,
  }
}

// TOGGLE CLASS NAME, TOGGLE SEARCH, DELAY SEARCH

export function toggleClassName(clickedItem) {
  return {
    type: TOGGLE_CLASSNAME,
    payload: { clickedItem }
  }
}

export function toggleSearch(search) {
  return {
    type: TOGGLE_SEARCH,
    payload: { search }
  }
}

export function delaySearch(timeout) {
  return {
    type: DELAY_SEARCH,
    payload: { timeout }
  }
}

// CHANGE FIELD

export function changeField(name, value) {
  return {
    type: CHANGE_FIELD,
    payload: { name, value },
  }
}

// CART

export function sendingToCart(id, name, size, quantity, price) {
  return {
    type: SENDING_TO_CART,
    payload: { id, name, size, quantity, price }
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  }
}

// SEND AN ORDER

export function sendingOrderRequest() {
  return {
    type: SEND_AN_ORDER_REQUEST,
  }
}

export function sendingOrderFailure(sendingError) {
  return {
    type: SEND_AN_ORDER_FAILURE,
    payload: { sendingError }
  }
}

export function sendingOrderSuccess(owner, items) {
  return {
    type: SEND_AN_ORDER_SUCCESS,
    payload: { owner, items }
  }
}

export const sendingOrder = (dispatch, owner, items) => {
  dispatch(sendingOrderRequest());
  fetch('https://ra-diploma-backend.herokuapp.com/api/order', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
    body: JSON.stringify(
      { owner, items }
    ),
  }).then((response) => response.json())
    .then((data) => {
      data.sizes.forEach(o => o.className = 'catalog-item-size');
      return data;
    })
    .then((data) => {
      dispatch(sendingOrderSuccess(data))
    })
    .catch((e) => {
      dispatch(sendingOrderFailure(e.message))
    })
}
