import TopNav from './components/TopNav'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Teams from './sections/Teams'
import EventsPreview from './sections/EventsPreview'
import Visit from './sections/Visit'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <Hero />
        <About />
        <Programs />
        <EventsPreview />
        <Teams />
        <Visit />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
