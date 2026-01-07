import { ExternalLink, Ship } from 'lucide-react'
import { cn } from '../utils/cn'

export default function RacingRulesCard() {
  return (
    <a
      href="https://pwycrr.com"
      target="_blank"
      rel="noopener noreferrer"
          className={cn(
            'block bg-text/5 border border-text/10 rounded-xl p-6 shadow-lg',
            'hover:border-accent/50 hover:-translate-y-2 hover:shadow-xl',
            'transition-all duration-300 ease-out',
            'text-center group'
          )}
        >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4',
            'transition-transform duration-300 group-hover:scale-110'
          )}
        >
          <Ship className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-text mb-2">
          Rendezvous Regatta
        </h3>
        <p className="text-text/80 mb-4 leading-relaxed">
          Join us for the 18th Annual Rendezvous Regatta. Competitive racing,
          good seamanship, and camaraderie on Lake Michigan. All sailboats
          welcome.
        </p>
        <div className="inline-flex items-center gap-2 text-accent font-medium">
          Learn More
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  )
}

