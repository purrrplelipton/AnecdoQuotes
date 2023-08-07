export const CHANGE_SELECTION = 'CHANGE_SELECTION';

export function changeSelection(newIndex) {
  return { type: CHANGE_SELECTION, payload: { newIndex } };
}
