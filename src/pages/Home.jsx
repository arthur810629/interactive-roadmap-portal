import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/categories'
import './Home.css'

import SkillCatalog from '../components/SkillCatalog'
import Footer from '../components/Footer'

export default function Home() {
  const navigate = useNavigate()

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      navigate(`/roadmap/${id}`)
    }
  }

  return (
    <main className="home-container">
      <div className="home-inner">
        <h1 id="main-heading">Выберите направление</h1>
        <p className="subtitle">Интерактивные карты профессий</p>

        <div className="category-grid">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="category-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/roadmap/${cat.id}`)}
              onKeyDown={(e) => handleKeyDown(e, cat.id)}
              aria-label={`Перейти к направлению: ${cat.title}`}
            >
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
            </article>
          ))}
        </div>

        <SkillCatalog />
      </div>

      <Footer />
    </main>
  )
}
