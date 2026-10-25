import { content } from '../data/content.js'

function initials(str) {
  return str
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="container">
        <h2 className="section-title">Tools &amp; Learning</h2>
        <p className="section-desc">The AI tools I actually use to experiment and build, and how I use them.</p>
        <div className="tools-grid">
          {content.tools.map((t) => (
            <article className="card tool-card" key={t.name}>
              <div className="tool-icon">{initials(t.name)}</div>
              <div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
