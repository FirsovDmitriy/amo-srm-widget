import { createSlice } from "@reduxjs/toolkit"

const defaultState = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState: defaultState,
  reducers: {

    ADD_NOTE: (state, action) => {
      state.notes.push(action.payload)
    },

    REMOVE_NOTE: (state, action) => {
      let { notes } = state
      state.notes = notes.filter(note => note.id !== action.payload.id)
    },

    EDIT_NOTE: (state, action) => {
      let { notes } = state
      state.notes = notes.map(
        note => note.id === action.payload.id
          ? action.payload
          : note
      )
    }
  }
})

export const { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } = notesSlice.actions
export default notesSlice.reducer
