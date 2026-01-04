import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" title="About PWYC" subtitle="Our Story">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-text/90 leading-relaxed mb-6">
          {/* TODO: Add actual club history and information */}
          Port Washington Yacht Club has been a cornerstone of the sailing
          community for generations. We are dedicated to promoting the sport of
          sailing, fostering camaraderie among members, and providing exceptional
          facilities and programs for sailors of all ages and skill levels.
        </p>
        <p className="text-lg md:text-xl text-text/90 leading-relaxed">
          Our club offers a vibrant community atmosphere, world-class racing
          programs, family-friendly cruising opportunities, and a commitment to
          junior sailing development. Whether you're a competitive racer, a
          weekend cruiser, or new to sailing, PWYC welcomes you.
        </p>
      </div>
    </Section>
  )
}

