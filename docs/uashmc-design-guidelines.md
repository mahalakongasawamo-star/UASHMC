# UASHMC Design Guidelines

Implementation-ready, token-driven UI guidance for the **United Antipolo Specialists Hospital and
Medical Center** website.

**Status:** v0.1, derived from the approved concept prototype. Written to be handed to whoever
builds the production site, and to be attached to the SOW as the definition of "done" for UI work.

> **Design intent, in one sentence:** a calm, fast, mobile-first public website that gets an
> anxious visitor to the right doctor, desk or phone number in as few taps as possible, and never
> states anything the hospital has not confirmed.

---

## 1. Context and goals

|                  |                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product**      | uashmc.com.ph — the hospital's public website                                                                                                                                                                                       |
| **Surface**      | Public marketing and wayfinding site. Responsive, mobile-first. Not an authenticated app.                                                                                                                                           |
| **Audience**     | Patients and families in Antipolo and the Rizal corridor. Mostly first-time, mostly anonymous, frequently on a phone, frequently stressed. Bilingual English/Tagalog, Taglish in practice. A meaningful share are seniors and PWDs. |
| **Primary jobs** | Reach the ER · find a doctor and their clinic day · check whether an HMO is accredited · learn what to bring for admission · get directions · reach a human                                                                         |
| **Non-goals**    | Patient portals, clinical records, billing transactions, anything authenticated. Those are separate products with separate rules.                                                                                                   |

Three constraints shape every decision below and outrank visual preference:

1. **Nothing may be stated as fact unless UASHMC has confirmed it.** Every content element carries
   a provenance state (§2.7). This is a trust requirement, not a build convenience.
2. **The emergency path must never be more than one tap away**, on every page, at every breakpoint.
3. **The AI assistant must refuse rather than guess.** See §4.10.

### Audience implications that override generic dashboard practice

- Optimise for **first-visit comprehension**, not for repeat-user efficiency. No hidden affordances,
  no gesture-only actions, no icon-only controls without a text label.
- Assume **one-handed phone use on a slow connection**. Interactive targets should be generous well
  beyond the accessibility minimum; the page must be readable before webfonts arrive.
- Assume **presbyopia**. 16px is the floor for body copy, not the ceiling.

---

## 2. Design tokens and foundations

Tokens are the contract. Component guidance below refers to token names only; **implementations
must not use raw hex, px or ms values in component code.**

### 2.1 Colour — brand

The brand ramp is sampled from UASHMC's own artwork, not chosen. `brand.700` and `brand.500` are
pixel-exact from the logo in `images/logo.jpg`; `brand.400` and `brand.100` are the cyan and
pale-panel blues their printed collateral uses.

| Token             | Value     | Role                                                                    |
| ----------------- | --------- | ----------------------------------------------------------------------- |
| `color.brand.900` | `#01305A` | Deepest navy. Footer ground, dark hero ground.                          |
| `color.brand.700` | `#01487C` | **Logo navy.** Primary action, headings, active nav.                    |
| `color.brand.600` | `#0A6FA0` | Mid blue. Cyan-family text on light grounds where `500` fails contrast. |
| `color.brand.500` | `#0AADD0` | **Logo cyan.** Fills, icon discs, accents on dark. Never small text.    |
| `color.brand.400` | `#5AC0E4` | Lighter cyan panel.                                                     |
| `color.brand.100` | `#D2F0FC` | Pale panel blue. Section bands, pills.                                  |
| `color.brand.50`  | `#E7F6FD` | Faintest tint. Hover grounds, inset panels.                             |
| `color.accent`    | `#D2A80C` | Collateral gold. Rule under headings only.                              |

UASHMC is a **navy _and_ cyan brand, not a navy one.** Measured across their collateral the split
within the blue band is roughly 40 / 60 navy-to-cyan. Cyan must appear in resting states — panels,
icon fills, the second phrase of a two-tone headline — not only on hover.

Their graphics contain **no green**. Green is reserved for status meaning only (§2.3, §2.7).

### 2.1a Colour — the warm ramp

Navy, cyan and white alone read cold and clinical. UASHMC's own maternity poster
(`images/banner logo.jpg`) sets _"Quality Care for you!"_ in a dusty-rose script beside the navy:
**this is the one warm hue the brand already owns**, and it is what stops a hospital site reading
as a laboratory. The sands are its neutral companion — the warm counterpart to `brand.100`, so
alternating sections can breathe warm as well as cool.

