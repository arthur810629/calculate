// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './styles/calculators.css'   // ← здесь импортируем общий стиль

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

import './i18n/i18n' // ← путь к твоей инициализации

import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
