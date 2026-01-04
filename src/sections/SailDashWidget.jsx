import Section from '../components/Section'
import { cn } from '../utils/cn'

/**
 * SailDash Widget Integration Point
 *
 * This section prepares the site for embedding SailDash widgets.
 * When the widget script is loaded, it will automatically detect
 * and render into the div below.
 *
 * Embed example:
 * <div id="saildash-club-widget" data-club="pwycwi" data-theme="dark" data-view="panel"></div>
 * <script async src="https://cdn.saildash.club/widgets/v1/saildash-widgets.js"></script>
 */
export default function SailDashWidget() {
  return (
    <Section
      id="saildash"
      title="PWYC on SailDash"
      subtitle="Connect with our community"
      className="bg-text/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Widget Container */}
        <div
          id="saildash-club-widget"
          data-club="pwycwi"
          data-theme="dark"
          data-view="panel"
          data-limit-teams="6"
          data-limit-events="5"
          className={cn(
            'min-h-[400px] rounded-xl border border-text/10',
            'bg-text/5 p-6',
            'flex items-center justify-center'
          )}
        >
          {/* Placeholder content - will be replaced by widget script */}
          <div className="text-center text-text/60">
            <p className="text-lg mb-2">SailDash Widget</p>
            <p className="text-sm">
              Widget will load here when script is embedded
            </p>
          </div>
        </div>

        {/* Instructions (hidden in production, visible for development) */}
        {import.meta.env.DEV && (
          <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm text-text/80 mb-2">
              <strong>Development Note:</strong> To embed the widget, add this
              script tag before the closing body tag:
            </p>
            <code className="block text-xs bg-background p-3 rounded overflow-x-auto">
              {`<script async src="https://cdn.saildash.club/widgets/v1/saildash-widgets.js"></script>`}
            </code>
          </div>
        )}
      </div>
    </Section>
  )
}


