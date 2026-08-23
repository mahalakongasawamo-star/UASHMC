# UASHMC HOMEPAGE — DESIGN SPECIFICATION

### For the interactive HTML prototype · v0.1 · Iozera.ai website workstream

### Deliverable: single self-contained HTML file, hash-routed, offline-capable, desktop/mobile toggle, scripted KRISS AI widget

---

# 1. STRATEGIC POSITIONING

## 1.1 The situation, stated plainly

UASHMC has no reputation, no census, no website, 33 Instagram followers, and a Gmail contact address. It is on the same road as a Metro Pacific-backed competitor whose site currently returns 503 on every path, four km from Antipolo Doctors Hospital, which leads its navigation with _Our Packages_ and _OPD Pricing_.

That last fact is the whole strategy. **This catchment does not shop on prestige. It shops on: can they handle this, do they take my HMO, how much, and how do I get there.** Every established Manila benchmark answers those questions badly or not at all. UASHMC's disadvantage is reputation. Its advantage is that reputation is not what people are actually looking for on this page.

## 1.2 The first five seconds

A person arrives from a Facebook link, on a mid-range Android, on mobile data, usually worried, usually about someone else. In five seconds they must resolve three things:

1. **Is this a real hospital?** — not a clinic, not a coming-soon landing page, not a Facebook page with a nicer skin.
2. **Where is it, relative to me?** — "Marcos Highway" must appear above the fold. Location is the primary trust signal in this market because it is the one claim the reader can immediately verify against their own knowledge.
3. **What do I do next?** — a visible, finite set of things to press, one of which is theirs.

Emotionally, the target state at five seconds is **relief, not admiration**. Not "what a beautiful hospital." _"Okay — this is close, it's open, and I know what to press."_

## 1.3 The ONE thing

> **There is a real specialists' hospital on Marcos Highway, it is open right now, and here is exactly what to do next.**

Proximity + readiness + a next step. Not excellence, not vision, not "world-class." Those are earned later and, crucially, are unverifiable claims we are barred from making anyway.

The tagline **"Excellence in Every Life We Touch"** stays — it is native to the corridor's register and it is theirs — but it appears as a _signature_, not as a headline. It goes at the bottom of the "Why UASHMC" story and in the footer. A brand-new hospital leading with an abstract excellence claim is exactly the credibility leak we are trying to avoid.

## 1.4 What we are explicitly rejecting

**REJECTED: the corporate-brochure homepage.** The default hospital homepage — full-width hero of a smiling stock model in scrubs, "Welcome to [Hospital], where compassion meets innovation," a Mission/Vision/Values triptych, a President's Message, an awards carousel, and the actual useful links pushed below three screens of institutional throat-clearing.

Every element of that pattern is a liability here specifically:

| Brochure element                                              | Why it fails for UASHMC                                                                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Stock photography of people                                   | A new hospital nobody has seen needs _proof it exists_. Stock imagery reads as "this hospital may not be built yet." Net negative. |
| Mission / Vision / Values block                               | Asserts character to a reader who has no reason to believe assertions. Costs a screen of height on a phone.                        |
| Welcome message from the President                            | Speaks to the board, not the patient. Belongs on `#/about`.                                                                        |
| Awards / accreditation carousel                               | UASHMC has nothing to put in it yet. An empty or padded one is detectable.                                                         |
| "Years of combined experience"                                | Reads evasive. Patients discover the 2025 opening anyway.                                                                          |
| Testimonial wall                                              | At current volume, three glowing quotes read as fabricated and cost more trust than they earn.                                     |
| Nav organised by org chart (Institutes, Centers, Departments) | Nobody arrives thinking in departments.                                                                                            |

**WHAT REPLACES IT: a task console with a story underneath.**

The homepage is structured as a **utility surface first and a narrative second**. Order of intent, top to bottom:

1. **Reachability** (emergency strip + number, above everything)
2. **Identity + location, in one sentence** (a short hero — one screen on mobile, not two)
3. **The task grid** — eight things you can press. This is the load-bearing element of the page and it sits directly under the hero, not below three storytelling sections.
4. **The money questions**, answered early and honestly: emergency, HMO, price posture
5. **What we can actually do** — four specialties, the concern router, new services
6. **Then**, and only then, the story: why we're here, who we are, what we're licensed to do
7. **How to physically get here**, with landmarks

Substituting _institutional self-description_ with _operational specificity_ is the entire play. "Cardiology clinic, Tuesdays and Fridays, 9:00 AM–12:00 NN, 3rd floor Room 304, direct line 8248 3460 local ___" is worth more trust than any paragraph about compassion, and it is also, conveniently, exactly the content KRISS AI needs. **Precision is the trust strategy.**

## 1.5 The two claims we make that nobody else in the corridor makes

Both are statutory, both are free, both are genuinely useful, and both make us look like the most careful hospital in Rizal:

- **"We cannot ask you for a deposit before emergency care."** (RA 10932)
- **"Senior citizens and persons with disability get 20% off and are VAT-exempt — and here is the order the maths is done in."** (RA 9994 / RA 10754)

Neither ADH nor FUMC nor MVMC mentions either. Put them in the trust band.

---

# 2. VISUAL DIRECTION

> **Standing note for the room, and it goes on the prototype itself:** brand direction is Harvey Lozada's call. This palette and type system is a _confident starting position_, not a proposal to approve. It is built as a flat token layer — swapping eleven hex values and two font families re-skins the entire prototype in about ten minutes without touching a single component. Say that out loud, and mean it. There is an `OPEN DECISION` pin on the hero specifically for this.

## 2.1 Design intent

Three things the palette must do at once:

- **Read as Philippine healthcare** — blue and green are already theirs and are the local convention; abandoning them would be vandalism.
- **Not read as generic corporate-blue SaaS.** The tell of SaaS blue is high-chroma mid-blue (`#0070F3`, `#2563EB`) on pure cool grey with pill buttons and floaty shadows. We go _deeper and slightly teal_ on the blue, _jade rather than lime_ on the green, and — the critical move — **warm the neutrals and introduce one warm off-white surface**.
- **Not read as cold or clinical.** The anti-clinical devices are: a warm off-white band (`#FBF7F1`), warm-tinted greys instead of blue-greys for text, generous line-height, a serif for headings, restrained shadows, and 10–14px radii instead of hard corners.

The blue does the institutional work (permanence, licensure, "this is a hospital"). The green does the human work (care, growth, "this is new and alive"). Green is an **accent only** — never a large fill, never a body-text colour, never used for a destructive or urgent state.

## 2.2 Colour tokens — complete set

Light mode is the only mode. Ship it as `:root` custom properties, in this order, so a re-skin is a single-block edit.

```css
:root {
  /* ---- BRAND BLUE (institutional) ---- */
  --c-primary-900: #06283d; /* deepest — dark sections, hero overlay base */
  --c-primary-800: #0a3d5c; /* dark headers, footer */
  --c-primary-700: #0e5175; /* PRIMARY-DARK — hover, pressed, headings on tint */
  --c-primary-600: #13699a; /* PRIMARY — buttons, links, icons (5.97:1 on white) */
  --c-primary-500: #1f86bf; /* illustration, chart, decorative only */
  --c-primary-200: #b9dcec; /* borders on tint, dividers on tinted surfaces */
  --c-primary-100: #dceef7; /* icon-tile fills, chip backgrounds */
  --c-primary-50: #f0f7fb; /* section tint band */

  /* ---- ACCENT GREEN (care, vitality, "new") ---- */
  --c-accent-800: #0f5238; /* accent text on light green */
  --c-accent-700: #16704c; /* ACCENT-TEXT (5.90:1 on white) */
  --c-accent-600: #1e8a5f; /* ACCENT — icons, underlines, NEW badges, fills w/ 18px+ white */
  --c-accent-200: #b6e2ce; /* borders */
  --c-accent-100: #e3f4ec; /* badge + chip backgrounds */

  /* ---- SEMANTIC: EMERGENCY ---- */
  --c-emergency-900: #8f1d17; /* emergency strip background (white text 8.91:1) */
  --c-emergency-600: #b3261e; /* EMERGENCY — buttons, care-card rule (white text 6.54:1) */
  --c-emergency-100: #fdecea; /* emergency care-card background */
  --c-emergency-200: #f3c3bf; /* emergency card border */

  /* ---- SEMANTIC: SUCCESS / INFO (sparing) ---- */
  --c-success-600: #1e8a5f; /* alias of accent — do not introduce a second green */
  --c-info-600: #13699a; /* alias of primary — do not introduce a second blue */

  /* ---- TEXT (warm-tinted, never pure #000, never blue-grey) ---- */
  --c-text-strong: #10242e; /* h1–h3, 15.6:1 */
  --c-text-primary: #14252e; /* body, 14.8:1 */
  --c-text-secondary: #4a5c66; /* card helper text, meta, 6.97:1 */
  --c-text-muted: #5e6e77; /* timestamps, "as of" stamps, 5.28:1 — FLOOR. Nothing lighter. */
  --c-text-inverse: #ffffff;
  --c-text-link: #0e5175; /* links in body copy are primary-700, always underlined */

  /* ---- SURFACES ---- */
  --c-surface: #ffffff; /* default page + cards */
  --c-surface-sunken: #f5f8fa; /* alternating section, neutral cool */
  --c-surface-tint: #f0f7fb; /* alternating section, blue (= primary-50) */
  --c-surface-warm: #fbf7f1; /* THE ANTI-CLINICAL BAND. Story + trust sections. */
  --c-surface-dark: #06283d; /* footer, hero overlay */

  /* ---- LINES ---- */
  --c-border: #dce3e7; /* default 1px card + input border */
  --c-border-strong: #c3ced4; /* table rules, active filter chips */
  --c-divider: #e8edf0;

  /* ---- HONEST-PLACEHOLDER MARKERS (see §6) ---- */
  --c-mk-sample-bg: #fff4e0;
  --c-mk-sample-ink: #8a4f00;
  --c-mk-sample-line: #e9b764;
  --c-mk-verify-bg: #f1edfa;
  --c-mk-verify-ink: #4a3a7a;
  --c-mk-verify-line: #c6b8e8;
  --c-mk-asset-bg: #edf1f3;
  --c-mk-asset-ink: #3c4c55;
  --c-mk-asset-line: #c3ced4;
  --c-mk-open-bg: #ffffff;
  --c-mk-open-ink: #0e5175;
  --c-mk-open-line: #13699a;

  /* ---- FOCUS ---- */
  --focus-ring: 0 0 0 3px rgba(19, 105, 154, 0.38);
  --focus-outline: 2px solid #0e5175;
}
```

**Colour usage rules, enforced:**

- **Green never appears on the emergency strip, the emergency page, or any care card.** Green means "fine"; do not put it near urgency.
- **Green's jobs, exhaustively:** the `NEW` badge, the logo underline, the "what's included" checkmarks, the accent rule under section eyebrows, the accessibility/senior-discount tile icon, the KRISS "answered from an approved page" source chip. That's it.
- **Emergency red appears in exactly four places:** the top strip, the Emergency card in the task grid, the `#/emergency` page, and KRISS's red-flag interrupt card. Nowhere else — not on delete buttons, not on badges, not on form errors (use `--c-emergency-600` for form errors only, at text weight).
- **Section background rhythm** (never two identical adjacent bands): `white → white(cards on tint) → warm → white → sunken → warm → white → dark(footer)`. Specified per section in §3.
- Body links: `--c-text-link` + `text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: 1px`. Underlines stay. This is a hospital, not a portfolio.

## 2.3 Typography

**Headings — `Source Serif 4`.** A transitional serif with a large x-height and low contrast: institutional, permanent, warm, screen-optimised, and free on Google Fonts. It is the single most efficient device available for making a hospital that opened in 2025 look like it has been there a while. It also instantly separates us from every sans-only competitor site in the corridor and from the SaaS register we are told to avoid.

**Body / UI — `Source Sans 3`.** Humanist sans, drawn to pair with Source Serif 4, exceptional at 15–17px on low-DPI Android, real tabular figures (needed for peso amounts, phone numbers, clinic hours), wide diacritic coverage.

```css
--font-display:
  "Source Serif 4", "Source Serif Pro", Georgia, "Times New Roman", serif;
--font-sans:
  "Source Sans 3", "Source Sans Pro", "Segoe UI", Roboto, "Helvetica Neue",
  Arial, sans-serif;
--font-num:
  "Source Sans 3", ui-monospace, "Segoe UI", Roboto, sans-serif; /* + font-variant-numeric:tabular-nums */
```

**Weights to load (four faces only, keep the file small):** Source Serif 4 — 600. Source Sans 3 — 400, 600, 700.

> ⚠️ **OFFLINE FONT REQUIREMENT — build note.** The prototype must run with the wifi off. Do **not** rely on a `fonts.googleapis.com` link alone. Embed the four faces as **base64 `woff2` in `@font-face`**, Latin subset only (target ≤ 140 KB total). If embedding is skipped for any reason, the Google Fonts link must remain _and_ the fallback stack above must be verified visually offline — Georgia + Segoe UI degrades acceptably; a naked `serif`/`sans-serif` does not. Test by disabling the network adapter, not by trusting cache.

**Type scale** — fluid with `clamp()`, values are mobile → desktop:

