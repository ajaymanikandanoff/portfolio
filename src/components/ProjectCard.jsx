import { Icon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  const { title, purpose, techList, aiTools, link, repo, badge, category } = project

  return (
    <article className="project-card-container">
      <div className="project-card-inner">
        {/* Top Header Row with Badge & Status */}
        <div className="card-top-row">
          <span className={`project-category-badge category-${category || 'general'}`}>
            {badge || (category ? category.toUpperCase() : 'PROJECT')}
          </span>

          <div className="project-status-indicator">
            {link ? (
              <span className="live-status">
                <span className="live-dot"></span> Live
              </span>
            ) : repo ? (
              <span className="repo-status">
                <Icon name="github" size={13} /> Open Source
              </span>
            ) : (
              <span className="dev-status">In Development</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="project-title">{title}</h3>

        {/* Purpose / Description */}
        <p className="project-purpose">{purpose}</p>

        {/* AI Workflow Attribution Badge */}
        {aiTools && (
          <div className="ai-workflow-tag">
            <Icon name="sparkles" size={14} className="sparkle-icon" />
            <span>{aiTools}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="project-tech-tags">
          {techList && techList.length > 0
            ? techList.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))
            : null}
        </div>

        {/* Card Footer: Action Links */}
        <div className="project-card-actions">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-primary"
            >
              <span>Live Demo</span>
              <Icon name="arrow-up-right" size={15} />
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-secondary"
            >
              <Icon name="github" size={15} />
              <span>Source Code</span>
            </a>
          )}

          {!link && !repo && (
            <span className="project-btn-disabled">
              <span>Prototype Stage</span>
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
