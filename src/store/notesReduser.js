const defaultState = {
  notes: []
}

export const notesReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {}
    case 'INIT_NOTES':
      return { ...state, notes: [...state.notes, ...action.payload] }
    default:
      return state
  }
}
