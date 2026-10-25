import { useState } from 'react'
import { content } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Hero() {
  const { hero, profile, contact } = content
  const [copied, setCopied] = useState(false)
  const [terminalCopied, setTerminalCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const codeSnippet = `const developer = {
  fullName: "Ajay M",
  callMe: "Ajay",
  role: "Aspiring Full Stack Developer",
  creative: ["UI/UX (Figma)", "Video Editing", "Content Creator"],
  codingLanguages: ["HTML", "CSS", "JavaScript", "Python", "C", "C++", "Java"],
  videoSuite: ["CapCut", "Photoshop", "Alight Motion", "Canva"],
  aiSuperpowers: ["Prompt Engineering", "Gemini Vision", "Antigravity"],
  contentPages: ["@asp.offx (Lyrical)", "@adangaathavanda (Memes)"],
  personality: "Introvert deep-worker & team leader",
  available: true
};`

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippet)
    setTerminalCopied(true)
    setTimeout(() => setTerminalCopied(false), 2000)
  }

  return (
    <section className="hero-section" id="hero">
      {/* Ambient background glow elements */}
      <div className="hero-ambient-glow glow-1"></div>
      <div className="hero-ambient-glow glow-2"></div>
      <div className="hero-grid-overlay"></div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Left Column: Text & Value Prop */}
          <div className="hero-left">
            <div className="status-pill">
              <span className="status-indicator">
                <span className="indicator-ping"></span>
                <span className="indicator-core"></span>
              </span>
              <span className="status-pill-text">{hero.badge}</span>
            </div>

            <h1 className="hero-main-title">
              {hero.titleLine1} <br />
              <span className="gradient-highlight">{hero.titleLine2}</span>
            </h1>

            <p className="hero-lead-text">{hero.description}</p>

            {/* Creative & Tech Badges Bar */}
            <div className="hero-hybrid-pills">
              <span className="hybrid-pill">
                <span className="pill-dot emerald"></span> Full-Stack Code
              </span>
              <span className="hybrid-pill">
                <span className="pill-dot cyan"></span> UI/UX (Figma)
              </span>
              <span className="hybrid-pill">
                <span className="pill-dot pink"></span> Video &amp; Lyrical Edits
              </span>
              <span className="hybrid-pill">
                <span className="pill-dot amber"></span> Prompt Engineering
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary-gradient">
                <span>View Projects</span>
                <Icon name="arrow-up-right" size={16} />
              </a>

              <a href="#creative" className="btn btn-glass">
                <span>Creative Lab</span>
              </a>

              <button
                onClick={copyEmail}
                className={`btn btn-icon-copy ${copied ? 'active' : ''}`}
                title="Copy email to clipboard"
              >
                <Icon name={copied ? 'check' : 'copy'} size={15} />
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social quick links */}
            <div className="hero-social-links">
              <span className="social-label">Connect:</span>
              <a
                href="https://github.com/ajaymanikandanoff"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <Icon name="github" size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ajaymanikandan-in"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <Icon name="linkedin" size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/a.jx.y"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Personal Instagram"
              >
                <Icon name="instagram" size={15} />
                <span>@a.jx.y</span>
              </a>
              <a
                href="https://www.instagram.com/asp.offx"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Lyrical Page"
              >
                <span className="pill-emoji">🎵</span>
                <span>@asp.offx</span>
              </a>
              <a
                href="https://www.instagram.com/adangaathavanda"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Meme Page"
              >
                <span className="pill-emoji">😂</span>
                <span>@adangaathavanda</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Code Terminal / Bento Card */}
          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">ajay.profile.ts</div>
                <button
                  onClick={copySnippet}
                  className="terminal-copy-action"
                  title="Copy code snippet"
                >
                  <Icon name={terminalCopied ? 'check' : 'copy'} size={13} />
                  <span>{terminalCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-def">ajay</span> = &#123;{'\n'}
                    {'  '}
                    <span className="token-key">fullName</span>:{' '}
                    <span className="token-string">"Ajay M"</span>,{'\n'}
                    {'  '}
                    <span className="token-key">knownAs</span>:{' '}
                    <span className="token-string">"Ajay"</span>,{'\n'}
                    {'  '}
                    <span className="token-key">role</span>:{' '}
                    <span className="token-string">"Aspiring Full Stack Dev"</span>,{'\n'}
                    {'  '}
                    <span className="token-key">creative</span>: [
                    <span className="token-string">"UI/UX (Figma)"</span>,{' '}
                    <span className="token-string">"Video Editor"</span>],{'\n'}
                    {'  '}
                    <span className="token-key">devStack</span>: [
                    <span className="token-string">"HTML"</span>,{' '}
                    <span className="token-string">"CSS"</span>,{' '}
                    <span className="token-string">"JS"</span>,{' '}
                    <span className="token-string">"Python"</span>,{' '}
                    <span className="token-string">"C++"</span>],{'\n'}
                    {'  '}
                    <span className="token-key">videoTools</span>: [
                    <span className="token-string">"CapCut"</span>,{' '}
                    <span className="token-string">"Photoshop"</span>,{' '}
                    <span className="token-string">"Alight Motion"</span>],{'\n'}
                    {'  '}
                    <span className="token-key">contentHub</span>: &#123;{' '}
                    <span className="token-key">lyrical</span>: <span className="token-string">"@asp.offx"</span>,{' '}
                    <span className="token-key">memes</span>: <span className="token-string">"@adangaathavanda"</span> &#125;,{'\n'}
                    {'  '}
                    <span className="token-key">mindset</span>:{' '}
                    <span className="token-string">"Introvert deep worker &amp; team leader"</span>,{'\n'}
                    {'  '}
                    <span className="token-key">status</span>:{' '}
                    <span className="token-boolean">"Building with AI &amp; Code"</span>
                    {'\n'}&#125;;
                  </code>
                </pre>
              </div>

              <div className="terminal-footer">
                <div className="pulse-tag">
                  <span className="pulse-ping"></span>
                  <span>Hybrid Developer • UI/UX &amp; Video Ready</span>
                </div>
                <span className="terminal-tag">ajay.m.dev</span>
              </div>
            </div>

            {/* Fast Stats Row */}
            <div className="hero-stats-grid">
              {(hero?.stats || []).map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-name">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