| Token            | Value     | Role                                                                                  |
| ---------------- | --------- | ------------------------------------------------------------------------------------- |
| `color.rose.700` | `#A8446A` | **Text-safe rose.** Eyebrows, the warm phrase of a two-tone headline. 5.2:1 on white. |
| `color.rose.600` | `#C05B7D` | Icon strokes on light grounds.                                                        |
| `color.rose.500` | `#D87898` | **Poster rose.** Fills and washes only — 3.0:1 on white, so never small text.         |
| `color.rose.100` | `#FBE3EB` | Tick discs, chips, photo mattes.                                                      |
| `color.rose.50`  | `#FDF2F6` | Warm bloom in a section gradient.                                                     |
| `color.sand.100` | `#F6EBDA` | Warm band border.                                                                     |
| `color.sand.50`  | `#FBF5EC` | **Warm section ground.** The counterpart to `brand.100`.                              |

**Rules**

- Rose follows the same discipline as cyan: `500` is a fill, `700` is the text step. Small rose
  text takes `700`, never `500`.
- `color.text.muted` clears AA on `sand.50` (5.3:1), so the muted floor holds on warm bands too.
- **No more than two cool section bands in a row.** A page that alternates only white and
  `brand.100` is the cold, clinical result this ramp exists to prevent. Alternate
  `sec` / `sec.warm` / `sec.alt` so the temperature moves down the page.
- Rose never carries status meaning. Status is `urgent`, `care` and the provenance hues only.

### 2.2 Colour — neutrals and surfaces

| Token                  | Value     | Role                                                                                 |
| ---------------------- | --------- | ------------------------------------------------------------------------------------ |
| `color.surface.page`   | `#FBFAF8` | Warm paper. Default page ground.                                                     |
| `color.surface.raised` | `#FFFFFF` | Cards, sheets, header.                                                               |
| `color.surface.sunken` | `#F2F7FA` | Inset wells, table stripes.                                                          |
| `color.text.primary`   | `#062B46` | Headings.                                                                            |
| `color.text.body`      | `#173F5C` | Body copy.                                                                           |
| `color.text.muted`     | `#4E6981` | Secondary copy. **Floor for text on `brand.100`** — anything lighter fails AA there. |
| `color.text.faint`     | `#8DA3B6` | Non-essential metadata only. Never load-bearing.                                     |
| `color.border.default` | `#D9E2EA` | Card and input borders.                                                              |
| `color.border.soft`    | `#E9EFF4` | Internal dividers.                                                                   |

### 2.3 Colour — semantic status

| Token               | Value     | Role                                                                                    |
| ------------------- | --------- | --------------------------------------------------------------------------------------- |
| `color.urgent`      | `#C0271A` | Emergency actions and the ER strip. **Reserved.** Never decorative.                     |
| `color.urgent.ink`  | `#7A1710` | Urgent text on tint.                                                                    |
| `color.urgent.tint` | `#FDF0EE` | Urgent ground.                                                                          |
| `color.care.700`    | `#027F61` | Logo cross green. Positive status only — accreditation confirmed, assistant calm state. |
| `color.care.500`    | `#049E79` | —                                                                                       |
| `color.care.tint`   | `#E4F4EF` | —                                                                                       |

**Rule:** `color.urgent` must be used only for genuine emergency affordances. A red "Book now"
button on a hospital site is an anti-pattern (§6).

### 2.4 Colour — provenance layer

Unique to this project. These are **not** decorative and must not be reused for anything else.

| Token                       | Value     | Meaning                                           |
| --------------------------- | --------- | ------------------------------------------------- |
| `color.provenance.verified` | `#167355` | Sourced from UASHMC's own public channels         |
| `color.provenance.confirm`  | `#B45309` | Plausible — UASHMC must confirm                   |
| `color.provenance.sample`   | `#6D5BA8` | Agency placeholder — needs the hospital's content |

### 2.5 Typography

Two families, both already licensed via Google Fonts and both required to degrade to a declared
fallback stack offline.

| Token                 | Value                                                                               |
| --------------------- | ----------------------------------------------------------------------------------- |
| `font.family.display` | `"Source Serif 4", Georgia, "Times New Roman", serif`                               |
| `font.family.ui`      | `"Be Vietnam Pro", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` |

Display serif carries headlines and the tagline. UI sans carries everything else.

**Target scale.** A 1.125 minor-second ramp at small sizes, opening to 1.25 for display. Fluid
steps use `clamp()` against the container, not the viewport.

