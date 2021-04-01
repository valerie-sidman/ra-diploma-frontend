import { createStore, combineReducers } from "redux";
import hitsReducer from "../reducers/hitsReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import сatalogElementsReducer from "../reducers/сatalogElementsReducer";
import elementReducer from "../reducers/elementReducer";
import toggleStateReducer from "../reducers/toggleStateReducer";


const reducer = combineReducers({
  serviceHits: hitsReducer,
  serviceCategories: categoriesReducer,
  serviceCatalogElements: сatalogElementsReducer,
  serviceElement: elementReducer,
  serviceToggleState: toggleStateReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
