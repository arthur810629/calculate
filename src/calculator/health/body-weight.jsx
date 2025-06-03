import React, { useState } from 'react'

export default function BodyWeightCalculator() {
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const h = parseFloat(height)
    if (!h) return
    const weight = gender === 'female' ? (h - 100) * 0.85 : (h - 100) * 0.9
    setResult(weight.toFixed(1))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/health">Здоровье</a>
        <span>Вес</span>
      </nav>

      <h1>Калькулятор идеального веса</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Рост (см)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
          </div>
          <div className="field">
            <label>Пол</label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && (
            <div className="result">Идеальный вес: <strong>{result} кг</strong></div>
          )}
        </section>
      </div>
    </div>
  )
}