| Token            | Size                        | Line height | Use                                                            |
| ---------------- | --------------------------- | ----------- | -------------------------------------------------------------- |
| `font.size.2xs`  | `11px`                      | `16px`      | Eyebrow labels, legal microcopy. Uppercase, tracked `+0.08em`. |
| `font.size.xs`   | `12px`                      | `18px`      | Metadata, captions.                                            |
| `font.size.sm`   | `13px`                      | `20px`      | Dense UI, table cells, nav.                                    |
| `font.size.md`   | `14px`                      | `21px`      | Secondary body.                                                |
| `font.size.base` | `16px`                      | `26px`      | **Body copy floor.**                                           |
| `font.size.lg`   | `18px`                      | `28px`      | Lead paragraphs.                                               |
| `font.size.xl`   | `21px`                      | `28px`      | Card and section sub-headings.                                 |
| `font.size.2xl`  | `clamp(22px, 2.9cqi, 30px)` | `1.2`       | Section headings.                                              |
| `font.size.3xl`  | `clamp(30px, 4.6cqi, 45px)` | `1.08`      | Page hero.                                                     |
| `font.size.4xl`  | `clamp(30px, 5cqi, 50px)`   | `1.05`      | Story hero.                                                    |

> **Migration note.** The concept prototype currently uses **20 distinct font sizes**, including
> pairs 0.1px apart (`12.5`/`12.6`, `13.5`/`13.6`). That drift is a prototype artefact from fitting
> a specific layout and **must not be carried into production.** Map each existing value to the
> nearest token above; where a mapping visibly breaks a layout, fix the layout, not the scale.

Two-tone headlines are a UASHMC device: first phrase in `text.primary`, second in `brand.600` on
light grounds or `brand.500` on dark. Use at most once per view.

### 2.6 Spacing, radius, elevation, motion

A strict 4px grid. **No value off this scale may be introduced.**

| Token     | Value  |     | Token      | Value  |
| --------- | ------ | --- | ---------- | ------ |
| `space.1` | `4px`  |     | `space.6`  | `24px` |
| `space.2` | `8px`  |     | `space.7`  | `32px` |
| `space.3` | `12px` |     | `space.8`  | `40px` |
| `space.4` | `16px` |     | `space.9`  | `56px` |
| `space.5` | `20px` |     | `space.10` | `80px` |

| Token         | Value   | Use                           |
| ------------- | ------- | ----------------------------- |
| `radius.sm`   | `6px`   | Inputs, small chips           |
| `radius.md`   | `10px`  | Cards, buttons                |
| `radius.lg`   | `16px`  | Panels                        |
| `radius.xl`   | `24px`  | Sheets, the assistant panel   |
| `radius.pill` | `999px` | Pills, the assistant launcher |

| Token         | Value                                                         |
| ------------- | ------------------------------------------------------------- |
| `elevation.1` | `0 1px 2px rgba(8,42,56,.06), 0 1px 3px rgba(8,42,56,.05)`    |
| `elevation.2` | `0 4px 12px rgba(8,42,56,.08), 0 1px 3px rgba(8,42,56,.06)`   |
| `elevation.3` | `0 18px 44px rgba(8,42,56,.18), 0 4px 12px rgba(8,42,56,.10)` |

| Token         | Value                      | Use                            |
| ------------- | -------------------------- | ------------------------------ |
| `motion.fast` | `120ms`                    | Colour and border changes      |
| `motion.base` | `180ms`                    | Hover, focus, small transforms |
| `motion.slow` | `280ms`                    | Panels, sheets, disclosure     |
| `motion.ease` | `cubic-bezier(.2,.6,.2,1)` | Default easing                 |

> **Migration note.** The prototype uses four near-identical durations (`.14s`, `.15s`, `.16s`,
> `.18s`). Collapse all four to `motion.base`.

**Every motion token must resolve to `0ms` under `prefers-reduced-motion: reduce`.** Parallax,
auto-scroll and typing indicators must be disabled outright, not merely shortened.

### 2.7 Provenance states

Every content element that asserts something about the hospital **must** carry a provenance state:
`verified`, `confirm`, or `sample`. Untagged content is a build defect — the content-source overlay
counts tagged nodes and reports the total to the client.

- `verified` means the claim is recorded in `research/verified-facts.md` **with a source**, or has
  been confirmed in writing by UASHMC. Nothing else qualifies.
- The overlay tint must be applied with `background-color`, never the `background` shorthand — the
  shorthand erases background images and silently blanks logos and photographs.
- Opaque media (photographs) cannot show a background tint. They **must** take an overlay element
  instead.

---

## 3. Layout foundations

| Token                   | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| `layout.content.max`    | `1080px`                                                |
| `layout.gutter.desktop` | `space.8` (`40px`, currently 34px — align on migration) |
| `layout.gutter.mobile`  | `space.5` (`20px`)                                      |

**Breakpoints** are container queries, not viewport media queries, so components stay correct
inside any shell:

| Token   | Width      | Behaviour                                               |
| ------- | ---------- | ------------------------------------------------------- |
| `bp.sm` | `≤ 520px`  | Single column. Sticky action bar appears.               |
| `bp.md` | `≤ 820px`  | Two columns collapse to one. Nav collapses to a menu.   |
| `bp.lg` | `≤ 1040px` | Secondary lockup lines and optional nav items may drop. |

