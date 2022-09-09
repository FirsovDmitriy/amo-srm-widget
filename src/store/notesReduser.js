const defaultState = {
  notes: []
}

export const notesReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] }
    case 'INIT_NOTES':
      return { ...state, notes: [...action.payload] }
    case 'EDIT_NOTE':
      return { ...state, notes: state.notes.map(
        note =>  note.id === action.payload.id
          ? { ...action.payload }
          : note
      ) }
    case 'REMOVE_NOTE':
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) }
    default:
      return state
  }
}
