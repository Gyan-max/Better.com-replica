# Better.com Website Replica

A pixel-perfect replica of the Better.com website built with Next.js, TypeScript, and Tailwind CSS. This project replicates the design and functionality of four main pages from Better.com.

## 🚀 Features

- **Four Complete Pages**: Home, About Us, Mortgage Calculator, and Start (Pre-approval)
- **Interactive Mortgage Calculator**: Real-time calculations with form inputs and sliders
- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern UI**: Clean, professional design matching Better.com's visual identity
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 📋 Pages Included

1. **Home Page (`/`)**: Hero section, features, statistics, and call-to-action sections
2. **About Us Page (`/about-us`)**: Company mission, timeline, and backed-by section  
3. **Mortgage Calculator (`/mortgage-calculator`)**: Interactive calculator with real-time updates
4. **Start Page (`/start`)**: Multi-step pre-approval application form

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm

## 🚦 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about-us/          # About Us page
│   ├── mortgage-calculator/ # Mortgage Calculator page
│   ├── start/             # Start (Pre-approval) page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── layout/
│       ├── Header.tsx     # Navigation header
│       └── Footer.tsx     # Footer component
└── .github/
    └── copilot-instructions.md # Copilot customization
```

## ✨ Key Features Implementation

### Interactive Mortgage Calculator
- Real-time payment calculations
- Adjustable loan parameters with sliders and inputs
- Monthly payment breakdown
- Responsive form design

### Multi-step Application Form
- Progressive form with 5 steps
- Form validation and state management
- Success screen with next steps
- Mobile-optimized experience

### Responsive Navigation
- Mobile hamburger menu
- Smooth transitions and hover effects
- Consistent branding and styling

## 🎨 Design Principles

- **Mobile-First**: Designed for mobile devices first, then enhanced for larger screens
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Performance**: Optimized images and efficient component rendering
- **User Experience**: Intuitive navigation and clear call-to-action buttons

## 📱 Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The application can be deployed to any platform that supports Next.js, such as:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean

## 📄 License

This project is for educational purposes and demonstrates web development skills. It is not affiliated with Better.com.
# Better.com-replica
