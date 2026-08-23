---
name: UASHMC Digital Front Door
description: A calm, plain, honest-about-its-gaps hospital website concept for United Antipolo Specialists Hospital and Medical Center
colors:
  brand-900: "#01305A"
  brand-700: "#01487C"
  brand-600: "#0A6FA0"
  brand-500: "#0AADD0"
  brand-400: "#5AC0E4"
  brand-100: "#D2F0FC"
  brand-50: "#E7F6FD"
  accent-gold: "#D2A80C"
  rose-700: "#A8446A"
  rose-600: "#C05B7D"
  rose-500: "#D87898"
  rose-100: "#FBE3EB"
  rose-50: "#FDF2F6"
  sand-100: "#F6EBDA"
  sand-50: "#FBF5EC"
  surface-page: "#FBFAF8"
  surface-raised: "#FFFFFF"
  surface-sunken: "#F2F7FA"
  text-primary: "#062B46"
  text-body: "#173F5C"
  text-muted: "#4E6981"
  text-faint: "#8DA3B6"
  border-default: "#D9E2EA"
  border-soft: "#E9EFF4"
  urgent: "#C0271A"
  urgent-ink: "#7A1710"
  urgent-tint: "#FDF0EE"
  care-700: "#026B52"
  care-500: "#049E79"
  care-tint: "#E4F4EF"
  provenance-verified: "#167355"
  provenance-confirm: "#B45309"
  provenance-sample: "#6D5BA8"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.875rem, 5cqi, 3.125rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 2.9cqi, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "32px"
  8: "40px"
  9: "56px"
  10: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.brand-900}"
  button-ghost:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.brand-700}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  button-urgent:
    backgroundColor: "{colors.urgent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "44px"
  card-static:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.md}"
    padding: "20px"
  input-default:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.sm}"
    padding: "11px 12px"
    height: "44px"
---

# Design System: UASHMC Digital Front Door

## 1. Overview

**Creative North Star: "The Honest Directory"**

