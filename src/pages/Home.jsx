import React from 'react'
import { Link } from 'react-router-dom'
import { FaUniversity, FaPiggyBank, FaCalculator, FaCar } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './Home.css'

export default function Home() {
  const { t } = useTranslation()

  const categories = [
    {
      id: 'finance',
      title: t('finance_title'),
      icon: <FaUniversity size={20} />,
      items: [
        { id: 'credit', title: t('credit_calc') },
        { id: 'mortgage', title: t('mortgage_calc') },
        { id: 'prepayment', title: t('prepayment_calc') },
        { id: 'refinance', title: t('refinance_calc') },
        { id: 'microloan', title: t('microloan_calc') },
        { id: 'inflation', title: t('inflation_calc') },
      ],
    },
    {
      id: 'invest',
      title: t('invest_title'),
      icon: <FaPiggyBank size={20} />,
      items: [
        { id: 'deposit', title: t('deposit_calc') },
        { id: 'investment', title: t('investment_calc') },
        { id: 'bonds', title: t('bonds_calc') },
      ],
    },
    {
      id: 'tax',
      title: t('tax_title'),
      icon: <FaCalculator size={20} />,
      items: [
        { id: 'vat', title: t('vat_calc') },
        { id: 'pit', title: t('pit_calc') },
        { id: 'penalties', title: t('penalties_calc') },
        { id: 'property-deduction', title: t('property_deduction_calc') },
        { id: 'sale-tax', title: t('sale_tax_calc') },
        { id: 'loan-interest', title: t('loan_interest_calc') },
        { id: 'gk395', title: t('gk395_calc') },
        { id: 'late-fee', title: t('late_fee_calc') },
        { id: 'amount-words', title: t('amount_words_calc') },
        { id: 'work-experience', title: t('work_experience_calc') },
      ],
    },
    {
      id: 'auto',
      title: t('auto_title'),
      icon: <FaCar size={20} />,
      items: [
        { id: 'osago', title: t('osago_calc') },
        { id: 'vehicle-tax', title: t('vehicle_tax_calc') },
        { id: 'credit', title: t('autocredit_calc') },
        { id: 'customs', title: t('customs_calc') },
        { id: 'fuel-consumption', title: t('fuel_calc') },
      ],
    },
  ]

  return (
    <main className="home container">
      {categories.map(cat => (
        <section key={cat.id} className="home__section">
          <h2 className="home__title">
            <span className="home__icon" aria-hidden="true">{cat.icon}</span>
            {cat.title}
          </h2>
          <div className="home__list">
            {cat.items.map(item => (
              <Link
                key={item.id}
                to={`/calculator/${cat.id}/${item.id}`}
                className="home__link"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
