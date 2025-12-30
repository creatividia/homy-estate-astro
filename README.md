# Homy Estate

A modern, responsive real estate marketplace website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Project Overview

Homy Estate is an Astro website template for property listing platform that connects buyers, renters, and investors with verified real estate listings and trusted local agents.

## Features

- **Home Page** - Hero section, featured properties, and key features
- **Dynamic Property Pages** - Detailed listings with photo galleries and amenities
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support** - Automatic theme detection with manual toggle
- **Performance Optimized** - Fast loading times with Astro's static generation

## Tech Stack

- **Framework**: [Astro 4.12](https://astro.build) - Static site builder
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com) - Utility-first CSS framework
- **JavaScript**: Vanilla JS with Astro components
- **Build Tool**: Astro CLI
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/         # Reusable Astro components
│   ├── Hero.astro      # Landing hero section
│   ├── NavBar.astro    # Navigation bar
│   ├── PropertyCard.astro  # Property listing card
│   ├── AgentCard.astro # Agent profile card
│   └── ...             # Other UI components
├── layouts/
│   └── BaseLayout.astro # Main layout wrapper
├── pages/              # Astro file-based routing
│   ├── index.astro     # Home page
│   ├── properties.astro # Properties listing page
│   ├── properties/[slug].astro # Dynamic property detail page
│   ├── agents.astro    # Agents page
│   ├── about.astro     # About page
│   ├── contact.astro   # Contact page
│   └── faq.astro       # FAQ page
├── styles/
│   ├── global.css      # Global styles & Tailwind directives
│   └── theme.css       # CSS variables for theming
├── data/
│   └── content.json    # Content data (properties, testimonials, etc.)
└── env.d.ts           # TypeScript environment definitions

public/
├── global.css          # (Deprecated - moved to src/styles)
└── images/            # Static images

Configuration files:
- astro.config.mjs     # Astro configuration
- tailwind.config.cjs  # Tailwind CSS configuration
- postcss.config.cjs   # PostCSS configuration
- tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 18.14 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production site |
| `npm run preview` | Preview production build locally |

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, and featured properties |
| `/properties` | Browse all property listings |
| `/properties/[slug]` | Individual property detail page with gallery |
| `/agents` | Browse all real estate agents |
| `/about` | About the company |
| `/contact` | Contact form |
| `/faq` | Frequently asked questions |

## Theming

The project uses CSS variables for theming with support for light and dark modes:

**CSS Variables** (defined in `src/styles/theme.css`):
- `--color-bg` - Background color
- `--color-surface` - Surface/card color
- `--color-border` - Border color
- `--color-primary` - Primary accent color (green: `16 185 129`)
- `--color-text` - Text color
- `--color-muted` - Muted text color

**Theme Toggle**: Automatic detection of system preference with manual override via `theme-toggle` button.

## Content Management

Property listings, testimonials, and other content is managed in `src/data/content.json`. The file includes:

- **Navigation links** - Menu structure
- **Properties** - Listing data with images, amenities, and details
- **Testimonials** - User reviews and quotes
- **Features** - Key selling points

Modify this file to update website content without touching component code.

## Configuration

### Astro Config (`astro.config.mjs`)
- Tailwind CSS integration enabled
- Path aliases configured (@components, @styles, @data, @layouts)
- Development server port: 4321

### Tailwind Config (`tailwind.config.cjs`)
- Extends default theme with project colors
- Includes typography plugin for rich text styling
- Responsive design utilities enabled

## Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub, GitLab, or Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Astro and configure build settings
4. Deploy on every push to main branch

### Manual Build & Deploy

```bash
# Build the project
npm run build

# The `dist/` folder contains the static site
# Deploy the contents of dist/ to your hosting provider
```

## Known Issues & Fixes

**CSS Files Not Loading (404 Errors)**

If `global.css` and `theme.css` return 404 errors in production:
- CSS files are now properly imported in `src/layouts/BaseLayout.astro`
- The old `public/global.css` is deprecated and should be ignored
- Ensure `src/styles/` CSS files are imported before deploying

## Best Practices

1. **Component Organization** - Keep components focused and single-responsibility
2. **CSS Utilities** - Use Tailwind classes instead of custom CSS where possible
3. **Content Updates** - Modify `src/data/content.json` for content changes
4. **Image Optimization** - Use external CDN URLs (Unsplash) for image hosting
5. **Type Safety** - Leverage TypeScript for component props

## Contributing

For project modifications:
1. Create a feature branch
2. Make changes and test locally (`npm run dev`)
3. Build production version (`npm run build`)
4. Commit and push changes
5. Submit pull request

## License

© 2025 Homy Estate. All rights reserved.

## Author

[creatividia.com](https://creatividia.com)  
Email: creatividia@gmail.com

---

For more information about Astro, visit the [official documentation](https://docs.astro.build).