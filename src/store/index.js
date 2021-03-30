import { createStore, combineReducers } from "redux";
import hitsReducer from "../reducers/hitsReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import сatalogElementsReducer from "../reducers/сatalogElementsReducer";

const reducer = combineReducers({
  serviceHits: hitsReducer,
  serviceCategories: categoriesReducer,
  serviceCatalogElements: сatalogElementsReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
