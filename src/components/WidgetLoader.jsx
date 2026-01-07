import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, AlertCircle } from 'lucide-react'
import { cn } from '../utils/cn'

export default function WidgetLoader({ widgetId, className, widgetProps = {}, ...props }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false)
  const widgetRef = useRef(null)

  // Maximum retry attempts
  const MAX_RETRIES = 3

  // Check if widget has been rendered by the script
  useEffect(() => {
    let observer = null
    let timeout = null
    let mounted = true

    const checkWidgetLoaded = () => {
      if (!mounted) return false
      
      const widgetElement = document.getElementById(widgetId)
      if (widgetElement) {
        // Check if widget has meaningful content (more than just empty or loading state)
        const hasContent = widgetElement.children.length > 0 || 
                          widgetElement.textContent?.trim().length > 0
        
        if (hasContent && !widgetElement.textContent?.includes('Loading')) {
          if (mounted) {
            setIsWidgetLoaded(true)
            setIsLoading(false)
            setHasError(false)
          }
          return true
        }
      }
      return false
    }

    // Check immediately
    if (checkWidgetLoaded()) {
      return () => {
        mounted = false
      }
    }

    // Set up MutationObserver to watch for widget content
    const widgetElement = document.getElementById(widgetId)
    if (widgetElement && mounted) {
      observer = new MutationObserver(() => {
        if (checkWidgetLoaded() && observer) {
          try {
            observer.disconnect()
          } catch (e) {
            // Already disconnected
          }
        }
      })

      try {
        observer.observe(widgetElement, {
          childList: true,
          subtree: true,
          characterData: true,
        })
      } catch (e) {
        console.warn('Could not observe widget element:', e)
      }
    }

    // Fallback timeout - stop loading after 10 seconds even if content hasn't loaded
    timeout = setTimeout(() => {
      if (mounted) {
        const loaded = checkWidgetLoaded()
        if (!loaded) {
          setIsLoading(prev => {
            if (prev && mounted) {
              return false
            }
            return prev
          })
        }
        if (observer) {
          try {
            observer.disconnect()
          } catch (e) {
            // Already disconnected
          }
        }
      }
    }, 10000)

    return () => {
      mounted = false
      if (observer) {
        try {
          observer.disconnect()
        } catch (e) {
          // Observer already disconnected
        }
      }
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [widgetId])

  // Monitor script loading errors
  useEffect(() => {
    let errorTimeout = null
    
    const checkScriptError = () => {
      const scriptElement = document.querySelector('script[src*="saildash-widgets.js"]')
      if (scriptElement) {
        // Check if script failed to load (no onload event after reasonable time)
        errorTimeout = setTimeout(() => {
          // Only set error if we've waited and nothing loaded
          setIsLoading(prev => {
            if (prev && !isWidgetLoaded) {
              setHasError(true)
              return false
            }
            return prev
          })
        }, 8000)

        const handleLoad = () => {
          if (errorTimeout) {
            clearTimeout(errorTimeout)
          }
        }
        
        scriptElement.addEventListener('load', handleLoad)
        
        return () => {
          if (errorTimeout) {
            clearTimeout(errorTimeout)
          }
          scriptElement.removeEventListener('load', handleLoad)
        }
      }
    }

    const cleanup = checkScriptError()
    
    return () => {
      if (cleanup) cleanup()
    }
  }, [isWidgetLoaded])

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1)
      setHasError(false)
      setIsLoading(true)
      setIsWidgetLoaded(false)

      // Clear widget content
      const widgetElement = document.getElementById(widgetId)
      if (widgetElement) {
        widgetElement.innerHTML = ''
      }

      // Reload the widget script - safely check if it exists and is a child before removing
      const existingScript = document.querySelector('script[src*="saildash-widgets.js"]')
      if (existingScript && existingScript.parentNode) {
        try {
          existingScript.parentNode.removeChild(existingScript)
        } catch (e) {
          // Script already removed or not a child, continue anyway
          console.warn('Could not remove script:', e)
        }
      }

      const script = document.createElement('script')
      script.src = 'https://saildash.club/widgets/v1/saildash-widgets.js'
      script.async = true
      script.onerror = () => {
        setIsLoading(false)
        setHasError(true)
      }
      document.body.appendChild(script)
    }
  }

  return (
    <motion.div
      id={widgetId}
      ref={widgetRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isWidgetLoaded ? 1 : 0,
        y: isWidgetLoaded ? 0 : 10,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'relative min-h-[300px]',
        isWidgetLoaded ? 'z-10' : 'opacity-0 pointer-events-none',
        className
      )}
      {...widgetProps}
      {...props}
    >
      {/* Loading Skeleton */}
      <AnimatePresence>
        {isLoading && !hasError && !isWidgetLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20"
          >
            <div className="space-y-4 w-full max-w-md">
              {/* Animated spinner */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
                />
              </div>
              {/* Skeleton cards */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-text/5 border border-text/10 rounded-xl animate-pulse"
                  />
                ))}
              </div>
              <p className="text-center text-text/60 text-sm">
                Loading content...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      <AnimatePresence>
        {hasError && !isWidgetLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20"
          >
            <div className="text-center space-y-4 max-w-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full border border-red-500/20">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  Unable to Load Content
                </h3>
                <p className="text-text/70 text-sm mb-4">
                  We couldn't load the widget content. Please check your connection
                  and try again.
                </p>
              </div>
              {retryCount < MAX_RETRIES && (
                <button
                  onClick={handleRetry}
                  className={cn(
                    'inline-flex items-center gap-2 px-6 py-3',
                    'bg-accent/50 border border-accent text-white rounded-full',
                    'font-semibold text-sm hover:bg-accent/60',
                    'active:bg-accent/70 transition-all duration-150'
                  )}
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
              )}
              {retryCount >= MAX_RETRIES && (
                <p className="text-text/60 text-sm">
                  Maximum retry attempts reached. Please refresh the page.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