| Token         | Size      | LH       | Weight / tracking          | Font     | Use                                    |
| ------------- | --------- | -------- | -------------------------- | -------- | -------------------------------------- |
| `--t-display` | 36 → 58px | 1.06     | 600 / −0.02em              | serif    | Hero headline only                     |
| `--t-h1`      | 30 → 42px | 1.12     | 600 / −0.015em             | serif    | Interior page titles                   |
| `--t-h2`      | 25 → 33px | 1.18     | 600 / −0.01em              | serif    | Section headings                       |
| `--t-h3`      | 19 → 21px | 1.3      | 600 / 0                    | **sans** | Card titles, sub-headings              |
| `--t-h4`      | 17 → 18px | 1.35     | 700 / 0                    | sans     | Accordion headers, table headers       |
| `--t-eyebrow` | 12.5px    | 1.2      | 700 / **0.11em** UPPERCASE | sans     | Section eyebrows (in `--c-accent-700`) |
| `--t-lede`    | 18 → 20px | 1.55     | 400                        | sans     | Section ledes, hero subhead            |
| `--t-body`    | 16 → 17px | **1.65** | 400                        | sans     | All prose                              |
| `--t-body-sm` | 15px      | 1.55     | 400                        | sans     | Card helper text                       |
| `--t-meta`    | 13.5px    | 1.45     | 400/600                    | sans     | "as of" stamps, captions               |
| `--t-btn`     | 16px      | 1        | 600 / 0.005em              | sans     | All buttons, min                       |
| `--t-num-lg`  | 26 → 32px | 1.1      | 700 tabular                | sans     | Emergency number, prices               |
| `--t-chip`    | 11px      | 1        | 700 / 0.08em UPPERCASE     | sans     | Marker chips only                      |

Rules: max prose measure **68ch**; card body measure **42ch**; **nothing below 15px except the 11px marker chips**; serif is never used below 19px; `text-wrap: balance` on all headings, `text-wrap: pretty` on ledes.

## 2.4 Spacing, radii, elevation

```css
--sp-1: 4px;
--sp-2: 8px;
--sp-3: 12px;
--sp-4: 16px;
--sp-5: 20px;
--sp-6: 24px;
--sp-7: 32px;
--sp-8: 40px;
--sp-9: 48px;
--sp-10: 64px;
--sp-11: 80px;
--sp-12: 96px;
--sp-13: 120px;

/* section rhythm */
--sec-y-mobile: 48px;
--sec-y-tablet: 64px;
--sec-y-desktop: 88px;
--hero-y-mobile: 40px;
--hero-y-desktop: 96px;

/* container */
--container: 1200px;
--container-narrow: 760px;
--gutter-mobile: 20px;
--gutter-desktop: 32px;
--grid-gap: 20px; /* 16px on mobile */

/* radii — institutional-modern, NOT pill */
--r-sm: 6px; /* chips, badges, inputs */
--r-md: 10px; /* buttons, small cards */
--r-lg: 14px; /* cards, images, panels */
--r-xl: 20px; /* hero media, KRISS panel */
--r-pill: 999px; /* filter chips ONLY */
```

**Buttons are 10px, never pill.** Pill buttons read consumer-app; 10px reads institutional-modern. Filter chips are the one pill exception because they are transient selections.

**Elevation — deliberately austere.** A hospital should feel _solid_, not floaty. Structure comes from 1px borders and surface tint; shadow is reserved for things that genuinely float.

```css
--e-1:
  0 1px 2px rgba(16, 36, 46, 0.06), 0 1px 1px rgba(16, 36, 46, 0.04); /* resting card */
--e-2:
  0 2px 8px rgba(16, 36, 46, 0.07), 0 1px 2px rgba(16, 36, 46, 0.05); /* card hover */
--e-3:
  0 8px 24px rgba(16, 36, 46, 0.1), 0 2px 6px rgba(16, 36, 46, 0.06); /* KRISS panel, popover, dropdown */
--e-4: 0 16px 48px rgba(16, 36, 46, 0.18); /* mobile nav sheet, mobile KRISS sheet */
--e-sticky:
  0 1px 0 rgba(16, 36, 46, 0.08), 0 4px 12px rgba(16, 36, 46, 0.06); /* sticky header once scrolled */
```

Cards at rest: `background:#fff; border:1px solid var(--c-border); box-shadow:var(--e-1)`. On hover: `border-color:var(--c-primary-600); box-shadow:var(--e-2); transform:translateY(-2px)`. Transitions 140ms `cubic-bezier(.2,.7,.3,1)`. **All motion inside `@media (prefers-reduced-motion:no-preference)`.** No parallax, no scroll-jacking, no reveal-on-scroll animations — they read as agency showreel and they stutter on the machine we'll be presenting from.

## 2.5 Photography treatment

**The rule: no stock photographs of people. Ever. Not one.** For a hospital nobody has visited, a stock photo is not neutral — it is evidence of absence. Real photos or honest placeholders.

**When real photography arrives, the treatment is:**

- Natural daylight. **No cyan/teal colour grade** — that grade is the single strongest "cold clinical stock" tell. Apply a very slight warm grade instead (+3–5 warmth), keep whites neutral, avoid crushed blacks.
- Building exteriors shot **from the road, at car's-eye height, signage legible**, late afternoon. A driver must be able to match the photo to what they will see through the windscreen. This is the most important photograph in the project.
- Staff and doctor portraits: consistent 4:5 crop, consistent light neutral background, eyes to camera, natural expression, no crossed arms, no folded-stethoscope pose.
- Environment shots: real rooms, real equipment, real signage, at least one person doing something real. Subjects look at each other or at their work, not at the lens.
- **Banned:** motion-blurred corridor, gloved hands holding a tablet with a floating HUD, a diverse group in a glass conference room, anyone pointing at an X-ray they are not reading.
- Hero overlay for legibility: `linear-gradient(100deg, rgba(6,40,61,.86) 0%, rgba(6,40,61,.62) 46%, rgba(6,40,61,.20) 100%)`. Warm-dark, not blue-black. Text sits in the left 52%.
- Images: `border-radius: var(--r-lg)`; `aspect-ratio` always declared to prevent layout shift; hero 16:9 desktop / 3:2 mobile; doctor portraits 4:5; service cards 3:2.

**In the prototype, every image slot is a Photo Plate** — see §6.4. The plate carries the shot brief, so the meeting produces the shot list as a by-product.

## 2.6 Iconography

Inline SVG only — no icon font, no sprite file, no external requests. 24×24 viewBox, 1.75px stroke, round caps and joins, `currentColor`. Draw them in a single `<svg><symbol>` block at the top of `<body>` and `<use>` them. Sixteen icons total (listed in §4.2). Line-drawn and geometric, never filled-cartoon; a filled cartoon icon set is the second-strongest "generic template" tell after cyan photography.

Icon tiles in the task grid: 48×48 rounded-`--r-md` square, `background:var(--c-primary-100)`, icon at 24px in `--c-primary-700`. On card hover, tile → `--c-primary-600` background, icon → white.

---

# 3. SECTION-BY-SECTION HOMEPAGE SPEC

Desktop order, top to bottom. All copy below is **publishable Philippine English** — write it exactly as given. Mobile reordering is in §5. Marker annotations in `[[ ]]` indicate which honest-placeholder marker wraps that string (§6).

---

## S0 — Prototype Bar _(not part of the design; a tool)_

**Job:** make it unmistakable that this is a prototype, host the view toggle and the Content Check toggle, and keep them reachable during the demo.

**Layout:** full-bleed, 36px, `background:#1B2A33`, white text, `--t-meta`, `position:sticky; top:0; z-index:9000`. Visually _outside_ the design — flat, no radius, monospaced-feeling. It must never be mistaken for site chrome.

Left: `UASHMC website prototype · v0.1 · Iozera.ai`
Right, as three controls, 32px tall each:

- Segmented toggle: `Desktop | Mobile`
- Toggle switch: `Content check` + live counter `(47 items)`
- Text button: `What's this?` → opens the legend modal (§6.5)
- Text button: `Reset demo`

**Print/screenshot note:** the bar is excluded from any screenshot the team takes for the deck — it is a presenter tool.

---

## S1 — Emergency Strip

**Job:** the single unmissable affordance. Reachability in zero clicks from every page. Grave, not shouty.

**Layout:** full-bleed, `background:var(--c-emergency-900)`, white text, 44px desktop / 48px mobile, `position:sticky` directly beneath S0, `z-index:8000`. Content in the `--container`, flex, space-between, vertically centred. Entire left group is one `tel:` link with a 44px minimum hit height.

- **Left:** `⊕` icon (24px, white) + `Emergency? Call (02) 8248 3460` — number in `--t-btn` weight 700, tabular figures, letter-spacing 0.01em.
- **Middle (desktop only):** `·` separator + `Emergency Room open 24 hours` `[[VERIFY]]`
- **Right:** `Directions →` (white, underlined on hover) → `#/location`

**On mobile:** collapses to `⊕ Emergency — (02) 8248 3460` only; "Directions" moves to the sticky bottom bar. The strip is never dismissible, never animated, never collapsed on scroll.

---

## S2 — Header / Navigation

**Job:** orient, and hold the six conventional Philippine hospital nav slots so the site feels native.

**Layout:** 76px desktop, `background:#fff`, sticky under S1, `border-bottom:1px solid var(--c-divider)`, gains `--e-sticky` after 8px of scroll.

**Logo lockup (left):** 44px `--r-md` square in `--c-primary-700` containing a white monogram `U`, plus stacked text: `UASHMC` in serif 600 at 21px with a 3px `--c-accent-600` rule beneath it, and below in 10.5px sans 600 uppercase tracking 0.06em, `--c-text-secondary`: `United Antipolo Specialists Hospital and Medical Center`. `[[ASSET NEEDED — official logo files]]`

**Nav (centre), exactly six items, `--t-body` 600, `--c-text-primary`:**

`Find a Doctor` · `Services` · `HMOs & PhilHealth` · `Patient Information` · `About UASHMC` · `Contact & Directions`

> **Deliberate deviation from every benchmark:** `HMOs & PhilHealth` is promoted to top level. No Philippine hospital site does this — St. Luke's, MakatiMed and Asian all bury it two levels down, and TMC has no dedicated page at all. In a price-sensitive Antipolo catchment this is arguably the #1 question. `[[OPEN DECISION — nav slot #3]]`

Active state: 3px `--c-accent-600` bar beneath the label, label → `--c-primary-700`.

**Right:** primary button `Book a consultation` → `#/doctors`, and a `Viber` text link (`+63 947 875 4949`).

**No search box in v1.** A site search that fails on a small corpus is worse than no search — and KRISS AI is the answer to "I want to ask something." State this as a deliberate decision, not an omission. `[[OPEN DECISION — site search in Phase 1: yes/no]]`

---

## S3 — Hero

**Job:** answer _is this real_ and _where is it_ in one sentence, and offer two doors. One screen tall on mobile. Not two.

**Layout:** desktop 12-column, left 6 columns text, right 6 columns media, min-height 480px (not 100vh — 100vh heroes push the task grid off-screen and that is the one thing we cannot allow). `background:#fff`. Media plate is `--r-xl`, 16:9, with the overlay gradient from §2.5.

**Copy:**

- Eyebrow (`--c-accent-700`): `ANTIPOLO CITY, RIZAL · OPENED 2025`
- **Headline** (`--t-display`, serif 600, `--c-text-strong`):
  **`Specialists you can reach today, on Marcos Highway.`**
- **Subhead** (`--t-lede`, `--c-text-secondary`, max 46ch):
  `United Antipolo Specialists Hospital and Medical Center is a private hospital at 7 Marcos Highway, Barangay Mambugan — minutes from Masinag junction.` `[[VERIFY — travel-time and landmark distance]]` `Consultant clinics, in-house imaging and laboratory, and an Emergency Room that does not close.` `[[VERIFY — ER hours]]`
- **Buttons:** primary `Find a doctor` → `#/doctors` · secondary (outline) `See our services` → `#/services`
- **Tertiary text link** below, with a card icon: `Check if we accept your HMO →` → `#/hmo`
- **Micro trust row** beneath, `--t-meta`, `--c-text-muted`, three items separated by `·`:
  `Emergency Room open 24 hours` `[[VERIFY]]` · `PhilHealth-accredited` `[[VERIFY]]` · `__ HMO and insurance partners` `[[SAMPLE]]`

**Media plate brief (Photo Plate, §6.4):** _"UASHMC building from Marcos Highway, car's-eye height, signage readable, late afternoon. Highest-priority photograph in the project."_

**What the hero does NOT contain:** the tagline, a mission statement, a doctor count, an awards badge, a video, or a carousel. No carousel. Ever. A homepage carousel is a device for avoiding a decision about priority, and we have made the decision.

---

## S4 — PRIMARY TASK SECTION: "What do you need today?"

Full detail in **§4**. Placement: immediately beneath the hero, on a `--c-surface-tint` band, with the card grid pulled up `-40px` on desktop so it visually overlaps the hero's lower edge — this makes the grid read as _part of_ the first impression rather than as the next section. On mobile it is a plain band, no overlap.

---

## S5 — Emergency & Urgent Care Band

**Job:** the ER strip gets you the number; this section tells you what to actually do, and carries the RA 10932 promise nobody else publishes.

**Layout:** `--c-surface` (white), two columns desktop 7/5. Left: heading + prose + the statutory promise. Right: an NHS-pattern **emergency care card**.

- Eyebrow: `IF THIS IS AN EMERGENCY`
- H2: `Come in first. We will sort out the papers after.`
- Body:
  `Our Emergency Room is open 24 hours and does not require an appointment or a referral.` `[[VERIFY]]`
  `Under Republic Act 10932, a hospital cannot ask you for a deposit or advance payment before giving basic emergency care. We will not ask you for one. Bring what you have — your HMO card, PhilHealth number, any government ID — but do not go home for them first.`
