import React, { useState } from 'react'

export default function PercentCalculator() {
  const [base, setBase] = useState('')
  const [percent, setPercent] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const b = parseFloat(base)
    const p = parseFloat(percent)
    if (!b || !p) return
    setResult((b * p / 100).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/math">Математика</a>
        <span>Проценты</span>
      </nav>

      <h1>Калькулятор процентов</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Число</label>
            <input type="number" value={base} onChange={e => setBase(e.target.value)} />
          </div>
          <div className="field">
            <label>Процент (%)</label>
            <input type="number" value={percent} onChange={e => setPercent(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result !== null && (
            <div className="result">{percent}% от {base} = <strong>{result}</strong></div>
          )}
        </section>
      </div>
    </div>
  )
}
