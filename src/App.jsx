import './index.css'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { Contact, Footer } from './components/ContactFooter'
import Education from './components/Education'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <hr className="border-t border-rule max-w-4xl mx-auto" />
        <About />
        <hr className="border-t border-rule max-w-4xl mx-auto" />
        <Skills />
        <hr className="border-t border-rule max-w-4xl mx-auto" />
        <Projects />
        <hr className="border-t border-rule max-w-4xl mx-auto" />
        <Experience />
        <hr className="border-t border-rule max-w-4xl mx-auto" />
        <Education />
      </main>
      <Contact />
      <Footer />
    </LangProvider>
  )
}
