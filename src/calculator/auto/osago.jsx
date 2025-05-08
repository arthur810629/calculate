import React, { useState } from 'react'

export default function OsagoCalculator() {
  const [base, setBase] = useState('')
  const [coeff, setCoeff] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const b = parseFloat(base)
    const k = parseFloat(coeff)
    if (!b || !k) return
    setResult((b * k).toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/auto">Автомобильные калькуляторы</a>
        <span>ОСАГО</span>
      </nav>

      <h1>Калькулятор ОСАГО</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Базовая ставка (₽)</label>
            <input type="number" value={base} onChange={e => setBase(e.target.value)} />
          </div>
          <div className="field">
            <label>Коэффициент (КБМ, регион и пр.)</label>
            <input type="number" value={coeff} onChange={e => setCoeff(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Стоимость ОСАГО: <strong>{result} ₽</strong></div>}
        </section>
        <aside className="calculator-ads"><div className="ad-placeholder">Реклама</div></aside>
      </div>
      <div className="bottom-ads"><div className="ad-placeholder">Реклама внизу</div></div>
    </div>
  )
}