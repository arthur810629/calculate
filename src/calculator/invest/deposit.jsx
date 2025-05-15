import React, { useState } from 'react'

export default function DepositCalculator() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const P = parseFloat(amount)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(months)
    if (!P || !r || !n) return
    const total = P * Math.pow(1 + r, n)
    setResult(total.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/invest">Калькуляторы для инвестиций</a>
        <span>Вклад</span>
      </nav>

      <h1>Калькулятор вкладов</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма вклада (₽)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="field">
            <label>Процентная ставка (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <div className="field">
            <label>Срок (месяцев)</label>
            <input type="number" value={months} onChange={e => setMonths(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Итоговая сумма: <strong>{result} ₽</strong></div>}
        </section>
     
      </div>
      
    </div>
  )
}