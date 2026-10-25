import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import SkillsMatrix from './components/SkillsMatrix.jsx'
import About from './components/About.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ResumeModal from './components/ResumeModal.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    // Check saved theme or default to dark
    const saved = localStorage.getItem('portfolio_theme') || 'dark'
    setTheme(saved)
    document.body.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.body.setAttribute('data-theme', nextTheme)
    localStorage.setItem('portfolio_theme', nextTheme)
  }

  const openResume = () => setIsResumeOpen(true)
  const closeResume = () => setIsResumeOpen(false)

  return (
    <div className="portfolio-editorial-app">
      <Header
        onOpenResume={openResume}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="main-content">
        <Hero onOpenResume={openResume} />
        <Projects />
        <SkillsMatrix />
        <About onOpenResume={openResume} />
        <Certifications />
        <Contact onOpenResume={openResume} />
      </main>
      <Footer onOpenResume={openResume} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  )
}
