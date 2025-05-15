import React, { useState } from 'react'

export default function GK395Calculator() {
  const [debt, setDebt] = useState('')
  const [rate, setRate] = useState('')
  const [days, setDays] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const d = parseFloat(debt)
    const r = parseFloat(rate) / 100 / 365
    const t = parseFloat(days)
    if (!d || !r || !t) return
    const res = d * r * t
    setResult(res.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Статья 395 ГК РФ</span>
      </nav>

      <h1>Калькулятор процентов по ст. 395 ГК РФ</h1>

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
            <label>Срок (дней)</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Сумма процентов: <strong>{result} ₽</strong></div>}
        </section>
      
      </div>
     
    </div>
  )
}