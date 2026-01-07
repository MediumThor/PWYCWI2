import { useEffect } from 'react'
import Section from '../components/Section'
import WidgetLoader from '../components/WidgetLoader'
import { cn } from '../utils/cn'
import { ExternalLink } from 'lucide-react'

export default function Teams() {
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
    <Section
      id="teams"
      title="Our Teams"
      subtitle={
        <a
          href="https://www.saildash.club/clubs/pwyc"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 text-accent',
            'hover:text-accent/80 transition-colors font-medium'
          )}
        >
          Join the Crew
          <ExternalLink className="w-4 h-4" />
        </a>
      }
    >
      {/* SailDash Teams Widget */}
      <WidgetLoader
        widgetId="saildash-teams-Xmnr4JbNLrrbG159npUA"
        className={cn(
          'rounded-xl border border-text/10',
          'bg-text/5 p-6 shadow-lg',
          '-mx-4 sm:-mx-6 md:mx-auto md:max-w-4xl',
          'rounded-none md:rounded-xl'
        )}
        widgetProps={{
          'data-saildash-teams': '',
          'data-club': 'Xmnr4JbNLrrbG159npUA',
          'data-theme': 'dark',
          'data-limit': '10',
        }}
      />
    </Section>
  )
}

