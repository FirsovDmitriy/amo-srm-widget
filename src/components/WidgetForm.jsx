import React, { useState } from 'react'
import './WidgetForm.scss'

const WidgetForm = ({ addNote }) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const createNote = event => {
    event.preventDefault()
    const newNote = {
      id: Date.now(),
      title: title,
      body: text
    }
    addNote(newNote)
    setTitle('')
    setText('')
  }

  return (
    <form className='form'  onSubmit={ createNote }>

      <div className="form__row">
        <input
          onChange={ event => setTitle(event.target.value) }
          value={ title }
          className='form__control'
          type="text"
          placeholder='Заголовок заметки'
        />
      </div>

      <div className="form__row">
        <input
          onChange={ event => setText(event.target.value) }
          value={ text }
          className='form__control'
          type="text"
          placeholder='Текст заметки'
        />
      </div>

      <div className="form__row">
        <button
          type='submit'
          className="form__button"
        >
          Создать
        </button>
      </div>

    </form>
  )
}

export default WidgetForm
