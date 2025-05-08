// src/components/Header.jsx

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(open => !open)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <NavLink to="/" aria-label="На главную">
            ReactCalculators
          </NavLink>
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className={`site-nav${menuOpen ? ' open' : ''}`} aria-label="Основное меню">
          <NavLink to="/"                className="nav-link" onClick={() => setMenuOpen(false)}>
            Главная
          </NavLink>
          <NavLink to="/category/finance" className="nav-link" onClick={() => setMenuOpen(false)}>
            Финансовые
          </NavLink>
          <NavLink to="/category/invest"   className="nav-link" onClick={() => setMenuOpen(false)}>
            Инвестиции
          </NavLink>
          <NavLink to="/category/tax"      className="nav-link" onClick={() => setMenuOpen(false)}>
            Налоги
          </NavLink>
          <NavLink to="/category/auto"     className="nav-link" onClick={() => setMenuOpen(false)}>
            Авто
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
