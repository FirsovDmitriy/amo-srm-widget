import React from 'react'
import './NoteCard.scss'

const NoteCard = ({ note, edit, remove }) => {
  return (
    <div className='card'>
      <h2 className='card__title'>{ note.title[0].toUpperCase() + note.title.slice(1) }</h2>
      <p className='card__text'>
        { note.body[0].toUpperCase() + note.body.slice(1) }
      </p>
      <div className='card__footer'>
        <button
          onClick={ () => edit(note.id) }
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
