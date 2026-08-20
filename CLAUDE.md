# CLAUDE.md — UASHMC

Sales/pitch kit for winning the **United Antipolo Specialists Hospital and Medical Center**
website + KRISS AI engagement. Prepared by Iozera for an onsite with hospital leadership.

This is **not an application**. There is no build, no package manager, no tests, no git repo.
Every deliverable is a hand-written single file that must open by double-clicking it, offline,
on a laptop in a meeting room.

## Layout

| Path | What it is |
|---|---|
| [prototype/uashmc-prototype.html](prototype/uashmc-prototype.html) | The centrepiece. 6-page clickable website concept in one file — desktop/mobile toggle, provenance overlay, homepage directions A/B, HMO checker, KRISS AI demo. **Client-facing.** |
| [docs/uashmc-presentation-pack.html](docs/uashmc-presentation-pack.html) | The plan: sitemap, journeys, KRISS safety model, content checklist, 8-week build, agenda. **Client-facing.** |
| [docs/uashmc-design-guidelines.md](docs/uashmc-design-guidelines.md) | The design system for the production build: semantic tokens sampled from the real brand, component state rules, WCAG 2.2 AA acceptance criteria, tone standards, QA checklist. **Client-facing** — intended as an SOW annex. |
| [docs/INTERNAL-before-the-onsite.md](docs/INTERNAL-before-the-onsite.md) | ⛔ Iozera-only. Our own gaps, commercial numbers, what not to claim. **Never client-facing.** |
| [research/](research/) | Source material behind the two client documents. Public sources only; nothing confirmed by UASHMC. |
| [images/](images/) | UASHMC's own published collateral. The source of truth for the logo and brand palette; also the best evidence of their real service list, prices and HMO partners. |

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
<span data-src="verified">02 8248 3460</span>   <!-- green: UASHMC's own public channels -->
<span data-src="confirm">Open 24 hours.</span>  <!-- amber: plausible, UASHMC to confirm -->
<span data-src="sample">Dr. …</span>            <!-- violet: our placeholder -->
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
- **UASHMC is a navy *and* cyan brand, not a navy one.** Measured across their collateral the
  split inside the blue band is roughly 40/60 navy-to-cyan, carried by pale-blue section panels,
  cyan icon discs and two-tone headlines (navy phrase + cyan phrase, see `.duo`). Cyan belongs in
  resting states, not just hovers. Their graphics contain **no green** — `--care-*` survives only
  where green means status (the HMO accredited badge, the KRISS distress card), which also keeps
  green meaning "verified" during the provenance demo. The gold rule under headings is theirs;
  keep it thin — the large yellow in their posters is the building's paint, not brand chrome.
- **Watch contrast when touching the palette.** Cyan #0AADD0 is only 2.7:1 against white, so it is
  a fill, never small text: white-on-cyan fails, navy-on-cyan (3.6:1) passes the 3:1 graphic bar,
  and the headline cyan steps down to `--brand-600` on light grounds. `--muted` is #4E6981 because
  anything lighter fails AA on the `--brand-100` section bands.
- **The logo is the real one.** `--ua-mark` in `:root` holds the UASHMC monogram as a
  background-image data URI, extracted from `images/logo.jpg` with the white knocked out. Use it
  via `background:var(--ua-mark) …`; on dark grounds put it on a white chip (see `.ftr .fmark`)
  because the mark keeps its own navy. Because it is a background image, the provenance rules
  must set **`background-color`**, never the `background` shorthand — the shorthand erases it.
- **Direction B's hero is a layered parallax, hand-rolled.** Two WebP depth plates
  (`--hero-back`, `--hero-front`) are embedded as data URIs and translated at different rates by a
  rAF-throttled listener on `#scroller` — the artboard scrolls internally, not the window, so
  window-scroll libraries do not apply. It deliberately uses **no GSAP, no Lenis, no React**:
  a dependency would break the single-file, offline, opens-by-double-click constraint. Honour
  `prefers-reduced-motion` (it disables the transforms) and keep the plates `data-src="sample"` —
  **the facade in that photo is not UASHMC's building**, so it must never read as fact.
- **The FAQ page is not in the top nav, deliberately.** The header content box is 1012px with ~16px
  of slack; a seventh nav item breaks it. `/faq` is reached from the footer, from the assistant
  panel, and from the inline blocks on the topic pages.
- **`FAQ` entries carry `checked` when they quote a peso figure.** Every price in there is
  transcribed from UASHMC's own posters in [images/](images/) — safe to show as a proposal, unsafe
  to publish without written confirmation it is current. The stamp renders on the page and in the
  assistant's answer.
- **FAQPage JSON-LD is generated from the same array**, and only from entries that are `verified`
  *and* free of `.tosupply` placeholders — an answer can be verified overall and still carry a
  "to be confirmed" clause, which must never reach structured data.
- **Plain ES5-style JS** — `var`, `function`, `$`/`$$` helpers, no modules, no optional chaining.
  Match it.
- **Two palettes in the prototype.** `--studio-*` tokens are the surrounding studio chrome and
  are theme-aware (`prefers-color-scheme` + `[data-theme]`). Everything inside `.site` is the
  mocked-up website and is **deliberately fixed light** in both themes. Don't "fix" that.
- **Routing** is hash-based (`#/home`, `#/doctors`, …) via `go()`/`route()`; pages are sibling
  `.page` divs toggled with `.on`.
- **Accessibility is part of the pitch.** Keep `aria-pressed` on toggles, `aria-live` on the
  assistant log and router output, labels on inputs, and the `prefers-reduced-motion` branch in
  `ask()`.
- Both HTML files are published as private Claude Artifacts (URLs in the README). To update one,
  edit the file and republish **with its existing URL** so the link the team already has keeps
  working — a fresh publish creates a second artifact and a dead link in the room.

## Verifying a change

There are no tests. Verify by opening the file and driving it:

1. All six pages route from the nav and from in-page links; no console errors.
2. Toggle **Show content sources** — new content lights up in the right colour and the count
   moves.
3. `/faq` renders from the array — 8 groups, 29 questions — and the inline blocks on `/hmo`,
   `/patients` and `/contact` render the matching groups. Nothing duplicated in markup.
4. Toggle **Desktop / Mobile** — mobile shows the sticky `Call · Book · Ask` bar.
5. Toggle **Direction A / B** — both homepages render fully.
6. Ask KRISS: a distress phrase (crisis card, not the ER card), `may maxicare ba kayo?`,
   `magkano ang room?` (refuses to quote), and something unanswerable (hands off to a human).
7. Check the header still fits: brand + nav + CTA must not exceed the 1012px content box of
   `.hdr-in`. It has ~16px of slack and the nav flex-shrinks silently when it overflows, so the
   damage is easy to miss by eye — measure, don't squint.
8. Accessibility is a gate, not a nice-to-have: the prototype currently passes **axe-core
   WCAG 2.0/2.1/2.2 A+AA with zero violations across all six pages**, and every interactive
   target meets WCAG 2.2 §2.5.8 (24x24 minimum) on both desktop and mobile. Keep it there —
   `npx @axe-core/playwright` against `#site`, plus a bounding-box sweep for under-size targets.
9. If you touched a client file, run the leak grep from Non-negotiable #1.

## Tone

Client-facing copy is calm, plain, patient-first Philippine English — short sentences, no
marketing superlatives, no claims about the hospital it hasn't made itself. The framing to hold
throughout: this is a **starting concept for discussion**, and the meeting succeeds if UASHMC
leaves owning the direction.
