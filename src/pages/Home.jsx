// src/pages/Home.jsx

import React from "react"
import { Link } from "react-router-dom"
import {
  FaUniversity,
  FaPiggyBank,
  FaCalculator,
  FaCar
} from "react-icons/fa"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Добро пожаловать в React Calculators</h1>
        <div className="home-categories">
          <Link to="/category/finance" className="home-card">
            <FaUniversity size={32} />
            <span>Финансовые калькуляторы</span>
          </Link>
          <Link to="/category/invest" className="home-card">
            <FaPiggyBank size={32} />
            <span>Калькуляторы для инвестиций</span>
          </Link>
          <Link to="/category/tax" className="home-card">
            <FaCalculator size={32} />
            <span>Бухгалтерия и налоги</span>
          </Link>
          <Link to="/category/auto" className="home-card">
            <FaCar size={32} />
            <span>Автомобильные калькуляторы</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
