import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NoteCard from './components/NoteCard'
import TheHeader from './components/TheHeader'
import WidgetForm from './components/WidgetForm'
import { fetchNotes } from './store/asyncAction/notes'
import './App.scss'

const App = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  const addNote = newPost => {
    dispatch({ type: 'ADD_NOTE', payload: newPost })
  }

  const saveNote = (editedNote) => {
    console.log(editedNote)
    dispatch({ type: 'EDIT_NOTE', payload: editedNote })
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
