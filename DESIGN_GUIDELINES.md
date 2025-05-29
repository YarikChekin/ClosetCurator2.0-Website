# Closet Curator – Web Design Guidelines

These rules keep our marketing site visually consistent with the mobile app while remaining fast and accessible.

## 1 · Core Principles
1. **Clarity** – Make benefits obvious in < 3 sec.
2. **Energy** – Use bold color and motion sparingly for impact.
3. **Trust** – Display social proof and transparent policies.
4. **Accessibility** – WCAG 2.1 AA or better.

## 2 · Brand Palette  (Tailwind tokens)

| Token | Hex | Usage |
| ----- | --- | ----- |
| `primary` | **#FF7A59** | Buttons, links, accents |
| `secondary` | #1F2937 | Headlines, dark backgrounds |
| `accent` | #FFFFFF | Text on primary, backgrounds |
| `muted` | #F5F5F5 | Section backgrounds |
| `error` | #DC2626 | Validation states |

_Update `tailwind.config.js` → `theme.extend.colors`._

## 3 · Typography

- **Heading**: Inter Bold (`text-3xl` → `text-6xl`)
- **Body**: Inter Regular (`text-base` → `text-lg`)
- **CTA Buttons**: Inter SemiBold (`tracking-wide`, uppercase)
- Use Tailwind's `leading-tight` for hero headlines.

## 4 · Layout & Spacing

- Content max-width: `max-w-7xl`.
- Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- Spacers: multiples of `4 px` (`space-y-6`, `gap-8`).
- Use `container mx-auto px-4 lg:px-8` wrapper per section.

## 5 · Components

### Hero
- Full viewport height (`min-h-screen`) with gradient `from-primary/10 to-muted`.
- Motion: fade-in headline, slide-up CTAs (Framer Motion 0.6 s).

### Feature Card
- Rounded-2xl shadow-lg.
- Icon inside `h-12 w-12` circle with `bg-primary/10`.

### Newsletter Form
- Input & button in single flex container on `md+`.
- Validation in real-time (`ring-error` on invalidate).

### Auth Modal
- Centered dialog (`fixed inset-0 flex items-center justify-center`).
- Dark backdrop `bg-secondary/60 backdrop-blur`.

## 6 · Accessibility Checklist

- Alt text on images.
- `aria-label` on iconic buttons.
- Focus ring `outline-primary` visible.
- Color-contrast ratio ≥ 4.5:1.
- Test with keyboard only and NVDA/VoiceOver.

## 7 · Motion Guidelines

| Use-case | Animation | Duration |
| -------- | --------- | -------- |
| Section reveal | Fade-in up | 0.5 s |
| Button hover | Scale 105 % | 0.15 s |
| Form submit success | Checkmark pop | 0.3 s |

Disable animations with `prefers-reduced-motion`.

---

_For mobile app design standards, see the separate iOS guideline document._ 