# B2B Wholesale Store (Wholesale Clone Express)

A responsive, high-performance B2B Wholesale eCommerce store modeled after the [ThemeHunk B2B Wholesale](https://wpthemes.themehunk.com/b2b-wholesale/) theme. Built with modern HTML5, Bootstrap 5, custom CSS, and vanilla JavaScript using modular JSON data sources.

---

## 📁 Project Structure

```text
b2b-wholesale-store/
├── index.html            # Main Landing / Home Page
├── shop.html             # Product Catalog & Dynamic Filter Page
├── product.html          # Product Details & Specification Page
├── cart.html             # Shopping Cart Page
├── checkout.html         # Checkout & Order Summary Page
├── electronics.html      # Electronics Category Showcase
├── about.html            # About Us Page
├── contact.html          # Contact Us Page
├── favicon.svg           # Store Favicon
├── css/
│   └── style.css         # Custom responsive styles & theme design system
├── js/
│   └── app.js            # Core shopping cart, dynamic loading & store logic
├── data/
│   ├── categories.json   # Store categories data
│   └── product.json      # Product catalog data
├── images/
│   ├── logo.png          # Store header & footer brand logo
│   └── categories/       # Category showcase thumbnails (1-1.jpg to 6-1.jpg)
├── package.json          # Project scripts and dependencies
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)

### Run Locally
```bash
npm start
```
This will start a local web server at `http://localhost:3000`.

---

## ✨ Features
- **Persistent Shopping Cart**: Preserved in `localStorage` under `b2b-wholesale-cart`.
- **Dynamic Category & Product Filtering**: Real-time category selection and keyword search.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile (100% zoom pixel parity).
- **Clean Asset Management**: Local optimized category images and SVG vectors with fallback handlers.
