# Sample Store – React Ecommerce Front-End (Concept)

> **Concept / sample project.** A self-made demo for portfolio purposes. "Sample Store" is a fictional shop – it is **not client work**. Products and prices are invented, product "photos" are original SVG illustrations, and the checkout is UI only: no payments are processed and no data is sent anywhere.

## What it is
A front-end ecommerce storefront showing the typical shopping flow: browse → filter → add to cart → review cart → checkout form → confirmation.

## Tech
- **React 18** + **Vite 5** (ES modules, hooks only)
- Plain CSS (custom properties, Grid, Flexbox, responsive breakpoints)
- Inline SVG product art – no external images, fonts or APIs

## Features
- Product grid with 16 fictional products across 4 categories
- Category chips, live search, max-price slider and sorting
- Cart drawer with quantity controls, remove, subtotal; persisted in `localStorage`
- Checkout UI: contact, shipping method, demo payment fields, inline validation, order summary with demo shipping/tax, confirmation screen
- Accessibility: skip link, ARIA labels, `aria-live` updates, Escape to close, visible focus styles
- Responsive from small phones to wide desktops

## Run it
```bash
npm install
npm run dev      # development
npm run build    # production build into dist/
npm run preview  # serve the build
```

## Project structure
```
src/
  App.jsx               state: cart, filters, sorting
  data/products.js      fictional catalogue
  components/           Header, Filters, ProductCard, ProductArt (SVG), CartDrawer, Checkout
  styles.css
```

## Screenshots
| Desktop | Mobile |
|---|---|
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

## Honest note
This is a sample built to demonstrate my React / ecommerce front-end skills. A real store would add a backend or a platform such as Shopify for catalogue, payments and orders. The demo includes no real brands, reviews, testimonials or sales figures.
