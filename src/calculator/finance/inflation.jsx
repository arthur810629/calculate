import React, { useState } from 'react'

export default function InflationCalculator() {
  const [amount, setAmount]     = useState('')
  const [rate, setRate]         = useState('')
  const [years, setYears]       = useState('')
  const [adjusted, setAdjusted] = useState(null)

  const calculate = () => {
    const P = parseFloat(amount)
    const r = parseFloat(rate) / 100
    const n = parseFloat(years)
    if (!P || !r || !n) {
      setAdjusted(null)
      return
    }
    const future = P * Math.pow(1 + r, n)
    setAdjusted(future.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
      <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Инфляция</span>
      </nav>

      <h1>Калькулятор инфляции</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма сейчас (₽)</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="₽"
            />
          </div>
          <div className="field">
            <label>Инфляция (% годовых)</label>
            <input
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="field">
            <label>Период (лет)</label>
            <input
              type="number"
              value={years}
              onChange={e => setYears(e.target.value)}
              placeholder="лет"
            />
          </div>

          <button className="btn-calc" onClick={calculate}>
            РАССЧИТАТЬ
          </button>

          {adjusted !== null && (
            <div className="result">
              Будущая стоимость: <strong>{adjusted} ₽</strong>
            </div>
          )}
        </section>

        
      </div>

     
    </div>
  )
}