**Header budget.** At `layout.content.max` the header content box is **1012px**. Brand lockup + nav

- primary CTA must fit inside it with slack. The nav flex-shrinks silently when it overflows, so a
  broken header looks fine to the eye — this must be asserted by measurement in CI, not reviewed
  visually.

---

## 4. Component rules

Every component **must** define all seven states: `default`, `hover`, `focus-visible`, `active`,
`disabled`, `loading`, `error`. Where a state is genuinely not applicable, the component
documentation **must** say so explicitly rather than omit it.

Universal rules:

- **Focus.** `:focus-visible` renders a `2.5px` solid `brand.500` outline at `2px` offset. It must
  never be removed, and must remain visible against every ground the component sits on. On
  `brand.500` or darker grounds, switch the outline to `#FFFFFF`.
- **Target size.** Every interactive control **must** be at least `24 × 24px` (WCAG 2.2 §2.5.8).
  Inline links within a text paragraph are exempt. Primary actions **should** be at least `44px`
  tall on touch.
- **Pointer + touch.** Hover styling **must** be wrapped in `@media (hover: hover)` so it does not
  stick on touch. Every action must be reachable without hover.
- **Keyboard.** Tab order follows DOM order. No positive `tabindex`. No keyboard trap.
- **Loading.** Controls that trigger async work must set `aria-busy="true"`, retain their label
  (never collapse to a bare spinner), and preserve their width to prevent layout shift.
- **Disabled.** Use `disabled` on real controls; `aria-disabled` on links. Contrast may drop below
  AA for genuinely disabled controls, but the reason **must** be visible in adjacent text.

### 4.1 Button

**Anatomy:** `[optional leading icon] label [optional trailing icon]`. Icon is decorative
(`aria-hidden`); the label is the accessible name. Icon-only buttons **must** carry `aria-label`.

**Variants**

| Variant   | Ground                        | Label       | Use                                |
| --------- | ----------------------------- | ----------- | ---------------------------------- |
| `primary` | `brand.700`                   | `#FFFFFF`   | The single main action in a view   |
| `ghost`   | transparent, `border.default` | `text.body` | Secondary actions                  |
| `urgent`  | `urgent`                      | `#FFFFFF`   | Emergency only — call ER, call 911 |
| `care`    | `care.700`                    | `#FFFFFF`   | Positive confirmation only         |
| `sm`      | modifier                      | —           | Dense contexts; still `≥24px` tall |

**States**

| State         | Rule                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| default       | `radius.md`, `space.3` × `space.5` padding, `font.size.sm`, weight 600               |
| hover         | Ground darkens one ramp step. `motion.base`. `@media (hover: hover)` only.           |
| focus-visible | Universal focus ring. Must be visible on `primary` — use the white outline.          |
| active        | Ground darkens two steps, `transform: translateY(1px)`                               |
| disabled      | 45% opacity, `cursor: not-allowed`, no hover, still focusable if it explains itself  |
| loading       | `aria-busy="true"`, label retained, leading icon swapped for a spinner, width locked |
| error         | Buttons do not own error state. The **form** owns it (§4.4).                         |

**Edge cases.** Labels must not wrap to three lines — if a label needs that, it is a link, not a
button. Long labels truncate at the container with a full-text `title`. On `bp.sm`, primary and
urgent buttons go full-width and stack with `space.3`.

### 4.2 Card

**Anatomy:** `[media or icon] · heading · supporting copy · [metadata] · [action]`.

**Variants:** `static`, `linked` (whole card is one link), `specialty`, `doctor`, `channel`.

**States.** `linked` cards: hover raises to `elevation.2` and borders in `brand.500`;
`focus-visible` puts the ring on the **card**, not the inner heading; active drops to `elevation.1`.
Static cards have no hover, focus, or active state — and must not simulate them.

**Rules**

- A linked card **must** contain exactly one link. Nested interactive elements inside a linked card
  are prohibited — split into a static card with explicit actions instead.
- Icon discs use `brand.500` ground with a `brand.700` glyph. White on `brand.500` measures 2.66:1
  and **must not** be used.
- **Long content:** headings wrap to two lines then ellipsis; body clamps to three lines. Cards in a
  grid **must** equalise height via the grid, never a fixed pixel height.
- **Empty state:** a card grid that would render zero cards must render an explanatory panel
  instead. See §4.5.

### 4.3 Navigation

**Anatomy:** brand lockup · primary nav · primary CTA. Collapses to lockup · menu button at `bp.md`.

**States.** Nav links: hover tints to `brand.50`; `focus-visible` ring; current page uses
`aria-current="page"` with weight 600 and a `brand.50` ground. **Colour alone must not indicate the
current page.**

