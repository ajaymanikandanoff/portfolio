import { Icon } from './Icons.jsx'

const workflowSteps = [
  {
    step: '01',
    title: 'Architect & Prompt Design',
    subtitle: 'System Modeling & Reasoning',
    description:
      'Starting from problem definition, I structure data schemas, define API contracts, and leverage LLMs (Claude & Antigravity) to explore edge cases and architectural trade-offs.',
    tags: ['System Architecture', 'Prompt Modeling', 'API Design'],
    icon: 'layers',
  },
  {
    step: '02',
    title: 'Full-Stack Implementation',
    subtitle: 'Robust Code & Modern UI',
    description:
      'Writing clean Java (Spring Boot) backends, responsive React frontends, and Python AI vision scripts. Integrating databases (MongoDB, H2) and ensuring modular, maintainable code.',
    tags: ['Spring Boot 3', 'React & Vite', 'Python Vision', 'REST APIs'],
    icon: 'code',
  },
  {
    step: '03',
    title: 'Performance & Privacy First',
    subtitle: 'Verification & Local Optimization',
    description:
      'Optimizing bundle sizes, prioritizing client-side data privacy (such as in PDF Machan), testing responsiveness across mobile and desktop, and shipping reliable applications.',
    tags: ['Client-Side Privacy', 'Responsive UI', 'Clean UX', 'Performance'],
    icon: 'speed',
  },
]

export default function WorkflowSection() {
  return (
    <section className="section-padding workflow-section" id="workflow">
      <div className="container">
        <div className="section-header-centered">
          <div className="section-badge">Engineering Process</div>
          <h2 className="section-headline">How I Build &amp; Ship</h2>
          <p className="section-subheadline">
            Blending solid computer science principles with modern AI-augmented developer velocity.
          </p>
        </div>

        <div className="workflow-steps-grid">
          {workflowSteps.map((item) => (
            <div key={item.step} className="workflow-step-card">
              <div className="step-card-header">
                <span className="step-counter">{item.step}</span>
                <div className="step-icon-wrap">
                  <Icon name={item.icon} size={20} />
                </div>
              </div>

              <h3 className="step-title">{item.title}</h3>
              <div className="step-subtitle">{item.subtitle}</div>
              <p className="step-desc">{item.description}</p>

              <div className="step-tags-wrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="step-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
