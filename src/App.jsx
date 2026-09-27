import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import WhatIBring from './components/WhatIBring'
import CareerGoal from './components/CareerGoal'
import Interests from './components/Interests'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-dark">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <WhatIBring />
        <CareerGoal />
        <Interests />
      </main>
      <ContactCTA />
      <Footer />
    </div>
  )
}
