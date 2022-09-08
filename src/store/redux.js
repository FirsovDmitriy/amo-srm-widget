import { createStore, combineReducers, applyMiddleware } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { notesReduser } from './notesReduser'

const rootReduser = combineReducers({
  notes: notesReduser
})

let store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

export default store
