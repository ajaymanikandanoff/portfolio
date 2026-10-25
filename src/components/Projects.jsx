import { useState } from 'react'
import { content } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'Applied AI & ML' },
  { id: 'fullstack', label: 'Full-Stack Systems' },
  { id: 'tools', label: 'Web Utilities & Tools' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = content.projects || []
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'ai') return p.category === 'ai'
    if (activeFilter === 'fullstack') return p.category === 'fullstack' || p.techList?.some(t => t.includes('Node') || t.includes('Java'))
    if (activeFilter === 'tools') return p.category === 'tools'
    return true
  })

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">Featured Work</div>
          <h2 className="section-headline">Engineered with Purpose</h2>
          <p className="section-subheadline">
            A curated collection of web applications, AI-integrated solutions, and full-stack software built with modern engineering workflows.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="project-filter-bar" role="tablist" aria-label="Project category filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
