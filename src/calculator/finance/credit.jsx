import React, { useState } from 'react'

export default function CreditCalculator() {
  const [sum, setSum]       = useState('')
  const [term, setTerm]     = useState('')
  const [rate, setRate]     = useState('')
  const [payment, setPayment] = useState(null)

  const calculate = () => {
    const P = parseFloat(sum)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(term) * 12
    if (!P || !r || !n) return
    const A = P * r / (1 - Math.pow(1 + r, -n))
    setPayment(A.toFixed(2))
  }

  return (
    <div className="calculator-page container">
     <nav className="breadcrumbs">
  <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Кредитный калькулятор</span>
</nav>


      <h1>Кредитный калькулятор</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма кредита (₽)</label>
            <input
              type="number"
              value={sum}
              onChange={e => setSum(e.target.value)}
              placeholder="₽"
            />
          </div>
          <div className="field">
            <label>Срок кредита (лет)</label>
            <input
              type="number"
              value={term}
              onChange={e => setTerm(e.target.value)}
              placeholder="лет"
            />
          </div>
          <div className="field">
            <label>Процентная ставка (%)</label>
            <input
              type="number"
              value={rate}
              onChange={e => setRate(e.target.value)}
              placeholder="%"
            />
          </div>

          <button className="btn-calc" onClick={calculate}>
            РАССЧИТАТЬ
          </button>

          {payment !== null && (
            <div className="result">
              Ежемесячный платёж: <strong>{payment} ₽</strong>
            </div>
          )}
        </section>

     
      </div>

   
    </div>
  )
}
