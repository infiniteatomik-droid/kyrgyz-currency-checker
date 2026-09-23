# Kyrgyz Currency Checker 🇰🇬💳

A lightweight, high-performance web application that fetches real-time currency exchange rates from an external API, calculates their value relative to the Kyrgyz Som (KGS), and displays them with two-decimal precision.

##  Live Demo
[View the Live Application](https://infiniteatomik-droid.github.io/kyrgyz-currency-checker/)

##  Features
- **Real-Time Updates:** Pulls fresh, reliable data instantly using `fetch` from ExchangeRate-API.
- **Key Currencies Tracked:** Dynamically converts and displays current rates for USD, EUR, RUB, and KZT into KGS.
- **Robust Architecture:** Zero runtime errors thanks to strict, custom-designed TypeScript types.
- **Modern Build Pipeline:** Powered by Vite for lightning-fast bundling, Hot Module Replacement (HMR), and clean production builds.
- **Automated CI/CD:** Fully integrated with GitHub Actions for automated building and zero-downtime deployment to GitHub Pages.

##  Tech Stack
- **Core:** HTML5, CSS3, Modern JavaScript (ESNext)
- **Language:** TypeScript (Strict Mode)
- **Build Tool:** Vite
- **Hosting & CI/CD:** GitHub Pages + GitHub Actions Workflow

##  Refactoring Journey & Experience
The main goal of this update was to elevate a legacy single-file Vanilla JS script into a scalable, production-ready frontend environment:
1. **Infrastructure Upgrade:** Initialized `npm`, integrated Vite as a bundler, and added comprehensive `tsconfig.json` rules.
2. **Strict Data Typings:** Created custom interfaces (`CurrencyApiResponse`, `ConversionRates`) to securely map incoming API data structures.
3. **DOM Safety:** Wrapped all DOM element lookups with proper TypeScript generic types (`querySelector<HTMLElement>`) and type assertions to gracefully handle potential null values.
4. **Feature Expansion:** Scaled up the application logic by embedding additional rendering support for the Kazakhstan Tenge (KZT).
