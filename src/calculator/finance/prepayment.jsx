import React, { useState } from 'react'

export default function PrepaymentCalculator() {
  const [sum, setSum]       = useState('')
  const [rate, setRate]     = useState('')
  const [term, setTerm]     = useState('')
  const [extra, setExtra]   = useState('')
  const [origPayment, setOrigPayment] = useState(null)
  const [newTerm, setNewTerm]         = useState(null)

  const calculate = () => {
    const P = parseFloat(sum)
    const r = parseFloat(rate) / 100 / 12
    const n = parseFloat(term) * 12
    const e = parseFloat(extra)
    if (!P || !r || !n) return

    const A = P * r / (1 - Math.pow(1 + r, -n))
    setOrigPayment(A.toFixed(2))

    const total = A + (e || 0)
    const denom = total - P * r
    if (denom <= 0) {
      setNewTerm(null)
      return
    }
    const newN = Math.log(total / denom) / Math.log(1 + r)
    setNewTerm(Math.ceil(newN))
  }

  const formatTerm = m => {
    if (!m) return null
    const y = Math.floor(m / 12)
    const mm = m % 12
    return `${y} г. ${mm} мес.`
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
      <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Досрочное погашение</span>
      </nav>

      <h1>Кредитный калькулятор с досрочным погашением</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма кредита (₽)</label>
            <input type="number" value={sum} onChange={e => setSum(e.target.value)} placeholder="₽" />
          </div>
          <div className="field">
            <label>Ставка (% годовых)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="%" />
          </div>
          <div className="field">
            <label>Срок кредита (лет)</label>
            <input type="number" value={term} onChange={e => setTerm(e.target.value)} placeholder="лет" />
          </div>
          <div className="field">
            <label>Доп. платёж в месяц (₽)</label>
            <input type="number" value={extra} onChange={e => setExtra(e.target.value)} placeholder="₽" />
          </div>

          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>

          {origPayment !== null && (
            <div className="result">
              <p>Исходный платёж: <strong>{origPayment} ₽</strong></p>
              {newTerm
                ? <p>Новый срок: <strong>{formatTerm(newTerm)}</strong></p>
                : <p>Доплата слишком мала для сокращения срока</p>
              }
            </div>
          )}
        </section>

    
      </div>

   
    </div>
  )
}
