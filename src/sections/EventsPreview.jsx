import { useEffect } from 'react'
import WidgetLoader from '../components/WidgetLoader'
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
    <section id="events" className="w-full py-16 md:py-24 overflow-visible">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Upcoming Events
        </h2>
      </div>
      <div className="md:max-w-4xl md:mx-auto overflow-visible">
        {/* SailDash Events Widget */}
        <WidgetLoader
          widgetId="saildash-events-Xmnr4JbNLrrbG159npUA"
          className={cn(
            'border border-text/10',
            'bg-text/5 p-4 md:p-6 shadow-xl',
            'w-[100vw] md:w-full',
            'relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0',
            'rounded-none md:rounded-xl'
          )}
          widgetProps={{
            'data-saildash-events': '',
            'data-club': 'Xmnr4JbNLrrbG159npUA',
            'data-theme': 'dark',
            'data-limit': '10',
          }}
        />
      </div>
    </section>
  )
}

