# Closet Curator – Web Design Guidelines

These rules keep our marketing site visually consistent with the mobile app while remaining fast and accessible.

## 1 · Core Principles
1. **Clarity** – Make benefits obvious in < 3 sec.
2. **Professional yet Playful** – Clean purple-themed design that's approachable.
3. **Trust** – Display social proof and transparent policies.
4. **Accessibility** – WCAG 2.1 AA or better.

## 2 · Brand Palette (Updated - Refined Purple Theme)

| Token | Hex | Usage |
| ----- | --- | ----- |
| `primary` | **#8B7CF6** | Soft purple for buttons, links, accents |
| `primary-light` | **#A78BFA** | Light purple for gradients and highlights |
| `primary-dark` | **#6D28D9** | Deeper purple for hover states |
| `secondary` | #FFFFFF | Clean white for cards and panels |
| `accent` | #1F2937 | Dark gray for primary text |
| `accent-light` | #6B7280 | Light gray for secondary text |
| `muted` | #F8FAFC | Very light gray backgrounds |
| `background` | #FAFBFC | Main page background (light off-white) |
| `success` | #10B981 | Green for success states |
| `error` | #EF4444 | Red for validation states |

_Colors defined in `src/app/globals.css` as CSS custom properties._

## 3 · Typography

- **Font Stack**: System fonts (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`)
- **Heading**: Bold weight (`font-bold`) with proper line-height
- **Body**: Regular weight (`text-base` → `text-lg`)
- **CTA Buttons**: Semi-bold (`font-semibold`) with rounded corners
- **Large Headlines**: Use `leading-tight` and `pb-2` to prevent descender clipping

## 4 · Layout & Spacing

- Content max-width: `max-w-7xl`.
- Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- Spacers: multiples of `4 px` (`space-y-6`, `gap-8`).
- Use `container mx-auto px-4 lg:px-8` wrapper per section.

## 5 · Components

### Header
- Subtle gradient background (`from-primary/2 via-white to-primary-light/2`)
- Transparent with subtle border (`border-primary/5`)
- Purple gradient logo text with system font

### Hero
- Light gradient background (`from-primary/3 via-white to-primary-light/4`)
- Smooth transition from header (using `-mt-1`)
- Large headline with gradient text effect
- Dual CTA buttons (solid + outline)
- Motion: fade-in with Framer Motion

### Problem Section
- Light muted background (`bg-muted`)
- White cards with subtle purple borders
- Emoji-enhanced problem descriptions
- Statistics displayed prominently
- Smooth reveal animations on scroll

### Feature Card
- Rounded-2xl shadow-sm with subtle borders
- Icon inside `h-12 w-12` circle with `bg-primary/10`
- White background on light theme

## 6 · Color Usage Guidelines

- **Primary Purple**: Use sparingly for CTAs and important highlights
- **Gradients**: Subtle purple gradients for backgrounds and text effects
- **White Space**: Liberal use of white/off-white for breathing room
- **Text Hierarchy**: Dark gray (`accent`) for headlines, light gray (`accent-light`) for body

## 7 · Accessibility Checklist

- Alt text on images
- `aria-label` on iconic buttons
- Focus ring `outline-primary` visible
- Color-contrast ratio ≥ 4.5:1
- Test with keyboard only and screen readers
- Proper heading hierarchy (h1 → h6)

## 8 · Motion Guidelines

| Use-case | Animation | Duration |
| -------- | --------- | -------- |
| Section reveal | Fade-in up (`whileInView`) | 0.6 s |
| Button hover | Scale 105% + shadow | 0.2 s |
| Hero entrance | Fade-in with slight y-offset | 0.8 s |
| Card hover | Subtle shadow increase | 0.15 s |

All animations use `framer-motion` with `prefers-reduced-motion` support.

---

_For mobile app design standards, see the separate iOS guideline document._ 