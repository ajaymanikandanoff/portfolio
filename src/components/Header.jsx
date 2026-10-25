import { useState, useEffect } from 'react'
import { content } from '../data/content.js'

const navLinks = [
  { href: '#work', label: 'Selected Works' },
  { href: '#skills', label: 'Discipline & Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ onOpenResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand */}
        <a href="#top" className="brand-link" aria-label="Ajay M Home">
          <span className="brand-name">{content.profile.name}</span>
          <span className="brand-dot-monochrome"></span>
          <span className="brand-sub">DEV &amp; CREATIVE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-anchor">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls & Resume */}
        <div className="header-controls">
          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={onToggleTheme}
            className="btn-theme-toggle"
            aria-label="Toggle dark/light mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            <span className="theme-icon">{theme === 'dark' ? '☀ LIGHT' : '☾ DARK'}</span>
          </button>

          {/* Resume Download / View Button */}
          <button
            onClick={onOpenResume}
            className="btn-rect btn-rect-primary"
            title="View & Download Resume"
          >
            <span>RESUME ↓</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-burger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-anchor"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-actions-row">
            <button
              onClick={() => {
                onOpenResume()
                setMobileMenuOpen(false)
              }}
              className="btn-rect btn-rect-primary"
            >
              DOWNLOAD RESUME ↓
            </button>
            <button
              onClick={onToggleTheme}
              className="btn-rect btn-rect-outline"
            >
              {theme === 'dark' ? 'SWITCH TO LIGHT MODE' : 'SWITCH TO DARK MODE'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
