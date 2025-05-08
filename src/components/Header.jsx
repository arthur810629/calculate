import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaThLarge } from 'react-icons/fa'
import './Header.css'

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">ReactCalculators</NavLink>

        <nav className="site-nav" aria-label="Инструменты">
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
              <FaThLarge size={16} />
              <span>Калькуляторы</span>
            </button>

            <div className={`mega-menu${megaOpen ? ' open' : ''}`} role="menu">
              <div className="mega-section">
                <h4>Финансы</h4>
                <NavLink to="/category/finance" className="mega-link">Все финансы</NavLink>
                <NavLink to="/calculator/finance/credit"     className="mega-link">Кредитный</NavLink>
                <NavLink to="/calculator/finance/mortgage"   className="mega-link">Ипотечный</NavLink>
                <NavLink to="/calculator/finance/prepayment" className="mega-link">Досрочное погашение</NavLink>
                <NavLink to="/calculator/finance/inflation"  className="mega-link">Инфляция</NavLink>
                <NavLink to="/calculator/finance/microloan"  className="mega-link">Микрозаймы</NavLink>
                <NavLink to="/calculator/finance/deposit-online" className="mega-link">Вклады онлайн</NavLink>
                <NavLink to="/calculator/finance/repayment"  className="mega-link">Погашение кредита</NavLink>
                <NavLink to="/calculator/finance/ip"         className="mega-link">ИП-калькулятор</NavLink>
              </div>

              <div className="mega-section">
                <h4>Инвестиции</h4>
                <NavLink to="/category/invest"              className="mega-link">Все инвестиции</NavLink>
                <NavLink to="/calculator/invest/deposit"    className="mega-link">Вклады</NavLink>
                <NavLink to="/calculator/invest/investment" className="mega-link">Инвестиции</NavLink>
                <NavLink to="/calculator/invest/bonds"      className="mega-link">Облигации</NavLink>
              </div>

              <div className="mega-section">
                <h4>Налоги</h4>
                <NavLink to="/category/accounting"              className="mega-link">Все налоги</NavLink>
                <NavLink to="/calculator/accounting/nds"        className="mega-link">НДС</NavLink>
                <NavLink to="/calculator/accounting/pit"        className="mega-link">НДФЛ</NavLink>
                <NavLink to="/calculator/accounting/penalties"  className="mega-link">Пени</NavLink>
              </div>

              <div className="mega-section">
                <h4>Авто</h4>
                <NavLink to="/category/auto"                className="mega-link">Все авто</NavLink>
                <NavLink to="/calculator/auto/osago"        className="mega-link">ОСАГО</NavLink>
                <NavLink to="/calculator/auto/fuel"         className="mega-link">Расход топлива</NavLink>
                <NavLink to="/calculator/auto/autocredit"   className="mega-link">Автокредит</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
)
}
