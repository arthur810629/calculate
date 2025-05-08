import React, { useState } from 'react'

export default function FuelConsumption() {
  const [distance, setDistance] = useState('')
  const [consumption, setConsumption] = useState('')
  const [price, setPrice] = useState('')
  const [total, setTotal] = useState(null)

  const calculate = () => {
    const d = parseFloat(distance)
    const c = parseFloat(consumption)
    const p = parseFloat(price)
    if (!d || !c || !p) return
    const liters = (d / 100) * c
    const cost = liters * p
    setTotal(cost.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/auto">Автомобильные калькуляторы</a>
        <span>Расход топлива</span>
      </nav>

      <h1>Калькулятор расхода топлива</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Расстояние (км)</label>
            <input type="number" value={distance} onChange={e => setDistance(e.target.value)} />
          </div>
          <div className="field">
            <label>Расход на 100 км (л)</label>
            <input type="number" value={consumption} onChange={e => setConsumption(e.target.value)} />
          </div>
          <div className="field">
            <label>Цена топлива (₽/л)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {total && <div className="result">Итоговая стоимость: <strong>{total} ₽</strong></div>}
        </section>
        <aside className="calculator-ads"><div className="ad-placeholder">Реклама</div></aside>
      </div>
      <div className="bottom-ads"><div className="ad-placeholder">Реклама внизу</div></div>
    </div>
  )
}