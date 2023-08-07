import { combineReducers, createStore } from 'redux';
import { anecdoteReducer, filterReducer, selectReducer } from './reducers';

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  index: selectReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

export default store;
