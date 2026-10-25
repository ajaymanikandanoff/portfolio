import { useState } from 'react'
import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Hero({ onOpenResume }) {
  const { profile, hero } = content
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero-editorial-section" id="top">
      <div className="container hero-container">
        {/* Top Status Meta Bar */}
        <div className="hero-meta-bar">
          <div className="status-indicator-rect">
            <span className="status-live-pulse"></span>
            <span className="status-label">{profile.status}</span>
          </div>
          <div className="hero-meta-location">
            <span>{profile.location}</span>
            <span>/</span>
            <span>2026 EDITION</span>
          </div>
        </div>

        {/* Massive Name Headline */}
        <div className="hero-name-block">
          <h1 className="hero-mega-name">{hero.title}</h1>
          <div className="hero-role-tagline">{hero.subtitle}</div>
        </div>

        {/* Main Content Split: Bio & Photo Card */}
        <div className="hero-editorial-split">
          {/* Left: Manifesto & Action Rectangles */}
          <div className="hero-narrative-col">
            <p className="hero-statement">{hero.summary}</p>

            <div className="hero-discipline-strip">
              <span className="discipline-tag">FULL STACK (JAVA &amp; REACT)</span>
              <span className="discipline-tag">UI/UX DESIGN (FIGMA)</span>
              <span className="discipline-tag">VIDEO EDITING &amp; MOTION</span>
              <span className="discipline-tag">APPLIED AI &amp; PROMPTS</span>
            </div>

            {/* Rectangular Action Buttons */}
            <div className="hero-actions-rect-group">
              <a href="#work" className="btn-rect btn-rect-primary">
                <span>VIEW PROJECTS</span>
                <Icon name="arrow-up-right" size={15} />
              </a>

              <button onClick={onOpenResume} className="btn-rect btn-rect-outline">
                <Icon name="arrow-up-right" size={15} />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a href="#contact" className="btn-rect btn-rect-ghost">
                <span>LET'S CONNECT</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-specs-row">
              {hero.quickStats.map((stat) => (
                <div key={stat.label} className="spec-metric-block">
                  <span className="spec-label-title">{stat.label}</span>
                  <span className="spec-label-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Editorial Monochrome Photo Frame */}
          <div className="hero-portrait-col">
            <div className="portrait-frame">
              {!imgError ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="portrait-image"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="portrait-fallback">
                  <div className="fallback-monogram">AM</div>
                  <div className="fallback-label">Ajay M</div>
                  <p className="fallback-hint">
                    Drop your photo into <code>public/me.jpg</code> to display here
                  </p>
                </div>
              )}
              <div className="portrait-caption">
                <span className="caption-title">AJAY M.</span>
                <span className="caption-sub">DEVELOPER &amp; CREATOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awwwards Minimalist Marquee / Ticker */}
      <div className="hero-ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          <span>FULL STACK DEVELOPER</span>
          <span className="ticker-separator">•</span>
          <span>JAVA 17 &amp; SPRING BOOT</span>
          <span className="ticker-separator">•</span>
          <span>REACT &amp; VITE</span>
          <span className="ticker-separator">•</span>
          <span>UI/UX DESIGN (FIGMA)</span>
          <span className="ticker-separator">•</span>
          <span>LYRICAL VIDEO &amp; MEME CREATOR</span>
          <span className="ticker-separator">•</span>
          <span>PROMPT ENGINEERING</span>
          <span className="ticker-separator">•</span>
          <span>FULL STACK DEVELOPER</span>
          <span className="ticker-separator">•</span>
          <span>JAVA 17 &amp; SPRING BOOT</span>
          <span className="ticker-separator">•</span>
          <span>REACT &amp; VITE</span>
          <span className="ticker-separator">•</span>
        </div>
      </div>
    </section>
  )
}
