import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function SkillsMatrix() {
  const skillCategories = content.skillCategories || []
  const tools = content.tools || []

  return (
    <section className="section-padding skills-section" id="skills">
      <div className="container">
        {/* Section Title */}
        <div className="section-header-centered">
          <div className="section-badge">Capabilities</div>
          <h2 className="section-headline">Tech Stack &amp; Core Tooling</h2>
          <p className="section-subheadline">
            The programming languages, frameworks, AI engines, and backend technologies I actively leverage to design and ship software.
          </p>
        </div>

        {/* Bento Skills Matrix */}
        <div className="skills-bento-grid">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="skill-category-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  <Icon name={cat.icon || 'code'} size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.name}</h3>
                  <p className="skill-cat-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skill-tags-list">
                {(cat.skills || []).map((skill) => (
                  <span key={skill} className="skill-badge-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized AI Tools Row */}
        {tools.length > 0 && (
          <div className="specialized-tools-wrap">
            <div className="tools-headline-row">
              <div>
                <h3 className="specialized-title">AI Coding Assistants &amp; Workflow Engines</h3>
                <p className="specialized-desc">How I accelerate architecture, debugging, and experimentation.</p>
              </div>
            </div>

            <div className="specialized-tools-grid">
              {tools.map((t) => (
                <div key={t.name} className="tool-deep-card">
                  <div className="tool-badge-row">
                    <span className="tool-tag-pill">{t.tag}</span>
                    <span className="tool-status-live">Integrated</span>
                  </div>
                  <h4 className="tool-name">{t.name}</h4>
                  <div className="tool-role">{t.role}</div>
                  <p className="tool-desc-text">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
