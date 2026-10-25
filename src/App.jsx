import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import SkillsMatrix from './components/SkillsMatrix.jsx'
import CreativeHub from './components/CreativeHub.jsx'
import WorkflowSection from './components/WorkflowSection.jsx'
import About from './components/About.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="portfolio-app-root">
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <SkillsMatrix />
        <CreativeHub />
        <WorkflowSection />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