Not a hospital brochure and not a SaaS dashboard — a lobby directory board, digitised. UASHMC opened in 2025 with no website at all; its entire owned presence is a Facebook page most of Antipolo has never seen. This system's job is to be the hospital's first authoritative surface, and its central discipline is one most brand work never has to hold: **every visible fact carries a provenance state**. Verified (from UASHMC's own channels), confirm (plausible, unconfirmed), or sample (an agency placeholder). A page that admits what it does not know outranks a page that merely reads smoothly, and this constraint is never traded away for a cleaner comp.

The palette is not chosen, it is sampled. Navy and cyan come pixel-exact from the hospital's own logo; gold is the rule under their headlines lifted from their own posters; a dusty rose is lifted from their maternity campaign, because navy-cyan-white alone reads cold and clinical, and warmth was the corrective the work came back asking for. Real UASHMC photography — their actual building, their CT suite, a sleep study in progress, thirty of their own medical staff in their own lobby — is the only imagery permitted to be tagged verified, and it is used everywhere it fits before any placeholder is considered.

This system explicitly rejects the international-hospital template: stock photography of smiling clinicians, blue gradients over a lens flare, "Excellence in Healthcare" as an empty superlative. It rejects the SaaS dashboard shape — hero metrics, gradient text, glassmorphism. And it rejects organisation by hospital org chart in favour of organisation by what the patient came to do: reach the ER, find a doctor, check an HMO, learn what to bring, get directions, reach a human.

**Key characteristics:**

- Calm, plain Philippine English; the patient's word before the clinical one
- A navy-and-cyan brand with one warm hue (rose) it already owns, so no more than two cool section bands run in a row
- Every fact colour-coded by source; nothing stated as fact unless UASHMC confirmed it
- The emergency path is a phone number, never more than one tap away, on every page
- Real photography before any illustrated placeholder; placeholders are drawn, never a stock stand-in

## 2. Colors

Navy and cyan carry the brand at roughly a 40/60 split — cyan belongs in resting states (panels, icon fills, the second phrase of a two-tone headline), not only on hover. Rose is the one warm accent the brand already owns, sampled from their own maternity poster, and it exists specifically to stop the site reading as a laboratory.

### Primary

- **Logo Navy** (`#01487C` / `brand-700`): primary action, headings, active nav, the deepest instance being `#01305A` (`brand-900`) for footer and dark hero grounds.
- **Logo Cyan** (`#0AADD0` / `brand-500`): fills, icon discs, accents — on dark grounds only. 2.66:1 against white, so it never carries small text; `brand-600` (`#0A6FA0`) is the text-safe step on light grounds.

### Secondary

- **Poster Rose** (`#D87898` / `rose-500`): fills and washes only, 3.0:1 on white. `rose-700` (`#A8446A`) is the text-safe step at 5.2:1, used for eyebrows and the warm phrase of a two-tone headline. Rose never carries status meaning — that belongs to urgent, care, and the provenance hues.
- **Collateral Gold** (`#D2A80C` / `accent-gold`): the thin rule under headings, lifted directly from UASHMC's own printed posters. Decorative only, never a fill.

### Neutral

- **Warm Paper** (`#FBFAF8` / `surface-page`): default page ground — warm, not clinical white.
- **Sand Bands** (`#FBF5EC` / `sand-50`, `#F6EBDA` / `sand-100`): the warm counterpart to `brand-100`, so alternating sections breathe warm as well as cool.
- **Text Primary** (`#062B46`), **Text Body** (`#173F5C`), **Text Muted** (`#4E6981` — the contrast floor on `brand-100`, nothing lighter clears AA there), **Text Faint** (`#8DA3B6` — non-essential metadata only, never load-bearing).
- **Border Default** (`#D9E2EA`) and **Border Soft** (`#E9EFF4`) for cards, inputs, and internal dividers.

### Named Rules

**The Two Cool Bands Rule.** A page that alternates only white and `brand-100` is the cold, clinical result the warm ramp exists to prevent. Section grounds alternate `sec` / `sec.warm` / `sec.alt` so temperature moves down the page — never more than two cool bands in a row.

**The No Green Rule.** UASHMC's own collateral contains no green. Green is reserved for status meaning alone — `care-700` (`#026B52`) for a confirmed accreditation or the assistant's calm state — because it doubles as the provenance system's "verified" hue, and using it decoratively would collide with that meaning.

**The Reserved Red Rule.** `urgent` (`#C0271A`) is for genuine emergency affordances only: the ER strip, calling 911. A red "Book now" button on a hospital site is the anti-pattern this rule exists to name.

## 3. Typography

**Display Font:** Source Serif 4, with Georgia and Times New Roman as fallback.
**Body Font:** Be Vietnam Pro, with the system UI sans-serif stack as fallback.

**Character:** A calm, editorial serif for headlines and the tagline against a plain, highly legible grotesque for everything the patient actually has to read and act on — chosen in part because Be Vietnam Pro carries Filipino and Tagalog text cleanly for a genuinely bilingual audience.

### Hierarchy

- **Display** (600, `clamp(1.875rem, 5cqi, 3.125rem)`, 1.08): the story-first hero headline.
- **Headline** (600, `clamp(1.375rem, 2.9cqi, 1.875rem)`, 1.2): section headings, always with the thin gold rule beneath.
- **Title** (600, 1.3125rem, 1.3): card and sub-section headings.
- **Body** (400, 1rem / 16px floor, 1.6): running prose. 16px is a floor, not a ceiling — the audience includes a large senior and PWD cohort, correspondingly likely to have presbyopia. Line length caps at 65–75ch.
- **Label** (600, 0.6875rem, tracked +0.08em, uppercase): eyebrows and legal microcopy only. Nothing on the page goes below 12px.

Two-tone headlines are a UASHMC device inherited from their own collateral: first phrase in `text-primary`, second phrase in `brand-600` on light grounds or `brand-500` on dark. Use at most once per view.

### Named Rules

**The Presbyopia Floor Rule.** 16px is the body-copy floor, stated as a design requirement, not an aspiration. The type scale uses `rem`, not `px`, specifically so a reader's own browser font-size setting is honoured rather than overridden.

## 4. Elevation

A hybrid: cards and panels sit flat at rest, and elevation is a state response rather than a resting decoration — a linked card lifts to `elevation-2` on hover, never higher at rest than `elevation-1`.

### Shadow Vocabulary

- **Elevation 1** (`0 1px 2px rgba(8,42,56,.06), 0 1px 3px rgba(8,42,56,.05)`): resting cards, inputs.
- **Elevation 2** (`0 4px 12px rgba(8,42,56,.08), 0 1px 3px rgba(8,42,56,.06)`): hover state on linked cards, focused inputs.
- **Elevation 3** (`0 18px 44px rgba(8,42,56,.18), 0 4px 12px rgba(8,42,56,.10)`): the assistant panel, sheets, anything that floats above the page.

### Named Rules

**The Response-Not-Rest Rule.** Elevation increases only in response to interaction state (hover, focus, open). A static card that never receives interaction stays at Elevation 1 and must not simulate a hover state it cannot fulfil.

## 5. Components

### Buttons

- **Shape:** `radius-md` (10px), minimum 44px tall in any dense context — well past the WCAG 24px minimum, because the audience is named as likely to have tremor.
- **Primary:** `brand-700` ground, white label, darkens to `brand-900` on hover.
- **Ghost:** transparent/white ground, `border-default` outline, `text-body` label — secondary actions.
- **Urgent:** `urgent` ground, white label — reserved for calling the ER or 911, never decorative.
- **Care:** `care-700` ground, white label — positive confirmation only (an accreditation, a completed step).
- **Hover / Focus:** ground darkens one ramp step on hover, gated behind `@media (hover: hover)`; `:focus-visible` gets the universal ring, using a white outline on the primary variant so it stays visible on navy.

### Cards

- **Corner style:** `radius-md` (10px).
- **Background:** `surface-raised` (#FFFFFF) on a `surface-page` ground.
- **Shadow strategy:** Elevation 1 at rest; a _linked_ card (the whole card is one link) rises to Elevation 2 on hover with a `brand-500` border. A _static_ card has no hover, focus or active state and must not simulate one.
- **Border:** `border-default`, 1px.
- **Rule:** a linked card contains exactly one link; nested interactive elements inside a linked card are prohibited. Cards equalise height via the grid, never a fixed pixel height.

### Inputs / Fields

- **Style:** `border-default` stroke, `surface-page` ground, `radius-sm`, 16px text (prevents iOS zoom-on-focus), 44px tall.
- **Focus:** border shifts to `brand-500`, ground lifts to `surface-raised`, plus the universal focus ring.
- **Error:** border `urgent`, message in `urgent-ink` below the field with a leading icon, wired via `aria-describedby` and `aria-invalid`.

### Navigation

- Brand lockup, primary nav, primary CTA — collapsing to lockup + menu button below the tablet breakpoint. Current page uses `aria-current="page"` with weight 600 on a `brand-50` ground; colour alone never indicates current page. The emergency number lives in a utility strip above the header on every page at every breakpoint — it is not a nav item and cannot be collapsed into the menu.

### The Provenance Overlay (signature component)

A toggle that recolours every tagged element on the page: green for verified (from UASHMC's own channels, recorded with a source), amber for confirm (plausible, needs the hospital's sign-off), violet for sample (an agency placeholder). This is the component the whole system exists to demonstrate — a page admitting what it does not yet know, made visible rather than hidden in a content spreadsheet. Opaque photographs take an overlay element rather than a background tint, since a tint under an image never shows.

## 6. Do's and Don'ts

### Do:

- **Do** sample colour from UASHMC's own artwork rather than choosing it — `brand-700`/`brand-500` are pixel-exact from `images/logo.jpg`.
- **Do** tag every content element with a provenance state (`verified` / `confirm` / `sample`). Untagged content is a build defect.
- **Do** hold cyan in resting states as well as hover — this is a navy _and_ cyan brand, not a navy one with a cyan accent.
- **Do** use real UASHMC photography wherever it fits before considering a placeholder — their own building, CT suite, staff, and maternity campaign are the only imagery allowed to be tagged verified.
- **Do** keep the emergency number one tap away, on every page, at every breakpoint, outside the nav.
- **Do** keep body copy at a 16px floor and express the type scale in `rem` so a reader's own font-size preference is honoured.
- **Do** make illustrated placeholders abstract on purpose — a realistic portrait in an empty doctor-card slot is a photograph of a doctor who does not exist.

### Don't:

- **Don't** use the international-hospital template: stock photography of smiling clinicians, blue gradients, "Excellence in Healthcare" over a lens flare.
- **Don't** use green decoratively — it is reserved for status (`care-700`, provenance-verified) and collides with the provenance system's own meaning if reused.
- **Don't** put white text or glyphs on `brand-500` — 2.66:1, fails contrast. Use `brand-700` on cyan, or step to `brand-600` for text on light grounds.
- **Don't** present stock or generated photography as UASHMC's premises. If it is not their building, the page must say so.
- **Don't** let the assistant invent a plausible answer to fill a gap. Refuse and hand off to a human — a fabricated answer is the single worst failure this system can produce.
- **Don't** render a bare empty state. Every empty result set offers a way forward: a phone number, a broader filter, or the assistant.
- **Don't** use border-left or border-right greater than 1px as a coloured accent stripe on cards or callouts.
- **Don't** use gradient text (`background-clip: text` with a gradient fill) or decorative glassmorphism.
- **Don't** organise the site by hospital org chart. Organise by what the patient came to do.
- **Don't** let motion ignore `prefers-reduced-motion` — parallax, auto-scroll and typing indicators disable outright, not merely shorten.
