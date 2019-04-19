export default (state, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED':
      const selected = state.lines.find(({lineId}) => lineId === action.id);
        return {
          ...state,
          selected
        }
    case 'RESET_SELECTED':
        return {
          ...state,
          selected: {},
        }
    default:
      return state;
  }
}