import React, { useState } from 'react'

export default function BondsCalculator() {
  const [price, setPrice] = useState('')
  const [coupon, setCoupon] = useState('')
  const [nominal, setNominal] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const P = parseFloat(price)
    const C = parseFloat(coupon)
    const N = parseFloat(nominal)
    const Y = parseFloat(years)
    if (!P || !C || !N || !Y) return

    const annualIncome = C + (N - P) / Y
    const yieldPercent = (annualIncome / P) * 100
    setResult(yieldPercent.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/invest">Калькуляторы для инвестиций</a>
        <span>Облигации</span>
      </nav>

      <h1>Калькулятор доходности облигаций</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Цена покупки (₽)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="field">
            <label>Купон в год (₽)</label>
            <input type="number" value={coupon} onChange={e => setCoupon(e.target.value)} />
          </div>
          <div className="field">
            <label>Номинал облигации (₽)</label>
            <input type="number" value={nominal} onChange={e => setNominal(e.target.value)} />
          </div>
          <div className="field">
            <label>Срок до погашения (лет)</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Доходность: <strong>{result} % годовых</strong></div>}
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