- Buttons: `Call (02) 8248 3460` (filled `--c-emergency-600`) · `Open in Waze` (outline) · `What to expect in our ER →` (text link → `#/emergency`)

**Emergency care card (right column)** — background `--c-emergency-100`, 4px left rule `--c-emergency-600`, `--r-lg`, padding 24px. Visually-hidden prefix `Immediate action required: ` inside the heading span with `role="text"`.

> **Go to the Emergency Room now, or call 911, if someone:**
>
> - has chest pain, pressure, or tightness
> - is having trouble breathing
> - is bleeding heavily and it will not stop
> - will not wake up, or is having a seizure
> - suddenly goes weak on one side, or their speech becomes slurred
> - has a serious fall, a bad burn, or an injury with an obvious deformity
>
> Do not wait to see if it improves. `[[VERIFY — clinical review by Medical Director required before publication]]`

That last marker matters and should be pointed at in the room: **we wrote a clinical-adjacent list and flagged it for Dr. Pedraja rather than shipping it.**

---

## S6 — HMO Checker

**Job:** answer the highest-anxiety, highest-volume question in the Philippine market, better than any hospital in the country currently does. This is the widest competitive gap available.

**Layout:** `--c-surface-warm` band. Centred, `--container-narrow`. One large input, results below it.

- Eyebrow: `BEFORE YOU COME IN`
- H2: `Is your HMO accepted here?`
- Lede: `Type your HMO or insurance provider. We will tell you whether we have an agreement with them, what to bring, and where the LOA desk is.`
- **Input:** full-width, 60px tall, `--r-md`, 1.5px `--c-border-strong`, 18px text, placeholder `e.g. Maxicare, Medicard, PhilCare, Intellicare`. Type-ahead over the sample roster, fuzzy/typo-tolerant, max 6 suggestions, keyboard navigable.
- Below the input, six one-tap chips: `Maxicare` `Medicard` `PhilCare` `Intellicare` `ValuCare` `Pacific Cross` `[[SAMPLE]]`
- **Result panel** (appears in place, no navigation) — for `Maxicare`:
  > ✓ **We have an accreditation agreement with Maxicare.** `[[SAMPLE]]`
  > **Please still check three things with Maxicare before you come:** that your specific plan covers what you need · that your chosen doctor is on Maxicare's accredited list · whether your procedure needs a Letter of Authorization.
  > **Outpatient:** usually direct — bring your HMO card and one valid government ID.
  > **Planned procedure or admission:** you will need an LOA. Request it as soon as your doctor recommends the procedure — HMOs usually take 1 to 5 working days.
  > **Emergency:** come in. Do not wait for an LOA.
  > **LOA desk:** ___, ground floor, ___ AM to ___ PM, Monday to Saturday except holidays. Direct line (02) 8248 3460 local ___. `[[SAMPLE]]`
  > `[ Full HMO list and LOA steps → ]`
- **Never-empty rule:** an unmatched entry returns _"We do not have that provider on our list as of [date]. Our HMO desk can check for you — (02) 8248 3460, or message +63 947 875 4949 on Viber."_ Never "No results."
- Under the panel, `--t-meta`, `--c-text-muted`: `List as of ______ · Maintained by ______` `[[SAMPLE]]` + a plain-language caveat: `Accreditation lists change. Please confirm with your HMO and with our HMO desk before admission.`

---

## S7 — Find Care: Specialties + Concern Router

**Job:** answer "can this hospital handle what I need?" and bridge the gap between how patients speak and how hospitals are organised — with **zero clinical inference**.

**Layout:** `--c-surface` white. Two stacked blocks.

**Block A — the four specialties.** Four cards, 4-across desktop / 2-across mobile. Each: 3:2 photo plate, plain-language name with clinical term second, one-line scope, doctor count, link.

- Eyebrow: `OUR CLINICS`
- H2: `Four specialties, staffed by consultants.`
- Lede: `We are a specialists' hospital, which means the person who sees you is trained specifically for what you have. These are the clinics running now.` `[[VERIFY]]`

| Card | Title                                | Sub-line                                                                             |
| ---- | ------------------------------------ | ------------------------------------------------------------------------------------ |
| 1    | **Internal Medicine**                | `Adult general and long-term care — diabetes, hypertension, kidney, lungs, stomach.` |
| 2    | **Heart care** _(Cardiology)_        | `Chest pain, blood pressure, ECG, heart station tests.`                              |
| 3    | **Bones and joints** _(Orthopedics)_ | `Fractures, sports injuries, back and knee pain, joint surgery.`                     |
| 4    | **Children's health** _(Pediatrics)_ | `Newborn to teenage care, check-ups, immunisations, common illness.`                 |

Each card footer: `__ doctors · View clinic →` `[[SAMPLE]]`

Beneath the four, a single honest line — **do not build "coming soon" specialty pages**:
`We are still adding specialties. Services we are working on →` → `#/new`

**Block B — the concern router. THIS IS WHERE THE SYMPTOM-TO-SPECIALTY HELPER BELONGS.**

**Recommendation, stated explicitly: the symptom helper does NOT go in the hero, does NOT get a free-text box on the homepage, and is never called a "symptom checker."** A free-text symptom field above the fold invites exactly the input we are forbidden to process and reads as triage. Instead it appears in three low-risk places:

1. **Here**, as a finite row of curated concern chips.
2. As **one card** in the task grid — "Not sure who to see?" (§4).
3. As **one KRISS suggested prompt** — never as its lead prompt.

Layout: an inset panel, `--c-surface-tint`, `--r-lg`, 32px padding.

- H3: `Not sure which clinic you need?`
- Body: `Pick what is bothering you and we will point you to the right clinic. This is general information about which specialty usually handles what — it is not a diagnosis and not medical advice.`
- **Chip row (pill, 40px tall, 44px hit area, `--c-surface` on `--c-surface-tint`, 1px border):**
  `Chest or heart` · `Stomach or digestion` · `Bones, joints or injury` · `Blood pressure or diabetes` · `Breathing or cough` · `My child is unwell` · `Check-up or screening` · `Something else`
- Tapping a chip opens an inline answer:
  > `People with concerns about the chest or heart usually see a **Cardiologist**, or an **Internal Medicine** doctor first.`
  > `[ See our Cardiologists → ]  [ Heart Station tests → ]`
  > `Not sure? Call (02) 8248 3460 or message +63 947 875 4949 on Viber — someone will help you decide.`
  > `[[SAMPLE — routing table requires Medical Director sign-off]]`
- The `Chest or heart` chip additionally shows the **emergency care card first**, above the routing answer. Demonstrate this in the room.
- Panel footer, `--t-meta`: `This guide was reviewed by our Medical Director on ______.` `[[VERIFY]]`

**Copy rules for every routing answer** (bind these into the build as a banned-phrase list):

| Never                    | Always                                                  |
| ------------------------ | ------------------------------------------------------- |
| "You may have…"          | "People with … usually see a …"                         |
| "You should see…"        | "The clinic that handles this is…"                      |
| "Based on your symptoms" | "Based on what you are looking for"                     |
| "This sounds serious"    | _(the emergency card, unprompted)_                      |
| "How bad is it?"         | _(never asked — no clinical follow-up questions, ever)_ |

---

## S8 — New & Featured Services

**Job:** the expansion mechanism the brief requires. A brand-new hospital's most valuable narrative asset is _momentum_ — a dated, growing service list reads as a hospital that is building. A static one reads as abandoned.

**Layout:** `--c-surface-sunken` band. Header row with heading left, `See all services →` right. Three cards, 3-across desktop, horizontal snap-scroll on mobile.

- Eyebrow: `NEW AT UASHMC`
- H2: `What we have added recently.`
- Lede: `We are a new hospital and we are still growing. This is what has come online most recently, with the date it started.`

**Card anatomy:** badge (top-left, over the photo plate) · plain-language title with clinical name second · 2-line description · `Available since [Month Year]` in `--t-meta` · `Learn more →`

Badges — three states only, `--r-sm`, 11px 700 uppercase:

- `NEW SERVICE` — `--c-accent-100` bg / `--c-accent-800` ink
- `NEW EQUIPMENT` — `--c-primary-100` bg / `--c-primary-700` ink
- `EXPANDED HOURS` — `--c-surface-warm` bg / `--c-text-primary` ink

**"Coming soon" is not an available badge and no "coming soon" page may exist.** A coming-soon oncology page on a new hospital's site is a credibility leak. Services that are not yet live live on one honest page (`#/new` → "Services we are working on") with no individual pages.

**Sample cards:**

1. `NEW SERVICE` — **Gallbladder removal, keyhole surgery** _(Laparoscopic cholecystectomy)_ — `Small-incision gallbladder surgery, usually with a shorter hospital stay than open surgery.` · `Available since ______` `[[VERIFY]]`
2. `NEW SERVICE` — **Online consultation** _(Telemedicine)_ — `Talk to a UASHMC doctor by video or phone. Useful for follow-ups and for asking whether you need to come in.` · `Available since ______` `[[VERIFY]]`
3. `NEW EQUIPMENT` — **X-ray and diagnostic imaging** — `In-house X-ray with a radiologist's reading, so you are not sent to another facility for your tests.` · `Available since ______` `[[VERIFY]]`

> **Build the publish gate into this collection, and say so at the onsite.** Each item carries a required field: **`Covered by our DOH License to Operate — service as named on the LTO: ______`**. The Publish control is disabled until it is filled. This makes AO 2012-0012 and RA 10932 §3 a mechanism rather than a memo, and it is the single most persuasive thing on the page for Dr. Pedraja. Mark it with an `[[OPEN DECISION — who holds the publish approval: Medical Director or Marketing?]]` pin.

---

## S9 — Why UASHMC

**Job:** the story. Placed _ninth_, on purpose, after every practical question has been answered. Owns being new instead of hiding it.

**Layout:** `--c-surface-warm` band. Two columns desktop 6/6 — prose left, photo plate right (4:3, `--r-lg`). Prose measure 60ch.

- Eyebrow: `WHY UASHMC`
- H2: `A new hospital, built for how Antipolo actually lives.`
- Body (four paragraphs, exactly as written):

> `We opened in 2025. That is the honest headline, and we think it works in your favour: new facilities, current equipment, and consultants who still have the time to sit down and explain things properly.`
>
> `We built here on purpose. Marcos Highway is how eastern Rizal moves — and for too many families, "going to the hospital" has meant an hour of traffic toward Marikina or Quezon City before anyone has even looked at them. It should not have to be that way.`
>
> `Being a specialists' hospital means the doctor who sees you is the one trained for what you have. Our imaging and laboratory are in the same building, so you are not sent somewhere else for your tests and back again for your results.` `[[VERIFY]]`
>
> `We know we are asking for your trust before we have earned a reputation. So we have tried to put everything on this website that we would want to know ourselves: who our doctors are, which HMOs we work with, what things cost, and what happens when you walk in.`

- Closing signature block, centred, serif 600 at 26px, `--c-primary-700`, with a 2px `--c-accent-600` rule above it, 32px of air either side:
  **`Excellence in Every Life We Touch.`**

- **Leadership row** beneath — 4 items, 4-across desktop / 2-across mobile. Circular 96px photo plates, name in `--t-h3`, role in `--t-meta` `--c-text-secondary`:
  `Dr. Anthony Bravo — President` · `Dr. Myrna Isidro Pedraja — Medical Director` · `Tere Barcelona — Chief Operating Officer` · `Dr. Mary Rose Aimee L. Directo — Board` `[[VERIFY — exact titles, name spelling, and whether each person consents to appear]]`
  Footer link: `Meet our leadership →` → `#/about`

> **Build rule:** the four names above are the only real people named anywhere in the prototype, and they appear with role only — **no invented bios, no invented credentials.** Never use any of these four names on a sample doctor card.

---

## S10 — Trust & Credibility Band

**Job:** substitute _verifiable institutional proof_ for the _volume-based social proof_ a new hospital does not have. Six tiles, four of which no competitor in Antipolo publishes at all.

**Layout:** `--c-surface` white. 3-across desktop / 1-across mobile. Each tile: 32px accent icon, `--t-h3` title, 2–3 lines of body, one text link. `border:1px solid var(--c-border)`, `--r-lg`, 28px padding.

- Eyebrow: `WHAT WE CAN SHOW YOU`
- H2: `The things you should be able to check.`
- Lede: `A new hospital cannot show you decades of reputation. It can show you its papers, its prices, and its people. Here are ours.`

| #   | Icon                           | Title                                    | Body                                                                                                                                                                                                                                                                           | Link                                        |
| --- | ------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 1   | certificate                    | **Licensed by the Department of Health** | `UASHMC holds a DOH License to Operate as a Level __ hospital, authorised to perform the services listed on our licence.` `[[VERIFY]]` `The law requires us to post this at our entrance. This is the same notice, online.`                                                    | `See our licence and authorised services →` |
| 2   | shield                         | **PhilHealth**                           | `We are accredited by PhilHealth for ______.` `[[VERIFY]]` `Accreditation is by benefit package, not one blanket status — so here is exactly what we are accredited for and what it means for your bill.`                                                                      | `PhilHealth at UASHMC →`                    |
| 3   | card                           | **HMOs and insurance**                   | `__ providers, as of ______.` `[[SAMPLE]]` `Full list as plain text you can search — plus where the LOA desk is and how long an LOA takes.`                                                                                                                                    | `See the list →`                            |
| 4   | emergency                      | **No deposit before emergency care**     | `Under Republic Act 10932 we cannot ask you for a deposit or advance payment before giving basic emergency care — and we will not. Come in first.`                                                                                                                             | `Emergency information →`                   |
| 5   | accessibility _(accent green)_ | **Senior citizen and PWD discounts**     | `20% off and VAT-exempt on medical and dental services, professional fees, laboratory and imaging, under Republic Act 9994 and Republic Act 10754. Bring your OSCA senior citizen ID or your PWD ID. VAT is taken off first, then the 20% is applied to the remaining amount.` | `How the discount is computed →`            |
| 6   | wheelchair _(accent green)_    | **Coming with a wheelchair or a walker** | `PWD parking at ______, ramp access at ______, accessible restrooms on ______, priority lane at ______.` `[[SAMPLE]]`                                                                                                                                                          | `Accessibility at UASHMC →`                 |

