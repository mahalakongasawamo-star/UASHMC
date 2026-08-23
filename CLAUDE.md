# CLAUDE.md — UASHMC

Sales/pitch kit for winning the **United Antipolo Specialists Hospital and Medical Center**
website + KRISS AI engagement. Prepared by Iozera for an onsite with hospital leadership.

This is **not an application**. There is no build, no package manager, no tests, no git repo.
Every deliverable is a hand-written single file that must open by double-clicking it, offline,
on a laptop in a meeting room.

## Layout

| Path                                                                     | What it is                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [prototype/uashmc-prototype.html](prototype/uashmc-prototype.html)       | The centrepiece. 6-page clickable website concept in one file — desktop/mobile toggle, provenance overlay, homepage directions A/B, HMO checker, KRISS AI demo. **Client-facing.**                                           |
| [docs/uashmc-presentation-pack.html](docs/uashmc-presentation-pack.html) | The plan: sitemap, journeys, KRISS safety model, content checklist, 8-week build, agenda. **Client-facing.**                                                                                                                 |
| [docs/uashmc-design-guidelines.md](docs/uashmc-design-guidelines.md)     | The design system for the production build: semantic tokens sampled from the real brand, component state rules, WCAG 2.2 AA acceptance criteria, tone standards, QA checklist. **Client-facing** — intended as an SOW annex. |
| [docs/INTERNAL-before-the-onsite.md](docs/INTERNAL-before-the-onsite.md) | ⛔ Iozera-only. Our own gaps, commercial numbers, what not to claim. **Never client-facing.**                                                                                                                                |
| [research/](research/)                                                   | Source material behind the two client documents. Public sources only; nothing confirmed by UASHMC.                                                                                                                           |
| [images/](images/)                                                       | UASHMC's own published collateral. The source of truth for the logo and brand palette; also the best evidence of their real service list, prices and HMO partners.                                                           |

[README.md](README.md) is the operator's guide for running the meeting. Keep it in sync when the
deliverables change.

## Non-negotiables

**1. Never leak the internal brief into a client artifact.** Do not copy prose, numbers, or
framing from `docs/INTERNAL-before-the-onsite.md` or `research/critique-*.md` into the prototype
or the presentation pack. Before touching a client file, know which side of that line you're on.
The internal brief's §"before the onsite" lists the strings to grep for (`Allan`, `INTERNAL`,
`iozera.ai/contact`, `$199`, `dental`, `Houston`, `portfolio`, `denchat`) — run that check after
any edit that moves text between files.

**2. Every fact on the page carries provenance.** The prototype's core argument is honesty about
what is placeholder. Any new content element must be tagged:

```html
<span data-src="verified">02 8248 3460</span>
<!-- green: UASHMC's own public channels -->
<span data-src="confirm">Open 24 hours.</span>
<!-- amber: plausible, UASHMC to confirm -->
<span data-src="sample">Dr. …</span>
<!-- violet: our placeholder -->
```

`verified` means it appears in [research/verified-facts.md](research/verified-facts.md) with a
source. If it isn't there, it is `confirm` or `sample` — never `verified`. Untagged content
breaks the demo: the "Show content sources" toggle counts tagged nodes and the count is shown
to the client.

**3. Never invent a fact about the hospital.** No DOH licence level, bed count, room rate, ER
hours, HMO name, doctor name, or PhilHealth status beyond what `verified-facts.md` records.
Its "Open questions only UASHMC can answer" list is the boundary. Placeholder is honest;
plausible-sounding invention is the failure mode this whole kit is built to avoid.

**4. KRISS AI must refuse.** The scripted assistant (`KB` array, ~line 1905 of the prototype)
follows a safety model that is the point of the demo, not an afterthought:

- **Distress screening runs first** (`pri:-1`), before the emergency lexicon, and routes to the
  NCMH crisis line — never to UASHMC's ER. Its regex is deliberately over-inclusive; do not
  tighten it.
