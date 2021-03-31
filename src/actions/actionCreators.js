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
  // SELECT_SIZE
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
  fetch('http://localhost:7070/api/top-sales', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) =>  {
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
  fetch('http://localhost:7070/api/categories', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      data.unshift({id: -1, title: 'Все'});
      return data;
    })
    .then((data) => {
      data.forEach(o => o.className = 'nav-link');
      return data;
    })
    .then((data) =>  {
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

export const fetchCatalogElements = (dispatch, categoryId, offset) => {
  dispatch(fetchCatalogElementsRequest());
  if (categoryId >= 0 && offset) {
    fetch(`http://localhost:7070/api/items?categoryId=${categoryId}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }).then((response) => response.json())
      .then((data) =>  {
        dispatch(fetchMoreElementsSuccess(data))
      })
      .catch((e) => {
        dispatch(fetchCatalogElementsFailure(e.message))
      })
  } else if (categoryId >= 0) {
    fetch(`http://localhost:7070/api/items?categoryId=${categoryId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) =>  {
      dispatch(fetchCatalogElementsSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchCatalogElementsFailure(e.message))
    })
  } else if (offset) {
    fetch(`http://localhost:7070/api/items?offset=${offset}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }).then((response) => response.json())
      .then((data) =>  {
        dispatch(fetchMoreElementsSuccess(data))
      })
      .catch((e) => {
        dispatch(fetchCatalogElementsFailure(e.message))
      })
  } else {
    fetch('http://localhost:7070/api/items', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) =>  {
      dispatch(fetchCatalogElementsSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchCatalogElementsFailure(e.message))
    })
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
  fetch(`http://localhost:7070/api/items/${elementId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }).then((response) => response.json())
    .then((data) => {
      dispatch(fetchElementSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchElementFailure(e.message))
    })
}

// SELECT SIZE

// export function selectSize(elementId) {
//   return {
//     type: SELECT_SIZE,
//     payload: { elementId }
//   }
// }
