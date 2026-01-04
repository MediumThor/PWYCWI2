import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="PWYC Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="text-xl font-heading font-bold text-text">
                PWYC
              </span>
            </div>
            <p className="text-text/80 mb-4">
              Port Washington Yacht Club
              <br />
              430 N Lake St Port
              <br />
              Port Washington, WI 53074
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-text/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:commodore@pwycwi.com"
                  className="hover:text-accent transition-colors"
                >
                  commodore@pwycwi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+12622849904"
                  className="hover:text-accent transition-colors"
                >
                  (262) 284-9904
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>430 N Lake St Port, Port Washington, WI 53074</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-text/80 hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-text/80 hover:text-accent transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="https://www.saildash.club/clubs/pwyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  SailDash Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text/10 pt-8">
          <div className="text-center">
            <p className="text-text/60 text-sm">
              © {new Date().getFullYear()} Port Washington Yacht Club. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

