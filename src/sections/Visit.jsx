import { MapPin, ExternalLink, Mail, Anchor, FileText, Calendar, Bell, Users } from 'lucide-react'
import Section from '../components/Section'
import { cn } from '../utils/cn'

export default function Visit() {
  const address = '430 N Lake St Port, Port Washington, WI 53074'
  const googleMapsUrl =
    'https://www.google.com/maps/place/430+N+Lake+St+Port,+Port+Washington,+WI+53074/@43.3918567,-87.8681928,17z/data=!3m1!4b1!4m6!3m5!1s0x8804ea1b5973bb41:0xfc9e0b3d81981bc5!8m2!3d43.3918567!4d-87.8656179!16s%2Fg%2F11bw3x195l?entry=ttu'
  const appleMapsUrl = 'https://maps.apple.com/?q=430+N+Lake+St+Port,+Port+Washington,+WI+53074'

  return (
    <Section id="visit" title="Visit PWYC" subtitle="We Welcome You">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Address */}
          <div
            className={cn(
              'bg-text/5 border border-text/10 rounded-xl p-6 shadow-lg',
              'flex flex-col gap-4'
            )}
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-text mb-2">
                  Location
                </h3>
                <p className="text-text/90 mb-4">
                  {address}
                </p>
                {/* Mobile Map Buttons */}
                <div className="md:hidden flex flex-col gap-2 mt-4 items-center">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'px-6 py-3 bg-[#4285F4]/50 border border-[#4285F4] text-white rounded-full',
                      'font-semibold text-base hover:bg-[#4285F4]/60',
                      'active:bg-[#4285F4]/70 transition-all duration-150',
                      'flex items-center justify-center gap-2 w-full max-w-xs'
                    )}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Open in Google Maps
                  </a>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full',
                      'font-semibold text-base hover:bg-white/15',
                      'active:bg-white/20 transition-all duration-150',
                      'flex items-center justify-center gap-2 w-full max-w-xs'
                    )}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Open in Apple Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div
            className={cn(
              'bg-text/5 border border-text/10 rounded-xl p-6 shadow-lg',
              'flex flex-col gap-4'
            )}
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-text mb-2">
                  Contact
                </h3>
                <p className="text-text/90 mb-4">
                  {/* TODO: Add actual contact information */}
                  For visiting yachts and inquiries, please contact our
                  membership office.
                </p>
                <a
                  href="mailto:commodore@pwycwi.com"
                  className={cn(
                    'inline-flex items-center gap-2 text-accent',
                    'hover:text-accent/80 transition-colors font-medium'
                  )}
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SailDash Member Services */}
        <div
          className={cn(
            'bg-gradient-to-br from-accent/10 to-accent/5',
            'border border-accent/20 rounded-2xl p-8 md:p-10 mb-8 shadow-lg',
            'backdrop-blur-sm'
          )}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4">
              <Anchor className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-text mb-3">
              Connect on SailDash
            </h3>
            <p className="text-lg md:text-xl text-text/90 max-w-2xl mx-auto">
              SailDash is our comprehensive member platform for managing your
              club experience, staying connected, and accessing all member services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div
              className={cn(
                'bg-text/5 border-2 border-blue-500/30 rounded-xl p-5 shadow-lg',
                'hover:border-blue-500/50 hover:bg-text/10 hover:shadow-xl',
                'transition-all duration-200'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-full border-2 border-blue-500/20">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-semibold text-text">Membership Applications</h4>
              </div>
              <p className="text-sm text-text/80 leading-relaxed">
                Submit and track your membership application online
              </p>
            </div>
            <div
              className={cn(
                'bg-text/5 border-2 border-purple-500/30 rounded-xl p-5 shadow-lg',
                'hover:border-purple-500/50 hover:bg-text/10 hover:shadow-xl',
                'transition-all duration-200'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/10 rounded-full border-2 border-purple-500/20">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="font-semibold text-text">Private Party Requests</h4>
              </div>
              <p className="text-sm text-text/80 leading-relaxed">
                Reserve facilities for your private events and gatherings
              </p>
            </div>
            <div
              className={cn(
                'bg-text/5 border-2 border-green-500/30 rounded-xl p-5 shadow-lg',
                'hover:border-green-500/50 hover:bg-text/10 hover:shadow-xl',
                'transition-all duration-200'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/10 rounded-full border-2 border-green-500/20">
                  <Bell className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-semibold text-text">Club News & Updates</h4>
              </div>
              <p className="text-sm text-text/80 leading-relaxed">
                Stay informed with the latest events, announcements, and news
              </p>
            </div>
            <div
              className={cn(
                'bg-text/5 border-2 border-orange-500/30 rounded-xl p-5 shadow-lg',
                'hover:border-orange-500/50 hover:bg-text/10 hover:shadow-xl',
                'transition-all duration-200'
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-500/10 rounded-full border-2 border-orange-500/20">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="font-semibold text-text">Members-Only Events</h4>
              </div>
              <p className="text-sm text-text/80 leading-relaxed">
                Members-only events are listed only on SailDash
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.saildash.club/clubs/pwyc"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-3 px-8 py-3',
                'bg-accent/50 border border-accent text-white rounded-full',
                'font-semibold text-base hover:bg-accent/60',
                'active:bg-accent/70 transition-all duration-150'
              )}
            >
              <Anchor className="w-5 h-5" />
              Visit PWYC on SailDash
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mb-8">
          <h3 className="text-xl font-heading font-semibold text-text mb-4 text-center">
            Find Us
          </h3>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-text/10 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-0 pb-[56.25%] bg-text/5">
              <iframe
                src={`https://www.google.com/maps?q=430+N+Lake+St+Port,+Port+Washington,+WI+53074&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Port Washington Yacht Club Location"
                className="w-full h-full"
              />
            </div>
          </a>
          <div className="mt-4 text-center hidden md:block">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 text-accent',
                'hover:text-accent/80 transition-colors font-medium'
              )}
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reciprocity */}
          <div
            className={cn(
              'bg-accent/10 border border-accent/20 rounded-xl p-6 shadow-lg',
              'text-center'
            )}
          >
          <h3 className="text-xl font-heading font-semibold text-text mb-3">
            Reciprocal Club Privileges
          </h3>
          <p className="text-text/90">
            Members of reciprocal yacht clubs are welcome. Please contact us in
            advance to arrange your visit.
          </p>
        </div>
      </div>
    </Section>
  )
}

