import { useEffect, useState } from 'react'
import { content } from '../data/content.js'

export default function Footer({ onOpenResume }) {
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="footer-meta-grid">
          <div className="footer-col-brand">
            <span className="footer-huge-name">{content.profile.name}</span>
            <p className="footer-role-text">
              Aspiring Full Stack Developer &amp; Creative Technologist.
            </p>
          </div>

          <div className="footer-col-links">
            <span className="footer-col-header">INDEX</span>
            <div className="footer-links-list">
              <a href="#top">Top of Page</a>
              <a href="#work">Selected Works</a>
              <a href="#skills">Disciplines &amp; Skills</a>
              <a href="#about">About Ajay</a>
              <a href="#contact">Contact</a>
              <button onClick={onOpenResume} className="footer-text-btn">
                Download Resume ↓
              </button>
            </div>
          </div>

          <div className="footer-col-clock">
            <span className="footer-col-header">LOCATION &amp; TIME</span>
            <div className="footer-clock-box">
              <span className="clock-city">INDIA (IST / UTC +5:30)</span>
              <span className="clock-time">{istTime || '12:00:00 PM'}</span>
            </div>
            <div className="footer-github-source">
              <a
                href="https://github.com/ajaymanikandanoff/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-source-anchor"
              >
                <span>github.com/ajaymanikandanoff/portfolio ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} {content.profile.name}. ALL RIGHTS RESERVED.
          </div>
          <button onClick={scrollToTop} className="btn-rect-top">
            <span>BACK TO TOP ↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
