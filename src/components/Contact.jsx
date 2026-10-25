import { useState } from 'react'
import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Contact() {
  const contact = content.contact || {}
  const links = contact.links || []
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    if (contact.email) {
      navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  const getIconForLabel = (label) => {
    const l = label.toLowerCase()
    if (l.includes('github')) return 'github'
    if (l.includes('linkedin')) return 'linkedin'
    if (l.includes('instagram')) return 'instagram'
    return 'mail'
  }

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        {/* Banner Card */}
        <div className="contact-main-card">
          <div className="contact-ambient-light"></div>
          
          <div className="contact-header-content">
            <div className="status-pill inline-flex">
              <span className="status-indicator">
                <span className="indicator-ping"></span>
                <span className="indicator-core"></span>
              </span>
              <span className="status-pill-text">Open for Internships &amp; Collaborations</span>
            </div>

            <h2 className="contact-big-title">{contact.heading}</h2>
            <p className="contact-lead-desc">{contact.subheading}</p>

            <div className="contact-primary-actions">
              <a
                href={`mailto:${contact.email}?subject=Project%20or%20Opportunity%20Inquiry`}
                className="btn btn-primary-gradient"
              >
                <Icon name="mail" size={17} />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={copyEmail}
                className={`btn btn-copy-highlight ${copied ? 'copied' : ''}`}
              >
                <Icon name={copied ? 'check' : 'copy'} size={17} />
                <span>{copied ? 'Copied to Clipboard! 🎉' : contact.email}</span>
              </button>
            </div>
          </div>

          {/* Social Cards Grid */}
          <div className="contact-social-grid">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon-wrap">
                  <Icon name={getIconForLabel(link.label)} size={20} />
                </div>
                <div className="channel-info">
                  <div className="channel-title-row">
                    <span className="channel-name">{link.label}</span>
                    <Icon name="arrow-up-right" size={14} className="channel-arrow" />
                  </div>
                  <div className="channel-handle">{link.handle}</div>
                  <div className="channel-desc">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-footer-note">
            <span className="reply-pulse"></span>
            <span>Typical response time: within 24 hours • Direct timezone: IST (UTC +5:30)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
