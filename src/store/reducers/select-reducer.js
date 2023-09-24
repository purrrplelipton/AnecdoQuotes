import { CHANGE_SELECTION } from "../actions/select-actions";

function selectReducer(state = { value: 0 }, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SELECTION:
      return { ...state, value: payload.newIndex };

    default:
      return state;
  }
}
export default selectReducer;
