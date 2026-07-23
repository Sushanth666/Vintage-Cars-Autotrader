# Vintage Cars Autotrader 🚗✨

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Enabled-green.svg)](https://oxc.rs/)

A modern, high-performance web application for showcasing, buying, renting, and financing rare classic & vintage automobiles (1960–1970 era). Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**, this application delivers a sleek, retro-aesthetic user interface based on precision Figma design specifications.

---

## 🌟 Key Features

### 🏎️ Hero Showcase & Featured Classics
- **Interactive Vehicle Carousel / Hero Banner**: Showcases iconic classic models like the *1967 Toyota 2000GT* and *1966 Chevrolet Chevelle SS*.
- **Quick Specs & Pricing**: Displays mileage badges, price tags, and rental/purchase action triggers directly on car overlay cards.

### 🚘 Inventory Catalog
- **Grid View**: A 16-card responsive catalog displaying vintage cars with high-resolution imagery.
- **Hover & Interaction Effects**: Smooth zoom and overlay transitions revealing price tags, mileage, and quick inquiry buttons.
- **Filter Controls**: Easy access to filter options for make, model, price range, and body style.

### 🛠️ Specialized Vintage Car Services
- **Enclosed Vehicle Shipping**: Secure nationwide and international transport tailored for high-value collector automobiles.
- **Vintage Warranty Purchase**: Dedicated extended warranty protection plans specifically engineered for historic mechanics.
- **Classic Car Financing**: Tailored low-rate financing and lease options for vintage automobile buyers.

### 📖 About Us & Brand Heritage
- **Interactive Storytelling**: Details the origin, passion, and milestone stats (e.g., *32 years experience*, *400+ cars sold*, *5-star client ratings*).
- **Historic Automotive Gallery**: Rich visuals capturing classic car restoration and legacy.

### 💬 FAQ & Interactive Contact Modal
- **Interactive FAQ Accordion**: Instant answers to common buyer, seller, and shipping questions.
- **"Connect With Us" Modal**: Popup contact form for scheduling test drives, requesting quotes, or asking general inquiries.
- **Location & Map Section**: Integrated contact details and interactive location maps.

---

## 🎨 Figma Design Alignment

This project is meticulously crafted based on the [Figma Classic Autotrader Design](https://www.figma.com/design/b0YcLwgWNaLIjSa56rRfiq/Cars-Classic-Autotrader--figmamarket.com-?node-id=61-1694&t=uw23LzsGArLF8g4I-0).

Key aesthetic principles incorporated:
- **Typography**: Clean, bold headers paired with readable body text for a premium retro feel.
- **Color Palette**: Dark charcoal & deep graphite overlays contrast with bright off-white typography and subtle accent badges.
- **Micro-Animations**: Smooth fade-in reveal animations upon scrolling (`IntersectionObserver`).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI component framework |
| **Vite 8** | Next-generation fast frontend build tool and HMR dev server |
| **Tailwind CSS v4** | Utility-first CSS styling engine via `@tailwindcss/vite` |
| **Oxlint** | High-speed JavaScript & JSX linter |
| **Intersection Observer** | Scroll-reveal page animation effects |

---

## 📁 Project Architecture

```
Vintage-Cars-Autotrader/
├── public/
│   └── images/
│       ├── cars/          # High-res vintage car photos
│       └── services/      # Service banners & thumbnails
├── src/
│   ├── assets/            # Static icons and graphic assets
│   ├── components/
│   │   ├── common/        # Global layout components (Header, Footer)
│   │   ├── modals/        # Interactive dialogs (ContactModal)
│   │   └── sections/      # Page sections (Hero, About, Services, FAQ, Contact)
│   ├── data/
│   │   ├── carsData.js    # Catalog & hero inventory datasets
│   │   ├── faqData.js     # FAQ accordion content
│   │   └── servicesData.js# Service offerings dataset
│   ├── pages/             # Route pages (HomePage, CarsPage, AboutPage, ServicesPage, etc.)
│   ├── App.jsx            # Main app router & layout wrapper
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global Tailwind styles & retro design system
├── .oxlintrc.json         # Oxlint configuration
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration with Tailwind integration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18.0.0 or higher) installed on your system.

### 1. Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

### 2. Run Development Server

Launch the Vite local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to:
```
https://vintage-cars-autotrader.netlify.app/
```

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

The output bundle will be generated in the `dist/` directory.

### 4. Preview Production Build

Preview the built application locally:

```bash
npm run preview
```

### 5. Linting

Run Oxlint to check code quality and formatting rules:

```bash
npm run lint
```

---

## 📄 License

This project is created for demonstration and portfolio purposes. All rights reserved.