**What is deliberately absent from this band and must stay absent:** star ratings, review counts, "trusted by thousands," unbadged award graphics, anonymous testimonials, JCI-style logos we do not hold. Each of those is individually detectable as padding, and detection here is fatal.

---

## S11 — Doctor in the House

**Job:** convert an existing, already-paid-for content asset into website depth — the cheapest way to make a four-specialty roster look substantial, and Harvey's fastest visible win from the project.

**Layout:** `--c-surface-tint` band. Left 5 columns text, right 7 columns a 16:9 video poster plate with a play affordance.

- Eyebrow: `DOCTOR IN THE HOUSE`
- H2: `Our doctors, explaining things properly.`
- Lede: `Doctor in the House is our series where UASHMC consultants answer the questions patients actually ask — in plain language, without the rush of a clinic visit. Episodes are attached to the doctor and to the service they are about, so you can watch before you book.`
- Buttons: `Watch the latest episode` (primary) · `Book an online consultation →` (text link)
- Footer note, `--t-meta`: `New episode every ______.` `[[VERIFY]]`

**Hard build rule: the video never autoplays, and the video file is never embedded.** A poster plate plus a click. Autoplay on Philippine mobile data is an act of hostility, and an embedded video would break the offline requirement and blow the file size.

---

## S12 — Location & Directions

**Job:** get a stressed driver to the correct entrance. Landmark-based, because Philippine wayfinding is landmark-based, not address-based.

**Layout:** `--c-surface` white. Left 5 columns: address block + directions accordion. Right 7 columns: a **static styled SVG map plate** — simplified geometry showing Marcos Highway on the diagonal, Sumulong Highway crossing, Masinag junction labelled, a `--c-emergency-600` pin at UASHMC. No live map embed: it breaks offline, it is the slowest thing on any hospital homepage, and it is a tracking surface.

- Eyebrow: `GETTING HERE`
- H2: `Finding us on Marcos Highway.`
- Address block, `--t-lede`:
  `7 Marcos Highway`
  `Barangay Mambugan, Antipolo City, Rizal`
- Buttons: `Open in Waze` · `Open in Google Maps` · `Copy address` (all outline; the two map buttons carry a small external-link glyph)
- **Accordion, four rows, first open by default:**

  **`Coming up from Marikina`**
  `Stay on Marcos Highway going uphill. Pass Masinag junction and continue about ______ metres. We are on the ______ side, just after ______.` `[[SAMPLE]]`

  **`Coming down from Antipolo town proper`**
  `Follow Marcos Highway going down toward Masinag. We are on the ______ side, about ______ metres before ______.` `[[SAMPLE]]`

  **`By jeepney, UV Express or LRT-2`**
  `Any Marikina–Antipolo route along Marcos Highway passes us. Tell the driver ______.` `[[SAMPLE]]` `From LRT-2, get off at Antipolo Station in Masinag and take a jeepney or tricycle — about ______ minutes.` `[[VERIFY]]`

  **`Where to enter, and where to park`**
  `The Emergency Room entrance is ______ and is open 24 hours.` `[[VERIFY]]` `The main entrance for clinics and admissions is ______. Drop-off is at ______. Parking is ______, with PWD parking at ______.` `[[SAMPLE]]`

- Below, a three-item hours strip, tabular figures: `Emergency Room — 24 hours` `[[VERIFY]]` · `Outpatient clinics — ______` `[[SAMPLE]]` · `Laboratory and X-ray — ______` `[[SAMPLE]]`

---

## S13 — Careers Strip

**Job:** hospital sites in the Philippines are also recruitment sites — `Careers` is in the primary nav on all eleven competitor sites with a website. It also signals growth to _patients_. One row, not a section.

**Layout:** `--c-surface-warm`, single row, 96px, flex space-between.

- Left: `We are hiring — nurses, allied health, and administrative staff.` `[[VERIFY]]`
- Right: outline button `See open positions →` → `#/careers`

---

## S14 — Footer

**Job:** be the canonical NAP record, hold the compliance links, and never be the place a journey dies.

**Layout:** `--c-surface-dark` (`#06283D`), white text, five columns desktop, accordion groups on mobile. Body text at `rgba(255,255,255,.82)`; headings pure white at `--t-h4`. Links underlined on hover only, but with a visible focus ring.

**Column 1 — Contact**
`United Antipolo Specialists Hospital and Medical Center`
`7 Marcos Highway, Barangay Mambugan`
`Antipolo City, Rizal, Philippines`
`Trunkline (02) 8248 3460`
`SMS and Viber +63 947 875 4949`
`uashmc.customerrelations@gmail.com` `[[VERIFY — migrate to a hospital-domain address before launch; a consumer mailbox receiving patient health information is an access-control gap under NPC Circular 2023-06]]`

**Column 2 — Patients** · Find a Doctor · Services · HMOs and PhilHealth · Patient Information · Emergency Information · Accessibility

**Column 3 — About** · About UASHMC · Our leadership · New at UASHMC · Doctor in the House · Careers · News and updates

**Column 4 — Legal and privacy** · Privacy Notice · How we handle your information · Data Protection Officer: ______ `[[VERIFY]]` · Patient Rights and Responsibilities · How to raise a concern · `Ask KRISS AI` _(a real text link — the second, non-intrusive entry point to the assistant)_

**Column 5 — Follow** · Facebook, Instagram, Viber, YouTube icons `[[VERIFY — which accounts are live]]`

**Bottom bar:** `© 2026 United Antipolo Specialists Hospital and Medical Center.` · `Excellence in Every Life We Touch.` · `Website by Iozera.ai`

---

## S15 — KRISS AI Launcher _(persistent, all pages except `#/emergency`)_

Full spec in §5.5 and §8.4. Desktop: bottom-right, 24px inset, 60px circle, `--c-primary-700` fill, white chat glyph, with a static 15px label pill to its left reading **`Ask UASHMC`**. Collapsed by default. **Never auto-opens.** No badge, no sound, no pulse, no bounce, no greeting bubble.

---

## 3.16 Section band summary (verify no two adjacent bands match)

| S   | Section                 | Background           |
| --- | ----------------------- | -------------------- |
| S1  | Emergency strip         | `--c-emergency-900`  |
| S2  | Header                  | `#fff`               |
| S3  | Hero                    | `#fff`               |
| S4  | **Task grid**           | `--c-surface-tint`   |
| S5  | Emergency & urgent care | `#fff`               |
| S6  | HMO checker             | `--c-surface-warm`   |
| S7  | Find care               | `#fff`               |
| S8  | New at UASHMC           | `--c-surface-sunken` |
| S9  | Why UASHMC              | `--c-surface-warm`   |
| S10 | Trust band              | `#fff`               |
| S11 | Doctor in the House     | `--c-surface-tint`   |
| S12 | Location                | `#fff`               |
| S13 | Careers                 | `--c-surface-warm`   |
| S14 | Footer                  | `--c-surface-dark`   |

---

# 4. THE PRIMARY TASK SECTION — "What do you need today?"

This is the load-bearing element of the entire page. If the hero fails, this section saves the visit. If this section fails, nothing else matters.

## 4.1 Section frame

**Band:** `--c-surface-tint`, `padding: 40px 0 88px` desktop (grid pulled up `-40px` to overlap the hero), `48px 0` mobile.

- Eyebrow, centred: `START HERE`
- H2, centred: **`What do you need today?`**
- Lede, centred, max 56ch, `--c-text-secondary`: `These are the things people ask us most. Pick one and we will take you straight there.`

**Grid:** CSS Grid. Desktop `repeat(4, 1fr)`, gap 20px, two rows. Tablet `repeat(2,1fr)`. Mobile `repeat(2,1fr)` with card 5 (Emergency) spanning both columns as the first item — see §5.

## 4.2 The eight cards — exact spec

Card anatomy, identical for all eight: 48×48 icon tile (top-left) → 20px gap → title (`--t-h3`, sans 600, `--c-text-strong`) → 6px → helper line (`--t-body-sm`, `--c-text-secondary`, max 2 lines) → chevron glyph bottom-right, 16px, `--c-primary-600`. Card: `background:#fff`, `border:1px solid var(--c-border)`, `--r-lg`, padding 24px, `min-height:150px` desktop / `120px` mobile, `--e-1`. **The entire card is a single `<a>`** — one focusable element, one hit target, `display:flex; flex-direction:column`.

| #   | Title                    | Helper copy                                                                | Icon (24px stroke) | Destination      |
| --- | ------------------------ | -------------------------------------------------------------------------- | ------------------ | ---------------- |
| 1   | **Find a Doctor**        | `Search by specialty, clinic day, or which HMO they accept.`               | stethoscope        | `#/doctors`      |
| 2   | **Find a Service**       | `Procedures, tests, imaging and check-up packages.`                        | clipboard-pulse    | `#/services`     |
| 3   | **Is my HMO accepted?**  | `Type your provider and see what to bring.`                                | id-card            | `#/hmo`          |
| 4   | **Patient Information**  | `Admission, PhilHealth, rooms, billing and visiting hours.`                | folder-open        | `#/patient-info` |
| 5   | **Emergency Room**       | `Open 24 hours, no appointment needed. Call (02) 8248 3460.` `[[VERIFY]]`  | cross-circle       | `#/emergency`    |
| 6   | **How to get here**      | `7 Marcos Highway, Brgy. Mambugan. Waze and Google Maps.`                  | map-pin            | `#/location`     |
| 7   | **Not sure who to see?** | `Tell us what is bothering you and we will point you to the right clinic.` | compass            | `#/find-care`    |
| 8   | **Contact us**           | `Trunkline, Viber, and direct numbers per department.`                     | phone-chat         | `#/contact`      |

## 4.3 Card 5 (Emergency) is visually distinct

It must be findable in peripheral vision without turning the section into an alarm:

- `border: 1.5px solid var(--c-emergency-200)`
- icon tile: `background: var(--c-emergency-100)`, icon in `--c-emergency-600`
- title in `--c-emergency-600`
- a 3px top rule in `--c-emergency-600` across the card's full width, inside the radius
- the phone number in the helper line is 600 weight with tabular figures
- **on hover/focus:** border → `--c-emergency-600`; the tile fills `--c-emergency-600` with a white icon
- desktop grid position: **row 2, column 1** — the start of the second row, which is the second-strongest position in a two-row grid after top-left. On mobile it is promoted to position 1, full-width.

## 4.4 Card 7 rationale — why the symptom helper is a _card_, not a search box

Card 7 is the entire symptom-to-specialty affordance on the homepage. It is a **link to a page**, not an input. This is deliberate and it is the safest available design:

- A card cannot receive free-text symptom input, so it cannot be misread as triage.
- Its label is a navigation question ("who to see"), not a clinical one ("what's wrong with me").
- It lands on `#/find-care`, where the curated chip router (S7 Block B) lives with its Medical-Director-signed-off framing, its emergency interception, and its escape hatch to a human.
- It gives the demo a clean, controllable moment to show the red-flag interrupt.

## 4.5 Interaction and accessibility

- Hover/focus: `translateY(-2px)`, `--e-2`, `border-color: var(--c-primary-600)`, tile fills `--c-primary-600` with white icon, chevron slides `+3px`. 140ms.
- Focus visible: `outline: var(--focus-outline); outline-offset: 3px;` **plus** `box-shadow: var(--focus-ring)`.
- Grid is a `<ul>` of `<li><a>`; the section has `aria-labelledby` pointing at the H2. Cards are in DOM order = visual order = tab order in **both** views (the mobile reorder must be done with `order` on a flex container only where DOM order still makes sense read aloud — for the Emergency promotion, reorder the DOM, not the CSS).
- Icons are `aria-hidden="true"`; the accessible name comes from the title + helper text.
- Every card destination renders a real page. **No `href="#"` anywhere in the build.**

## 4.6 Acceptance criteria for this section

- On a 1440×900 desktop window, at least the first row of four cards is visible without scrolling.
- On a 390×844 phone, the Emergency card and at least two more cards are visible without scrolling.
- Eight cards, eight working destinations, zero dead ends.
- A first-time viewer can name what the hospital wants them to do within three seconds of the section entering view.

---

# 5. MOBILE SPEC

**Assumption driving every decision below:** the visitor tapped a link in the Facebook in-app browser, on a ₱8,000 Android, on mobile data, one-handed, possibly in a moving vehicle, possibly worried.

## 5.1 Mobile section order — and why it differs

