# Closet Curator – Landing-Page (Next.js + Tailwind CSS)

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
| Styling        | Tailwind CSS        | Custom theme in `tailwind.config.js`    |
| Animation      | Framer Motion       | Micro-interactions & hero entrance      |
| Auth           | NextAuth.js         | Email + Google OAuth (Prisma Adapter)   |
| DB             | PostgreSQL          | Prisma migrations                       |
| E-mail Import  | Gmail API           | Read-only scope, top-20 US retailers    |
| Newsletter     | Mailchimp API       | `/api/subscribe` endpoint               |
| CI/CD          | GitHub Actions      | Lint → Unit Tests → Build               |
| Hosting        | Vercel              | Auto-deploy on push                     |

## 3 · Chunked Development Plan

| # | Chunk | Key Tests & Checks |
| - | ----- | ----------------- |
| 1 | Project scaffold & Tailwind | `npm run lint` passes; home route renders |
| 2 | Global layout (Header / Footer) | Unit test: links render & route |
| 3 | Hero section & CTA | Lighthouse score ≥ 90 for a11y |
| 4 | Feature grid | Snap-shots of `FeatureCard` |
| 5 | Newsletter form | API test: `/api/subscribe` 200/400 |
| 6 | Analytics + Jest setup | CI green on PR |
| 7 | Vercel deploy | Staging URL builds w/ env vars |
| 8 | Gmail import (backend) | Parser unit tests for sample emails |
| 9 | Auth (NextAuth) | Session tests; protected route redirect |
|10 | Wardrobe dashboard (MVP) | E2E: login → add item → logout |

> **Commit Rules**  
> 1. **Small, single-purpose commits** (`feat:`, `fix:`, `test:`).  
> 2. Push early & often; open Draft PRs per chunk.  
> 3. Always add/adjust tests **before** implementation.  
> 4. PR title = chunk number + brief description.

## 4 · Local Setup

```bash
git clone https://github.com/your-org/closet-curator-landing.git
cd closet-curator-landing
npm install
cp .env.local.example .env.local  # fill all vars
npm run dev
```

Run all checks:
```bash
npm run lint && npm test && npm run build
```

## 5 · Design Guideline

All UI must follow DESIGN_GUIDELINES.md
