import React, { useState } from 'react'

export default function PitCalculator() {
  const [income, setIncome] = useState('')
  const [rate, setRate] = useState('13')
  const [tax, setTax] = useState(null)

  const calculate = () => {
    const inc = parseFloat(income)
    const r = parseFloat(rate)
    if (!inc || !r) return
    const result = inc * r / 100
    setTax(result.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>НДФЛ</span>
      </nav>

      <h1>Калькулятор НДФЛ</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Доход (₽)</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка НДФЛ (%)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {tax !== null && <div className="result">Сумма НДФЛ: <strong>{tax} ₽</strong></div>}
        </section>
    
      </div>
      
    </div>
  )
}