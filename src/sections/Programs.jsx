import { Ship, Users, Anchor, Calendar } from 'lucide-react'
import Section from '../components/Section'
import RacingRulesCard from '../components/RacingRulesCard'
import { cn } from '../utils/cn'

const programs = [
  {
    icon: Ship,
    title: 'Racing',
    description:
      'Competitive racing programs for all skill levels, from local regattas to championship events.',
    color: 'text-accent',
  },
  {
    icon: Anchor,
    title: 'Cruising',
    description:
      'Explore beautiful destinations with our organized cruising events and reciprocal club access.',
    color: 'text-accent',
  },
  {
    icon: Users,
    title: 'Junior Sailing',
    description:
      'Comprehensive youth programs that teach sailing skills, safety, and sportsmanship.',
    color: 'text-accent',
  },
  {
    icon: Calendar,
    title: 'Social',
    description:
      'Join our vibrant social calendar with events, dinners, and community gatherings.',
    color: 'text-accent',
  },
]

export default function Programs() {
  return (
    <Section
      id="programs"
      title="Our Programs"
      subtitle="Something for Every Sailor"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
        {programs.map((program) => {
          const Icon = program.icon
          return (
            <div
              key={program.title}
              className={cn(
                'bg-text/5 border border-text/10 rounded-xl p-6',
                'hover:border-accent/50 hover:-translate-y-2',
                'transition-all duration-300 ease-out',
                'flex flex-col items-center text-center'
              )}
            >
              <div
                className={cn(
                  'w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4',
                  'transition-transform duration-300 group-hover:scale-110'
                )}
              >
                <Icon className={cn('w-8 h-8', program.color)} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text mb-3">
                {program.title}
              </h3>
              <p className="text-text/80 leading-relaxed">{program.description}</p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <RacingRulesCard />
        </div>
      </div>
    </Section>
  )
}

