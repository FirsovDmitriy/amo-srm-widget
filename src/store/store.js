import { configureStore } from '@reduxjs/toolkit'
import notesReduser from './notesSlice'
import { noteApi } from './asyncAction/notes'


// const rootReduser = combineReducers({
//   notes: notesReduser
// })

// let store2 = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
  reducer: {
    notes: notesReduser,
    [noteApi.reducerPath]: noteApi.reducer
  }
})

export default store
