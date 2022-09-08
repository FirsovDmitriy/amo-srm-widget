import React from 'react'
import { useDispatch } from 'react-redux'
import './App.scss'
import NoteCard from './components/NoteCard'
import WidgetForm from './components/WidgetForm'
import { fetchNotes } from './store/asyncAction/notes'

function App() {

  const dispatch = useDispatch()

  dispatch(fetchNotes())

  return (
    <div className='widget'>
      <div className='widget__container'>
        <WidgetForm />
        <div className='widget__list-notes'>
          <NoteCard className='widget__card' />
        </div>
      </div>
    </div>
  )
}

export default App