| Mobile pos | Section                                                             | Change from desktop                                                                                                                                              |
| ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | Prototype bar                                                       | Compressed: `v0.1` · view toggle · `CC` toggle · `?`                                                                                                             |
| 2          | **Emergency strip** (sticky)                                        | Number only, 48px, full-width tap                                                                                                                                |
| 3          | **Header** (sticky)                                                 | 60px: mark + `UASHMC` + hamburger. Long name drops.                                                                                                              |
| 4          | Hero                                                                | Compressed: 3:2 photo plate above, headline, **one-sentence** subhead, **one** primary button. The `See our services` secondary and the micro trust row are cut. |
| 5          | **Task grid**                                                       | Unchanged in importance, reordered internally (§5.4)                                                                                                             |
| 6          | Emergency & urgent care                                             | Care card first, prose second                                                                                                                                    |
| 7          | HMO checker                                                         | Unchanged — this is a top-three mobile task                                                                                                                      |
| 8          | Find care (specialties + concern chips)                             | Specialty cards 2-across; chip row wraps                                                                                                                         |
| 9          | New at UASHMC                                                       | Horizontal snap-scroll, 3 cards, peek of the next                                                                                                                |
| 10         | **Location & Directions** ⬆️ **MOVED UP** (desktop S12 → mobile 10) | A phone user is often _en route_. Directions must not sit below the brand story.                                                                                 |
| 11         | Trust band                                                          | Tiles 1, 4 and 5 shown expanded; tiles 2, 3 and 6 collapsed into a single accordion `More things you can check`                                                  |
| 12         | Why UASHMC                                                          | First two paragraphs shown, paragraphs 3–4 behind `Read more`. Leadership row becomes a plain name/role text list, no photos.                                    |
| 13         | Doctor in the House                                                 | Poster plate + one line + one button                                                                                                                             |
| 14         | Careers                                                             | Collapsed to a single footer link                                                                                                                                |
| 15         | Footer                                                              | Four accordion groups, all collapsed; the contact block stays open                                                                                               |
| —          | **Sticky bottom bar**                                               | Always present (§5.3)                                                                                                                                            |

**Rationale for the reorder in one line each:** Directions move up because location is the mobile job-to-be-done. The story moves down because nobody reads a brand story on cellular data. The trust band partially collapses because six tiles is 6 screens of scroll on a phone, and the two statutory tiles are the ones that do the work.

## 5.2 What is cut or collapsed on mobile

**Cut entirely:** hero secondary button, hero micro trust row, careers strip, leadership photos, the desktop HMO logo wall (replaced with a count + link), the `Book a consultation` header button (its job is done by the sticky bar), the header Viber link (moves into the nav sheet), the static map plate's fine detail (simplified to road + pin + two labels).

**Collapsed to accordion:** location directions (all four rows closed except the first), trust tiles 2/3/6, Why UASHMC paragraphs 3–4, all footer groups.

**Never cut, never collapsed:** the emergency strip, the task grid (all eight cards), the HMO checker, the address and the two map buttons, the RA 10932 no-deposit statement.

## 5.3 Sticky bottom action bar

This is the decision the finder-ux research points at, and it is the right one: **fold KRISS into a bottom action bar rather than floating a bubble over the content.** A floating bubble on a hospital site will, sooner or later, sit on top of the call button. That is unacceptable, and the fix is architectural, not z-index tuning.

**Default bar (every page except `#/emergency`):**

```
┌──────────────┬──────────────┬──────────────┐
│  ☎  Call     │  📍 Directions│  💬 Ask      │
└──────────────┴──────────────┴──────────────┘
```

- `position: fixed; bottom: 0; left: 0; right: 0; z-index: 7000`
- Height **64px** + `padding-bottom: env(safe-area-inset-bottom)`
- `background: #fff`, `border-top: 1px solid var(--c-border)`, `box-shadow: 0 -2px 12px rgba(16,36,46,.08)`
- Three equal-width buttons, `display:grid; grid-template-columns:repeat(3,1fr)`
- Each: 20px icon above a 13px 600 label, centred. Full-height, full-width hit area.
- **Call** — `background: var(--c-primary-700)`, white text, `href="tel:+63282483460"`
- **Directions** — white, `--c-text-primary`, 1px left divider, → `#/location`
- **Ask** — white, `--c-text-primary`, 1px left divider, opens the KRISS sheet
- `body { padding-bottom: 72px }` so nothing is ever obscured by it. **This is the whole point:** because the bar reserves its own space, it can never occlude content, an autocomplete list, a filter panel, or a form field.

**On `#/emergency` the bar changes shape:**

```
┌────────────────────────────┬──────────────┐
│  ☎  Call ER (02) 8248 3460 │  📍 Directions│
└────────────────────────────┴──────────────┘
```

Left button 2/3 width, `background: var(--c-emergency-600)`, white, 15px 700, tabular figures. **The `Ask` button is removed entirely on this page** — KRISS is suppressed on the emergency page as a matter of policy, not layout.

**Suppressed on:** `#/emergency`, and while any form field on the page has focus (the bar hides on `focusin` of an input/textarea/select and returns 250ms after `focusout` — a bottom bar over a mobile keyboard is a bug).

## 5.4 Mobile task grid reorder

DOM order on mobile (reorder the markup, not just CSS, so screen-reader order matches):

1. **Emergency Room** — full width, `grid-column: span 2`, 88px tall, horizontal layout (icon left, text right), emergency styling from §4.3
2. Find a Doctor
3. Is my HMO accepted?
4. How to get here
5. Find a Service
6. Patient Information
7. Not sure who to see?
8. Contact us

Cards 2–8 at 2-across, `min-height: 120px`, padding 18px, title 18px, helper truncated to two lines with `-webkit-line-clamp: 2`.

## 5.5 KRISS on mobile

- **Entry:** only the `Ask` segment of the bottom bar, plus the footer text link. **No floating launcher on mobile at all.**
- **Expanded:** a **bottom sheet at 92vh**, `--r-xl` on the top two corners only, `--e-4`, with a 40px grab handle, a header row (`Ask UASHMC` + a 48×48 close X), the message area, the suggested-prompt chips, and a 56px composer pinned to the bottom above the safe-area inset.
- On open: `body` scroll locked, focus moves into the sheet, focus trapped, `Esc` and swipe-down and the X all close, focus returns to the `Ask` button.
- The composer input is 16px minimum — anything smaller triggers iOS auto-zoom.
- The standing disclaimer (§8.4) sits directly above the composer, always visible, never dismissible, at 12.5px.

## 5.6 Mobile navigation

Hamburger (48×48, right of header) → **full-screen sheet**, not a slide-in drawer with a visible sliver of page behind it. Opaque `#fff`, `z-index: 8500`, covers the header but **not** the emergency strip — the strip stays visible above the sheet. That is deliberate: the emergency number remains reachable even mid-navigation.

Sheet contents, top to bottom:

1. Row: `Close ✕` (48×48, right-aligned)
2. **Emergency row** — 64px, `--c-emergency-100` background, `⊕ Emergency — (02) 8248 3460` in `--c-emergency-600` 600
3. Six nav items, each a **56px row** with a right chevron and a 1px bottom divider: `Find a Doctor` · `Services` · `HMOs & PhilHealth` · `Patient Information` · `About UASHMC` · `Contact & Directions`
4. Divider, then secondary rows at 48px: `New at UASHMC` · `Careers` · `Privacy Notice` · `Content check`
5. Contact block: trunkline, Viber (`+63 947 875 4949`), address, `Open in Waze`

No nested accordions in the nav. One level. Six items.

## 5.7 Tap targets and mobile hard rules

| Element                                  | Size                                        |
| ---------------------------------------- | ------------------------------------------- |
| Absolute minimum any interactive element | **48 × 48** CSS px                          |
| Bottom bar buttons                       | 64px tall × 1/3 viewport wide               |
| Nav sheet rows                           | 56px tall, full width                       |
| Task cards                               | 120px+ tall, ~48% width                     |
| Filter/concern chips                     | 40px visual, 44px hit via padding           |
| Accordion headers                        | 56px                                        |
| Inline text links in prose               | `padding: 6px 0` to reach 44px vertical hit |
| Close / X controls                       | 48 × 48                                     |
| Body text minimum                        | 16px (never 14px on mobile)                 |
| Form inputs                              | 52px tall, 16px text                        |

Other hard rules: no horizontal page scroll at **320px** width; no hover-only affordances; no `position: fixed` element other than the prototype bar, the emergency strip, the header, and the bottom bar; no video autoplay; no web font swap flash (`font-display: swap` with a metric-compatible fallback); every image slot has a declared `aspect-ratio`.

## 5.8 ⚠️ Build note: the view toggle and breakpoints

The desktop/mobile toggle renders a 390px-wide frame inside a desktop window. **CSS media queries will not fire inside it.** Therefore:

- Build **all** responsive rules against a state attribute on the root wrapper: `<div class="viewport" data-view="desktop">` / `data-view="mobile"`, and write selectors as `[data-view="mobile"] .hero { … }`.
- Then add a **thin secondary layer of real media queries** that simply sets `data-view` behaviour for actual devices: `@media (max-width: 767px) { .viewport { /* mobile rules mirrored */ } }` — implemented by having the mobile rule set live in a single CSS block applied by _either_ `[data-view="mobile"]` _or_ the media query, via a shared selector list.
- On a real phone opening the shared link, JS sets `data-view="mobile"` on load from `window.innerWidth < 768` and the toggle is hidden.
- In `data-view="mobile"`, the frame is 390px wide, `max-height: 844px`, centred on a `#1B2A33` backdrop with a 12px `--r-xl` device bezel, and **scrolls internally** (`overflow-y:auto`) so the presenter can scroll the phone without scrolling the deck behind it.
- `data-view="mobile"` must also switch the sticky offsets, since the sticky elements are now sticky to the frame, not the window.

---

# 6. THE HONEST-PLACEHOLDER STRATEGY

## 6.1 The framing — present this with pride

This is not a disclaimer. It is a **feature of how Iozera works**, and it is the answer to the brief's hardest constraint: Harvey must shape the site, not rubber-stamp it.

The line to say in the room, before anyone asks:

> _"Everything on this prototype that we wrote ourselves is marked. Not because we are hedging — because we are not going to sit in a hospital and invent hospital facts. Turn the markers off and you see the design. Turn them on and you see exactly what we need from you, who we think should own it, and what is still an open decision that is yours to make. When we leave today, that list is the project plan, and it is yours to keep."_

Two things this buys us that a polished mock-up cannot:

1. We can never be accused of fabricating a licence level, a price, or a doctor's credentials.
2. **The meeting produces the content-gathering deliverable automatically.** Meeting goal #4 completes itself.

## 6.2 The four markers

One shape language, four hues, four distinct meanings. All chips: `--t-chip` (11px / 700 / 0.08em / uppercase), `--r-sm`, `padding: 3px 7px`, `border: 1px solid`, `white-space: nowrap`, inline-flex, `vertical-align: middle`, `margin-left: 6px`. Each chip is a real `<button>` with `aria-label="Content check: SAMPLE — open note"`.

| Chip                            | Meaning                                                          | Colours                                                   | Element treatment when Content check is ON                            |
| ------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `SAMPLE`                        | We wrote this as an example. Replace with UASHMC's real content. | bg `#FFF4E0` / ink `#8A4F00` / border `#E9B764`           | 2px dashed `#E9B764` bottom border on the text run                    |
| `VERIFY`                        | We believe this is right but have not seen it confirmed.         | bg `#F1EDFA` / ink `#4A3A7A` / border `#C6B8E8`           | 2px dashed `#C6B8E8` bottom border                                    |
| `PHOTO NEEDED` / `ASSET NEEDED` | An image, logo, or file goes here.                               | bg `#EDF1F3` / ink `#3C4C55` / border `#C3CED4`           | the Photo Plate (§6.4)                                                |
| `OPEN DECISION`                 | A real design or business choice, still yours to make.           | bg `#FFFFFF` / ink `#0E5175` / border `#13699A` **1.5px** | 2px **solid** `#13699A` left rule on the containing block, 12px inset |

Note the deliberate difference in the last one: `OPEN DECISION` uses a **solid** rule and an **outlined** chip while the other three use **dashed** rules and **filled** chips. Dashed = incomplete. Solid = a live choice. Different grammar, because it is a different kind of thing.

`PHOTO NEEDED` and `ASSET NEEDED` share styling and differ only in label — one is a photograph to be shot, the other is a file to be sent (logo, licence scan, PDF).

## 6.3 Behaviour

**Toggle (in the prototype bar):** `Content check` on/off, default **ON**. Persisted to `sessionStorage` so a reload during the demo does not lose state. Implemented as a single class on `<html>` — `.cc-on` / `.cc-off` — so toggling is instant and cannot lag.

**Counter:** live count of flagged items on the _current page_, plus a total: `Content check — 12 on this page, 47 in all`.

**Chip click → popover** (`--e-3`, `--r-md`, white, 1px `--c-border`, max-width 340px, arrow pointing at the chip, dismiss on Esc/outside click, focus trapped while open). Contents:

```
┌───────────────────────────────────────────┐
│ SAMPLE                                    │
│ Emergency Room operating hours            │
│                                           │
│ WHAT WE NEED                              │
│ Confirmed ER opening hours, and whether   │
│ the ER has a direct line separate from    │
│ the trunkline.                            │
│                                           │
│ WHY WE WROTE THIS                         │
│ We assumed 24 hours because a hospital    │
│ of this type usually is, but we have not  │
│ seen it confirmed anywhere public.        │
│                                           │
│ SUGGESTED OWNER   Nursing Service / COO   │
│                                           │
│ [ Add to content list ]  [ Close ]        │
└───────────────────────────────────────────┘
```

`Add to content list` marks the item as _discussed in the meeting_ — it turns green with a checkmark on `#/content-check`. **This is the live-note-taking mechanism.** Ask Tere to drive it, or drive it yourself and say so: "I'm marking that as agreed."

