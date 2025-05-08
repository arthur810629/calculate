import React, { useState } from 'react'

export default function CustomsCalculator() {
  const [price, setPrice] = useState('')
  const [dutyRate, setDutyRate] = useState('')
  const [customs, setCustoms] = useState(null)

  const calculate = () => {
    const p = parseFloat(price)
    const r = parseFloat(dutyRate) / 100
    if (!p || !r) return
    setCustoms((p * r).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/auto">Автомобильные калькуляторы</a>
        <span>Растаможка</span>
      </nav>

      <h1>Калькулятор растаможки автомобиля</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Стоимость авто (₽)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка пошлины (%)</label>
            <input type="number" value={dutyRate} onChange={e => setDutyRate(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {customs && <div className="result">Сумма пошлины: <strong>{customs} ₽</strong></div>}
        </section>
        <aside className="calculator-ads"><div className="ad-placeholder">Реклама</div></aside>
      </div>
      <div className="bottom-ads"><div className="ad-placeholder">Реклама внизу</div></div>
    </div>
  )
}