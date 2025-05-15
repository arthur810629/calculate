// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AdBanner from './components/AdBanner'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import CalculatorPage from './pages/CalculatorPage'

export default function App() {
  return (
    <>
      {/* Реклама сразу под тегом <body>, перед шапкой */}
      <AdBanner blockId="R-A-15506473-1" />

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/calculator/:categoryId/:calculatorId" element={<CalculatorPage />} />
          <Route
            path="*"
            element={
              <div className="container">
                <h1>Страница не найдена</h1>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Реклама перед подвалом */}
      <AdBanner blockId="R-A-15506473-1" />

      <Footer />
    </>
  )
}
