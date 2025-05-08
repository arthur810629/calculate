// src/pages/Home.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { FaUniversity, FaPiggyBank, FaCalculator, FaCar } from 'react-icons/fa'
import './Home.css'

export default function Home() {
  const categories = [
    {
      id: 'finance',
      title: 'Финансовые калькуляторы',
      icon: <FaUniversity size={20} />,
      items: [
        { id: 'credit',       title: 'Кредитный калькулятор' },
        { id: 'mortgage',     title: 'Ипотечный калькулятор' },
        { id: 'prepayment',   title: 'Кредитный калькулятор с досрочным погашением' },
        { id: 'refinance',    title: 'Калькулятор рефинансирования' },
        { id: 'microloan',    title: 'Калькулятор микрозаймов' },
        { id: 'inflation',    title: 'Калькулятор инфляции' },
      ],
    },
    {
      id: 'invest',
      title: 'Калькуляторы для инвестиций',
      icon: <FaPiggyBank size={20} />,
      items: [
        { id: 'deposit',     title: 'Калькулятор вкладов' },
        { id: 'investment',  title: 'Калькулятор инвестиций' },
        { id: 'bonds',       title: 'Калькулятор доходности облигаций' },
      ],
    },
    {
      id: 'tax',
      title: 'Бухгалтерия и налоги',
      icon: <FaCalculator size={20} />,
      items: [
        { id: 'vat',              title: 'Калькулятор НДС' },
        { id: 'pit',              title: 'Калькулятор НДФЛ' },
        { id: 'penalties',        title: 'Калькулятор пеней' },
        { id: 'property-deduction', title: 'Калькулятор имущественного вычета' },
        { id: 'sale-tax',         title: 'Калькулятор налога с продажи квартиры' },
        { id: 'loan-interest',    title: 'Калькулятор процентов по займу' },
        { id: 'gk395',            title: 'Калькулятор процентов по статье 395 ГК РФ' },
        { id: 'late-fee',         title: 'Калькулятор неустойки' },
        { id: 'amount-words',     title: 'Сумма прописью' },
        { id: 'work-experience',  title: 'Калькулятор стажа' },
      ],
    },
    {
      id: 'auto',
      title: 'Автомобильные калькуляторы',
      icon: <FaCar size={20} />,
      items: [
        { id: 'osago',           title: 'Калькулятор ОСАГО' },
        { id: 'vehicle-tax',     title: 'Калькулятор транспортного налога' },
        { id: 'credit',          title: 'Калькулятор автокредита' },
        { id: 'customs',         title: 'Калькулятор растаможки автомобилей' },
        { id: 'fuel-consumption', title: 'Калькулятор расхода топлива' },
      ],
    },
  ]

  return (
    <main className="home container">
      {categories.map(cat => (
        <section key={cat.id} className="home__section">
          <h2 className="home__title">
            <span className="home__icon" aria-hidden="true">{cat.icon}</span>
            {cat.title}
          </h2>
          <div className="home__list">
            {cat.items.map(item => (
              <Link
                key={item.id}
                to={`/calculator/${cat.id}/${item.id}`}
                className="home__link"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
