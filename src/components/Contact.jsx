import { useState } from 'react'
import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Contact({ onOpenResume }) {
  const { contact } = content
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section className="section-block contact-editorial-section" id="contact">
      <div className="container">
        <div className="contact-editorial-frame">
          <div className="contact-top-strip">
            <span className="contact-eyebrow">05 / GET IN TOUCH</span>
            <span className="contact-status-flag">OPEN FOR OPPORTUNITIES</span>
          </div>

          <div className="contact-main-grid">
            <div className="contact-lead-col">
              <h2 className="contact-giant-title">{contact.title}</h2>
              <p className="contact-statement">{contact.subtitle}</p>

              <div className="contact-action-rects">
                <a
                  href={`mailto:${contact.email}?subject=Opportunity%20Inquiry`}
                  className="btn-rect btn-rect-primary"
                >
                  <Icon name="mail" size={16} />
                  <span>SEND DIRECT EMAIL</span>
                </a>

                <button
                  onClick={copyEmail}
                  className={`btn-rect btn-rect-outline ${copied ? 'active' : ''}`}
                >
                  <Icon name={copied ? 'check' : 'copy'} size={15} />
                  <span>{copied ? 'EMAIL COPIED! ✓' : contact.email}</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="btn-rect btn-rect-ghost"
                >
                  <span>DOWNLOAD RESUME ↓</span>
                </button>
              </div>
            </div>

            <div className="contact-links-col">
              <div className="links-col-header">DIRECT CHANNELS</div>
              <div className="contact-channels-stack">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="channel-editorial-row"
                  >
                    <div className="channel-meta-left">
                      <span className="channel-type-tag">[{link.type}]</span>
                      <span className="channel-label-main">{link.label}</span>
                    </div>
                    <div className="channel-meta-right">
                      <span className="channel-handle-text">{link.handle}</span>
                      <Icon name="arrow-up-right" size={14} className="channel-jump-icon" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
