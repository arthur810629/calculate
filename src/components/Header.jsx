import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const changeLang = (lng) => i18n.changeLanguage(lng)

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">React Calculators</div>
        <nav className="site-nav">
          <a href="/" className="nav-link">Главная</a>
        </nav>
        <div className="lang-switcher">
          <button
            onClick={() => changeLang('ru')}
            className={`nav-link lang-btn ${current === 'ru' ? 'active' : ''}`}
          >
            RU
          </button>
          <button
            onClick={() => changeLang('en')}
            className={`nav-link lang-btn ${current === 'en' ? 'active' : ''}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
