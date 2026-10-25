import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function CreativeHub() {
  const creativeHub = content.creativeHub || {}
  const channels = creativeHub.channels || []
  const designSkills = creativeHub.designSkills || []

  return (
    <section className="section-padding creative-section" id="creative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">Creative Technologist</div>
          <h2 className="section-headline">{creativeHub.title || 'Creative Lab & Content Creation'}</h2>
          <p className="section-subheadline">{creativeHub.subtitle || ''}</p>
        </div>

        {/* Content Channels Grid */}
        <div className="creative-channels-grid">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-feature-card"
            >
              <div className="channel-top-line">
                <span className="channel-tag-chip">{channel.tag}</span>
                <span className="channel-platform-pill">
                  <Icon name="instagram" size={13} />
                  Instagram
                </span>
              </div>

              <div className="channel-main-info">
                <h3 className="channel-brand-name">
                  <span>@{channel.name?.replace('@', '')}</span>
                  <Icon name="arrow-up-right" size={16} className="channel-launch-icon" />
                </h3>
                <p className="channel-story-desc">{channel.desc}</p>
              </div>

              <div className="channel-tools-strip">
                <span className="tools-strip-label">Tools used:</span>
                <div className="channel-tool-pills">
                  {(channel.tools || []).map((tool) => (
                    <span key={tool} className="tool-pill-micro">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Creative Suite Bento Bar */}
        <div className="creative-tools-bento">
          <div className="bento-headline-row">
            <div className="bento-title-col">
              <h3 className="bento-suite-title">Creative &amp; Visual Arsenal</h3>
              <p className="bento-suite-desc">
                From wireframing UI in Figma to motion keyframing in Alight Motion &amp; Photoshop.
              </p>
            </div>
            <div className="bento-hybrid-badge">
              <span className="badge-sparkle">✨</span>
              <span>Full-Stack Code + Visual Design Hybrid</span>
            </div>
          </div>

          <div className="creative-skills-list">
            {designSkills.map((tool) => (
              <div key={tool.name} className="creative-skill-capsule">
                <div className="capsule-left">
                  <span className="capsule-name">{tool.name}</span>
                  <span className="capsule-role">{tool.role}</span>
                </div>
                <span className="capsule-level">{tool.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
