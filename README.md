# ASPIRE Learning Centre — Official Website

Official production-grade web portal for **ASPIRE Learning Centre**, premier offline coaching institute located in Kausa, Mumbra, Thane (Maharashtra, India). The institute delivers focused, Kota-level classroom preparation for **JEE (Main + Advanced)**, **NEET UG**, **Foundation (8th & 9th)**, and **Class 10 State & CBSE Boards**.

---

## 🎯 Architecture & Tech Stack

- **Core Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (fully code-split with `React.lazy` and `Suspense`)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties, fully responsive across mobile ($\le$480px), tablet, and desktop viewports.
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Meta**: Custom `<PageSEO>` component dynamically injecting canonical links, unique titles, meta descriptions, OpenGraph tags, and JSON-LD schema per route.
- **Accessibility**: WCAG 2.2 AA compliant with Skip-to-Content navigation, visible focus indicators, explicit form-control associations, and screen-reader accessibility.
- **Linter**: [Oxlint](https://oxc.rs/) (blazing-fast Rust-based linter)
- **Automated Testing**: Native `node:test` suite for course slugs, faculty schema, result records, and deployment asset integrity.

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated GitHub Actions CI (lint, test, build)
├── public/
│   ├── images/                  # Authentic institute and course assets
│   ├── _redirects               # SPA fallback rules for Netlify / Cloudflare Pages
│   ├── robots.txt               # Production crawler directives and sitemap pointer
│   ├── sitemap.xml              # XML Sitemap listing all 17 public routes
│   └── site.webmanifest         # PWA / web application install manifest
├── src/
│   ├── components/              # Reusable UI & architectural components
│   │   ├── ErrorBoundary.jsx    # Graceful runtime exception catching & recovery
│   │   ├── PageLoader.jsx       # Accessible fallback spinner for route splitting
│   │   ├── PageSEO.jsx          # Dynamic document head & JSON-LD schema manager
│   │   ├── Navbar.jsx           # Accessible navigation bar with mobile drawer
│   │   ├── Footer.jsx           # Ground-truth institute address & contact links
│   │   ├── EnquiryModal.jsx     # High-conversion admission inquiry modal dialog
│   │   └── TestimonialSlider.jsx# Dynamic 1/2/3 card responsive testimonial carousel
│   ├── data/                    # Structured static data (courses, faculty, FAQs, etc.)
│   ├── pages/                   # Route page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx     # Dynamic course pages (/courses/:courseId)
│   │   ├── Results.jsx          # Verified board & competitive examination results
│   │   ├── Faculty.jsx          # Educator profiles & credentials
│   │   ├── Methodology.jsx      # 5-step learning cycle breakdown
│   │   ├── TestSeries.jsx       # Weekly & monthly mock diagnostic series
│   │   ├── Updates.jsx          # Official notices & bulletin board
│   │   ├── FAQs.jsx             # Searchable knowledge base
│   │   ├── Contact.jsx          # Centre map, address, and inquiry form
│   │   ├── Admissions.jsx       # 4-step enrolment process & application form
│   │   ├── AppPortal.jsx        # Private student/parent ecosystem preview & login
│   │   ├── PrivacyPolicy.jsx    # Official privacy policy
│   │   ├── Terms.jsx            # Classroom norms & batch policies
│   │   └── NotFound.jsx         # Custom 404 page (noindex)
│   ├── App.jsx                  # Main route configuration & global modals
│   ├── index.css                # Base reset, typography tokens, skip link, accessibility
│   └── main.jsx                 # Application entry point
├── tests/
│   └── site-integrity.test.js   # Automated Node test suite
├── vercel.json                  # Production SPA rewrite & HTTP security headers
├── .env.example                 # Environment variable templates
└── package.json
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: `v20.x` or higher recommended
- **npm**: `v9.x` or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/ZeeshuCollege/Aspire-Website.git
cd Aspire-Website

# Install dependencies cleanly
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env
```
*(Optional: customize any local override parameters as needed)*

### 4. Running the Development Server
```bash
npm run dev
```
The website will start at `http://localhost:5173/`.

---

## 🧪 Testing & Verification

Run the full automated quality suite:

```bash
# 1. Run the linter
npm run lint

# 2. Run data and route integrity tests
npm test

# 3. Create a production build
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)
This repository includes a pre-configured `vercel.json` with SPA route rewrites and hardened HTTP headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, `Permissions-Policy`).
1. Connect this repository to your [Vercel](https://vercel.com) account.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy.

### Option 2: Netlify / Cloudflare Pages
The `public/_redirects` file automatically handles single-page app client routing:
```text
/*    /index.html   200
```
- Build Command: `npm run build`
- Publish Directory: `dist`

---

## 🔒 Security Architecture

1. **Isolation of Private Data**: Public website bundles contain **zero credentials, zero API secrets, and zero student exam score databases**. All student/faculty portal operations are isolated or routed through secure authenticated endpoints.
2. **Hardened HTTP Headers**: Strict MIME sniffing protection, frame-ancestor limits, and restrictive permissions policies prevent clickjacking and injection attacks.
3. **Input Sanitization**: Inquiries and contact submissions are validated on both client-side and browser storage layers with duplicate submission prevention.

---

## 📍 Institute Contact Information

- **Campus Address**: Falah Building, Room No. 102, Near Darul Falah Masjid, Opp DCB Bank, Kausa, Mumbra, Thane – 400612, Maharashtra, India.
- **Direct Helpline**: +91 70212 20449
- **Official Email**: aspirelearningcentre@outlook.com
- **WhatsApp**: [Click to Chat](https://wa.me/917021220449)
