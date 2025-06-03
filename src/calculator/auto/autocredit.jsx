import React, { useState } from 'react'

export default function AutoCreditCalculator() {
  const [price, setPrice] = useState('')
  const [initial, setInitial] = useState('')
  const [term, setTerm] = useState('')
  const [rate, setRate] = useState('')
  const [payment, setPayment] = useState(null)

  const calculate = () => {
    const p = parseFloat(price) - parseFloat(initial)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(term) * 12
    if (!p || !r || !n) return
    const monthly = p * r / (1 - Math.pow(1 + r, -n))
    setPayment(monthly.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/auto">Автомобильные калькуляторы</a>
        <span>Автокредит</span>
      </nav>

      <h1>Калькулятор автокредита</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Стоимость авто (₽)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="field">
            <label>Первоначальный взнос (₽)</label>
            <input type="number" value={initial} onChange={e => setInitial(e.target.value)} />
          </div>
          <div className="field">
            <label>Срок (лет)</label>
            <input type="number" value={term} onChange={e => setTerm(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {payment && <div className="result">Платёж: <strong>{payment} ₽</strong></div>}
        </section>
        <aside className="calculator-ads"><div className="ad-placeholder">Реклама</div></aside>
      </div>
      <div className="bottom-ads"><div className="ad-placeholder">Реклама внизу</div></div>
    </div>
  )
}