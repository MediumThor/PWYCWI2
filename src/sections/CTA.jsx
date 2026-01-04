import { ArrowRight, Mail } from 'lucide-react'
import Section from '../components/Section'
import { cn } from '../utils/cn'

export default function CTA() {
  return (
    <Section className="bg-gradient-to-b from-background to-background/95">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
          Join Our Community
        </h2>
        <p className="text-xl text-text/90 mb-8">
          {/* TODO: Add actual membership information */}
          Experience the best of sailing at Port Washington Yacht Club. Whether
          you're interested in racing, cruising, or simply being part of a
          vibrant sailing community, we'd love to have you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:commodore@pwycwi.com"
            className={cn(
              'px-8 py-3 bg-accent/50 border border-accent text-white rounded-full',
              'font-semibold text-base hover:bg-accent/60',
              'active:bg-accent/70 transition-all duration-150',
              'flex items-center justify-center gap-2'
            )}
          >
            Contact Us
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#visit"
            className={cn(
              'px-8 py-3 bg-accent/50 border border-accent text-white rounded-full',
              'font-semibold text-base hover:bg-accent/60',
              'active:bg-accent/70 transition-all duration-150',
              'flex items-center justify-center gap-2'
            )}
          >
            Plan a Visit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </Section>
  )
}

