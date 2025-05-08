// src/components/Header.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaUniversity,
  FaPiggyBank,
  FaCalculator,
  FaCar,
  FaCalendarDay,
  FaFileInvoice
} from 'react-icons/fa'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <NavLink to="/">ReactCalculators</NavLink>
        </div>

        <nav className="site-nav" aria-label="Основное меню">
          <NavLink to="/" className="nav-link">Главная</NavLink>

          {/* Пункт с мегадропдауном */}
          <div
            className="nav-item mega-parent"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="nav-link btn-mega-toggle"
              aria-haspopup="true"
              aria-expanded={megaOpen}
            >
              Финансовые ▾
            </button>

            <div className={`mega-menu ${megaOpen ? 'open' : ''}`} role="menu">
              {/* Колонка 1 */}
              <div className="mega-section">
                <h4><FaUniversity /> Кредиты</h4>
                <NavLink to="/calculator/finance/credit" className="mega-link">Кредитный</NavLink>
                <NavLink to="/calculator/finance/mortgage" className="mega-link">Ипотечный</NavLink>
                <NavLink to="/calculator/finance/prepayment" className="mega-link">С досрочным погашением</NavLink>
              </div>
              {/* Колонка 2 */}
              <div className="mega-section">
                <h4><FaPiggyBank /> Инвестиции</h4>
                <NavLink to="/calculator/finance/deposit" className="mega-link">Вклады</NavLink>
                <NavLink to="/calculator/finance/investment" className="mega-link">Инвестиции</NavLink>
                <NavLink to="/calculator/finance/bonds" className="mega-link">Облигации</NavLink>
              </div>
              {/* Колонка 3 */}
              <div className="mega-section">
                <h4><FaCalculator /> Налоги</h4>
                <NavLink to="/calculator/finance/nds" className="mega-link">НДС</NavLink>
                <NavLink to="/calculator/finance/pit" className="mega-link">НДФЛ</NavLink>
                <NavLink to="/calculator/finance/penalties" className="mega-link">Пени</NavLink>
              </div>
              {/* Колонка 4 */}
              <div className="mega-section">
                <h4><FaCalendarDay /> Прочее</h4>
                <NavLink to="/calculator/finance/inflation" className="mega-link">Инфляция</NavLink>
                <NavLink to="/calculator/finance/refinance" className="mega-link">Рефинансирование</NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/category/invest" className="nav-link">Инвестиции</NavLink>
          <NavLink to="/category/tax" className="nav-link">Налоги</NavLink>
          <NavLink to="/category/auto" className="nav-link">Авто</NavLink>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >☰</button>
      </div>
    </header>
  )
}
