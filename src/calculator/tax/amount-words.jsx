import React, { useState } from 'react'

export default function AmountWords() {
  const [amount, setAmount] = useState('')
  const [words, setWords] = useState('')

  const numberToWords = (num) => {
    // Очень базовая заглушка — тут можно подключить библиотеку или API
    return `${num} рублей прописью (пример)`
  }

  const handleConvert = () => {
    const num = parseFloat(amount)
    if (!num) return
    setWords(numberToWords(num))
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <a href="/">Главная</a>
        <a href="/category/tax">Бухгалтерия и налоги</a>
        <span>Сумма прописью</span>
      </nav>

      <h1>Сумма прописью</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="field">
            <label>Сумма (₽)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <button className="btn-calc" onClick={handleConvert}>ПЕРЕВЕСТИ</button>
          {words && <div className="result">Результат: <strong>{words}</strong></div>}
        </section>
        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама 1</div>
          <div className="ad-placeholder">Реклама 2</div>
        </aside>
      </div>
      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу страницы</div>
      </div>
    </div>
  )
}