- Lower `pri` wins in `match()`. Emergency `0`, diagnosis-refusal `1`, then topics.
- It never diagnoses, never quotes a price, never states an unconfirmed hour. It answers from
  hospital-approved content, cites a source line, and deep-links into the site.
- The unmatched-question fallback hands off to a human and says it logged the question. Keep it.
- Tagalog/Taglish patterns matter (`magkano`, `may maxicare ba kayo`, `hirap huminga`) — the
  room will test them.

**5. The FAQ and KRISS share one source.** `FAQ` (just above `KB` in the prototype) is the single
array behind the `/faq` page, the inline mini-FAQ blocks on `/hmo`, `/patients` and `/contact`, and
the assistant's knowledge base. **Never author an FAQ answer in HTML.** They answer the same
questions, so separate authorship guarantees drift, and the day the page and the assistant disagree
is the day the Medical Director stops trusting the assistant. FAQ entries enter `KB` at `pri` 3 or
higher, clamped by a guard that logs any attempt to go lower — they must never outrank distress
screening (-1), the emergency lexicon (0) or the refusal to diagnose (1).

## Conventions

- **Single-file, self-contained.** Inline CSS and JS, inline SVG icons, no external assets, no
  frameworks, no build step. The only permitted network dependency is the Google Fonts
  stylesheet at the top of each file (Source Serif 4 + Be Vietnam Pro), which must degrade to
  the declared fallback stack offline.
- **Keep `<meta charset="utf-8">` on line 1 of both HTML files.** They are full of em-dashes and
  `·` separators. Without the declaration a browser opening the file locally guesses
  Windows-1252 and every one of them renders as mojibake — in the room, offline.
