import React, { useState } from 'react'

export default function SaleTaxCalculator() {
  const [price, setPrice] = useState('')
  const [cost, setCost] = useState('')
  const [tax, setTax] = useState(null)

  const calculate = () => {
    const p = parseFloat(price)
    const c = parseFloat(cost)
    if (!p || !c) return
    const income = p - c
    const result = income > 0 ? income * 0.13 : 0
    setTax(result.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Налог с продажи квартиры</span>
      </nav>

      <h1>Калькулятор налога с продажи квартиры</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Цена продажи (₽)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="field">
            <label>Цена покупки (₽)</label>
            <input type="number" value={cost} onChange={e => setCost(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {tax !== null && <div className="result">Налог к уплате: <strong>{tax} ₽</strong></div>}
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