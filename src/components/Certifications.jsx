import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Certifications() {
  const certifications = content.certifications || []

  return (
    <section className="section-padding certs-section" id="certifications">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">Foundations</div>
          <h2 className="section-headline">Coursework &amp; Certifications</h2>
          <p className="section-subheadline">
            Academic training and verified coursework building strong fundamentals across programming paradigms.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((c) => (
            <div key={c.name} className="cert-item-card">
              <div className="cert-card-top">
                <span className="cert-tag-pill">{c.tag}</span>
                <div className="cert-status-badge">
                  <Icon name="badge-check" size={16} />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className="cert-item-title">{c.name}</h3>
              <p className="cert-level">{c.level}</p>
              
              <div className="cert-card-bottom">
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-check-indicator">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
