import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">React Calculators</div>
        <nav className="site-nav">
          <a href="#" className="nav-link">Главная</a>
        </nav>
      </div>
    </header>
  )
}
