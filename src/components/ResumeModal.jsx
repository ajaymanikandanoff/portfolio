import { Icon } from './Icons.jsx'
import { content } from '../data/content.js'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const { profile, skills, projects, certifications } = content

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div>
            <h3 className="resume-modal-title">Curriculum Vitae</h3>
            <p className="resume-modal-subtitle">{profile.name} — {profile.role}</p>
          </div>
          <div className="resume-modal-actions">
            <button
              onClick={() => window.print()}
              className="btn-rect btn-rect-outline"
              title="Print Resume"
            >
              <span>Print / Save PDF</span>
            </button>
            <a
              href="/resume.pdf"
              download="Ajay_M_Resume.pdf"
              className="btn-rect btn-rect-primary"
            >
              <Icon name="arrow-up-right" size={14} />
              <span>Download File</span>
            </a>
            <button onClick={onClose} className="btn-close-modal" aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        <div className="resume-modal-body print-section">
          {/* Header Info */}
          <div className="resume-paper-header">
            <h1 className="paper-name">{profile.name}</h1>
            <div className="paper-tagline">{profile.role}</div>
            <div className="paper-meta">
              <span>{profile.location}</span>
              <span>•</span>
              <a href={`mailto:${profile.email || 'ajaymanikandanoff@gmail.com'}`}>{profile.email || 'ajaymanikandanoff@gmail.com'}</a>
              <span>•</span>
              <a href="https://github.com/ajaymanikandanoff" target="_blank" rel="noreferrer">github.com/ajaymanikandanoff</a>
              <span>•</span>
              <a href="https://linkedin.com/in/ajaymanikandan-in" target="_blank" rel="noreferrer">linkedin.com/in/ajaymanikandan-in</a>
            </div>
          </div>

          {/* Summary */}
          <div className="paper-section">
            <h4 className="paper-sec-title">PROFESSIONAL SUMMARY</h4>
            <p className="paper-text">{profile.bio}</p>
          </div>

          {/* Technical Skills */}
          <div className="paper-section">
            <h4 className="paper-sec-title">TECHNICAL &amp; CREATIVE SKILLS</h4>
            <div className="paper-skills-grid">
              <div className="paper-skill-col">
                <b>Full-Stack Engineering:</b> {skills.engineering.join(', ')}
              </div>
              <div className="paper-skill-col">
                <b>Design &amp; Video Media:</b> {skills.creative.join(', ')}
              </div>
              <div className="paper-skill-col">
                <b>AI Tools &amp; Methodologies:</b> {skills.aiAndTools.join(', ')}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="paper-section">
            <h4 className="paper-sec-title">FEATURED PROJECTS</h4>
            <div className="paper-projects-list">
              {projects.map((proj) => (
                <div key={proj.title} className="paper-project-item">
                  <div className="paper-proj-header">
                    <span className="paper-proj-name">{proj.title}</span>
                    <span className="paper-proj-cat">{proj.category} ({proj.year})</span>
                  </div>
                  <p className="paper-proj-desc">{proj.purpose}</p>
                  <div className="paper-proj-tech">
                    <b>Stack:</b> {proj.tech.join(', ')} {proj.aiAttribution ? `• (${proj.aiAttribution})` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="paper-section">
            <h4 className="paper-sec-title">COURSEWORK &amp; CERTIFICATIONS</h4>
            <div className="paper-certs-grid">
              {certifications.map((c) => (
                <div key={c.name} className="paper-cert-item">
                  <span className="cert-lead">{c.name}:</span> {c.level} ({c.issuer})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
