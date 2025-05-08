import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Карта всех наших калькуляторов по категориям
const CALCULATORS = {
  finance: [
    { id: 'credit', title: 'Кредитный калькулятор' },
    { id: 'mortgage', title: 'Ипотечный калькулятор' },
    { id: 'prepayment', title: 'Кредит с досрочным погашением' },
    { id: 'refinance', title: 'Калькулятор рефинансирования' },
    { id: 'microloan', title: 'Калькулятор микрозаймов' },
    { id: 'inflation', title: 'Калькулятор инфляции' },
  ],
  // туда же можно добавить другие категории: invest, tax, auto…
}

export default function CategoryPage() {
  const { categoryId } = useParams()
  const items = CALCULATORS[categoryId] || []

  // Если категория не найдена — показываем 404
  if (!items.length) {
    return (
      <div className="calculator-page container">
        <h1>Категория не найдена</h1>
      </div>
    )
  }

  // Название категории на русском
  const titles = {
    finance: 'Финансовые калькуляторы',
    // invest: 'Калькуляторы для инвестиций', и т.д.
  }

  return (
    <div className="calculator-page container">
      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
        <a href="/">Главная</a> ›
        <span> {titles[categoryId]}</span>
      </nav>

      {/* Заголовок */}
      <h1>{titles[categoryId]}</h1>

      {/* Основной контент: каталог + реклама */}
      <div className="calculator-layout">
        {/* Сетка кнопок-карточек */}
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

        {/* Реклама справа */}
        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама</div>
          <div className="ad-placeholder">Реклама</div>
        </aside>
      </div>

      {/* Реклама внизу */}
      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу страницы</div>
      </div>
    </div>
  )
}
