import React, { useState } from 'react'

export default function LoanInterestCalculator() {
  const [sum, setSum] = useState('')
  const [rate, setRate] = useState('')
  const [days, setDays] = useState('')
  const [interest, setInterest] = useState(null)

  const calculate = () => {
    const s = parseFloat(sum)
    const r = parseFloat(rate) / 100 / 365
    const d = parseFloat(days)
    if (!s || !r || !d) return
    const result = s * r * d
    setInterest(result.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Проценты по займу</span>
      </nav>

      <h1>Калькулятор процентов по займу</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма займа (₽)</label>
            <input type="number" value={sum} onChange={e => setSum(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <div className="field">
            <label>Срок (дней)</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {interest !== null && <div className="result">Сумма процентов: <strong>{interest} ₽</strong></div>}
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