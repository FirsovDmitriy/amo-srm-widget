import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App'
import './styles/index.scss'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('list_page_holder'))
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)
