# Closet Curator – Landing Page (Next.js + Tailwind CSS)

A marketing site and lightweight web portal for **Closet Curator**, the AI-powered wardrobe app that helps style-conscious users photograph, tag, and combine their clothes into outfits.

## 1 · Background

Closet Curator's mobile app (see separate repo) already lets people:

- Bulk-capture garment photos
- Auto-tag items with on-device ML
- Build outfits on a drag-and-drop canvas
- Import inspiration screenshots
- Get weather-aware outfit suggestions

This landing page:

1. **Explains the value proposition** to new visitors  
2. **Collects early-access sign-ups** (Mailchimp)  
3. **Lets authenticated users** browse / edit their wardrobe from the web (NextAuth + Prisma)  
4. **Provides Gmail purchase-import onboarding** for beta testers

## 2 · Tech Stack

| Layer          | Choice              | Notes                                   |
| -------------- | ------------------- | --------------------------------------- |
| Framework      | Next.js (14)        | React Server Components + App Router    |
| Styling        | Tailwind CSS        | Custom theme with CSS custom properties |
| Animation      | Framer Motion       | Micro-interactions & scroll animations  |
| Auth           | NextAuth.js         | Email + Google OAuth (Prisma Adapter)   |
| DB             | PostgreSQL          | Prisma migrations                       |
| E-mail Import  | Gmail API           | Read-only scope, top-20 US retailers    |
| Newsletter     | Mailchimp API       | `/api/subscribe` endpoint               |
| CI/CD          | GitHub Actions      | Lint → Unit Tests → Build               |
| Hosting        | Vercel              | Auto-deploy on push                     |

## 3 · Development Progress

### ✅ Completed Chunks

| # | Chunk | Status | Key Features |
| - | ----- | ------ | ------------ |
| 1 | Project scaffold & Tailwind | ✅ Complete | Next.js 14, TypeScript, refined purple theme |
| 2 | Global layout (Header / Footer) | ✅ Complete | Responsive nav, gradient header, system fonts |
| 3 | Hero section & CTA | ✅ Complete | Smooth gradients, dual CTAs, Framer Motion |
| 3.5 | Problem section | ✅ Complete | Story-driven content, statistics, animations |

### 🚧 Upcoming Chunks

| # | Chunk | Key Tests & Checks |
| - | ----- | ----------------- |
| 4 | Feature grid | Snap-shots of `FeatureCard` |
| 5 | Newsletter form | API test: `/api/subscribe` 200/400 |
| 6 | Analytics + Jest setup | CI green on PR |
| 7 | Vercel deploy | Staging URL builds w/ env vars |
| 8 | Gmail import (backend) | Parser unit tests for sample emails |
| 9 | Auth (NextAuth) | Session tests; protected route redirect |
|10 | Wardrobe dashboard (MVP) | E2E: login → add item → logout |

## 4 · Current Design System

### Color Palette (Refined Purple Theme)
- **Primary**: `#8B7CF6` (Soft purple)
- **Primary Light**: `#A78BFA` (Light purple accents)
- **Primary Dark**: `#6D28D9` (Hover states)
- **Background**: `#FAFBFC` (Light off-white)
- **Text**: System gray hierarchy for readability

### Typography
- **Font**: System font stack for performance and familiarity
- **Headlines**: Bold with proper line-height for large text
- **Gradient Text**: Purple gradient on key phrases

### Components Built
- ✅ **Header**: Transparent gradient with smooth navigation
- ✅ **Hero**: Large impact headline with dual CTAs
- ✅ **Problem Section**: Story-driven cards with statistics
- ✅ **Footer**: Brand links and copyright

## 5 · Local Setup

```bash
git clone https://github.com/YarikChekin/ClosetCurator2.0-Website.git
cd ClosetCurator2.0-Website
npm install
npm run dev
```

The dev server will run on `http://localhost:3000` (or next available port).

Run all checks:
```bash
npm run lint && npm test && npm run build
```

## 6 · Design Guidelines

All UI follows **DESIGN_GUIDELINES.md** with our refined purple theme:
- Professional yet playful aesthetic
- Light backgrounds with subtle purple gradients
- Consistent spacing and typography
- Accessibility-first approach

## 7 · Repository

- **GitHub**: https://github.com/YarikChekin/ClosetCurator2.0-Website.git
- **Branch Strategy**: Feature branches for each chunk
- **Commit Format**: `feat(chunk-X): description` or `fix(component): description`

> **Commit Rules**  
> 1. **Small, single-purpose commits** (`feat:`, `fix:`, `test:`).  
> 2. Push early & often; open Draft PRs per chunk.  
> 3. Always add/adjust tests **before** implementation.  
> 4. PR title = chunk number + brief description.
