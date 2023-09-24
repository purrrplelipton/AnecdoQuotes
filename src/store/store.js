import { combineReducers, legacy_createStore as createStore } from "redux";
import { anecdoteReducer, filterReducer, selectReducer } from "./reducers";

const store = createStore(
  combineReducers({
    anecdoteReducer,
    selectReducer,
    filterReducer,
  })
);

export default store;