**Content check OFF:** all chips, dashed rules, and solid rules disappear; Photo Plates switch to their neutral state (§6.4); the page reads as a clean, finished design. **Nothing shifts layout when toggling** — chips are `position: absolute` where they would otherwise reflow text, and dashed borders are `border-bottom` on an already-reserved 2px, so the toggle is visually instant and stable. Verify this: a jumping page on toggle destroys the effect.

## 6.4 Photo Plates

Every image slot in the prototype is a Photo Plate. Two states.

**Content check ON:**

- `background: linear-gradient(135deg, #EDF1F3 0%, #E1E9ED 100%)`, `--r-lg`, 1px dashed `#C3CED4`
- Centred: a 32px camera glyph in `#8FA2AC`
- Below it, 14px 600 `#3C4C55`: the shot brief — e.g. `UASHMC building from Marcos Highway, car's-eye height, signage readable, late afternoon.`
- Below that, 12px `#5E6E77`: `Recommended 2400 × 1350 · 16:9 · JPEG`
- Top-right corner: the `PHOTO NEEDED` chip
- Aspect ratio always declared so nothing reflows

**Content check OFF:**

- Same gradient, no dashed border, **no text, no glyph, no chip** — a neutral abstract surface with a subtle 8% diagonal `--c-primary-200` wash. It reads as a designed placeholder, not as a hole. This matters: the "clean" view must still look like a design, not like a broken page.

The full set of plates on the homepage becomes the photo shoot brief. Count them out loud: **eleven photographs and one logo file is the entire visual dependency for launch.** That is a scoping conversation Harvey can act on the same week.

## 6.5 The legend

Reached from `What's this?` in the prototype bar, and shown once automatically on first load as a dismissible modal. Modal: `--container-narrow`, white, `--r-xl`, `--e-4`, 40px padding.

**Exact copy:**

> ## Nothing on this page is a hospital fact yet.
>
> This is a working prototype, not a finished website. It exists so we can decide things together in this room instead of arguing about a picture later.
>
> Every piece of content **we** wrote is marked, so you can tell it apart from **your** information at a glance. Tap any marker to see what we need and who we think should own it.
>
> **SAMPLE** — We wrote this as an example. It needs to be replaced with UASHMC's real content.
>
> **VERIFY** — We think this is right, but we have not seen it confirmed anywhere. Please check it.
>
> **PHOTO NEEDED** — An image goes here. The note tells you which photograph we need and what size.
>
> **OPEN DECISION** — A real choice that is still open. Marketing and clinical leadership own these, not us.
>
> Turn the markers off any time to see how the finished page will read.
>
> The full list lives on the **Content check** page. That list is your content to-do list — grouped by page, with a suggested owner for each item. Take it with you.
>
> `[ Start looking around ]` `[ Open the content list ]`

## 6.6 The `#/content-check` page

The artifact of the meeting. A single scrollable page.

- H1: `Content check — everything we still need`
- Lede: `47 items across 6 pages. Sorted by what blocks launch first. Tick items off as we agree owners.`
- Filter chips: `All` · `SAMPLE (28)` · `VERIFY (12)` · `PHOTO NEEDED (11)` · `OPEN DECISION (6)` · `Agreed today (0 → n)`
- Grouped by page, each group an accordion, open by default. Table columns: **Marker · Item · What we need · Suggested owner · Agreed**
- Suggested owners drawn from a fixed list so the meeting produces real assignments: `Marketing (Harvey)` · `Medical Director (Dr. Pedraja)` · `Operations (Tere)` · `Billing / HMO desk` · `Nursing Service` · `HR` · `Iozera` · `Legal / DPO`
- A top-right button: `Copy list as text` — dumps a plain-text, e-mailable version to the clipboard. **This is what you send within an hour of leaving the meeting.** It is the single most valuable thing the prototype produces.

**The five highest-priority items must appear at the very top of the page under a heading `Blocks everything else`:**

1. `VERIFY` — DOH License to Operate: registered facility name, classification level, authorised services, validity dates. _Owner: Medical Director._
2. `VERIFY` — Emergency Room hours, and whether there is an ER direct line separate from the trunkline. _Owner: Nursing Service / COO._
3. `SAMPLE` — The real HMO and insurance list, with a named owner and an update cadence. _Owner: Billing / HMO desk._
4. `OPEN DECISION` — Domain name, and migrating customer relations e-mail off Gmail to a hospital domain. _Owner: Operations + Marketing._
5. `PHOTO NEEDED` — The building from Marcos Highway. _Owner: Marketing._

---

# 7. THE OTHER PROTOTYPE PAGES

Design rules for all interior pages: shared shell (prototype bar + emergency strip + header + footer + sticky bottom bar on mobile), a page header block (breadcrumb, H1, one-line lede), `--container` width, and **no dead ends** — every page ends with a `What next?` row of two or three links plus the contact block. Interior pages are lighter than the homepage: fewer bands, no hero media, more text.

## 7.1 The three journeys these pages must support end-to-end

- **Journey A — "I need to see a specialist."** `#/` → task card 1 → `#/doctors` → filter → `#/doctors/reyes-maria` → NowServing hand-off.
- **Journey B — "Can I afford this?"** `#/` → HMO checker → `#/hmo` → LOA steps → `#/services/chest-x-ray` (price + inclusions) → `#/patient-info/senior-pwd`.
- **Journey C — "Something is wrong right now."** `#/` (mobile) → emergency card → `#/emergency` → call + Waze. Or: KRISS red-flag interrupt → emergency card.

Every page below exists to make one of those three land without a dead click.

---

## 7.2 `#/doctors` — Find a Doctor

**The widest competitive gap in Antipolo: ADH has no doctor search at all.** This page must be the strongest thing in the prototype.

**Layout:** page header → **specialty tile grid (default view)** → filter bar → results grid. Sidebar filters on desktop; a `Filter` button opening a bottom sheet on mobile.

- H1: `Find a Doctor`
- Lede: `Search by specialty, by the day you are free, or by which HMO you carry.` **Never publish a doctor count.**
- **Default state is BROWSE, not search.** Land on four large specialty tiles (icon + plain-language name + clinical name + `__ doctors`). A bare search box implies a large corpus and invites queries we will fail. `[[OPEN DECISION — browse-first or search-first]]`
- **Filter bar / sidebar, in this order:** `Specialty` (4 options + All) · `Accepts my HMO` (select) · `Clinic day` (Mon–Sat toggle row) · `Time` (AM / PM) · `Consultation type` (In-person / Online) · `Doctor's name` (type-ahead)
- **Every filter option shows its result count and zero-count options are disabled and greyed.** It must be structurally impossible to reach an empty result set. This is the fix for the small-roster problem, and it is worth naming in the room.
- **No location filter** (single campus). **No ratings, no reviews, no "book with 3 clicks" gimmicks.**
- **Result card:** 4:5 portrait plate · name + suffixes (`Dr. Maria Elena C. Reyes, MD, FPCP`) · plain-language specialty with clinical term second (`Heart doctor — Cardiologist`) · one-line focus (`Interventional cardiology, heart failure`) · `Next clinic: Tuesday, 9:00 AM` · 4 HMO text badges + `+6 more` · a consultation-type chip · primary button `Book appointment` (→ NowServing, external-link glyph) + secondary `View profile`. **Every card carries a `SAMPLE` chip.**
- **Page-level banner, above the results, `--c-mk-sample-bg`:** `The nine doctors below are sample records. Names, credentials, schedules and HMO lists are placeholders written by Iozera — they are not real UASHMC physicians.`

**Sample roster — 9 doctors** (3 Internal Medicine, 2 Cardiology, 2 Orthopedics, 2 Pediatrics), all fields fully populated so completeness reads as competence. Names are common and generic, PRC numbers are literally `PRC ______`, and **none of the four real stakeholders appears here.**

**One full profile page, `#/doctors/reyes-maria`**, to prove the depth: 4:5 portrait plate; name/suffixes; plain-language + clinical specialty; sub-specialty; **full weekly schedule table** with clinic room and floor; medical school / residency / fellowship; `PRC licence ______` and specialty board fellowship spelled out (`Fellow, Philippine College of Physicians`); languages (`Filipino, English`); procedures performed, each linking into `#/services`; a 130-word first-person paragraph; an embedded **Doctor in the House** poster plate; and a sticky `Book appointment` button (bottom-right desktop, in-flow above the bottom bar on mobile). Everything `SAMPLE`.

**Zero-results fallback ladder** (demonstrate it if asked, never stumble into it): relax the last filter and say so → _"No cardiologist has a Saturday afternoon clinic. Showing all cardiologists."_ → then the human: `Call (02) 8248 3460` / `Message on Viber` / `Ask UASHMC`. Announced via `aria-live="polite"`.

---

## 7.3 `#/services` — Services

**Layout:** page header → **three doors** → the chosen index.

- H1: `Services and Specialties`
- Lede: `Browse by the part of the body, by clinic, or straight down an A-to-Z list.`
- **Three doors as a segmented control:** `By concern` (default) · `By clinic` · `A to Z`
  - **By concern** — 9 plain-language groups as cards: `Heart and circulation` · `Bones, joints and injuries` · `Children's health` · `Stomach and digestion` · `Blood pressure and diabetes` · `Check-ups and screening` · `Scans and tests` · `Surgery` · `Emergency care`
  - **By clinic** — the four specialties
  - **A to Z** — one flat list, letter nav at top with unpopulated letters as muted non-links. Write it **"A to Z"**, not "A–Z" (screen readers read the dash as "ay zed"). The list must work as a plain scroll; anchors are not load-bearing.
- `[[OPEN DECISION — which door is the default: by concern, or by clinic? This is Marketing's call and it visibly changes the homepage.]]`

**Two full service detail pages** to prove the nine-block template, one procedure and one test:

**`#/services/laparoscopic-cholecystectomy`** — the nine blocks in this order:

1. `Gallbladder removal (Laparoscopic cholecystectomy)`
2. **What this is** — 50 words, reading age ~11
3. **Who this is for** — bulleted plain-language conditions
4. **What to expect** — before → arrival → during → after → recovery, as a numbered timeline
5. **How to prepare** — concrete and numeric: `Stop eating 8 hours before`, what to bring, who should come with you `[[SAMPLE — clinical review required]]`
6. **How long, and where** — procedure time, **total time on site** (the number patients actually need and nobody publishes), expected admission length, floor
7. **What you need to bring** — referral, fasting, prior lab work, PhilHealth CF1/CF2, **HMO Letter of Authorization and its 1–5 working-day lead time**
8. **Cost and coverage** — a **package range** (`₱______ to ₱______` `[[SAMPLE]]`), an explicit **What is included** list (green checkmarks) and a **What is not included** list (neutral dashes — the exclusions list is where trust is won), the PhilHealth case-rate note with no hardcoded amount, senior/PWD note, and `Prices as of ______`. Plus a `Get an exact quote` block: named channel, promised response time.
9. **Who does this at UASHMC** — two doctor cards pulled from the same records as `#/doctors`, then `Book` / `Enquire`

**`#/services/chest-x-ray`** — the same template, shorter, with a real indicative price range. This is the page **Journey B** lands on and the page KRISS quotes from.

---

## 7.4 `#/hmo` — HMO Partners

The page that no Philippine hospital currently gets right: the big ones give a roster with no instructions, or instructions with no roster, and **nobody has a searchable checker**.

**Layout:**

- H1: `HMOs and insurance we work with`
- Lede: `Type your provider to check, or scroll the full list. We have also written down exactly how a Letter of Authorization works, because it is the thing that delays people most.`
- **Big banner, `--c-mk-sample-bg`, unmissable:** `This is a sample list, drawn from what Philippine hospitals commonly accept. It is NOT UASHMC's accreditation list. It must be replaced with the real list, with a named owner and an update date, before launch.`
- **The type-ahead checker**, same component as homepage S6, at full width
- **Framing sentence, exact wording:** `These are the HMOs and insurers we have accreditation agreements with.` — **never** "HMOs we accept." The distinction is the difference between a routing statement and a coverage promise.
- **`As of ______ · Maintained by ______`** in `--t-meta` directly under the heading, and again at the foot of the list
- **The four caveats**, in a bordered box above the list, as a numbered list:
  > `Even when we have an agreement with your HMO, four things still decide whether your visit is covered:`
  > `1. Your plan. Providers offer many plans, and not all of them cover everything.`
  > `2. Your doctor. HMOs keep their own lists of accredited doctors.`
  > `3. Your specific procedure. Some need approval in advance.`
  > `4. Time. A Letter of Authorization usually takes 1 to 5 working days — request it as soon as your doctor recommends the procedure.`
  > `Please confirm with your HMO and with our HMO desk before you are admitted.`
- **The list: ~24 providers as plain, searchable HTML text**, alphabetical, 3 columns desktop / 1 mobile, each row with a small `Outpatient / Inpatient / Emergency` indicator. Not logos. Not a PDF. Not an image. `[[SAMPLE]]`
- **Three-column split: Outpatient · Inpatient · Emergency.** Conflating them is how patients get hurt.
  - _Outpatient:_ `Usually direct. Bring your HMO card and one valid government ID.`
  - _Inpatient / planned procedure:_ `Card, government ID, and an LOA. Request the LOA as soon as your doctor recommends the procedure.`
  - _Emergency:_ `Come in. Do not wait for an LOA. Under Republic Act 10932 we cannot ask you for a deposit before basic emergency care.`
