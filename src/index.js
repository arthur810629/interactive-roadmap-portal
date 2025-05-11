import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // глобальные стили: переменные, reset, базовая типографика

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
