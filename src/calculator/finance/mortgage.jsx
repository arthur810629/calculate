import React, { useState } from 'react'

export default function MortgageCalculator() {
  const [price, setPrice]   = useState('')
  const [down, setDown]     = useState('')
  const [term, setTerm]     = useState('')
  const [rate, setRate]     = useState('')
  const [payment, setPayment] = useState(null)

  const calculate = () => {
    const P = parseFloat(price) - parseFloat(down)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(term) * 12
    if (!P || !r || !n) return
    const A = P * r / (1 - Math.pow(1 + r, -n))
    setPayment(A.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
      <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Ипотечный калькулятор</span>
      </nav>

      <h1>Ипотечный калькулятор</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Цена недвижимости (₽)</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="₽"
            />
          </div>
          <div className="field">
            <label>Первоначальный взнос (₽)</label>
            <input
              type="number"
              value={down}
              onChange={e => setDown(e.target.value)}
              placeholder="₽"
            />
          </div>
          <div className="field">
            <label>Срок кредита (лет)</label>
            <input
              type="number"
              value={term}
              onChange={e => setTerm(e.target.value)}
              placeholder="лет"
            />
          </div>
          <div className="field">
            <label>Ставка (% годовых)</label>
            <input
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              placeholder="%"
            />
          </div>

          <button className="btn-calc" onClick={calculate}>
            РАССЧИТАТЬ
          </button>

          {payment !== null && (
            <div className="result">
              Ежемесячный платёж: <strong>{payment} ₽</strong>
            </div>
          )}
        </section>

        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама 1</div>
          <div className="ad-placeholder">Реклама 2</div>
        </aside>
      </div>

      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу страницы</div>
      </div>
    </div>
  )
}

