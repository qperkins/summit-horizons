# Summit Horizons - Childcare Consulting Website

A modern, professional website for Summit Horizons, a childcare consulting company. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional design with gradient accents
- **Responsive Layout**: Fully responsive across all device sizes
- **Component-Based**: Built with reusable shadcn/ui components
- **Fast Performance**: Optimized with Next.js App Router
- **Accessible**: Built with accessibility best practices

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Services**: Six key service offerings with icons
- **About**: Mission and value proposition
- **Contact**: Contact form and information
- **Footer**: Site navigation and contact details

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
summit-horizons/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── header.tsx      # Navigation header
│   ├── hero.tsx        # Hero section
│   ├── services.tsx    # Services section
│   ├── about.tsx       # About section
│   ├── contact.tsx     # Contact section
│   └── footer.tsx      # Footer component
└── lib/
    └── utils.ts        # Utility functions
```

## Customization

### Update Contact Information

Edit the contact details in `components/contact.tsx`:
- Email: `info@summithorizons.org`
- Phone: `(555) 123-4567`

### Modify Services

Update the services array in `components/services.tsx` to reflect your actual offerings.

### Change Colors

Modify the color scheme in `app/globals.css` or update Tailwind config for custom brand colors.

## Technologies

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **shadcn/ui**: High-quality component library
- **lucide-react**: Icon library

## License

All rights reserved © Summit Horizons
