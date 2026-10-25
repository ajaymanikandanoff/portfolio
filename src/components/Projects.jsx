import { useState } from 'react'
import { content } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'

const filterTabs = [
  { id: 'all', label: 'ALL WORKS' },
  { id: 'fullstack', label: 'FULL STACK' },
  { id: 'ai', label: 'AI & VISION' },
  { id: 'tools', label: 'WEB UTILITIES' },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const projects = content.projects || []

  const filtered = projects.filter((p) => {
    if (activeTab === 'all') return true
    if (activeTab === 'fullstack') return p.category.toLowerCase().includes('full stack') || p.category.toLowerCase().includes('java')
    if (activeTab === 'ai') return p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('vision') || p.category.toLowerCase().includes('nlp')
    if (activeTab === 'tools') return p.category.toLowerCase().includes('utility') || p.category.toLowerCase().includes('tool')
    return true
  })

  return (
    <section className="section-block work-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div className="header-eyebrow-row">
            <span className="eyebrow-num">01 / SELECTED WORKS</span>
            <span className="eyebrow-divider"></span>
            <span className="eyebrow-count">{projects.length} PROJECTS</span>
          </div>
          <h2 className="editorial-title">ENGINEERED PRODUCTS</h2>
          <p className="editorial-desc">
            A selection of software systems, web applications, and algorithmic tools engineered with modern frameworks.
          </p>

          {/* Rectangular Filter Tabs */}
          <div className="filter-rect-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`filter-rect-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-editorial-grid">
          {filtered.map((proj, idx) => (
            <ProjectCard key={proj.title} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