**Rules**

- The menu button **must** carry `aria-expanded` and `aria-controls`.
- Open menu: focus moves to the first item; `Escape` closes and returns focus to the button.
- A skip link to `#main` **must** be the first focusable element on the page.
- The emergency number lives in a utility strip above the header and **must** be present on every
  page at every breakpoint. It is not a nav item and must not be collapsed into the menu.

### 4.4 Input, select and form

**Anatomy:** visible label · [hint] · control · [error message]. Placeholder is never the label.

**States**

| State    | Rule                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------- |
| default  | `radius.sm`, `border.default`, `font.size.base` (16px — prevents iOS zoom on focus)                                 |
| hover    | Border to `text.faint`                                                                                              |
| focus    | Border `brand.500` + the focus ring; ground lifts to `surface.raised`                                               |
| disabled | `surface.sunken` ground, 45% opacity label                                                                          |
| loading  | `aria-busy` on the field group; control remains readable, not blanked                                               |
| error    | Border `urgent`, message below in `urgent.ink` with a leading icon, `aria-describedby` wired, `aria-invalid="true"` |

**Rules**

- Error messages **must** say how to fix the problem, not merely that it exists.
- Validation fires on blur and on submit, never on every keystroke.
- Search inputs **must** be `type="search"` with a visible label or an `aria-label`.
- Required fields are marked in the label text, not by colour or an asterisk alone.

### 4.5 Result list and empty state

Covers Find-a-Doctor, Find-a-Service, and the HMO checker.

**Rules**

- Result counts **must** be announced in an `aria-live="polite"` region.
- A scrollable results container **must** be keyboard-reachable — `tabindex="0"` with
  `role="region"` and a label.
- **No filter combination may return a bare empty state.** The system falls back to the broadest
  useful set — typically the full specialty — and says what it did.
- Empty states **must** offer a way forward: a phone number, a broader filter, or the assistant.
  "No results" alone is prohibited.
- Long rosters paginate or lazy-load; they **must not** infinite-scroll, which strands the footer
  and the contact details behind it.

### 4.6 The HMO checker

The single highest-intent component on the site. Specific rules apply because the answer has
financial consequences for the patient.

- A match **must** be phrased as _"we are partnered with them"_, never _"you are covered"_. UASHMC's
  own published wording is "partnered with", not "accredited" — see §9. Say only what the source
  says; strengthen to "accreditation agreement" only once the hospital confirms that is the correct
  term for each one.
- Every result **must** carry the standing caveat that plan tier, doctor and procedure can change
  the outcome, and that only the HMO can confirm what they will pay.
- Every result **must** offer a route to a human at the billing desk.
- Partner entries **must** show the date the list was published. An entry with no date must render
  as `confirm` provenance, not `verified`.

### 4.7 Accordion (FAQ)

**Anatomy:** group heading · list of `<h3><button>` triggers, each controlling a
`<div role="region">` panel labelled by its trigger.

**States**

| State                      | Rule                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| default                    | Trigger in `text.primary`, `font.size.base`, weight 600; chevron in `brand.600`                                        |
| hover                      | Row ground `brand.50`, inside `@media (hover: hover)`                                                                  |
| focus-visible              | Universal focus ring, never removed                                                                                    |
| active                     | Ground `brand.100`                                                                                                     |
| expanded                   | `aria-expanded="true"`, chevron rotates 180° over `motion.base`, panel unhidden                                        |
| disabled / loading / error | **Not applicable.** The content is a static array with no async fetch and no failure mode. Stated rather than omitted. |

**Rules**

- One real `<button>` per question, inside a heading element — never a `div` with a click handler.
  Enter and Space then come from the platform for free.
- `aria-expanded` on the trigger, `aria-controls` pointing at the panel id, `aria-labelledby` back.
- **Several panels may be open at once.** Do not auto-close siblings.
- Deep-linkable as `#/faq#q-<slug>`: opens the question, marks it, scrolls to it and focuses the
  trigger. The router **must** split on the second `#` or the deep link silently falls back to home.
- Ids **must** be namespaced per render target. The same question appears on `/faq` and in an inline
  block; duplicate ids send `getElementById` to a copy inside a hidden route, which cannot take focus.
- **Long content:** no truncation, no "read more". Answers are short by construction.
- **Empty state:** a group that filters to zero renders nothing at all, heading included.

### 4.8 FAQ content — one source, three surfaces

The `FAQ` array is the single source behind the `/faq` page, the inline mini-FAQ blocks, and the
assistant's knowledge base. **No FAQ answer may be authored in HTML.**

- Entries feeding the assistant enter at `pri` 3 or higher, enforced by a guard that clamps and
  logs anything lower. They must never outrank distress screening, the emergency lexicon, or the
  refusal to diagnose (§4.9).
