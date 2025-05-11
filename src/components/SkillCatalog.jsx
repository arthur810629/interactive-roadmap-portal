import React from 'react'
import { useNavigate } from 'react-router-dom'
import { skills } from '../data/skills'
import './SkillCatalog.css'

export default function SkillCatalog() {
  const navigate = useNavigate()

  const handleClick = (id) => navigate(`/skill/${id}`)
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(id)
    }
  }

  return (
    <section className="skill-section" aria-labelledby="skill-section-title">
      <h2 id="skill-section-title" className="skill-title">
        Выберите навык
      </h2>

      <div className="skill-grid">
        {skills.map((skill) => (
          <article
            key={skill.id}
            className="skill-card"
            role="button"
            tabIndex={0}
            onClick={() => handleClick(skill.id)}
            onKeyDown={(e) => handleKeyDown(e, skill.id)}
            aria-label={`Перейти к навыку: ${skill.title}`}
          >
            {skill.title}
          </article>
        ))}
      </div>
    </section>
  )
}
