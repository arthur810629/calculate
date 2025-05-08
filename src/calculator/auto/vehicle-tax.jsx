import React, { useState } from 'react'

export default function VehicleTaxCalculator() {
  const [power, setPower] = useState('')
  const [rate, setRate] = useState('')
  const [tax, setTax] = useState(null)

  const calculate = () => {
    const hp = parseFloat(power)
    const r = parseFloat(rate)
    if (!hp || !r) return
    setTax((hp * r).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/auto">Автомобильные калькуляторы</a>
        <span>Транспортный налог</span>
      </nav>

      <h1>Калькулятор транспортного налога</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Мощность (л.с.)</label>
            <input type="number" value={power} onChange={e => setPower(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка налога (₽/л.с.)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {tax && <div className="result">Налог: <strong>{tax} ₽</strong></div>}
        </section>
        <aside className="calculator-ads"><div className="ad-placeholder">Реклама</div></aside>
      </div>
      <div className="bottom-ads"><div className="ad-placeholder">Реклама внизу</div></div>
    </div>
  )
}