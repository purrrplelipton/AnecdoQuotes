import { CHANGE_FILTER } from "../actions/filter-actions";

function filterReducer(state = { value: "" }, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, value: payload.value };

    default:
      return state;
  }
}
export default filterReducer;
