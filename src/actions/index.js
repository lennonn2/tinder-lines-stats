export const updateSelected = id => {
  return {
    type: 'UPDATE_SELECTED',
    id
  }
}

export const resetSelected = () => {
  return {
    type: 'RESET_SELECTED'
  }
}