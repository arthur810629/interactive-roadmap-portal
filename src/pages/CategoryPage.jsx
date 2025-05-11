import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { professionsByCategory } from '../data/professions'
import './CategoryPage.css'

export default function CategoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const category = professionsByCategory[id]

  if (!category) {
    return <div className="category-page"><h2>Категория не найдена</h2></div>
  }

  const handleClick = (profId) => navigate(`/profession/${profId}`)
  const handleKeyDown = (e, profId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(profId)
    }
  }

  return (
    <div className="category-page">
      <h2>{category.title}</h2>
      <p className="category-description">{category.description}</p>

      <ul className="profession-list" role="list">
        {category.professions.map((prof) => (
          <li
            key={prof.id}
            className="profession-item"
            role="button"
            tabIndex={0}
            onClick={() => handleClick(prof.id)}
            onKeyDown={(e) => handleKeyDown(e, prof.id)}
            aria-label={`Перейти к профессии ${prof.title}`}
          >
            <h3>{prof.title}</h3>
            <p>{prof.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
