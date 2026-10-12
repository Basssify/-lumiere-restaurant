# The Lumière Restaurant & Lounge ⚜️

> A luxury, responsive, multi-page fine dining and cocktail lounge web application designed for high-end hospitality clients and portfolio demonstration (TikTok / client presentations).

---

## 🍽️ Project Overview

- **Restaurant Name:** The Lumière Restaurant & Lounge
- **Location:** Plot 14, Walter Carrington Crescent, Victoria Island, Lagos, Nigeria
- **Concept:** Haute French Culinary Rigor meets Contemporary African Terroir & Midnight Mixology
- **Currency:** Nigerian Naira (₦)

---

## 🚀 Quick Start Guide

### 1. Start Local Development Server
In your terminal, run:
```bash
npm run dev
```
Open your browser to the local URL (typically **`http://localhost:3000`** or **`http://localhost:5173`**).

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize for Paying Clients

All business information, phone numbers, addresses, and WhatsApp integration are centralized in a single configuration file:

### 📍 Contact & WhatsApp Configuration
Open: **`src/data/restaurantInfo.js`**

```javascript
export const RESTAURANT_INFO = {
  name: "The Lumière Restaurant & Lounge",
  address: "Plot 14, Walter Carrington Crescent, Victoria Island, Lagos, Nigeria",
  phone: "+234 1 888 5864",
  
  // ⬅️ REPLACE WITH YOUR CLIENT'S WHATSAPP NUMBER (Country code + number, NO plus or dashes)
  whatsappNumber: "2348005864373", 
  whatsappDisplay: "+234 800 LUMIÈRE (0800 586 4373)",
  
  email: "reservations@thelumierelounge.com",
  // ...
};
```

Updating this single file immediately updates:
- Direct WhatsApp Ordering in the culinary cart
- Table reservation dispatch to WhatsApp
- Header, Footer, and Contact page phone numbers
- Physical address and map links

---

## 🥩 Customizing Menu Dishes & Prices

Open: **`src/data/menuData.js`**

Each dish item contains:
- `id`: Unique identifier
- `name`: Dish title (e.g. *Lumière Suya-Spiced Wagyu Carpaccio*)
- `category`: Category ID (`starters`, `mains`, `steaks`, `specials`, `desserts`, `drinks`)
- `price`: Price in Nigerian Naira (e.g. `32000` for ₦32,000)
- `tags`: Array of badges (e.g. `["Chef's Signature", "Rare Cut"]`)
- `description`: Editorial culinary description
- `image`: High-resolution photograph URL
- `pairing`: Sommelier wine or cocktail recommendation

---

## 📱 Features Included

1. **Multi-Page Routing:** Seamless navigation using React Router v6 across Home, Menu, About, Gallery, Reservations, and Contact pages, plus a 404 fallback.
2. **Persistent Interactive Cart:** Powered by React Context API and `localStorage`. Allows adding dishes, adjusting quantities, removing items, and calculating 7.5% Nigerian VAT and 5% Service Charge.
3. **Automated WhatsApp Ordering:** Itemizes the cart, guest contact info, dining format, and special requests into a formatted WhatsApp transmission.
4. **Table Reservation System:** Form with date, time, party size, seating zone preference, and occasion selection that directly dispatches to WhatsApp concierge with instant on-page confirmation.
5. **Interactive Photo Gallery:** Filterable luxury image gallery with lightbox modal, caption details, keyboard navigation (Esc, Arrow keys), and image zoom.
6. **Mobile Navigation:** Responsive hamburger drawer with cart quick-access.
7. **Luxury Design System:** Near-black obsidian palette (`#080808`), warm gold accents (`#D4AF37`), Google Fonts typography (*Cinzel*, *Cormorant Garamond*, *Plus Jakarta Sans*), and glassmorphic cards.

