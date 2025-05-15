import React, { useState } from 'react'

export default function LateFeeCalculator() {
  const [amount, setAmount] = useState('')
  const [percent, setPercent] = useState('')
  const [days, setDays] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = parseFloat(amount)
    const p = parseFloat(percent) / 100
    const d = parseFloat(days)
    if (!a || !p || !d) return
    const res = a * p * d
    setResult(res.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Неустойка</span>
      </nav>

      <h1>Калькулятор неустойки</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма обязательства (₽)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="field">
            <label>Процент неустойки в день (%)</label>
            <input type="number" value={percent} onChange={e => setPercent(e.target.value)} />
          </div>
          <div className="field">
            <label>Срок просрочки (дней)</label>
            <input type="number" value={days} onChange={e => setDays(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Сумма неустойки: <strong>{result} ₽</strong></div>}
        </section>
      
      </div>
     
    </div>
  )
}