// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header         from './components/Header'
import Footer         from './components/Footer'
import Home           from './pages/Home'
import CategoryPage   from './pages/CategoryPage'
import CalculatorPage from './pages/CalculatorPage'

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Страница со списком калькуляторов категории */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />

          {/* Конкретный калькулятор */}
          <Route path="/calculator/:categoryId/:calculatorId" element={<CalculatorPage />} />

          {/* На всякий случай: если ни один маршрут не подошёл */}
          <Route path="*" element={
            <div className="container">
              <h1>Страница не найдена</h1>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
