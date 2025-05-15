import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFlask, FaFemale, FaTachometerAlt, FaCar,
  FaUsers, FaUtensils, FaBookOpen, FaSquareRootAlt,
  FaPiggyBank, FaCalendarDay, FaFileInvoice,
  FaHeartbeat, FaGavel, FaChartLine
} from 'react-icons/fa'
import '../styles/Home.css'


const HOME_CATEGORIES = [
  { to: '/category/analysis',        icon: <FaFlask size={32}/>,         title: 'Расшифровка анализов' },
  { to: '/category/women',           icon: <FaFemale size={32}/>,        title: 'Для женщин' },
  { to: '/category/consumption',     icon: <FaTachometerAlt size={32}/>, title: 'Расход' },
  { to: '/category/auto',            icon: <FaCar size={32}/>,           title: 'Авто' },
  { to: '/category/hr',              icon: <FaUsers size={32}/>,         title: 'Кадры' },
  { to: '/category/food',            icon: <FaUtensils size={32}/>,      title: 'Еда' },
  { to: '/category/education',       icon: <FaBookOpen size={32}/>,      title: 'Образование' },
  { to: '/category/math',            icon: <FaSquareRootAlt size={32}/>, title: 'Математика' },
  { to: '/category/finance',         icon: <FaPiggyBank size={32}/>,     title: 'Финансы' },
  { to: '/category/days',            icon: <FaCalendarDay size={32}/>,   title: 'Дни' },
  { to: '/category/accounting',      icon: <FaFileInvoice size={32}/>,   title: 'Бухгалтерия' },
  { to: '/category/health',          icon: <FaHeartbeat size={32}/>,     title: 'Здоровье' },
  { to: '/category/court',           icon: <FaGavel size={32}/>,         title: 'Суд' },
  { to: '/category/priceComparison', icon: <FaChartLine size={32}/>,     title: 'Сравнение цен' }
]

export default function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Добро пожаловать в React Calculators</h1>
        <div className="home-categories">
          {HOME_CATEGORIES.map(({to, icon, title}) => (
            <Link key={to} to={to} className="home-card">
              {icon}
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
