// src/pages/CalculatorPage.jsx

import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

// сканируем ВСЕ .jsx внутри src/calculator
const modules = import.meta.glob('../calculator/**/*.jsx')

// на старте можно посмотреть, что найдено
console.log('Available calculator modules:', Object.keys(modules))

export default function CalculatorPage() {
  const { categoryId, calculatorId } = useParams()

  // формируем именно такой путь, как в Object.keys(modules)
  const modulePath = `../calculator/${categoryId}/${calculatorId}.jsx`
  console.log('Looking for modulePath:', modulePath)

  const importer = modules[modulePath]
  if (!importer) {
    return (
      <div className="container">
        <h1>Калькулятор не найден</h1>
        <p>Проверьте URL: /calculator/{categoryId}/{calculatorId}</p>
      </div>
    )
  }

  const Calculator = lazy(importer)

  return (
    <Suspense fallback={<div className="container"><p>Загрузка…</p></div>}>
      <Calculator />
    </Suspense>
  )
}
