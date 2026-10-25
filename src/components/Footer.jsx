import { useEffect, useState } from 'react'

export default function Footer() {
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-dot"></span>
            <span className="brand-name">Ajay Manikandan</span>
          </div>
          <p className="footer-tagline">
            Building software at the intersection of full-stack engineering &amp; applied AI.
          </p>
        </div>

        <div className="footer-center">
          <div className="footer-time-badge">
            <span className="time-dot"></span>
            <span>Local Time (IST): <b>{istTime || 'Active'}</b></span>
          </div>
          <div className="footer-tech-stack">
            <a
              href="https://github.com/ajaymanikandanoff/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-repo-link"
            >
              <span>View Portfolio Source Code ↗</span>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="btn-back-to-top" title="Back to top">
            <span>Back to top ↑</span>
          </button>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Ajay M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
