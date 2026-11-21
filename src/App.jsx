import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import EventsSection from './components/EventsSection.jsx'
import ScheduleSection from './components/ScheduleSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
