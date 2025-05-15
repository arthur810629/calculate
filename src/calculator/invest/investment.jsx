import React, { useState } from 'react'

export default function InvestmentCalculator() {
  const [initial, setInitial] = useState('')
  const [monthly, setMonthly] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [futureValue, setFutureValue] = useState(null)

  const calculate = () => {
    const P = parseFloat(initial)
    const PMT = parseFloat(monthly)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(years) * 12
    if (isNaN(P) || isNaN(PMT) || isNaN(r) || isNaN(n)) return

    const future = P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r)
    setFutureValue(future.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/invest">Калькуляторы для инвестиций</a>
        <span>Инвестиции</span>
      </nav>

      <h1>Калькулятор инвестиций</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Начальная сумма (₽)</label>
            <input type="number" value={initial} onChange={e => setInitial(e.target.value)} />
          </div>
          <div className="field">
            <label>Ежемесячное пополнение (₽)</label>
            <input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка доходности (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <div className="field">
            <label>Период инвестирования (лет)</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {futureValue && <div className="result">Итоговая сумма: <strong>{futureValue} ₽</strong></div>}
        </section>
     
      </div>
     
    </div>
  )
}