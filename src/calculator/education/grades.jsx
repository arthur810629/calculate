import React, { useState } from 'react'

export default function GradesCalculator() {
  const [gradesStr, setGradesStr] = useState('')
  const [average, setAverage] = useState(null)

  const calculate = () => {
    const arr = gradesStr
      .trim()
      .split(/[,\s]+/)
      .map(g => parseFloat(g))
      .filter(g => !isNaN(g))
    if (arr.length === 0) return
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length
    setAverage(avg.toFixed(2))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/education">Образование</a>
        <span>Калькулятор оценок</span>
      </nav>

      <h1>Калькулятор оценок</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Оценки через пробел или запятую</label>
            <input
              type="text"
              value={gradesStr}
              onChange={e => setGradesStr(e.target.value)}
              placeholder="например: 5 4 3 5"
            />
          </div>
          <button className="btn-calc" onClick={calculate}>РАССЧИТАТЬ</button>
          {average !== null && (
            <div className="result">
              Средний балл: <strong>{average}</strong>
            </div>
          )}
        </section>
        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама</div>
        </aside>
      </div>

      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу</div>
      </div>
    </div>
  )
}
