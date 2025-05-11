import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CategoryCard.css'

export default function CategoryCard({ id, title, description }) {
  const navigate = useNavigate()

  const handleClick = () => navigate(`/roadmap/${id}`)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <article
      className="category-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Открыть дорожную карту: ${title}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}
