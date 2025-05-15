import React from 'react'
import AdBanner from '../components/AdBanner';
import { Link, useParams } from 'react-router-dom'
import {
  FaFlask, FaFemale, FaTachometerAlt, FaCar,
  FaUsers, FaUtensils, FaBookOpen, FaSquareRootAlt,
  FaPiggyBank, FaCalendarDay, FaFileInvoice,
  FaHeartbeat, FaGavel, FaChartLine, FaCog, FaCodeBranch
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
      { id: 'bmi-female', title: 'Индекс массы тела' }
    ]
  },
  consumption: {
    title: 'Калькулятор расхода',
    icon: <FaTachometerAlt />,
    items: [
      { id: 'fuel',  title: 'Расход топлива' },
      { id: 'expense', title: 'Общие расходы' }
    ]
  },
  auto: {
    title: 'Автомобильные калькуляторы',
    icon: <FaCar />,
    items: [
      { id: 'osago',       title: 'ОСАГО' },
      { id: 'autocredit',  title: 'Автокредит' },
      { id: 'vehicle-tax', title: 'Транспортный налог' },
      { id: 'auto-value',  title: 'Калькулятор автомобиля' }
    ]
  },
  hr: {
    title: 'Кадры',
    icon: <FaUsers />,
    items: [
      { id: 'work-experience', title: 'Стаж работы' },
      { id: 'military-service', title: 'Военнослужащего' },
      { id: 'working-time',     title: 'Калькулятор времени работы' }
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
      { id: 'grades',           title: 'Калькулятор оценок' },
      { id: 'fractions-online', title: 'Калькулятор дробей онлайн' }
    ]
  },
  math: {
    title: 'Математика',
    icon: <FaSquareRootAlt />,
    items: [
      { id: 'percent',         title: 'Проценты' },
      { id: 'equations',       title: 'Уравнения' },
      { id: 'decimal',         title: 'Десятичные числа' },
      { id: 'long-division',   title: 'Деление в столбик' },
      { id: 'decimal-fractions', title: 'Десятичные дроби' },
      { id: 'gcd-lcm',         title: 'НОД и НОК' },
      { id: 'matrix',          title: 'Матрицы' }
    ]
  },
  finance: {
    title: 'Финансовые калькуляторы',
    icon: <FaPiggyBank />,
    items: [
      { id: 'credit',         title: 'Кредитный' },
      { id: 'mortgage',       title: 'Ипотечный' },
      { id: 'prepayment',     title: 'Досрочное погашение' },
      { id: 'refinance',      title: 'Рефинансирование' },
      { id: 'microloan',      title: 'Микрозаймы' },
      { id: 'inflation',      title: 'Инфляция' },
      { id: 'deposit-online', title: 'Вклады онлайн' },
      { id: 'repayment',      title: 'Погашение кредита' },
      { id: 'ip',             title: 'ИП-калькулятор' }
    ]
  },
  days: {
    title: 'Калькуляторы дней',
    icon: <FaCalendarDay />,
    items: [
      { id: 'date-diff',   title: 'Дни между датами' },
      { id: 'vacation-pay',title: 'Отпускные' },
      { id: 'years-online',title: 'Расчет лет онлайн' }
    ]
  },
  accounting: {
    title: 'Бухгалтерия и налоги',
    icon: <FaFileInvoice />,
    items: [
      { id: 'nds',       title: 'НДС' },
      { id: 'pit',       title: 'НДФЛ' },
      { id: 'penalties', title: 'Пени' }
    ]
  },
  health: {
    title: 'Здоровье',
    icon: <FaHeartbeat />,
    items: [
      { id: 'bmi',         title: 'ИМТ' },
      { id: 'body-weight', title: 'Вес' }
    ]
  },
  court: {
    title: 'Суд',
    icon: <FaGavel />,
    items: [
      { id: 'legal-fee', title: 'Госпошлина' },
      { id: 'late-fee',  title: 'Неустойка' }
    ]
  },
  priceComparison: {
    title: 'Сравнение цен',
    icon: <FaChartLine />,
    items: [
      { id: 'price-years', title: 'Сравнение стоимости' }
    ]
  },
  construction: {
    title: 'Строительство',
    icon: <FaCodeBranch />,
    items: [
      { id: 'metal',    title: 'Калькулятор металла' },
      { id: 'meters',   title: 'Калькулятор метров' },
      { id: 'house',    title: 'Калькулятор дома' },
      { id: 'angle',    title: 'Калькулятор углов' }
    ]
  }
}

export default function CategoryPage() {
  const { categoryId } = useParams()
  const category = CATEGORIES[categoryId]

  if (!category) {
    return <div className="calculator-page container"><h1>Категория не найдена</h1></div>
  }

  return (
    <div className="calculator-page container">
      <nav className="breadcrumbs">
        <Link to="/">Главная</Link> › <span>{category.title}</span>
      </nav>

      <h1>{category.icon}&nbsp;{category.title}</h1>

      <div className="calculator-layout">
        <section className="calculator-form">
          <div className="category-grid">
            {category.items.map(({id, title}) => (
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
  <AdBanner blockId="R-A-15506473-1" />
</aside>
      </div>

      
<aside className="calculator-ads">
  <AdBanner blockId="R-A-15506473-1" />
</aside>
    </div>
  )
}
