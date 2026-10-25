import { content } from '../data/content.js'

export default function SkillsMatrix() {
  const { skills } = content

  return (
    <section className="section-block skills-section" id="skills">
      <div className="container">
        <div className="section-editorial-header">
          <div className="header-eyebrow-row">
            <span className="eyebrow-num">02 / CORE CAPABILITIES</span>
            <span className="eyebrow-divider"></span>
            <span className="eyebrow-count">TECH &amp; CREATIVE MATRIX</span>
          </div>
          <h2 className="editorial-title">DISCIPLINES &amp; TOOLING</h2>
          <p className="editorial-desc">
            A balanced toolkit combining full-stack software development with visual UI/UX craftsmanship and video editing.
          </p>
        </div>

        <div className="disciplines-grid">
          {/* Engineering Column */}
          <div className="discipline-card">
            <div className="disc-header">
              <span className="disc-num">[01]</span>
              <h3 className="disc-title">Software &amp; Web Engineering</h3>
              <p className="disc-sub">Languages, frameworks, APIs and persistent backend databases.</p>
            </div>
            <div className="disc-list">
              {skills.engineering.map((skill) => (
                <div key={skill} className="disc-item">
                  <span className="disc-bullet">■</span>
                  <span className="disc-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Column */}
          <div className="discipline-card">
            <div className="disc-header">
              <span className="disc-num">[02]</span>
              <h3 className="disc-title">UI/UX &amp; Media Editing</h3>
              <p className="disc-sub">Interface prototyping in Figma, visual design, and video creation.</p>
            </div>
            <div className="disc-list">
              {skills.creative.map((skill) => (
                <div key={skill} className="disc-item">
                  <span className="disc-bullet">■</span>
                  <span className="disc-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applied AI Column */}
          <div className="discipline-card">
            <div className="disc-header">
              <span className="disc-num">[03]</span>
              <h3 className="disc-title">AI Tooling &amp; Prompt Engineering</h3>
              <p className="disc-sub">Leveraging reasoning models and vision engines to accelerate delivery.</p>
            </div>
            <div className="disc-list">
              {skills.aiAndTools.map((skill) => (
                <div key={skill} className="disc-item">
                  <span className="disc-bullet">■</span>
                  <span className="disc-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
