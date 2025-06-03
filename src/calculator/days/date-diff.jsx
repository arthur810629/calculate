import React, { useState } from 'react'

export default function DateDiffCalculator() {
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [diff, setDiff] = useState(null)

  const calculate = () => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    if (isNaN(d1) || isNaN(d2)) return
    const days = Math.abs((d2 - d1) / 86400000)
    setDiff(Math.floor(days))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/days">Калькуляторы дней</a>
        <span>Дни между датами</span>
      </nav>

      <h1>Калькулятор дней между датами</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Первая дата</label>
            <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
          </div>
          <div className="field">
            <label>Вторая дата</label>
            <input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {diff !== null && <div className="result">{diff} дней</div>}
        </section>
      </div>
    </div>
  )
}
