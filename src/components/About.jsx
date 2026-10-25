import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function About() {
  const about = content.about || {}
  const profile = content.profile || {}
  const story = about.story || []
  const traits = about.traits || []
  const pillars = about.pillars || []

  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">Story &amp; Identity</div>
          <h2 className="section-headline">{about.title || 'About Ajay'}</h2>
          <p className="section-subheadline">{about.subtitle || ''}</p>
        </div>

        <div className="about-bento-layout">
          {/* Left Column: Narrative Card */}
          <div className="about-story-card">
            <div className="story-header">
              <div className="avatar-chip">
                <span className="avatar-initials">AM</span>
              </div>
              <div>
                <h3 className="story-author">{profile.fullName || 'Ajay M'} <span className="nickname-tag">(Ajay)</span></h3>
                <p className="story-role">{profile.role || 'Aspiring Full Stack Developer'}</p>
              </div>
            </div>

            <div className="story-paragraphs">
              {story.map((paragraph, idx) => (
                <p key={idx} className="story-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-quick-specs">
              {traits.map((t) => (
                <div key={t.label} className="spec-row">
                  <span className="spec-label">{t.label}:</span>
                  <span className="spec-val">{t.value}</span>
                </div>
              ))}
              <div className="spec-row">
                <span className="spec-label">Music &amp; Edits:</span>
                <span className="spec-val">Lyrical Video Creator (@asp.offx)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Humor &amp; Memes:</span>
                <span className="spec-val">Meme Page Creator (@adangaathavanda)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Capability Pillars */}
          <div className="about-pillars-grid">
            {pillars.map((item) => (
              <div key={item.title} className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Icon name={item.icon || 'code'} size={20} />
                </div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
