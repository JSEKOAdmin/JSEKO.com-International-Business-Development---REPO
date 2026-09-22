# JSEKO.com — International Business Development

Official web platform for **JSEKO.com International Business Development**. Providing turnkey international business structures, sovereign cross-border infrastructure, and private advisory services.

---

## 🚀 Features

- **Turnkey International Businesses Showcase**: Interactive exploration of turnkey businesses, jurisdictions, and specifications.
- **Introductory Consultation & Booking**: Integrated scheduling and payment flow via Cal.com (`introductory-session-jseko`).
- **Communication Protocol**: Secure communication guidance highlighting encrypted channels (Signal) and client anonymity protocols.
- **About Us & Founder's Story**: Comprehensive brand background and strategic vision.
- **Terms & Privacy Protocol**: Full terms and conditions, confidentiality and privacy standards, session expiration policies, and liability limitations accessible via `/jseko-terms`.
- **Responsive & Dark/Light Theme**: Built with Tailwind CSS v4, supporting both light and dark modes with theme memory.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scheduling**: [@calcom/embed-react](https://cal.com/)
- **Animations**: [Motion](https://motion.dev/)

---

## 📦 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm**, **pnpm**, or **yarn**

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/jseko-web.git
cd jseko-web
npm install
```

### 3. Local Development

Run the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) in your browser.

---

## 🏗️ Production Build

To build the optimized static production bundle:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

> **Note for SPA Routing (e.g. `/jseko-terms`) on Vercel**: If needed, add a `vercel.json` with rewrites:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```

### Deploying to Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. For SPA routing, ensure a `_redirects` file with `/*  /index.html  200` in the `public/` directory (included).

### Deploying to Cloudflare Pages
1. Connect repository to Cloudflare Pages.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Build output directory: `dist`.

---

## 📄 License & Attribution

Copyright &copy; 2026 JSEKO.com. All rights reserved.
