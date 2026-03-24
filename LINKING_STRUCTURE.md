# Linking Structure (Buttons + Navigation)

This document describes how links and CTA buttons are wired across the frontend, including which ones navigate to routes and which ones open overlays/modals.

## Canonical Routes

| Label (Nav/CTA) | Route | Notes |
|---|---|---|
| Home | `/` | Landing page |
| Angebot / Services | `/services` | Services/offer page (static route) |
| Über uns | `/about` | About page (static route) |
| LbC / So arbeiten wir | `/how-we-work` | “How we work” page (static route) |
| Blog | `/blogs` | Blog index (static route), posts at `/blogs/[slug]` |
| Kontakt | `/kontakt` | Contact page (static route) |

Code reference:
- Header navigation: [Header.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Header.tsx#L29-L37)
- Footer navigation: [Footer.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Footer.tsx#L31-L41)

## CTA/Button Types

### 1) “Book a call” / “Erstgespräch buchen” (Overlay)

**Behavior:** Opens the booking modal overlay.  
**No navigation** (no `href` / no page change).

Implementation pattern:
- CTA triggers call `openModal()` from the booking provider: [Header.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Header.tsx#L39-L49)
- Services CTA supports a special `primaryButtonHref === "#booking"` sentinel to open the modal instead of navigating: [ServicesCTA.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/sections/services/ServicesCTA.tsx#L19-L83)

Where the overlay comes from:
- Global provider: [providers/index.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/providers/index.tsx#L10-L15)
- Booking provider (state + open/close): [Booking/index.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/providers/Booking/index.tsx)
- Modal UI: [BookingModal/index.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/BookingModal/index.tsx)

### 2) “Mehr über Leadership by Congruence” (LbC / How we work)

**Behavior:** Navigates to the LbC methodology page.  
**Route:** `/how-we-work`

Use Next.js internal navigation (`next/link`) when rendering this as a link/button.

Route reference: [how-we-work/page.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/app/(frontend)/how-we-work/page.tsx)

### 3) “Angebot anfragen” / “Anfrage senden” (Contact page)

**Behavior:** Navigates to the contact page.  
**Route:** `/kontakt`

Examples in code:
- Services secondary CTA default: [ServicesCTA.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/sections/services/ServicesCTA.tsx#L23-L27)

**Form section anchor (planned):**
- The contact form is rendered on `/kontakt`, but there is currently **no `id` anchor** on the form section, so `/kontakt#...` scrolling is not wired yet.
- Contact page: [kontakt/page.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/app/(frontend)/kontakt/page.tsx)
- Form component: [ContactForm.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/kontakt/ContactForm.tsx#L77-L81)

## Navigation Notes / Inconsistencies to be aware of

- Header uses `/services` for “Angebot” on desktop, but the footer links “Angebot” to `/angebot`.  
  - `/angebot` will only work if a CMS page exists at that slug via the dynamic `[slug]` route.
  - Header (desktop): [Header.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Header.tsx#L31-L36)  
  - Footer: [Footer.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Footer.tsx#L36-L41)

- Header “Angebot” on mobile currently points to `/patients-first-book-site` (not `/services`).  
  - Mobile nav: [Header.tsx](file:///Users/bb/Documents/GitHub/milinial-v2/src/components/Header.tsx#L80-L87)

## Quick Mapping (from design)

| Button label (design) | Intended target |
|---|---|
| Erstgespräch buchen | Booking overlay (open modal) |
| Mehr über Leadership by Congruence | `/how-we-work` |
| Angebot anfragen | `/kontakt` (ideally scroll to form section once an anchor exists) |