- **The LOA desk block** — where it is, its hours, `Monday to Saturday except holidays`, its direct number `[[SAMPLE]]`
- **A bilingual sub-block, `--c-surface-warm`** — the seven LOA steps in **English and Filipino, side by side**. `[[OPEN DECISION — how bilingual should the site be? ADH does exactly this on the money question and it is the smartest thing on any Antipolo hospital site. Our recommendation: bilingual on the LOA steps, admission requirements, ER instructions and PhilHealth, English elsewhere.]]`
- **Related information cluster** at the foot: `PhilHealth →` · `Room accommodations →` · `Admission →` · `Billing →`. The money question links to the other money questions.

---

## 7.5 `#/patient-info` — Patient Information

The canonical Philippine hospital page set. **Hub page with eight topic cards; three topics built out fully, five as stubs with real headings and a `SAMPLE` note under each — visibly incomplete rather than fake.**

- H1: `Patient Information`
- Lede: `Everything about coming in, paying, staying, and getting your records.`
- Eight cards → `#/patient-info/{topic}`:
  1. **Admission** — what to bring, deposits, and how a room is assigned
  2. **HMOs and Letters of Authorization** _(cross-links to `#/hmo`)_
  3. **PhilHealth** — a separate page from HMOs, per the hard convention. Names the forms by code (`CF1`, `CF2`, Certificate of Contributions, Membership Registration Form for undeclared dependents). **No hardcoded peso amounts** — case rates are mid-migration to DRG; link to philhealth.gov.ph instead.
  4. **Rooms and rates** — the local taxonomy (`Ward · Semi-Private · Regular Private · Suite`), each with a photo plate, a **watcher's bed** note (a purchase criterion here that a foreign designer would never think to mention), an indicative daily rate `[[SAMPLE]]`, and the `as of` date. `[[OPEN DECISION — publish indicative room rates, or not? Chong Hua and Capitol both publish. ADH put pricing in its top nav. This is Dr. Bravo's and Harvey's call, and it carries a maintenance commitment.]]`
  5. **Billing and payment** — accepted methods, when the bill is prepared, discharge process
  6. **Visiting hours and what to bring** — hours per unit, ICU rules, one-watcher policy
  7. **Senior citizen and PWD discounts** — **BUILT OUT FULLY.** 20% + VAT exemption under RA 9994 / RA 10754; the correct computation order (_remove the 12% VAT first, then take 20% off the VAT-exclusive amount_) shown as a worked example with real arithmetic; the OSCA / PWD ID requirement; and the note that the purchase booklet is no longer required for the medicines discount (DOH AO 2024-0017, FDA Circular 2025-005). **No competitor in Antipolo mentions any of this. It is a free win and it is genuinely useful.**
  8. **Medical records and certificates** — **BUILT OUT FULLY** as a stub-breaker. Routine medical certificates for work or school, medico-legal certificates, and copies of records: the form, where the window is, its hours, the fee, and the turnaround `[[SAMPLE]]`. Nobody in Antipolo publishes this, it is 100% non-clinical, and it is a high-volume KRISS intent.

Plus, in the footer of the hub: `Patient Rights and Responsibilities →` · `Accessibility at UASHMC →` · `Privacy Notice →` · `How to raise a concern →`.

---

## 7.6 `#/contact` and `#/location`

Two routes, one shared page with two anchored halves, so nothing is ever a dead end from either direction.

**`#/contact` — Contact us**

- H1: `Contact us`
- **Channels table** — the most useful thing on the page, because it publishes _when each channel is answered_:

| Channel                 | Number / address                                                               | Answered                                      |
| ----------------------- | ------------------------------------------------------------------------------ | --------------------------------------------- |
| Emergency Room          | `(02) 8248 3460`                                                               | `24 hours` `[[VERIFY]]`                       |
| Trunkline               | `(02) 8248 3460`                                                               | `______` `[[SAMPLE]]`                         |
| SMS and Viber           | `+63 947 875 4949`                                                             | `______, we reply within ______` `[[SAMPLE]]` |
| Customer Relations      | `uashmc.customerrelations@gmail.com` `[[VERIFY — migrate to hospital domain]]` | `within ______ working days`                  |
| HMO desk                | `(02) 8248 3460 local ______`                                                  | `______` `[[SAMPLE]]`                         |
| Billing                 | `local ______`                                                                 | `______` `[[SAMPLE]]`                         |
| Laboratory results      | `local ______`                                                                 | `______` `[[SAMPLE]]`                         |
| Careers / HR            | `______`                                                                       | `______` `[[SAMPLE]]`                         |
| Data Protection Officer | `______`                                                                       | `______` `[[VERIFY]]`                         |

- Below it: `Prefer to ask a question first?` → `Ask UASHMC` (opens KRISS) and `Message us on Viber`.
- **No contact form in v1.** A form that collects health information needs a privacy notice, a lawful basis, a retention policy and an owner who reads the inbox. Until those exist, publishing phone and Viber is both more honest and more useful. `[[OPEN DECISION — enquiry form in Phase 1: yes or no, and who answers it?]]`

**`#/location` — Location and directions**
The homepage S12 content at full depth, plus: the static map plate at full width, the four-way accordion expanded, the ER-entrance vs main-entrance diagram plate, parking, PWD parking, drop-off, the jeepney/UV/LRT-2 block, and a **`Copy address`** button. The two map buttons (`Open in Waze`, `Open in Google Maps`) are the only external links on the page and both carry the external-link glyph.

**Content-check note attached to this page:** `Waze currently lists UASHMC at "625 Marikina-Infanta Hwy," which does not match the official "7 Marcos Highway, Barangay Mambugan." Correcting the Waze, Google Business Profile, NowServing and HealthSpace listings so the name, address and phone match exactly is a Phase 1 task. Inconsistent listings cost walk-ins today.` _Owner: Marketing + Iozera._

---

## 7.7 Supporting routes — must exist, kept minimal

| Route             | Content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `#/emergency`     | The most important interior page. Biggest type on the site, lowest reading level, tested one-handed. Order: **ER number, huge, tappable** → `Call 911 for an ambulance` → plain address with `Copy` → `Open in Waze` / `Open in Google Maps` → landmark approach from both directions → **which entrance, where to drop off** → `Come now, bring documents later` → the RA 10932 no-deposit statement → what happens when you arrive → **three NHS-pattern care cards** (Emergency / Urgent / Non-urgent) → non-emergency alternatives with the trunkline and Viber. **KRISS is suppressed on this page. No ER wait times — a stale wait time is a broken promise at the worst possible moment.** |
| `#/find-care`     | The concern router at full page: the chip set from S7 Block B, the routing answers, the emergency interception, the Medical Director sign-off line, and the escape hatch to a human.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `#/new`           | Two lists: `Recently added` (the three homepage cards, dated) and `Services we are working on` — one honest page, plain text, no individual pages, no "coming soon" badges.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `#/about`         | Story from S9 at full length, leadership with roles, `Excellence in Every Life We Touch` as the signature, and the licensing block (classification level, authorised services, a link out to the DOH facility registry) `[[VERIFY]]`.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `#/careers`       | One screen: `We are hiring`, three sample role rows, and how to apply. Not a dead end.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `#/privacy`       | Real headings for the full DPA §16 / IRR §34 content set — PIC identity, categories of data, purposes, recipients, retention, **existence of automated processing**, the full list of data subject rights, DPO contact, and the route to complain to the NPC — each with a one-line placeholder body and a `SAMPLE` chip. **Showing the correct skeleton with honest placeholders is itself the demonstration of competence** to Dr. Pedraja and Dr. Directo.                                                                                                                                                                                                                                     |
| `#/content-check` | §6.6.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

---

# 8. DEMO CHOREOGRAPHY

**Target: 14 minutes of driving, then hand over the pointer.** Everything below assumes the wifi is off, the file is local, and the browser is in full-screen with bookmarks hidden.

## 8.1 Pre-flight checklist (do this in the car park, not in the room)

- [ ] Wifi **off**. Load the file. Click every one of the eight task cards. Any 404 or blank page is a stop-ship.
- [ ] Fonts render as Source Serif / Source Sans with the network adapter disabled.
- [ ] `Reset demo` returns: route `#/`, Content check **ON**, view **Desktop**, filters cleared, KRISS closed, scroll top.
- [ ] Browser zoom at 100%. Display scaling set so 16px body text is readable from four metres.
- [ ] Bluetooth clicker paired, or don't use one.
- [ ] A **screen recording of the full click-path** on the desktop, playable from the same laptop, as insurance.
- [ ] A **PDF of eight key screens** on a USB stick, as insurance for the insurance.
- [ ] Phone hotspot ready but not needed — never depend on it.
- [ ] Battery above 60%, charger in the bag, sleep and notifications disabled.

## 8.2 The script

### Beat 0 — Before the laptop opens (60 seconds, no screen)

> _"Before I show you anything: I looked at every hospital website in Antipolo and Rizal, and at the big Manila hospitals. Six of the ten private hospitals in Antipolo have no website at all. The one on this same road, Metro Antipolo, is Metro Pacific-backed and its site is returning a server error on every page — I checked it three different ways this week. Antipolo Doctors is the one to beat, and it has no doctor search at all; its prices are pictures and a SharePoint spreadsheet. And not one hospital in the Philippines — not St. Luke's, not Makati Med, not The Medical City — has a working chat assistant on its own website. They all push you into Facebook Messenger and hope._
>
> _So this is not a project where you need to catch up. It is a project where you can be the best hospital website in the province in one build. What I am about to show you is a prototype we made to argue about, not a design to approve."_

### Beat 1 — The homepage, desktop, five-second test (90 seconds)

Open at `#/`, Content check **ON**, desktop.

Do not scroll. Let them read. Then:

> _"Five seconds. Emergency number at the very top of every page. 'Specialists you can reach today, on Marcos Highway.' And then eight things you can press. That is the whole strategy. We are not opening with a mission statement, because nobody arrives at a hospital website wanting a mission statement — they arrive wanting to know if you can help them and what to press."_

Scroll slowly to the task grid, stop.

> _"This is the load-bearing part of the page. Eight cards, and every one of them works. Emergency is styled differently so you can find it without reading."_

### Beat 2 — The Content Check reveal — **AHA #1** (2 minutes)

Point at the amber and violet chips.

> _"You will have noticed the markers. Here is the thing I most want you to see today."_

Click `Content check` → **OFF**. Let the page settle. Say nothing for three seconds.

> _"That is the design."_

Click it back **ON**.

> _"And that is what we still need from you. Every single thing on this page that we wrote ourselves is marked. We are not going to sit in your hospital and invent your licence level, your ER hours, or your prices."_

Click the `VERIFY` chip on the hero's "Emergency Room that does not close."

> _"Amber means we wrote it as an example. Violet means we think it's right but we've never seen it confirmed. Grey means a photo we need — and the note tells you which photograph and what size. Blue outline means a real decision that is still open, and those belong to Harvey and to Dr. Pedraja, not to us."_

Click the `OPEN DECISION` pin on the nav.

> _"For example: we put HMOs and PhilHealth in the top navigation. Nobody in the Philippines does that — St. Luke's buries it, Makati Med buries it, The Medical City doesn't even have a page. We think in Antipolo it is the number one question. But that is an argument, not a fact, and it is Harvey's to settle."_

**This is the beat that makes the rest of the meeting collaborative instead of a pitch.** Do not rush it.

### Beat 3 — Journey A: Find a Doctor (2 minutes)

Task card 1 → `#/doctors`.

> _"Antipolo Doctors Hospital has five hard-coded tabs and a static table — no search at all, no photos, no booking. This is what filterable looks like."_

Set Specialty = Cardiology. **Point at the greyed-out zero-count options.**

> _"Look at the filters. Every option shows how many results it will give you, and anything that would give you zero is switched off. You physically cannot filter your way to an empty page. That matters more for you than for St. Luke's, because you have a small roster — and a small roster is only a problem if it looks thin. Nine complete profiles beat forty with no photos."_

Open a doctor profile.

> _"Full weekly schedule with the room number. Credentials spelled out — and by the way, the PRC and PMA Code of Ethics specifically permits websites to publish credentials, training and hospital affiliations in a way it does not permit for signboards, because a patient has the right to know their doctor's qualifications. So a substantive directory is the more ethical choice here, not the riskier one."_

Point at the Doctor in the House plate.

> _"And this is already yours. You have produced doctor-fronted, hospital-approved video. That is the most expensive kind of content there is and it is already paid for. It goes on the doctor's page and on the matching service page."_

Point at `Book appointment`.

> _"Booking goes to NowServing, which you already use. We are not rebuilding booking. We are making your existing investment look deliberate."_

### Beat 4 — Journey B: the HMO checker — **AHA #2** (2 minutes)

Back to `#/`, scroll to the HMO checker. Type `Maxi`.

> _"Cardinal Santos lists forty-seven HMOs as a wall of text. Fatima has logos with no names. Marikina Valley says 'a wide network' and doesn't list any. Makati Med has the best content in the country and it repeats Medocare four times. And not one hospital anywhere has a way to just type your HMO and get an answer."_

Select Maxicare. Read the result.

> _"Notice the wording — 'we have an accreditation agreement with.' Not 'we accept.' Because whether you are actually covered depends on your plan, your doctor, your procedure and your LOA lead time, and a website that says 'yes we accept Maxicare' to somebody whose plan excludes the procedure has just created a family with an unexpected bill and a complaint. So it routes. It never adjudicates."_

Click through to `#/hmo`, point at the bilingual LOA steps.

> _"Antipolo Doctors does its LOA guide in English and Filipino. It is the smartest thing on any hospital website in this city and I want to take it and beat it. How bilingual we go is an open decision — that's the blue pin."_

