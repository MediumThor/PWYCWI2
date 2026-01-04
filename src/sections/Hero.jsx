import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <img
          src="/images/hero.jpg"
          alt="Port Washington Yacht Club"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <img
              src="/images/logo.png"
              alt="PWYC Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text mb-6">
            Port Washington
            <br />
            <span className="text-accent">Yacht Club</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text/90 max-w-3xl mx-auto mb-12"
          >
            A premier sailing community on the shores of Lake Michigan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <a
              href="#visit"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#visit')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className={cn(
                'px-8 py-3 bg-accent/50 border border-accent text-white rounded-full',
                'font-semibold text-base hover:bg-accent/60',
                'active:bg-accent/70 transition-all duration-150',
                'flex items-center gap-2'
              )}
            >
              Visit PWYC
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-text/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

