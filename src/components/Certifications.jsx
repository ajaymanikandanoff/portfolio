import { content } from '../data/content.js'

export default function Certifications() {
  const certifications = content.certifications || []

  return (
    <section className="section-block certs-editorial-section" id="certifications">
      <div className="container">
        <div className="section-editorial-header">
          <div className="header-eyebrow-row">
            <span className="eyebrow-num">04 / FOUNDATIONS</span>
            <span className="eyebrow-divider"></span>
            <span className="eyebrow-count">COURSEWORK &amp; TRAINING</span>
          </div>
          <h2 className="editorial-title">VERIFIED COURSEWORK</h2>
          <p className="editorial-desc">
            Academic coursework and formal training across programming paradigms, memory, and algorithms.
          </p>
        </div>

        <div className="certs-table-wrap">
          <div className="certs-table-header">
            <span>DOMAIN / LANGUAGE</span>
            <span>PROFICIENCY LEVEL</span>
            <span>ISSUER / STATUS</span>
          </div>

          <div className="certs-table-rows">
            {certifications.map((c) => (
              <div key={c.name} className="cert-table-row">
                <span className="cert-name-cell">{c.name}</span>
                <span className="cert-level-cell">{c.level}</span>
                <span className="cert-issuer-cell">
                  <span className="cert-dot-indicator"></span>
                  {c.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
