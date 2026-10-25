import { content } from '../data/content.js'

export default function About({ onOpenResume }) {
  const { about, profile } = content

  return (
    <section className="section-block about-editorial-section" id="about">
      <div className="container">
        <div className="section-editorial-header">
          <div className="header-eyebrow-row">
            <span className="eyebrow-num">03 / BACKGROUND</span>
            <span className="eyebrow-divider"></span>
            <span className="eyebrow-count">PHILOSOPHY &amp; PROFILE</span>
          </div>
          <h2 className="editorial-title">{about.heading}</h2>
          <p className="editorial-desc">{about.subheading}</p>
        </div>

        <div className="about-editorial-grid">
          {/* Left: Long Narrative */}
          <div className="about-narrative-box">
            <div className="narrative-badge">
              <span>PROFILE / {profile.name}</span>
            </div>

            <div className="narrative-body">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="narrative-p">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-resume-cta-strip">
              <div>
                <span className="cta-strip-title">Detailed Experience &amp; Credentials</span>
                <p className="cta-strip-sub">Download my official CV in standardized format.</p>
              </div>
              <button onClick={onOpenResume} className="btn-rect btn-rect-primary">
                VIEW RESUME / CV ↓
              </button>
            </div>
          </div>

          {/* Right: 4 Structural Pillars */}
          <div className="about-pillars-stack">
            {about.highlights.map((h, i) => (
              <div key={h.title} className="about-pillar-row">
                <span className="pillar-counter">0{i + 1}</span>
                <div className="pillar-text-content">
                  <h4 className="pillar-heading">{h.title}</h4>
                  <p className="pillar-detail">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
