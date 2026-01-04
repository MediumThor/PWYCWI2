import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

export default function Section({
  id,
  children,
  className,
  title,
  subtitle,
  maxWidth = 'max-w-7xl',
}) {
  const ref = useRef(null)

  return (
    <section
      id={id}
      ref={ref}
      className={cn('w-full py-16 md:py-24', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidth)}
      >
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
                {subtitle}
              </div>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}

