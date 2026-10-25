import { useState, useEffect } from 'react'
import { Icon } from './Icons.jsx'
import { content } from '../data/content.js'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Tech Stack' },
  { href: '#creative', label: 'Creative Lab' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Certifications' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyEmail = (e) => {
    e.preventDefault()
    if (content?.contact?.email) {
      navigator.clipboard.writeText(content.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="brand-logo" aria-label="Ajay M Home">
          <span className="brand-dot"></span>
          <span className="brand-text">
            ajay<span className="brand-accent">.m</span>
          </span>
          <span className="status-badge-inline">
            <span className="status-ping"></span>
            Available
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="header-actions">
          <button
            onClick={copyEmail}
            className={`btn-header-copy ${copied ? 'copied' : ''}`}
            title="Click to copy email address"
            aria-label="Copy email"
          >
            <Icon name={copied ? 'check' : 'copy'} size={14} />
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>

          <a href="#contact" className="btn-header-cta">
            Contact
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-nav-item mobile-nav-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
          <div className="mobile-contact-quick">
            <button onClick={copyEmail} className="mobile-copy-btn">
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              <span>{copied ? 'Email Copied!' : content.contact.email}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
