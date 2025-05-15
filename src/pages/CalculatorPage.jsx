import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import AdBanner from '../components/AdBanner'
import '../styles/calculators.css'

// Динамический импорт всех калькуляторов
const modules = import.meta.glob('../calculator/**/*.jsx')

export default function CalculatorPage() {
  const { categoryId, calculatorId } = useParams()
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

  const Calculator = lazy(importer)

  return (
    <div className="calculator-page container">
      <div className="calculator-layout">
        {/* Сам калькулятор */}
        <section className="calculator-form">
          <Suspense fallback={<div className="container"><p>Загрузка…</p></div>}>
            <Calculator />
          </Suspense>
        </section>

        {/* Реклама в сайдбаре */}
        <aside className="calculator-ads">
          <div className="ad-placeholder">
            <AdBanner blockId="R-A-15506473-1" />
          </div>
        </aside>
      </div>

      {/* Нижний баннер */}
      <div className="bottom-ads">
        <div className="ad-placeholder">
          <AdBanner blockId="R-A-15506473-1" />
        </div>
      </div>
    </div>
  )
}
