import React, { useState } from 'react'

export default function PriceYears() {
  const [price1, setPrice1] = useState('')
  const [price2, setPrice2] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const p1 = parseFloat(price1)
    const p2 = parseFloat(price2)
    if (!p1 || !p2) return
    const diff = ((p2 - p1) / p1) * 100
    setResult(diff.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/priceComparison">Сравнение цен</a>
        <span>Сравнение стоимости</span>
      </nav>

      <h1>Калькулятор сравнения стоимости</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Цена 1 (₽)</label>
            <input type="number" value={price1} onChange={e => setPrice1(e.target.value)} />
          </div>
          <div className="field">
            <label>Цена 2 (₽)</label>
            <input type="number" value={price2} onChange={e => setPrice2(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result !== null && (
            <div className="result">Разница: <strong>{result}%</strong></div>
          )}
        </section>
      </div>
    </div>
  )
}