### Beat 5 — Mobile — **AHA #3** (2 minutes)

Click `Mobile` in the prototype bar. The phone frame appears.

> _"Now — most of your traffic will not look like what I've just shown you. It will be somebody who tapped a link in Facebook, on a mid-range Android, on mobile data, one-handed, probably worried about somebody else."_

Scroll the phone frame slowly.

> _"Emergency number, still at the top. The eight cards, with Emergency promoted to the full width and put first. And the bar at the bottom: Call, Directions, Ask."_

Tap `Directions`.

> _"Directions are further up the page on the phone than on the desktop, on purpose — somebody on a phone is often already in the car. And look at how we wrote it: not a map embed, which would be the slowest thing on the page and would need the internet. Landmarks. 'Past Masinag junction, on the right, after \___.' Filipino wayfinding is landmark-based, and a designer working from an American template would give you a postal address and a Google Maps iframe."_

Navigate to `#/emergency` in the phone frame.

> _"And here is the page that has to work when somebody is panicking in a car on Marcos Highway. Biggest type on the site, simplest words on the site. Notice two things: the bottom bar has changed — 'Call ER' now takes two thirds of it. And the Ask button is gone. KRISS is switched off on this page entirely. Which brings me to the chatbot."_

### Beat 6 — KRISS AI — **AHA #4, the biggest** (3 minutes)

Switch to **Desktop**, go to `#/`. Point at the quiet launcher, bottom right.

> _"First, what it doesn't do. It does not pop open. It does not wave at you. It has no red dot, no sound, no 'Hi there!' bubble. The usability research on this is unambiguous — people describe auto-opening chat as an over-friendly stranger invading their personal space, and about fifty-five percent say they dismiss anything that interrupts them. For a hospital, quiet is a trust signal. We optimise how many people get an answer, never how many people we manage to open it on."_

Click the launcher. The pre-chat notice appears.

> _"It says what it is before you type. It's an AI, this is what gets logged, and here is how to reach a person instead. That is not us being cautious — NPC Advisory 2024-04 puts the accountability for an AI system on you as the Personal Information Controller, not on Iozera and not on the technology. We would rather you hear that from us, first, unprompted."_

Click `Continue`. Six suggested prompts appear. Click **`How much is a chest X-ray?`**

> _"We are leading the demo with money and logistics, not symptoms, and that is deliberate. This is the highest-volume, lowest-risk, entirely hospital-approvable question there is — and every answer carries a link back to the approved page it came from. Which means a wrong answer is traceable and fixable, instead of mysterious. That link is the difference between 'we have an AI on our website' and 'we have an AI that can only repeat what you approved.'"_

Click **`Do you accept Maxicare?`** — same routing answer, same four caveats.

Then type, deliberately, into the composer: **`my father has chest pain`**

The red interrupt card replaces everything.

> _"And that. It does not ask how bad it is. It does not ask how long. It does not ask if you're sure you want emergency information. It does not offer to book you an appointment. It stops, and it gives you a phone number and a door._
>
> _This is the part I want Dr. Pedraja to hold us to. KRISS AI at UASHMC does hospital-approved information and navigation. No diagnosis, no clinical advice, no triage. And that is not just good manners — it is what keeps this thing outside the FDA's software-as-a-medical-device perimeter. Add a symptom checker and you have created a classification question against your own licence. The guardrail protects the hospital, not just the patient._
>
> _Where it says 'reviewed by our Medical Director on \______' — that is a real, empty field. We want your name in it, and we want the red-flag log going to your desk."_

### Beat 7 — The close: the content list and the open decisions (2 minutes)

Prototype bar → `Content check (47 items)` → `#/content-check`.

> _"Last thing. Because everything was marked, the prototype has already written your content list. Forty-seven items, grouped by page, each with what we need and who we think should own it. Five of them block everything else — your DOH licence, your ER hours, the real HMO list, the domain and getting customer relations off Gmail, and one photograph of the building from Marcos Highway._
>
> _I can copy that as plain text and it is in your inbox before we leave this room. It is yours whether or not you work with us._
>
> _And there are six blue pins — six things we deliberately did not decide. Which door leads the service catalogue. Which three buttons earn that bottom bar. What the six opening questions should be, because Harvey already knows what people actually ask on Messenger and I don't. Whether we publish room rates. How bilingual we go. And who holds the publish button when a new service goes live._
>
> _Harvey — those are yours. Which one do you want to start with?"_

Hand over. Stop talking.

## 8.3 KRISS scripted answer set — exact strings for the build

**Standing disclaimer** (persistent in the chat frame footer, 12.5px, never dismissible, on every turn):

> `KRISS AI only shares information UASHMC has approved. It cannot diagnose, give medical advice, or decide how urgent your situation is. In an emergency, call 911 or go to the Emergency Room.`

**Pre-chat notice** (first open, per session):

> **`You are chatting with KRISS AI.`**
> `It is an automated assistant. It shares UASHMC information only — it is not a doctor and it cannot give medical advice. Your messages are logged so we can improve the answers, so please do not share medical details you would not want recorded.`
> `[ Continue ]   [ Talk to a person instead ]`

**Launcher label:** `Ask UASHMC`. **Panel header:** `Ask UASHMC` + subline `Doctors, services, HMOs, schedules and directions.`

**Six suggested prompts** (homepage context) — every one must be answerable; a suggested prompt that fails is a self-inflicted first impression of incompetence:

1. `Do you accept Maxicare?`
2. `How much is a chest X-ray?`
3. `What are the clinic hours for Pediatrics?`
4. `How do I get there from Marcos Highway?`
5. `Do you have online consultation?`
6. `How do I get a medical certificate?`

`[[OPEN DECISION — this prompt set. Harvey knows what people actually ask on Messenger today; that is primary research we do not have and it is the fastest quality win available.]]`

**Answer format for all six:** two to five short sentences · plain language · at most one action button · a green **source chip** at the foot reading `From: [page name] →` which navigates the prototype to that page · a `SAMPLE` or `VERIFY` marker inline on any unconfirmed fact.

**Answer 1 — Maxicare:**

> `We have an accreditation agreement with Maxicare.` `[SAMPLE]`
> `Before you come, please check three things with Maxicare: that your plan covers what you need, that your chosen doctor is on their accredited list, and whether your procedure needs a Letter of Authorization.`
> `For a planned procedure, ask for the LOA as soon as your doctor recommends it — HMOs usually take 1 to 5 working days. In an emergency, come in. Do not wait for an LOA.`
> `Our HMO desk can help: (02) 8248 3460.`
> `From: HMOs and insurance →`

**Answer 2 — chest X-ray:**

> `A chest X-ray is ₱______ to ₱______.` `[SAMPLE]` `That covers the film and the radiologist's reading.`
> `Senior citizens and persons with disability get 20% off and are VAT-exempt — bring your OSCA senior citizen ID or PWD ID.`
> `Prices as of ______.` `[SAMPLE]`
> `From: X-ray and diagnostic imaging →`

**Answer 3 — Pediatrics hours:** clinic days, two named sample doctors, and `Schedules can change, so please confirm when you book.` `[SAMPLE]`

**Answer 4 — directions:** address, landmark direction from both approaches, `[ Open in Waze ] [ Open in Google Maps ]`, `From: Location and directions →`

**Answer 5 — online consultation:** `Yes, we run online consultations.` `[VERIFY]` + how to book (Viber `+63 947 875 4949` / trunkline) + a Doctor in the House pointer.

**Answer 6 — medical certificate:** the four steps, where the window is, its hours, the fee, the turnaround. All `[SAMPLE]`. `From: Medical records and certificates →`

**Red-flag interrupt** — triggers on a fixed keyword list (`chest pain, chest pressure, can't breathe, hindi makahinga, difficulty breathing, bleeding, dugo, unconscious, hindi magising, seizure, kombulsyon, stroke, slurred, numb one side, severe headache, head injury, broken bone, deformity, suicide, ayaw nang mabuhay, labor pains, contractions`). On a hit the answer is **replaced**, never appended:

> **Immediate action required**
>
> ### Call 911 or go to the Emergency Room now if someone:
>
> `— has chest pain, pressure or tightness`
> `— is having trouble breathing`
> `— is bleeding heavily and it will not stop`
> `— will not wake up, or is having a seizure`
> `— suddenly goes weak on one side, or their speech becomes slurred`
> `[ Call 911 ]  [ Call UASHMC — (02) 8248 3460 ]  [ Directions ]`
> `Come in first. Under Republic Act 10932 we cannot ask you for a deposit before giving basic emergency care.`
>
> `I cannot help with symptoms or advise on treatment. Please call, or come in.`

**No confirmation gate** ("Are you sure this is an emergency?"), **no follow-up question**, **no severity assessment**, **no appointment offer**. Any further symptom text re-shows the identical card.

**Human handoff:** a `Talk to a person` link is persistently visible in the chat header, never hidden behind a failure counter. After **two** unresolved turns, KRISS offers it unprompted: `Let me connect you with our team — trunkline (02) 8248 3460, or Viber +63 947 875 4949, answered ______.` "I want to talk to a person" is treated as an instruction, executed immediately, never answered as a query.

## 8.4 Failure modes — the do-not-happen list

| Risk                                                                                        | Mitigation, built in                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A dead link during the demo                                                                 | **No `href="#"` anywhere.** Every route renders. Pre-flight clicks all eight cards.                                                                                                                                     |
| Anything loading from the network                                                           | Zero external requests. Fonts base64-embedded, icons inline SVG, map a static SVG, no live map, no CDN, no analytics, no Google Fonts link relied upon.                                                                 |
| An empty filter result on screen                                                            | Zero-count options disabled. The fallback ladder exists but must never be reached accidentally.                                                                                                                         |
| Heavy 3D / WebGL / video stalling                                                           | None in the build. kriss.ai's own WebGL site stalls at 0% — do not open it live, and if it must be referenced, use a recording.                                                                                         |
| A page that looks unfinished in the _wrong_ way                                             | Every incompleteness is deliberately marked. Nothing is silently blank. A `SAMPLE` chip reads as discipline; a blank box reads as an unfinished job.                                                                    |
| Video autoplaying on a projector                                                            | No embedded video. Poster plate only.                                                                                                                                                                                   |
| Layout jump when toggling Content check                                                     | Chips absolutely positioned; dashed borders on pre-reserved space. Verify visually before the meeting.                                                                                                                  |
| Someone finds kriss.ai's public $199/month dental pricing on their phone mid-meeting        | Do not anchor on the product page. Present KRISS as a configured hospital deployment with a written guardrail spec, and be ready with hospital commercial framing. **Settle this internally before the onsite.**        |
| Someone opens kriss.ai and sees an answer recommending ibuprofen                            | Get ahead of it in Beat 6 — present the no-clinical-advice constraint as _our deliberate configuration decision for UASHMC_, with the guardrail spec as a written artifact, not as an inherent property of the product. |
| Someone Googles iozera.ai and finds a placeholder New York address and a "Hello world" blog | Either fix `/contact/` and purge the demo posts **before** the onsite, or decide never to reference iozera.ai and lead entirely with this prototype as the craft proof. **Decide before you drive there.**              |
| Second showing to a different audience is stale                                             | `Reset demo` restores the exact opening state in one click.                                                                                                                                                             |
| Battery / display / projector                                                               | Pre-flight checklist, §8.1.                                                                                                                                                                                             |

## 8.5 Acceptance criteria for the prototype

- Loads and fully functions with the network adapter **disabled**.
- Single `.html` file, **under 2.5 MB**, no external requests of any kind.
- Every one of the eight task cards, every nav item, every footer link, and every in-page CTA resolves to a rendered route. **Zero dead links.**
- Desktop/mobile toggle works in a desktop window **and** the same file adapts on a real phone via the shared link.
- Content check toggles instantly with **no layout shift**, and the counter is accurate.
- Every flagged item has a populated popover with a `What we need` and a `Suggested owner`.
- `#/content-check` lists every marker in the build, and `Copy list as text` works.
- All six KRISS suggested prompts return a correct scripted answer with a working source chip.
- The red-flag interrupt fires on every keyword in the list and never appends to a previous answer.
- KRISS is absent from `#/emergency`, and the bottom bar changes shape there.
- No horizontal scroll at 320px. All interactive targets ≥ 48×48 in mobile view. Keyboard-operable throughout, with a visible focus ring on every control. Body text passes 4.5:1 everywhere.
- A first-time viewer, given no instruction, finds a cardiologist's clinic day in under 60 seconds.

---

## Appendix — Hash route manifest

```
#/                        Homepage
#/doctors                 Find a Doctor (browse-first, filterable)
#/doctors/{slug}          Doctor profile      [1 built: reyes-maria]
#/services                Services (3 doors)
#/services/{slug}         Service detail      [2 built: laparoscopic-cholecystectomy, chest-x-ray]
#/find-care               Concern router (symptom-to-specialty, curated)
#/hmo                     HMO Partners + checker + LOA steps
#/patient-info            Patient Information hub (8 topics)
#/patient-info/{topic}    [3 built: philhealth, senior-pwd, medical-records]
#/emergency               Emergency Information  (KRISS suppressed)
#/location                Location and directions
#/contact                 Contact us
#/about                   About UASHMC + leadership + licensing
#/new                     New at UASHMC / services we are working on
#/careers                 Careers (one screen)
#/privacy                 Privacy Notice (correct skeleton, placeholder bodies)
#/content-check           The content to-do list
```

Unknown hash → render the homepage with a small dismissible notice: `That page is not in this prototype yet. Here is the homepage.` **Never a 404 screen.**
