import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-links">
          <a href="/roadmaps">Roadmaps</a>
          <a href="/guides">Guides</a>
          <a href="/videos">Videos</a>
          <a href="/faq">FAQs</a>
        </div>

        <div className="footer-brand">
          <strong>SkillsMap</strong> — построение карьеры шаг за шагом.
        </div>

        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SkillsMap • <a href="/terms">Terms</a> • <a href="/privacy">Privacy</a>
      </div>
    </footer>
  )
}
