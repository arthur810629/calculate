import React, { useState } from 'react'

export default function VatCalculator() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('20')
  const [vat, setVat] = useState(null)

  const calculate = () => {
    const sum = parseFloat(amount)
    const r = parseFloat(rate)
    if (!sum || !r) return
    const vatAmount = sum * r / (100 + r)
    setVat(vatAmount.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>НДС</span>
      </nav>

      <h1>Калькулятор НДС</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма с НДС (₽)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="field">
            <label>Ставка НДС (%)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {vat !== null && <div className="result">Сумма НДС: <strong>{vat} ₽</strong></div>}
        </section>
  
      </div>
   
    </div>
  )
}