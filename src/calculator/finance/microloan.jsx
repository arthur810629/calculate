import React, { useState } from 'react'

export default function MicroloanCalculator() {
  const [sum, setSum]       = useState('')
  const [rate, setRate]     = useState('')
  const [days, setDays]     = useState('')
  const [total, setTotal]   = useState(null)

  const calculate = () => {
    const P = parseFloat(sum)
    const r = parseFloat(rate) / 100
    const n = parseFloat(days)
    if (!P || !r || !n) {
      setTotal(null)
      return
    }
    const interest = P * r * n
    setTotal((P + interest).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
      <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Микрозаймы</span>
      </nav>

      <h1>Калькулятор микрозаймов</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма займа (₽)</label>
            <input
              type="number"
              value={sum}
              onChange={e => setSum(e.target.value)}
              placeholder="₽"
            />
          </div>
          <div className="field">
            <label>Ставка (% в день)</label>
            <input
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="field">
            <label>Срок (дней)</label>
            <input
              type="number"
              value={days}
              onChange={e => setDays(e.target.value)}
              placeholder="дней"
            />
          </div>

          <button className="btn-calc" onClick={calculate}>
            РАССЧИТАТЬ
          </button>

          {total !== null && (
            <div className="result">
              К возврату: <strong>{total} ₽</strong>
            </div>
          )}
        </section>

      
      </div>

      
      
    </div>
  )
}