- Any answer quoting a peso figure carries a `checked` stamp naming the month UASHMC published it.
  Prices are safe to show as a proposal and unsafe to publish unconfirmed.
- FAQPage JSON-LD is generated from the same array, restricted to entries that are `verified` **and**
  contain no placeholder span. Google narrowed FAQ rich results to authoritative government and
  health sites in 2023; treat the rich result as a bonus, not the reason to ship it.
- The FAQ is **not** a top-nav item. The header has ~16px of slack at `layout.content.max`; a
  seventh item breaks it. Reach it from the footer, the assistant panel, and the inline blocks.

### 4.9 Provenance overlay

A demonstration and QA affordance, not a patient-facing feature.

- Tints apply `background-color` only (§2.7).
- Opaque media takes an overlay element plus a dashed `provenance.sample` outline.
- The counter reports only elements that are actually visible, so it must exclude hidden routes and
  the inactive homepage direction.

### 4.10 The assistant (KRISS AI)

The safety model is the product. It is not a styling concern and **must not** be relaxed for visual
or conversational polish.

- **Distress screening runs before everything else**, ahead of the general emergency lexicon, and
  routes to the national crisis line — never to the hospital's ER, whose psychiatric intake
  capability is unconfirmed. The matching pattern is deliberately over-inclusive; a false positive
  costs a moment of alarm, a false negative costs more. **It must not be narrowed.**
- Priority order is fixed: distress → emergency → refusal-to-diagnose → topics.
- The assistant **must not** diagnose, quote a price, or state an unconfirmed opening hour.
- Unmatched questions **must** hand off to a human and say the question was logged. Fabricating a
  plausible answer is the single worst failure this system can produce.
- A standing, non-dismissible disclaimer states that it is an AI, cannot give medical advice, and
  that chats are logged.
- Tagalog and Taglish inputs are first-class, not a fallback.
- **Accessibility:** the panel is a labelled dialog; the transcript is `aria-live="polite"`; focus
  moves in on open and returns to the launcher on close; `Escape` closes; the typing indicator is
  suppressed under reduced motion.

### 4.11 Media and hero

- Decorative imagery is `aria-hidden` with an empty `alt`.
- Any photograph not supplied by UASHMC **must** be tagged `sample` and **must** carry a visible
  on-image label saying so. A stock or generated building photograph presented as the hospital is a
  fabrication, and is prohibited (§6).
- Parallax and other scroll effects **must** disable fully under reduced motion, and **must not**
  be the only way any content is revealed.
- Text over imagery **must** be measured against the rendered pixels, not assumed from the scrim.
  Automated checkers return _incomplete_, not _fail_, for text over a gradient or an image — those
  ratios are computed by hand or they are not computed at all.

**Full-bleed or contained is decided by the source, not by taste.** Measure the asset before
choosing the layout. A hero photograph must be **at least 2× the artboard width** and land within
about 20% of the hero's aspect ratio to go full-bleed; anything else is contained in a panel, where
it renders near 1:1 and keeps its subject. UASHMC's own building photography is portrait and
low-resolution, so the hero is a **split** — copy on a warm ground, building in a bordered panel.
Blowing a 500px-wide portrait across a 1180px hero is a 2.3× upscale of a 44% vertical slice: it
looks cheap in the room _and_ crops off the crown and the entrance, which are the only two things
that let a driver recognise the place from the highway.

**Scrims.** If a hero does go full-bleed, a scrim heavy enough to guarantee white text also throws
away the daylight in the photograph, and a dark full-bleed hero is what makes an institution read
as an institution. Prefer the inverse: a **warm paper veil** feathered across the copy column,
brand-navy text on it, and the far side of the frame left bright. Ground the veil in `#FCFAF6`, not
white — a neutral veil over a warm photograph goes grey. A contained panel needs no scrim at all,
which is one more reason to prefer it.

**Parallax inside a panel costs subject.** A contained plate parallaxes by being oversized inside
its frame's `overflow: hidden`, so the overhang _is_ the travel budget — and every percent of
overhang is a percent of the photograph the frame never shows. Keep the overhang under 10% and the
travel well under the overhang, or the frame edge shows through on scroll. If the subject cannot
afford the crop, drop the parallax rather than the subject.

**Maps: the prototype draws, production embeds.** These are two different problems and the
answer differs. The prototype must open offline from a laptop, so its locator map is inline SVG
generated from OpenStreetMap geometry — accurate, ~35KB of text, nothing fetched. The production
site is served over the network and should embed a real interactive map, because a patient wants
to pan, zoom and hand off to navigation. Two rules survive the switch:

