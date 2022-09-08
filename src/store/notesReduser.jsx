const defaultState = {
  notes: []
}

export const notesReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {}
    default:
      return state
  }
}
