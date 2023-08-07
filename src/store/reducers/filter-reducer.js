import { CHANGE_FILTER } from '../actions/filter-actions';

export default function filterReducer(state = '', action = {}) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
}
