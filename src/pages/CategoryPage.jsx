import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaFlask,
  FaFemale,
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaUtensils,
  FaBookOpen,
  FaSquareRootAlt,
  FaPiggyBank,
  FaCalendarDay,
  FaFileInvoice,
  FaHeartbeat,
  FaGavel,
  FaChartLine
} from 'react-icons/fa'
import '../styles/calculators.css'

const CATEGORIES = {
  analysis: {
    title: 'Расшифровка анализов',
    icon: <FaFlask />,
    items: [
      { id: 'analysis-decrypt', title: 'Расшифровка общего анализа' }
    ]
  },
  women: {
    title: 'Калькуляторы для женщин',
    icon: <FaFemale />,
    items: [
      { id: 'pregnancy', title: 'Калькулятор беременности' },
      { id: 'bmi-female', title: 'Индекс массы тела (женщины)' }
    ]
  },
  consumption: {
    title: 'Расход',
    icon: <FaTachometerAlt />,
    items: [
      { id: 'fuel-consumption', title: 'Расход топлива' },
      { id: 'expense', title: 'Калькулятор расходов' }
    ]
  },
  auto: {
    title: 'Авто',
    icon: <FaCar />,
    items: [
      { id: 'tire-calculator', title: 'Шинный калькулятор' },
      { id: 'auto-credit', title: 'Калькулятор автокредита' }
    ]
  },
  hr: {
    title: 'Кадры',
    icon: <FaUsers />,
    items: [
      { id: 'work-experience', title: 'Калькулятор стажа' },
      { id: 'military-service', title: 'Военнослужащего' }
    ]
  },
  food: {
    title: 'Еда',
    icon: <FaUtensils />,
    items: [
      { id: 'samogon', title: 'Калькулятор самогонщика' },
      { id: 'calories', title: 'Калькулятор калорий' }
    ]
  },
  education: {
    title: 'Образование',
    icon: <FaBookOpen />,
    items: [
      { id: 'grades', title: 'Калькулятор оценок' },
      { id: 'fractions', title: 'Калькулятор дробей' }
    ]
  },
  math: {
    title: 'Математика',
    icon: <FaSquareRootAlt />,
    items: [
      { id: 'percent', title: 'Калькулятор процентов' },
      { id: 'equations', title: 'Калькулятор уравнений' }
    ]
  },
  finance: {
    title: 'Финансы',
    icon: <FaPiggyBank />,
    items: [
      { id: 'credit', title: 'Кредитный калькулятор' },
      { id: 'mortgage', title: 'Ипотечный калькулятор' },
      { id: 'prepayment', title: 'Досрочное погашение' },
      { id: 'refinance', title: 'Рефинансирование' },
      { id: 'microloan', title: 'Калькулятор микрозаймов' },
      { id: 'inflation', title: 'Калькулятор инфляции' }
    ]
  },
  days: {
    title: 'Дни',
    icon: <FaCalendarDay />,
    items: [
      { id: 'date-diff', title: 'Дни между датами' },
      { id: 'vacation-pay', title: 'Калькулятор отпускных' }
    ]
  },
  accounting: {
    title: 'Бухгалтерия и налоги',
    icon: <FaFileInvoice />,
    items: [
      { id: 'nds', title: 'Калькулятор НДС' },
      { id: 'penalties', title: 'Калькулятор пеней' }
    ]
  },
  health: {
    title: 'Здоровье',
    icon: <FaHeartbeat />,
    items: [
      { id: 'bmi', title: 'Индекс массы тела' },
      { id: 'body-weight', title: 'Калькулятор веса' }
    ]
  },
  court: {
    title: 'Суд',
    icon: <FaGavel />,
    items: [
      { id: 'legal-fee', title: 'Калькулятор госпошлины' },
      { id: 'late-fee', title: 'Калькулятор пени по ГК' }
    ]
  },
  priceComparison: {
    title: 'Сравнение цен по годам',
    icon: <FaChartLine />,
    items: [
      { id: 'price-years', title: 'Сравнение стоимости' }
    ]
  }
}

export default function CategoryPage() {
  const { categoryId } = useParams()
  const category = CATEGORIES[categoryId]

  if (!category) {
    return (
      <div className="calculator-page container">
        <h1>Категория не найдена</h1>
      </div>
    )
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <Link to="/">Главная</Link>
        <Link to={`/category/${categoryId}`}>{category.title}</Link>
      </nav>

      <h1>{category.icon} {category.title}</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="category-grid">
            {category.items.map(({ id, title }) => (
              <Link
                key={id}
                to={`/calculator/${categoryId}/${id}`}
                className="calc-card"
              >
                {title}
              </Link>
            ))}
          </div>
        </section>

        <aside className="calculator-ads">
          <div className="ad-placeholder">Реклама</div>
          <div className="ad-placeholder">Реклама</div>
        </aside>
      </div>

      <div className="bottom-ads">
        <div className="ad-placeholder">Реклама внизу страницы</div>
      </div>
    </div>
  )
}
