import React from 'react'
import './CommunityStats.css'

const stats = [
  {
    id: 'github',
    label: 'GitHub Stars',
    value: '318K',
    extra: 'Rank 6th out of 28M!',
    cta: '⭐ Star us on GitHub',
    note: 'Help us reach #1',
    link: 'https://github.com/yourrepo',
  },
  {
    id: 'users',
    label: 'Registered Users',
    value: '+1.5M',
    extra: '+90K every month',
    cta: '📝 Register yourself',
    note: 'Commit to your growth',
    link: '/signup',
  },
  {
    id: 'discord',
    label: 'Discord Members',
    value: '36K',
    extra: '+2K every month',
    cta: '💬 Join on Discord',
    note: 'Join the community',
    link: 'https://discord.gg/yourlink',
  },
]

export default function CommunityStats() {
  return (
    <section className="community-stats" aria-labelledby="community-stats-heading">
      <h2 id="community-stats-heading">Присоединяйтесь к сообществу</h2>
      <p>Мы растём каждый месяц — вместе с вами!</p>

      <div className="stats-grid">
        {stats.map((item) => (
          <article
            key={item.id}
            className="stat-card"
            aria-label={`${item.label}: ${item.value}, ${item.extra}`}
          >
            <span className="stat-extra">{item.extra}</span>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.cta}
              <span>{item.note}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
