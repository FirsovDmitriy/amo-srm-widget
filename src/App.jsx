import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NoteCard from './components/NoteCard'
import TheHeader from './components/TheHeader'
import WidgetForm from './components/WidgetForm'
import { fetchNotes } from './store/asyncAction/notes'
import './App.scss'
import Popup from './components/Popup/Popup'

const App = () => {

  const [active, setActive] = useState(false)

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  const addNote = newPost => {
    dispatch({ type: 'ADD_NOTE', payload: newPost })
  }

  const editNote = id => {
    console.log(id)
    dispatch({ type: 'EDIT_NOTE', payload: id })
  }

  const removeNote = id => {
    dispatch({ type: 'REMOVE_NOTE', payload: id })
  }
 
  return (
    <div className='widget'>
      <TheHeader />
      <div className='widget__container'>
        <WidgetForm addNote={ addNote } />
        {
            notes.length > 0 ?

              <div className='widget__list-notes'>
                {
                  notes.map(note =>
                    <NoteCard
                      note={ note }
                      key={ note.id }
                      edit={ editNote }
                      remove={ removeNote }
                      className='widget__card'
                    /> 
                  )
                }
              </div>
              :
              <div>
                Пусто
              </div>
        }
      </div>
      {/* /.widget__container */}
      <Popup active={ active } />
    </div>
  )
}

export default App
