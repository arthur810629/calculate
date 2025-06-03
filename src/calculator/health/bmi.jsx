import React, { useState } from 'react'

export default function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const calculate = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100
    if (!w || !h) return
    setBmi((w / (h * h)).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/health">Здоровье</a>
        <span>ИМТ</span>
      </nav>

      <h1>Калькулятор индекса массы тела</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Вес (кг)</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
          </div>
          <div className="field">
            <label>Рост (см)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {bmi && <div className="result">ИМТ: <strong>{bmi}</strong></div>}
        </section>
      </div>
    </div>
  )
}