- **Deep links carry coordinates, not a name.** `?ll=14.6250262,121.1399902` for Waze,
  `?api=1&query=14.6250262,121.1399902` for Google. Third-party listings carry a wrong street
  address for this hospital; a search by name can land a driver somewhere else. Coordinates cannot.
- **Name the landmarks, not just the address.** Along a highway corridor people navigate by what
  they can see — the Phoenix station next door, SM Center Downtown Antipolo 350 m west. A street
  number is for a courier; a landmark is for a patient.

Whatever the map, keep the ODbL or provider attribution intact, and give the block a text
alternative that describes the position in words — the landmark sentence is genuinely the more
useful of the two for a screen-reader user.

**Photographic placeholders are drawn, not photographed.** Where UASHMC has not shot something yet,
the slot takes an abstract illustrated stand-in on one of the warm grounds, cycled for variety
across a grid, with a quiet "to follow" caption. Two rules behind this:

- A grey diagonal hatch reads as a _broken image_, not as a content item. A grid of nine of them
  makes a finished page look like a fault.
- The stand-in must be abstract. A realistic portrait in a doctor-card slot is a photograph of a
  doctor who does not exist — the exact fabrication §6 prohibits.

**Real UASHMC photography outranks everything.** Their published collateral is the only imagery
allowed to be tagged `verified`, and it is used wherever it fits before any placeholder is
considered: the building itself on the location and contact pages (patients navigate this corridor
by landmark), the CT suite and the sleep-study room on the services page, the maternity campaign on
the homepage. Commissioning the facade, ER entrance, lobby, rooms and staff is a scoped content
item, not an optional extra — for a hospital this new, stock photography actively undermines the
trust the rest of the site is built to earn.

---

## 5. Accessibility requirements

**Target: WCAG 2.2 Level AA.** Every criterion below is testable, with the check that proves it.

| #   | Requirement                   | Pass / fail check                                                                                                                           |
| --- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| A1  | No automated violations       | `axe-core` with tags `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa` returns **zero** violations on every route. **Currently passing.**      |
| A2  | Body text contrast ≥ 4.5:1    | Computed ratio for every text token against every ground it is used on. `text.muted` on `brand.100` = 4.81 — this is the floor.             |
| A3  | Large text and graphics ≥ 3:1 | Icon glyph on `brand.500` = 3.56. White on `brand.500` = 2.66 → **fail, prohibited.**                                                       |
| A4  | Text over imagery             | Sample the _rendered_ pixels behind the text box; worst-case ratio ≥ 4.5:1. Hero currently 7.32 (headline) and 8.13 (lead).                 |
| A5  | Target size (2.2 §2.5.8)      | Every interactive element ≥ 24×24px, desktop and mobile. Inline text links exempt. **Currently 0 failures.**                                |
| A6  | Focus visible (2.4.11)        | Tab every route; every stop shows a ring with ≥ 3:1 against its ground. No `outline: none` without a replacement.                           |
| A7  | Keyboard operability          | Complete every primary job — find a doctor, check an HMO, open and query the assistant, reach the ER number — with keyboard only. No traps. |
| A8  | Scrollable regions            | Any element with overflow scroll is focusable and labelled.                                                                                 |
| A9  | Reduced motion                | With `prefers-reduced-motion: reduce`, no transform-based animation runs. Assert computed styles, not visual impression.                    |
| A10 | Zoom and reflow (1.4.10)      | 400% zoom at 1280px wide: no horizontal scroll, no clipped content.                                                                         |
| A11 | Text spacing (1.4.12)         | Override to 1.5 line-height, 0.12em letter, 0.16em word, 2em paragraph: no clipping or overlap.                                             |
| A12 | Headings and landmarks        | One `h1` per route, no skipped levels; `header`/`nav`/`main`/`footer` present; skip link first in tab order.                                |
| A13 | Names match labels (2.5.3)    | Accessible name contains the visible label for every control.                                                                               |
| A14 | Live regions                  | Result counts and assistant replies announce without stealing focus.                                                                        |
| A15 | Language                      | `lang="en-PH"` on the document; Tagalog passages marked with `lang="fil"`.                                                                  |

Screen-reader smoke test — NVDA on Windows and VoiceOver on iOS — is required before launch. Both
must complete jobs A7 lists.

---

## 6. Content and tone standards

**Voice:** calm, plain, patient-first Philippine English. Short sentences. No marketing
superlatives. No claim the hospital has not made itself.

### Rules

- Write to someone who is worried and in a hurry. Lead with the action, not the background.
- Use the words patients use — "gallstone surgery" before "cholecystectomy"; give the clinical term
  second.
- Never imply a clinical outcome, a wait time, or a cost the hospital has not published.
- Prefer stating a limit plainly over hedging around it. _"Only your HMO can confirm what they will
  pay"_ is better than an evasion.
