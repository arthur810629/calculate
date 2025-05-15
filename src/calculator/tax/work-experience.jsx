import React, { useState } from 'react'

export default function WorkExperience() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    if (!start || !end) return
    const d1 = new Date(start)
    const d2 = new Date(end)
    if (d2 <= d1) return setResult('')

    const diff = d2.getFullYear() - d1.getFullYear()
    const months = d2.getMonth() - d1.getMonth()
    const totalMonths = diff * 12 + months
    const years = Math.floor(totalMonths / 12)
    const restMonths = totalMonths % 12

    setResult(`${years} лет ${restMonths} мес.`)
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Стаж</span>
      </nav>

      <h1>Калькулятор стажа</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Дата начала</label>
            <input type="date" value={start} onChange={e => setStart(e.target.value)} />
          </div>
          <div className="field">
            <label>Дата окончания</label>
            <input type="date" value={end} onChange={e => setEnd(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {result && <div className="result">Стаж: <strong>{result}</strong></div>}
        </section>
  
      </div>
   
    </div>
  )
}