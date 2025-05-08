// src/pages/CalculatorPage.jsx

import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

// Сканируем ВСЕ .jsx внутри src/calculator
const modules = import.meta.glob('../calculator/**/*.jsx')

export default function CalculatorPage() {
  const { categoryId, calculatorId } = useParams()

  // Формируем путь до нужного калькулятора
  const modulePath = `../calculator/${categoryId}/${calculatorId}.jsx`
  const importer = modules[modulePath]

  if (!importer) {
    return (
      <div className="container">
        <h1>Калькулятор не найден</h1>
        <p>Проверьте URL: /calculator/{categoryId}/{calculatorId}</p>
      </div>
    )
  }

  // Загружаем компонент лениво
  const Calculator = lazy(importer)

  return (
    <Suspense fallback={<div className="container"><p>Загрузка…</p></div>}>
      <Calculator /> {/* ✅ ВАЖНО: используем как JSX-компонент */}
    </Suspense>
  )
}