- Tagalog and Taglish are first-class in the assistant and in search matching. UI chrome stays
  English unless UASHMC asks otherwise.

### Examples

| Don't                               | Do                                                                  | Why                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| "World-class healthcare excellence" | "Consultations, laboratory, imaging and surgery on one site"        | Specific and checkable                                                               |
| "Learn more"                        | "See our cardiologists"                                             | Says where it goes                                                                   |
| "Submit"                            | "Check my HMO"                                                      | Names the outcome                                                                    |
| "No results found."                 | "No doctor matches those filters — here is everyone in Cardiology." | Offers a way forward                                                                 |
| "You're covered!"                   | "We are partnered with them."                                       | Does not promise someone else's decision, and matches UASHMC's own published wording |
| "Error: invalid input"              | "Enter your HMO's name — for example, MediCard."                    | Says how to fix it                                                                   |
| "Open 24/7" _(unconfirmed)_         | "Open 24 hours" tagged `confirm` until UASHMC verifies              | Provenance discipline                                                                |

Microcopy that appears on every page — the emergency strip, the assistant disclaimer, the HMO
caveat — is **locked copy**. Changes require sign-off from the Medical Director, not a designer.

---

## 7. Anti-patterns — prohibited implementations

1. **Raw values in component code.** Any hex, px or ms not resolved from a token.
2. **A new type or spacing step** introduced to make one layout work. Fix the layout.
3. **`color.urgent` used decoratively.** Red belongs to emergencies only.
4. **Green as decoration.** It is a status colour here and would collide with `provenance.verified`.
5. **White text or glyphs on `brand.500`.** 2.66:1. Use `brand.700` on cyan, or `brand.600` for text
   on light grounds.
6. **Removing focus outlines**, or any focus style that disappears on a coloured ground.
7. **Icon-only controls without an accessible name.**
8. **Placeholder used as the only label.**
9. **A bare empty state** with no route forward.
10. **Nested interactive elements inside a linked card.**
11. **Hover-only affordances**, or hover styling not guarded by `@media (hover: hover)`.
12. **Content asserted without a provenance state.**
13. **Stock or generated photography presented as UASHMC's premises.** If it is not their building,
    the page must say so.
14. **An assistant answer invented to fill a gap.** Refuse and hand off.
15. **Motion that ignores `prefers-reduced-motion`.**
16. **Infinite scroll** on any page that has a footer people need.
17. **The `background` shorthand on any element that carries a provenance tint** — it erases
    background images.

---

## 8. QA checklist

Run before every review handoff. All boxes must be ticked or the item explicitly waived in writing.

**Tokens**

- [ ] No raw hex, px or ms values in component code
- [ ] Every type size maps to a scale token
- [ ] Every spacing value is on the 4px grid
- [ ] Motion tokens resolve to `0ms` under reduced motion

**Components**

- [ ] All seven states defined, or explicitly marked not applicable
- [ ] Hover guarded by `@media (hover: hover)`
- [ ] Loading states preserve label and width
- [ ] Long content, overflow and empty states handled
- [ ] Every empty state offers a route forward

**Accessibility**

- [ ] `axe-core` A+AA across 2.0/2.1/2.2: zero violations on every route
- [ ] Zero targets under 24×24px, desktop and mobile
- [ ] Keyboard-only pass of every primary job
- [ ] Focus ring visible on every ground
- [ ] Reduced-motion pass asserted on computed styles
- [ ] 400% zoom, no horizontal scroll
- [ ] Text-spacing override, no clipping
- [ ] NVDA and VoiceOver smoke test

**Layout**

- [ ] Header fits the 1012px content box with slack — asserted by measurement, not by eye
- [ ] No horizontal scroll at any breakpoint
- [ ] Emergency number present and one tap away on every page and breakpoint

**Content and trust**

- [ ] Every hospital claim carries a provenance state
- [ ] Nothing marked `verified` without a recorded source
- [ ] Locked microcopy unchanged without Medical Director sign-off
- [ ] Any photograph not supplied by UASHMC is visibly labelled
- [ ] Assistant refuses to diagnose, price, or state unconfirmed hours
- [ ] Distress routing tested and reaching the crisis line, not the ER

---

## 9. Open items for UASHMC

These block `verified` status and are tracked in `research/verified-facts.md`:

- DOH Licence to Operate number and service capability level
- PhilHealth accreditation status and validity
- Whether the ER is genuinely 24/7, and its direct line
- The complete accredited-HMO list with last-checked dates
- The complete doctor roster with credentials and clinic schedules
- Bed capacity, room types and rates
- Brand kit — logo files, colour codes, and any existing type licences
- Facility and staff photography, shot on location
- Domain ownership and a hospital-domain email address
