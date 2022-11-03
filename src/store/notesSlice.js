import { createSlice } from "@reduxjs/toolkit"

const defaultState = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState: defaultState,
  reducers: {

    INIT_NOTES: (state, action) => {
      let { notes } = state
      state.notes = notes.concat(action.payload)
    },

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

export const { INIT_NOTES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } = notesSlice.actions
export default notesSlice.reducer
