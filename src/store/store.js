import { configureStore } from '@reduxjs/toolkit'
import notesReduser from './notesSlice'
import { notesApi } from './asyncAction/notes'


// const rootReduser = combineReducers({
//   notes: notesReduser
// })

// let store2 = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
  reducer: {
    notes: notesReduser,
    [notesApi.reducerPath]: notesApi.reducer
  }
})

export default store
