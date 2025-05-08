import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Карта всех калькуляторов по категориям
const CALCULATORS = {
  finance: [
    { id: 'credit', title: 'Кредитный калькулятор' },
    { id: 'mortgage', title: 'Ипотечный калькулятор' },
    { id: 'prepayment', title: 'Кредит с досрочным погашением' },
    { id: 'refinance', title: 'Калькулятор рефинансирования' },
    { id: 'microloan', title: 'Калькулятор микрозаймов' },
    { id: 'inflation', title: 'Калькулятор инфляции' },
  ],
  invest: [
    { id: 'deposit', title: 'Калькулятор вкладов' },
    { id: 'investment', title: 'Калькулятор инвестиций' },
    { id: 'bonds', title: 'Калькулятор доходности облигаций' },
  ],
  tax: [
    { id: 'vat', title: 'Калькулятор НДС' },
    { id: 'pit', title: 'Калькулятор НДФЛ' },
    { id: 'penalties', title: 'Калькулятор пеней' },
    { id: 'property-deduction', title: 'Калькулятор имущественного вычета' },
    { id: 'sale-tax', title: 'Калькулятор налога с продажи квартиры' },
    { id: 'loan-interest', title: 'Калькулятор процентов по займу' },
    { id: 'gk395', title: 'Калькулятор процентов по статье 395 ГК РФ' },
    { id: 'late-fee', title: 'Калькулятор неустойки' },
    { id: 'amount-words', title: 'Сумма прописью' },
    { id: 'work-experience', title: 'Калькулятор стажа' },
  ],
  auto: [
    { id: 'osago', title: 'Калькулятор ОСАГО' },
    { id: 'vehicle-tax', title: 'Калькулятор транспортного налога' },
    { id: 'credit', title: 'Калькулятор автокредита' },
    { id: 'customs', title: 'Калькулятор растаможки автомобилей' },
    { id: 'fuel-consumption', title: 'Калькулятор расхода топлива' },
  ],
}

export default function CategoryPage() {
  const { categoryId } = useParams()
  const items = CALCULATORS[categoryId] || []

  if (!items.length) {
    return (
      <div className="calculator-page container">
        <h1>Категория не найдена</h1>
      </div>
    )
  }

  const titles = {
    finance: 'Финансовые калькуляторы',
    invest: 'Калькуляторы для инвестиций',
    tax: 'Бухгалтерия и налоги',
    auto: 'Автомобильные калькуляторы',
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a> ›
        <span> {titles[categoryId]}</span>
      </nav>

      <h1>{titles[categoryId]}</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="category-grid">
            {items.map(({ id, title }) => (
              <Link
                key={id}
                to={`/calculator/${categoryId}/${id}`}
                className="calc-card"
              >
                {title}
              </Link>
            ))}
          </div>
        </section>

        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама</div>
          <div className="ad-placeholder">Реклама</div>
        </aside>
      </div>

      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу страницы</div>
      </div>
    </div>
  )
}
