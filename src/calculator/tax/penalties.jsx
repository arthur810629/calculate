import React, { useState } from 'react'

export default function PenaltiesCalculator() {
  const [debt, setDebt] = useState('')
  const [rate, setRate] = useState('')
  const [days, setDays] = useState('')
  const [penalty, setPenalty] = useState(null)

  const calculate = () => {
    const sum = parseFloat(debt)
    const r = parseFloat(rate) / 100 / 365
    const n = parseFloat(days)
    if (!sum || !r || !n) return
    const result = sum * r * n
    setPenalty(result.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Пени</span>
      </nav>

      <h1>Калькулятор пеней</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма долга (₽)</label>
            <input type="number" value={debt} onChange={e => setDebt(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <div className="field">
            <label>Просрочка (дней)</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {penalty && <div className="result">Сумма пени: <strong>{penalty} ₽</strong></div>}
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