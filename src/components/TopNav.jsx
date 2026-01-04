import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../utils/cn'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#teams', label: 'Teams' },
  { href: '#events', label: 'Events' },
  { href: '#visit', label: 'Visit' },
  { href: '#visit', label: 'Contact' },
]

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance (px)
  const minSwipeDistance = 50

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    if (isUpSwipe && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center space-x-2 group"
            >
              <img
                src="/images/logo.png"
                alt="PWYC Logo"
                className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110 object-contain"
              />
              <span className="text-xl md:text-2xl font-heading font-bold text-text">
                PWYC
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text/90 hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - iOS Style Top Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
            />
            {/* Top Sheet */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 200
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className={cn(
                'fixed top-0 left-0 right-0 z-[60] md:hidden',
                'bg-background/80 backdrop-blur-xl backdrop-saturate-150',
                'border-b border-text/10',
                'rounded-b-3xl shadow-2xl',
                'pt-16 pb-8 px-6',
                'touch-pan-y'
              )}
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              {/* Close Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'w-12 h-1.5 rounded-full',
                    'bg-text/30 hover:bg-text/50',
                    'transition-colors duration-150',
                    'active:bg-text/60'
                  )}
                  aria-label="Close menu"
                />
              </div>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'block px-4 py-3 rounded-xl',
                      'text-text font-medium text-lg',
                      'bg-text/5 hover:bg-accent/10',
                      'active:bg-accent/20',
                      'transition-colors duration-150'
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

