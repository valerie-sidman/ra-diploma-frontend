import { createStore, combineReducers } from "redux";
import hitsReducer from "../reducers/hitsReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import сatalogElementsReducer from "../reducers/сatalogElementsReducer";
import elementReducer from "../reducers/elementReducer";
import toggleStateReducer from "../reducers/toggleStateReducer";
import sendingToCartReducer from "../reducers/sendingToCartReducer";
import sendingOrderReducer from "../reducers/sendingOrderReducer";


function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


const reducer = combineReducers({
  serviceHits: hitsReducer,
  serviceCategories: categoriesReducer,
  serviceCatalogElements: сatalogElementsReducer,
  serviceElement: elementReducer,
  serviceToggleState: toggleStateReducer,
  serviceSendingToCart: sendingToCartReducer,
  serviceSendingOrder: sendingOrderReducer
})

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
