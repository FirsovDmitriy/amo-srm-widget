import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import NoteCard from './components/NoteCard'
import WidgetForm from './components/WidgetForm'
import { fetchNotes } from './store/asyncAction/notes'

function App() {

  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  console.log(notes)

  return (
    <div className='widget'>
      <div className='widget__container'>
        <WidgetForm />
        {
            notes.length > 0 ?

              <div className='widget__list-notes'>
                {
                  notes.map(note =>
                    <NoteCard className='widget__card' key={ note.id } /> 
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
