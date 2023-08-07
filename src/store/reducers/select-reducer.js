import { CHANGE_SELECTION } from '../actions/select-actions';

export default function selectReducer(state = 0, action = {}) {
  switch (action.type) {
    case CHANGE_SELECTION:
      return action.payload.newIndex;

    default:
      return state;
  }
}
