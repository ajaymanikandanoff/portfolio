import { Icon } from './Icons.jsx'

export default function ProjectCard({ project, index }) {
  const { title, year, category, purpose, tech, aiAttribution, link, repo } = project

  const padIndex = (index + 1).toString().padStart(2, '0')

  return (
    <article className="project-editorial-card">
      <div className="project-card-header">
        <div className="project-index-category">
          <span className="project-num-tag">{padIndex}</span>
          <span className="project-category-rect">{category}</span>
        </div>
        <span className="project-year-tag">{year || '2025-2026'}</span>
      </div>

      <div className="project-body-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-purpose">{purpose}</p>

        {aiAttribution && (
          <div className="project-ai-note">
            <span className="note-label">ARCH:</span>
            <span>{aiAttribution}</span>
          </div>
        )}

        <div className="project-tech-rect-list">
          {(tech || []).map((t) => (
            <span key={t} className="tech-tag-rect">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rect btn-rect-primary btn-sm"
          >
            <span>LIVE DEMO</span>
            <Icon name="arrow-up-right" size={13} />
          </a>
        )}

        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rect btn-rect-outline btn-sm"
          >
            <Icon name="github" size={13} />
            <span>SOURCE CODE</span>
          </a>
        )}

        {!link && !repo && (
          <span className="project-badge-inactive">
            <span>PROTOTYPE IN DEV</span>
          </span>
        )}
      </div>
    </article>
  )
}
