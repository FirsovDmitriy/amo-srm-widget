import React from 'react'
import './Popup.scss'

const Popup = ({ active }) => {

  return (
    <div className={ active ? 'popup popup--active' : 'popup' }>
      <div className="popup__overlay">
        <div className="popup__content">
          popup
          <button className='popup__close'>close</button>
        </div>
      </div>
    </div>
  )
}

export default Popup
