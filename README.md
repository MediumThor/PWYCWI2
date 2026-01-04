# Port Washington Yacht Club - Marketing Site

A premium single-page marketing website for Port Washington Yacht Club, built with Vite + React + Tailwind CSS. Designed as a "shell" that can later route or link into SailDash OS.

## Features

- 🎨 Modern nautical design with premium styling
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance (Lighthouse 85+)
- 🎭 Smooth animations with Framer Motion
- 🔗 SailDash widget integration points
- ♿ Accessible (WCAG compliant)

## Tech Stack

- **Vite** - Build tool and dev server
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **clsx + tailwind-merge** - Class name utilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):

```bash
# SailDash Integration
VITE_SAILDASH_CLUB_URL=https://saildash.club/clubs/pwycwi
VITE_SAILDASH_WIDGET_CDN=https://cdn.saildash.club/widgets/v1/saildash-widgets.js
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SAILDASH_CLUB_URL` | URL to the SailDash club page | Yes |
| `VITE_SAILDASH_WIDGET_CDN` | CDN URL for SailDash widgets (future) | No |

## Project Structure

```
pwyc-site/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components (TopNav, Section)
│   ├── sections/     # Page sections (Hero, About, Programs, etc.)
│   ├── styles/       # Global styles and Tailwind config
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
└── vite.config.js    # Vite configuration
```

## Sections

- **Hero** - Full-viewport hero with CTAs
- **About** - Club information and history
- **Programs** - Racing, Cruising, Junior Sailing, Social
- **Events Preview** - Upcoming events list
- **SailDash Widget** - Integration point for embeddable widgets
- **Visit** - Location, contact, reciprocity information
- **CTA** - Join/contact call-to-action
- **Footer** - Contact info, links, social media

## SailDash Widget Integration

The site includes a prepared integration point for SailDash embeddable widgets. The widget section (`SailDashWidget.jsx`) contains a placeholder div with the correct data attributes:

```html
<div 
  id="saildash-club-widget" 
  data-club="pwycwi" 
  data-theme="dark" 
  data-view="panel"
  data-limit-teams="6"
  data-limit-events="5"
></div>
```

When the widget script is embedded, it will automatically detect and render into this container. See `API_STRUCTURE.md` for the widget API contract.

## Development

### Code Formatting

This project uses Prettier for code formatting. Format code with:

```bash
npx prettier --write .
```

### Linting

ESLint is configured for React. Run the linter:

```bash
npm run lint
```

## Performance

- Images are optimized (WebP/AVIF support)
- Lazy loading for non-critical images
- Code splitting ready for future routing
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This site can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## TODO / Placeholders

Several sections contain placeholder content marked with `TODO` comments:

- Hero tagline
- About section content
- Events data (currently using mock data)
- Visit section address and contact info
- Footer contact information
- Social media links

Replace these with actual content before production deployment.

## License

Copyright © Port Washington Yacht Club. All rights reserved.
