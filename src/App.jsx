import { useEffect } from 'react'
import { CustomCursor } from './components/effects/CustomCursor'
import { ScrollProgress } from './components/effects/ScrollProgress'
import { Navigation } from './components/layout/Navigation'
import Hero from './components/Hero'
import HeroEnhanced from './components/HeroEnhanced'
import About from './components/sections/About'
import Work from './components/Work'
import Projects from './components/Projects'
import ProjectsEnhanced from './components/ProjectsEnhanced'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Add dark class based on saved preference on first load (SSR safety)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.classList.add(saved)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main>
        {/* Use HeroEnhanced for premium UI or Hero for original */}
        <HeroEnhanced />
        <About />
        <Work />
        {/* Use ProjectsEnhanced for BentoGrid layout or Projects for classic grid */}
        <ProjectsEnhanced />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
