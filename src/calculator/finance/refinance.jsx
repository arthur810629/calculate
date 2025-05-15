import React, { useState } from 'react'

export default function RefinanceCalculator() {
  const [sum, setSum]         = useState('')
  const [oldRate, setOldRate] = useState('')
  const [newRate, setNewRate] = useState('')
  const [term, setTerm]       = useState('')
  const [savings, setSavings] = useState(null)

  const calculate = () => {
    const P    = parseFloat(sum)
    const rOld = parseFloat(oldRate) / 100 / 12
    const rNew = parseFloat(newRate) / 100 / 12
    const n    = parseFloat(term) * 12
    if (!P || !rOld || !rNew || !n) return

    const payOld    = P * rOld / (1 - Math.pow(1 + rOld, -n))
    const payNew    = P * rNew / (1 - Math.pow(1 + rNew, -n))
    const totalSave = (payOld - payNew) * n
    setSavings(totalSave.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
      <a href="/">Главная</a>
  <a href="/category/finance">Финансовые калькуляторы</a>
  <span>Рефинансирование</span>
      </nav>


      <h1>Калькулятор рефинансирования</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Остаток по кредиту (₽)</label>
            <input type="number" value={sum} onChange={e => setSum(e.target.value)} placeholder="₽" />
          </div>
          <div className="field">
            <label>Старая ставка (% годовых)</label>
            <input type="number" value={oldRate} onChange={e => setOldRate(e.target.value)} placeholder="%" />
          </div>
          <div className="field">
            <label>Новая ставка (% годовых)</label>
            <input type="number" value={newRate} onChange={e => setNewRate(e.target.value)} placeholder="%" />
          </div>
          <div className="field">
            <label>Оставшийся срок (лет)</label>
            <input type="number" value={term} onChange={e => setTerm(e.target.value)} placeholder="лет" />
          </div>

          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>

          {savings !== null && (
            <div className="result">
              Общая экономия: <strong>{savings} ₽</strong>
            </div>
          )}
        </section>

    
      </div>

      
    </div>
  )
}