- **Brand colours are sampled, not invented.** `--brand-700` (#01487C) and `--brand-500` (#0AADD0)
  come off the logo artwork in [images/logo.jpg](images/logo.jpg); `--brand-400` (#5AC0E4) and
  `--brand-100` (#D2F0FC) are the cyan and pale-panel blues their posters actually print.
  Re-sample rather than eyeball if these ever change.
- **UASHMC is a navy _and_ cyan brand, not a navy one.** Measured across their collateral the
  split inside the blue band is roughly 40/60 navy-to-cyan, carried by pale-blue section panels,
  cyan icon discs and two-tone headlines (navy phrase + cyan phrase, see `.duo`). Cyan belongs in
  resting states, not just hovers. Their graphics contain **no green** — `--care-*` survives only
  where green means status (the HMO accredited badge, the KRISS distress card), which also keeps
  green meaning "verified" during the provenance demo. The gold rule under headings is theirs;
  keep it thin — the large yellow in their posters is the building's paint, not brand chrome.
- **The brand also owns one warm hue, and the site needs it.** Navy + cyan + white alone reads
  cold and clinical, which is the note the work came back on. `--rose-500` (#D87898) is sampled
  from the dusty-rose script on their maternity poster ([images/banner logo.jpg](images/banner%20logo.jpg));
  `--sand-50`/`--sand-100` are the warm counterpart to `--brand-100` so alternating sections can
  breathe warm as well as cool (`.sec.warm` vs `.sec.alt`). Same contrast discipline as the cyan:
  rose-500 is a **fill**, `--rose-700` (#A8446A) is the text-safe step at 5.2:1 on white. Don't
  let the page run more than two cool bands in a row.
- **Watch contrast when touching the palette.** Cyan #0AADD0 is only 2.7:1 against white, so it is
  a fill, never small text: white-on-cyan fails, navy-on-cyan (3.6:1) passes the 3:1 graphic bar,
  and the headline cyan steps down to `--brand-600` on light grounds. `--muted` is #4E6981 because
  anything lighter fails AA on the `--brand-100` section bands.
- **Real UASHMC photography is embedded, and it is the only photography allowed to be
  `verified`.** Four crops of their own published collateral live in `:root` as `--ph-building`
  (the actual blue-and-yellow building on Marcos Highway), `--ph-ct` (their CT suite),
  `--ph-sleep` (a sleep study in progress, real patient and staff) and `--ph-mother` (from their
  maternity campaign) — all sourced in
  [research/verified-facts.md](research/verified-facts.md#photography-we-actually-have). Use them
  through `.shot`, `.hero-shot`, `.feature-shot` and `.landmark`. Anything else photographic is
  a placeholder, and placeholders are drawn, not photographed — see `.figure`.
- **`DOCS` holds photographed doctors only.** The nine template samples are gone: a profile
  without a portrait exists to demonstrate a card layout, and there are real faces to show now.
  Every entry is a real person from UASHMC's own posters. `v:{}` lists which fields that poster
  actually states, and `f()` keeps **three** states because the middle one is how a new sample
  would render if one is ever added back:

  | condition                     | render                                                       |
  | ----------------------------- | ------------------------------------------------------------ |
  | field is in `v`               | `data-src="verified"` — green                                |
  | not in `v` but a value exists | `data-src="sample"` — a placeholder value (currently unused) |
  | not in `v` and no value       | `.tosupply` "to confirm" chip                                |

  So a real profile is visibly half-empty, which is the truth: only Dr. Gulliab's poster gives a
  schedule, and none give HMO coverage. Do not fill those in. A real name over an invented clinic
  day is worse than a real name over a visible blank — and Dr. Yalung's card deliberately carries a
  real face over a blank specialty, because his award post never states one.

- **A four-doctor roster makes most of the filters return nothing, so the emptiness has to explain
  itself.** Four of the six clinic tiles and _every_ HMO value match no one. Two things stop that
  reading as a broken page, and both must survive any roster change:
  - `specCounts()` writes a live count into each clinic tile (`.spec-count`, or "Profiles coming"
    when zero), so a visitor sees the gap before they click rather than after.
  - `emptyDocs()` names the filter that emptied the grid. "We have not published which HMOs each
    doctor is accredited with yet" is both the honest answer and the more useful one — it turns a
    dead end into the content-checklist moment the whole prototype is built around. Never let it
    degrade to "no results".
- **The card hover is a frame that clips and a layer that scales.** `.doc-fig` holds
  `overflow:hidden`; `.doc-ph` is absolutely positioned inside it and takes the `scale(1.055)`.
  One element cannot do both, because `overflow:hidden` and `transform` fight over the same box.
  Two traps: `.site .doc-ph{position:relative}` in the provenance block outranks a bare `.doc-ph`,
  so the absolute positioning needs `.site .doc .doc-ph`; and scoping `.doc-empty a` without the
  `p` repaints `.btn-primary`'s white label navy on a navy button and the text vanishes.
  `prefers-reduced-motion` drops the transforms entirely and keeps the colour and shadow cues,
  which are what actually signal "clickable".
- **These are identifiable people and consent is not established.** The portraits come from posts
  celebrating staff, not from a published roster. Fine in a pitch; not fine on a live site without
  each person's sign-off. `research/verified-facts.md` carries this as an open item — keep it there.
- **Placeholders are illustrations on purpose.** `.figure` renders an abstract head-and-shoulders
  SVG on one of four warm grounds (`.t0`–`.t3`), cycled by index across the roster. It replaced a
  grey diagonal hatch that read as a broken image; nine of them down `/doctors` was the single
  coldest thing on the site. Keep it abstract: a realistic portrait here would be a photograph
  of a doctor who does not exist.
- **Opaque images need an `::after` wash under `body.pv-on`, not a `background-color`.** Same trap
  as the hero plates — a background colour paints _underneath_ the photograph and never shows.
  `.shot`, `.hero-shot`, `.feature-shot`, `.landmark` get the green verified wash; `.figure` gets
  the violet placeholder one.
- **The logo is the real one.** `--ua-mark` in `:root` holds the UASHMC monogram as a
  background-image data URI, extracted from `images/logo.jpg` with the white knocked out. Use it
  via `background:var(--ua-mark) …`; on dark grounds put it on a white chip (see `.ftr .fmark`)
  because the mark keeps its own navy. Because it is a background image, the provenance rules
  must set **`background-color`**, never the `background` shorthand — the shorthand erases it.
- **Direction B's hero shows UASHMC's actual building, in a panel, and the panel is not
  negotiable.** `--ph-front` is a 501×544 portrait source. Full-bleed at the 1178px artboard it
  would be a 2.3× upscale _and_ a 44% vertical slice — mushy, and it would crop off the crown and
  the entrance, which are the two things that make the building recognisable from the highway.
  Contained at ~456px it renders close to 1:1. If you widen the hero, widen the copy column, not
  the photo.
- **The parallax is hand-rolled and lives inside the panel's overflow.** `.heroB-plate` is
  oversized by a **7% overhang** and translated by a rAF-throttled listener on `#scroller` — the
  artboard scrolls internally, not the window, so window-scroll libraries do not apply. It
  deliberately uses **no GSAP, no Lenis, no React**: a dependency would break the single-file,
  offline, opens-by-double-click constraint. Two constraints on any change: `RATE` must stay well
  under that overhang or the top edge of the panel shows through, and **every extra percent of
  overhang is a percent of the building the frame never shows** — that trade is why the numbers
  are 7% and 0.032, not something rounder. Honour `prefers-reduced-motion`.
- **There is no concept-render hero any more.** A generated white campus that was not their
  building used to fill it, behind a "not UASHMC's building" caption; both are gone, as are the
  two `--hero-*` depth plates (~289KB). Do not reintroduce a stand-in building. If a hero photo
  is ever missing, the honest fallback is Direction A's structure, not a plausible facade.
- **The locator map is real geometry, drawn, not embedded.** `#loc-map` is an inline SVG
  `<symbol>` near the top of `.studio`, generated from OpenStreetMap way 949112926 and referenced
  by both places that show it (`.locmap` on the homepage location block and on `/contact`). An
  embedded Google or Waze map would need the network and break the offline constraint, so the
  roads, the creek, the landmark dots and the pin are all paths. Three rules:
  - **The ODbL attribution inside the SVG stays.** "Map data © OpenStreetMap contributors" is
    the licence condition, not decoration.
  - **It is styled with presentation attributes on `<g>` wrappers, not CSS classes.** Class
    selectors reaching into `<use>` shadow content is the fiddly corner of SVG, and grouped
    attributes cost less than duplicating 200 paths would.
  - **The viewBox is sized for the ~490px slot it renders into** (620×349), because SVG text
    scales with the viewBox: at the original 1120px width every label rendered at ~6px.
    If you resize the slot, regenerate rather than stretch.
- **Map links use coordinates, never a name search.** `14.6250262%2C121.1399902` for both Waze
  and Google. Third-party listings carry the wrong street address for this hospital, so a search
  by name is exactly the thing that can put a driver in the wrong place.
- **The placeholder briefings live behind the toggle.** The three `.banner.pvblock` blocks on
  `/doctors`, `/services` and `/hmo` are notes about our content state, not website copy, so they
  are `display:none` until **Show content sources** is on. The one exception is `/doctors`, which
  invents eleven names: it keeps a quiet standing `.note-slim` line with the toggle off, because
  unmarked invention is the failure mode this whole kit exists to avoid. If you add a briefing,
  gate it the same way — and never write one addressed to UASHMC ("your team", "your licence",
  "a launch task"). The client reads this page as their website.
- **The FAQ page is not in the top nav, deliberately.** The header content box is 1012px with ~16px
  of slack; a seventh nav item breaks it. `/faq` is reached from the footer, from the assistant
  panel, and from the inline blocks on the topic pages.
- **`FAQ` entries carry `checked` when they quote a peso figure.** Every price in there is
  transcribed from UASHMC's own posters in [images/](images/) — safe to show as a proposal, unsafe
  to publish without written confirmation it is current. The stamp renders on the page and in the
  assistant's answer.
- **FAQPage JSON-LD is generated from the same array**, and only from entries that are `verified`
  _and_ free of `.tosupply` placeholders — an answer can be verified overall and still carry a
  "to be confirmed" clause, which must never reach structured data.
- **Plain ES5-style JS** — `var`, `function`, `$`/`$$` helpers, no modules, no optional chaining.
  Match it.
- **Two palettes in the prototype.** `--studio-*` tokens are the surrounding studio chrome and
  are theme-aware (`prefers-color-scheme` + `[data-theme]`). Everything inside `.site` is the
  mocked-up website and is **deliberately fixed light** in both themes. Don't "fix" that.
- **Routing** is hash-based (`#/home`, `#/doctors`, …) via `go()`/`route()`; pages are sibling
  `.page` divs live inside a single `<main id="content">`. The footer is a sibling of `<main>`, not
  of any one `.page` — it used to live inside `#p-home` alone, which meant six of seven routes had
  no footer, no FAQ link, no phone numbers. Never nest it back inside a page.
- **Accessibility is part of the pitch.** Keep `aria-pressed` on toggles, `aria-live` on the
  assistant log and router output, labels on inputs, and the `prefers-reduced-motion` branch in
  `ask()`. The document shell carries a real `<!doctype html>`, `<html lang="en">`, a `viewport`
  meta (without it a real phone renders the whole page at 0.4× scale — the studio's mobile toggle
  cannot catch this, it only simulates a narrow viewport, not a missing meta tag), a skip link as
  the first focusable element, and `<main>` as its target. The Filipino LOA steps carry
  `lang="fil"` per string, not just on the language toggle.
- **Type is in `rem`, and 16px is a floor, not a target to round down from.** `html{font-size:100%}`
  is what makes the scale answer the reader's own browser font-size setting — a `px` scale doesn't,
  which is how the prototype spent most of a session with a stated 16px floor while 86% of its
  rendered text sat under it. Anything holding running prose (`.card p`, `.faq-p`, `.acc .acc-b`,
  `.doc-empty p`, …) is `1rem` or above; UI chrome (eyebrows, table headers, badges) floors at
  `0.75rem` (12px) and nothing on the page goes lower. The two lockup sub-lines
  (`.brand-sub`, `.ftr .fsub`) are the deliberate exception — they're part of a logo, not prose,
  and 12px would break the lockup's proportions, so they sit at 10px instead.
- **Interactive targets are 44px, not the 24px WCAG floor.** PRODUCT.md asks for "generous well
  beyond the accessibility minimum" and names tremor; 24×24 is the legal floor, not the bar this
  project set for itself. Inline links inside a sentence (`.specnote a`, the FAQ "cannot find your
  question" line) are the one WCAG 2.2 §2.5.8 exemption and are deliberately left alone — don't
  "fix" them by wrapping them in a bigger hit box, that would look broken.
- **A clinic list is a list, not six icon cards.** `.clinics` renders name · description ·
  (optional) count as hairline-ruled rows in two columns, on both `/doctors` (filterable buttons,
  fed by `specCounts()`) and `/services` (static rows). It replaced two identical 6-tile icon-card
  grids — the exact "identical card grid" shape the shared design laws ban by name. If a new
  clinic-like listing is ever needed, reach for `.clinics` before reaching for `.card`.
- **`DESIGN.md` / `DESIGN.json` exist at the repo root** and are the token-schema counterpart to
  `docs/uashmc-design-guidelines.md` (which stays the prose-and-rationale version, written for a
  production SOW rather than for a design-tool linter). Keep the two in sync by hand when either
  changes — there's no build step to generate one from the other.
- Both HTML files are published as private Claude Artifacts (URLs in the README). To update one,
  edit the file and republish **with its existing URL** so the link the team already has keeps
  working — a fresh publish creates a second artifact and a dead link in the room.

## Verifying a change

There are no tests. Verify by opening the file and driving it:

1. All six pages route from the nav and from in-page links; no console errors.
2. Toggle **Show content sources** — new content lights up in the right colour and the count
   moves.
3. `/faq` renders from the array — 8 groups, 29 questions — and the inline blocks on `/hmo`,
   `/patients` and `/contact` render the matching groups (6 / 3 / 4). Nothing duplicated in markup.
4. Toggle **Desktop / Mobile** — mobile shows the sticky `Call · Book · Ask` bar.
5. Toggle **Direction A / B** — both homepages render fully.
6. Ask KRISS: a distress phrase (the **calm green** crisis card, not the red ER card),
   `may medicard ba kayo?`, `magkano ang room?` (refuses to quote a room rate while still naming
   the four packages they _do_ publish), and something unanswerable (hands off to a human).
   `k.kind` drives the bubble class — `alarm` red, `calm` green — so a new card gets its tone
   from the KB entry, not from `ask()`.
7. Type `Maxicare` into the HMO checker. It must say **not on our partner list**: they are not on
   UASHMC's own poster, and the page, the FAQ and the assistant all now answer from that poster.
8. Check the header still fits: brand + nav + CTA must not exceed the 1012px content box of
   `.hdr-in`. It has ~16px of slack and the nav flex-shrinks silently when it overflows, so the
   damage is easy to miss by eye — measure, don't squint.
9. Accessibility is a gate, not a nice-to-have: the prototype currently passes **axe-core
   WCAG 2.0/2.1/2.2 A+AA with zero violations across all seven routes, in both homepage
   directions, at desktop and phone widths**, and every interactive target meets WCAG 2.2
   §2.5.8 (24x24 minimum) except inline links inside a sentence, which the success criterion
   exempts. Keep it there — `npx @axe-core/playwright` against `#site`, plus a bounding-box
   sweep for under-size targets.

   One gap to cover by hand: axe returns **incomplete, not violation**, for text over a gradient
   or a background image, so it cannot see the hero copy, the `.figure` captions or the photo
   caption bars. Compute those ratios yourself when you touch them.

   Another gap that bit this project once: **`.kriss-layer` used to be `inset:0`** — a full-bleed,
   `pointer-events:none` box over the entire artboard. It changed nothing visually and nothing
   clickable, so nobody noticed, but it meant axe could not resolve the background colour of
   _anything_ underneath it and quietly turned 25–46 real contrast checks per route into
   "incomplete" instead of running them — which is how a genuine AA failure on the HMO partner
   badge (`#027F61` on `#E4F4EF`, 4.38:1) sat unflagged. It's `display:contents` now, so its
   children position against `.site-frame` directly and carry their own `z-index`. If the "zero
   violations" number ever looks too good against how much the page changed, check whether
   something is sitting on top of it and hiding the check, not just whether the page passed.

10. Real hardware, not just the studio's mobile toggle, for viewport bugs. The toggle simulates a
    narrow _width_ — it cannot simulate a missing `<meta name="viewport">`, which is a phone-only
    failure mode (a real 390px phone with no viewport meta renders the page at 980px logical width,
    scaled to fit — everything looks "wrong-sized," not "wrong-width"). If a phone-specific bug is
    reported and the toggle looks fine, that's the first thing to check.
11. If you touched a client file, run the leak grep from Non-negotiable #1.

## Tone

Client-facing copy is calm, plain, patient-first Philippine English — short sentences, no
marketing superlatives, no claims about the hospital it hasn't made itself. The framing to hold
throughout: this is a **starting concept for discussion**, and the meeting succeeds if UASHMC
leaves owning the direction.
