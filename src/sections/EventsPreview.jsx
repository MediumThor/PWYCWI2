import { useEffect } from 'react'
import Section from '../components/Section'
import { cn } from '../utils/cn'

export default function EventsPreview() {
  useEffect(() => {
    // Load the SailDash widgets script if it hasn't been loaded yet
    if (!document.querySelector('script[src*="saildash-widgets.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://saildash.club/widgets/v1/saildash-widgets.js'
      script.async = true
      script.onerror = () => {
        console.error('Failed to load SailDash widgets script')
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <Section id="events" title="Upcoming Public Events">
      {/* SailDash Events Widget */}
      <div
        id="saildash-events-Xmnr4JbNLrrbG159npUA"
        data-saildash-events
        data-club="Xmnr4JbNLrrbG159npUA"
        data-theme="dark"
        data-limit="10"
        className={cn(
          'min-h-[300px] rounded-xl border border-text/10',
          'bg-text/5 p-6',
          '-mx-4 sm:-mx-6 md:mx-auto md:max-w-4xl',
          'rounded-none md:rounded-xl'
        )}
      />
    </Section>
  )
}

