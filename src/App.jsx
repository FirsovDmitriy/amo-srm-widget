import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NoteCard from './components/NoteCard'
import TheHeader from './components/TheHeader'
import WidgetForm from './components/WidgetForm'
import './App.scss'
import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from './store/notesSlice'
import { getNotes } from './store/asyncAction/notes'

const App = () => {



  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
  console.log('notes', notes)

  // useEffect(() => {
  //   dispatch(fetchNotes())
  // }, [dispatch])

  // ----

  const { data } = getNotes()
  console.log('data', data)

  // ------------------

  const addNote = newNote => {
    // dispatch({ type: 'ADD_NOTE', payload: newPost })
    dispatch(ADD_NOTE(newNote))
  }

  const saveNote = (editedNote) => {
    dispatch(EDIT_NOTE(editedNote))
  }

  const removeNote = id => {
    // dispatch({ type: 'REMOVE_NOTE', payload: id })
    dispatch(REMOVE_NOTE({ id }))
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
                      save={ saveNote }
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
    </div>
  )
}

export default App
