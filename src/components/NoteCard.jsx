import React, { useState } from 'react'
import './NoteCard.scss'

const NoteCard = ({ note, save, remove }) => {

  const [isEdit, setIsEdit] = useState(false)

  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.body)

  const edit = () => {
    setIsEdit(true)
  }

  const saveNote = () => {
    const editedNote = {
      id: note.id,
      title: title,
      body: text
    }
    save(editedNote)
    setIsEdit(false)
  }

  return (
    <div className='card'>

      <div className="card__row">
        {
          isEdit ?
            <input
              onChange={ event => setTitle(event.target.value) }
              value={ title }
              className='card__control card__control--first'
            />
            :
            <h2 className='card__title'>{ note.title[0].toUpperCase() + note.title.slice(1) }</h2>
        }
      </div>

      <div className="card__row">
        {
          isEdit ?
            <textarea
              onChange={ event => setText(event.target.value) }
              value={ text }
              className='card__control card__control--last'
              cols='60'
              rows='4'
            >
            </textarea>
            :
            <p className='card__text'>
              { note.body[0].toUpperCase() + note.body.slice(1) }
            </p>
        }
      </div>

      {
        isEdit ? 
          <div className="card__row">
            <button onClick={ saveNote } className='card__button'>Сохранить</button>
          </div>
          : null
      }

      { /* ------------ card__footer ------- */ }
      <div className='card__footer'>
        <button
          onClick={ edit }
          className='card__button'
        >
          Редактировать
        </button>
        <button
          onClick={ () => remove(note.id) }
          className='card__button'
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default NoteCard
