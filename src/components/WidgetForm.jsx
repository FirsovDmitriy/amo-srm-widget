import React from 'react'
import './WidgetForm.scss'

const WidgetForm = () => {
  return (
    <form className='form'>

      <div className="form__row">
        <label className='form__label'>Заголовок</label>
        <input className='form__control' type="text" />
      </div>

      <div className="form__row">
        <label className='form__label'>Описание</label>
        <input className='form__control' type="text" />
      </div>

      <div className="form__row">
        <button className="form__button">Создать</button>
      </div>

    </form>
  )
}

export default WidgetForm
