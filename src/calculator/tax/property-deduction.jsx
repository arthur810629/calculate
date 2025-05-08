import React, { useState } from 'react'

export default function PropertyDeductionCalculator() {
  const [cost, setCost] = useState('')
  const [tax, setTax] = useState(null)

  const calculate = () => {
    const c = parseFloat(cost)
    if (!c) return
    const maxDeduction = Math.min(c, 2000000)
    const result = maxDeduction * 0.13
    setTax(result.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Имущественный вычет</span>
      </nav>

      <h1>Калькулятор имущественного вычета</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Стоимость недвижимости (₽)</label>
            <input type="number" value={cost} onChange={e => setCost(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {tax && <div className="result">Максимальный вычет: <strong>{tax} ₽</strong></div>}
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