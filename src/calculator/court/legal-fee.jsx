import React, { useState } from 'react'

export default function LegalFeeCalculator() {
  const [claim, setClaim] = useState('')
  const [fee, setFee] = useState(null)

  const calculate = () => {
    const c = parseFloat(claim)
    if (!c) return
    const f = c * 0.04
    setFee(f.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/court">Суд</a>
        <span>Госпошлина</span>
      </nav>

      <h1>Калькулятор госпошлины</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма иска (₽)</label>
            <input type="number" value={claim} onChange={e => setClaim(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {fee !== null && (
            <div className="result">Госпошлина: <strong>{fee} ₽</strong></div>
          )}
        </section>
      </div>
    </div>
  )
}
