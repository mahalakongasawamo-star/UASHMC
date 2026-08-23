# KRISS AI × UASHMC — INTEGRATION CONCEPT

### Implementation-grade specification for the onsite presentation

**Prepared for:** Dr. Anthony Bravo (President) · Dr. Myrna Isidro Pedraja (Medical Director) · Tere Barcelona (COO) · Dr. Mary Rose Aimee L. Directo (Board) · Harvey Lozada (Marketing Director)
**Prepared by:** Iozera.ai — website workstream (Allan)
**Status:** Concept for joint decision. Items marked **[DECISION: Harvey]**, **[DECISION: Dr. Pedraja]**, **[VERIFY: UASHMC]** and **[OPEN — INTERNAL]** are deliberately unresolved and belong to the room, not to us.

---

## SECTION 1 — THE ARCHITECTURE (EXECUTIVE VERSION)

### 1.1 The one-sentence argument

> **The website is what makes KRISS trustworthy. KRISS is what makes the website work at 11pm.**

There is no second product to buy. There is one asset — UASHMC's approved information about itself — expressed two ways: as pages a patient can read and Google can index, and as answers a patient can ask for in their own words. The pages are the _source of truth_. KRISS is a _reading interface_ over that truth. It has no knowledge of its own, and that is the entire safety story.

Say it in the room in this order, because it is the order that disarms the two different objections:

1. **To Dr. Bravo and Dr. Directo (executive objection: "is this a gimmick?"):** No Philippine hospital website has a real on-site assistant. St. Luke's has none. Makati Medical Center has none. The Medical City's "chat with us" is a Facebook Messenger link. Asian Hospital markets a named AI assistant, "AHRA" — it is a Messenger button. The state of the art at the top of this market is _pushing the patient off your website and hoping someone replies_. UASHMC would be first, on merit, with a verifiable claim.
2. **To Dr. Pedraja (clinical objection: "what will it tell my patients?"):** Nothing you have not approved. It cannot invent, because it cannot answer from anything except the published corpus. It cannot diagnose, because the refusal is enforced before the model is ever asked. And every answer carries a link to the page it came from, so a wrong answer is traceable to a page you can fix — not to a black box.

### 1.2 The layer story

```
LAYER 3   24/7 PATIENT INFORMATION & NAVIGATION
          The outcome. Answers at 2am. Fewer repeat calls. Fewer
          "sorry, I don't know" moments at the front desk.

LAYER 2   KRISS AI — CONVERSATIONAL ACCESS LAYER
          Retrieval + guardrails. Reads Layer 1. Writes nothing.
          Cannot answer outside Layer 1. Escalates to humans.

LAYER 1   UASHMC WEBSITE — HOSPITAL-APPROVED INFORMATION FOUNDATION
          One CMS. One provider database. Owned, dated, versioned,
          signed off. Serves patients, Google, AI crawlers, and KRISS
          from the same record.

LAYER 0   THE HOSPITAL ITSELF
          DOH License to Operate · PhilHealth accreditations · HMO
          agreements · doctors and schedules · services and prices ·
          policies. The facts. Owned by named UASHMC staff.
```

**The load-bearing sentence for the Medical Director:** information flows _upward only_. Layer 2 never writes to Layer 1. KRISS cannot create a fact. If a fact is wrong in KRISS, it is wrong on the website — and there is one place to fix it.

### 1.3 Diagram specification — box by box, arrow by arrow

Give this to the designer verbatim. One slide, landscape, 16:9. Four horizontal bands stacked bottom-to-top. Palette: UASHMC white ground, blue for the website/foundation layer, green for the KRISS layer, red reserved _exclusively_ for the emergency path so it reads as the only alarm on the slide.

**BAND 1 (bottom, narrow strip, grey) — "THE HOSPITAL: THE FACTS"**
Five small pill labels, left to right, no boxes:
`DOH License to Operate` · `PhilHealth accreditations` · `HMO agreements` · `Doctors & schedules` · `Services, packages & prices`
Under the strip, one small line of type: _Owned by named UASHMC staff. Reviewed on a schedule._

**BAND 2 (blue, tallest band) — "LAYER 1 · THE WEBSITE = HOSPITAL-APPROVED INFORMATION FOUNDATION"**
Six equal boxes in a row:

- Box 1.1 `Find a Doctor` — sublabel: _provider database — one record, many views_
- Box 1.2 `Services & Procedures` — sublabel: _what it is · what to expect · what to bring_
- Box 1.3 `HMOs & PhilHealth` — sublabel: _dated list · LOA steps · what to bring_
- Box 1.4 `Patients & Visitors` — sublabel: _admission · rooms · billing · records_
- Box 1.5 `Emergency Information` — sublabel: _24/7 · no-deposit law · directions_
- Box 1.6 `About & Licensing` — sublabel: _DOH level · authorized services · leadership_

Beneath the six boxes, spanning their full width, one flat bar labelled:
`ONE CMS · ONE PROVIDER DATABASE · EVERY PAGE DATED, VERSIONED, SIGNED OFF`

**BAND 3 (green) — "LAYER 2 · KRISS AI = CONVERSATIONAL ACCESS LAYER"**
Three boxes, left to right, connected by right-pointing arrows _within_ the band:

- Box 2.1 `SAFETY GATE` — sublabel: _emergency detection · refusal rules · runs before the model_
- Box 2.2 `RETRIEVAL` — sublabel: _searches only the approved corpus_
- Box 2.3 `GROUNDED ANSWER` — sublabel: _plain language + link to the source page_

**BAND 4 (top, narrow, white) — "LAYER 3 · 24/7 PATIENT INFORMATION & NAVIGATION"**
Four outcome pills: `Answers at 2am` · `Fewer repeat calls` · `Patient reaches the right doctor` · `Front desk keeps the hard cases`

**ARROWS — exactly six, and label every one:**

| #   | From             | To                                      | Label                                                                                   | Style                                         |
| --- | ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| A1  | Band 1 (facts)   | Band 2 (website)                        | **"Approved and published"**                                                            | solid, thick, blue, upward                    |
| A2  | Band 2 (website) | Band 3, Box 2.2                         | **"Indexed — the ONLY source KRISS can read"**                                          | solid, thick, green, upward                   |
| A3  | Band 3, Box 2.3  | Band 4                                  | **"Answers, 24/7"**                                                                     | solid, green, upward                          |
| A4  | Band 3, Box 2.3  | Band 2 (any box)                        | **"Every answer links back to the page"**                                               | dashed, thin, green, downward-curving         |
| A5  | Band 3, Box 2.1  | outside the stack, right edge           | **"EMERGENCY → 911 / trunkline / ER now"**                                              | solid, thick, RED, exits the diagram entirely |
| A6  | Band 3, Box 2.1  | outside the stack, right edge, below A5 | **"Can't answer / patient asks for a person → Viber · trunkline · email · front desk"** | solid, dark grey, exits the diagram           |

**Two annotation callouts, set as marginal notes, not boxes:**

- Pointing at A2: **"KRISS has no knowledge of its own. If it isn't on the website, KRISS cannot say it."**
- Pointing at A5 and A6: **"Two doors are always open and always visible: emergency, and a human."**

**One crossed-out arrow, drawn deliberately** — from Band 3 down to Band 2, red X through it, labelled **"KRISS never writes back. It cannot change a fact."** This single element does more work with a Medical Director than any paragraph.

**Slide caption (single line, bottom):**
_The website is what makes KRISS trustworthy. KRISS is what makes the website work at 11pm._

### 1.4 What this architecture buys, stated as business outcomes

| Outcome                                                  | Mechanism                                                                                                                                                                                                       |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One content effort, four payoffs                         | The same semantic HTML corpus serves patients, Google, AI assistants (ChatGPT/Gemini/Claude answering "which hospital near Marcos Highway takes Maxicare?"), and KRISS. Nobody in Antipolo has any of the four. |
| Chatbot risk collapses to content risk                   | A governed CMS is a problem hospitals already know how to run. An ungoverned chatbot is not.                                                                                                                    |
| Every wrong answer is fixable in one place               | Citation → page → owner → fix → reindex. No prompt archaeology.                                                                                                                                                 |
| "AI-ready from Day One" becomes an architecture decision | Structured content, stable URLs, `MedicalOrganization`/`Physician`/`MedicalProcedure` schema, and an export feed. Built once at the start, not retrofitted.                                                     |

---

## SECTION 2 — PLACEMENT SPEC: DESKTOP

**Design register:** for a hospital, **quiet is a trust signal**. The metric we optimise is _resolution rate among people who opened it_, never _open rate_. Baymard's testing of live chat found all three common implementations — overlay dialogs, pop-up dialogs, sticky floating bubbles — actively disruptive; users' own words were along the lines of _if I wanted chat I would ask for it_. So: user-initiated, always.

### 2.1 Launcher — resting state

| Property        | Value                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Position        | `position: fixed; bottom: 24px; right: 24px;`                                                                                                                                 |
| Size            | 60 × 60 px circle (acceptable range 56–64)                                                                                                                                    |
| Z-index         | `z-index: 400` — see the stacking table in §2.4                                                                                                                               |
| Fill            | UASHMC blue, solid. No gradient, no glow, no drop shadow beyond a 1-step elevation.                                                                                           |
| Icon            | Neutral chat glyph or the UASHMC mark. **No avatar, no cartoon, no mascot, no waving hand.**                                                                                  |
| Adjacent label  | A static pill to the _left_ of the circle, `36px` tall, white ground, 1px blue border, text **`Ask UASHMC`** at 14px/600. Collapses to icon-only below 1024px viewport width. |
| Motion          | None at rest. No pulse, no bounce, no shimmer. Honour `prefers-reduced-motion` on open/close.                                                                                 |
| Sound           | None, ever.                                                                                                                                                                   |
| Badge           | None. **Never render an unread count when nothing is unread.**                                                                                                                |
| Auto-open       | **Never on first visit. Never on any visit in Phase 1.**                                                                                                                      |
| Accessible name | `aria-label="Ask UASHMC about doctors, services, HMOs and schedules"`; `aria-expanded="false"`                                                                                |
| Hover           | Label pill background shifts one step; cursor pointer. No tooltip.                                                                                                            |
| Focus           | 3px visible focus ring, 4.5:1 against both the launcher and the page ground. Tab order: **last focusable element on every page**, consistently — WCAG 2.2 consistent-help.    |

### 2.2 Expanded state

| Property         | Value                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Dimensions       | 400px wide (range 380–420) × 620px tall; `max-height: min(80vh, 720px)`; `min-height: 480px`                                              |
| Anchor           | Bottom-right, 24px inset, growing upward from the launcher position                                                                       |
| Modality         | **Non-modal.** No page dimming, no scroll lock, no backdrop. The page behind stays fully usable and readable.                             |
| Structure        | Header (56px) / persistent disclaimer strip (32px) / scrolling transcript / suggested-prompt tray / composer (64px)                       |
| Header contents  | Left: `Ask UASHMC`. Right: a `Talk to a person` text link, then a close `×` (44×44 hit area).                                             |
| Disclaimer strip | Persistent, never dismissible, 12px, on a tinted ground — exact copy in §6.6                                                              |
| Composer         | Single-line growing textarea, max 4 lines, 500-char cap, `Enter` sends, `Shift+Enter` newline                                             |
| Open behaviour   | Focus moves to the composer. Transcript announced `aria-live="polite"`.                                                                   |
| Close behaviour  | `Esc` closes. Focus returns to the launcher. Transcript persists in `sessionStorage` for the session only, then is discarded client-side. |
| Focus trap       | Trapped **only while expanded**, released on close                                                                                        |
| Zoom             | Fully usable at 200% zoom and at 320px logical width                                                                                      |
| Resize / drag    | Not in Phase 1. If added later, position must persist per session.                                                                        |

### 2.3 Scroll behaviour

- Launcher: **fixed, always visible, never auto-hides on desktop.** Predictable position beats reclaimed pixels.
- Expanded panel: fixed; only the transcript scrolls internally. Page scroll is **not** locked.
- Page scroll while expanded does not close or resize the panel.
- Scroll position in the transcript is preserved when collapsed and reopened within a session.

### 2.4 What it must NEVER cover — hard stops

Implement as a suppression list, not as a z-index hope.

| Rule                                          | Implementation                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Never over the emergency affordance           | The persistent emergency strip in the site header is `z-index: 900`. Launcher `400`, panel `500`. Emergency always wins.      |
| Never on `/emergency`                         | Launcher **not rendered at all** on the Emergency Information page and any child route. Hard route exclusion.                 |
| Never during booking or form entry            | Launcher hides while any `<form>` inside `main` has focus within it, and on all booking/enquiry/LOA-request routes.           |
| Never over an open search autocomplete        | Launcher hides while the site search combobox has `aria-expanded="true"`.                                                     |
| Never over an open filter panel               | Launcher hides while the Find-a-Doctor / Find-a-Service filter drawer is open.                                                |
| Never over a `tel:` call CTA                  | Automated check at 1280/1440/1920 widths: no `a[href^="tel:"]` may intersect the launcher or panel bounding box. Launch gate. |
| Never over video controls                     | Launcher hides while a "Doctor in the House" embed is in fullscreen or its controls are focused.                              |
| Never over a cookie/consent or privacy notice | Consent layer `z-index: 950`. Launcher does not render until consent state is resolved.                                       |
| Never over focusable content                  | WCAG 2.2 (2.4.11 / 2.4.12). Verified by automated overlap test in CI.                                                         |

### 2.5 Contextual behaviour per page

Same widget, same knowledge base, different **suggested prompts** and **default retrieval scope**. Contextual prompts are the cheapest quality signal available: a suggestion that fails is a self-inflicted first impression of incompetence, so every string below must pass the launch gate in §9.4.

Implement as a page-level data attribute the CMS emits:

```html
<body
  data-kriss-context="doctor-profile"
  data-kriss-entity="dr-juan-dela-cruz"
  data-kriss-specialty="cardiology"
></body>
```

| `data-kriss-context`      | Retrieval boost                            | Suggested prompts (exact strings)                                                                                                                                                      |
| ------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                    | none                                       | see §4.3                                                                                                                                                                               |
| `doctor-profile`          | this doctor's record, then their specialty | `What are Dr. [Surname]'s clinic days and hours?` · `Which HMOs does Dr. [Surname] accept?` · `How do I book with Dr. [Surname]?` · `Where is Dr. [Surname]'s clinic in the hospital?` |
| `specialty-index`         | this specialty's doctors + services        | `Who are the [Specialty] doctors at UASHMC?` · `What conditions does [Specialty] handle?` · `Are there Saturday clinics for [Specialty]?` · `Do you accept my HMO for [Specialty]?`    |
| `service-detail`          | this service page, then its specialty      | `How do I prepare for this?` · `How long does it take, start to finish?` · `What do I need to bring?` · `Is this covered by PhilHealth or my HMO?` · `How much does this cost?`        |
| `hmo-philhealth`          | HMO + PhilHealth + admission               | `Is [HMO name] accepted at UASHMC?` · `How do I get an LOA?` · `Where is the HMO desk and what time does it open?` · `What do I bring if I have PhilHealth?`                           |
| `patients-visitors`       | admission, rooms, billing, records         | `What documents do I need for admission?` · `What are the room types and rates?` · `How do I request a medical certificate?` · `What are the visiting hours?`                          |
| `find-a-doctor` (results) | provider database only                     | `Who has Saturday clinic hours?` · `Which doctors accept [HMO]?` · `Do you have a pediatrician?`                                                                                       |
| `about-licensing`         | About, licensing, leadership               | `Is UASHMC PhilHealth-accredited?` · `What services is UASHMC licensed for?`                                                                                                           |
| `contact-directions`      | directions, hours, channels                | `How do I get there from Marcos Highway?` · `Is there PWD parking?` · `What number do I call on a Sunday?`                                                                             |
| `careers`                 | careers only                               | `What positions are open?` · `How do I apply?`                                                                                                                                         |
| `emergency`               | **widget suppressed entirely**             | —                                                                                                                                                                                      |
| `booking-form`            | **launcher hidden while form focused**     | —                                                                                                                                                                                      |

**Rule:** contextual prompts change; **guardrails never change by context**. There is exactly one safety configuration, site-wide.

---

## SECTION 3 — PLACEMENT SPEC: MOBILE

Mobile is where this normally goes wrong: a floating bubble collides with the call button, and for a hospital **the call button must win every time**. Baymard found sticky chat especially damaging on mobile, obscuring autocomplete, filters and controls with no way to move it. So we do not float.

### 3.1 Recommended pattern: KRISS is a peer of calling, not a layer on top of it

**A single sticky bottom action bar. Three equal slots.**

```
┌──────────────────────────────────────────────┐
│   📞 Call ER    │   📅 Book    │   💬 Ask    │
└──────────────────────────────────────────────┘
        (red)          (blue)        (white/blue)
```

| Property        | Value                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Container       | `position: fixed; bottom: 0; left: 0; right: 0;` full-width                                                                                                                             |
| Height          | 64px + `env(safe-area-inset-bottom)`                                                                                                                                                    |
| Slots           | 3, equal width, each a full-height tap target ≫ the 44×44 WCAG 2.5.5 minimum                                                                                                            |
| Slot 1          | Label `Call ER`, red ground. `href="tel:+63282483460"` until an ER direct line exists **[VERIFY: UASHMC — is there a direct ER line? Publish it here.]**                                |
| Slot 2          | Label `Book`, blue ground. Deep-links to UASHMC's NowServing.ph profile, or to the doctor's NowServing page when `data-kriss-entity` is present.                                        |
| Slot 3          | Label `Ask`, white ground / blue text / blue top-border. Opens KRISS.                                                                                                                   |
| Body offset     | `body { padding-bottom: calc(64px + env(safe-area-inset-bottom)); }` so the bar never overlaps page content or the footer.                                                              |
| Thumb reach     | All three slots sit inside the natural thumb arc for one-handed use. `Call ER` is placed **left** so it is reachable by both thumbs and is never the accidental-tap neighbour of `Ask`. |
| Scroll          | The bar **does not hide on scroll.** Emergency access must not depend on scroll direction.                                                                                              |
| Suppression     | Bar renders on all pages **except** `/emergency`, where the page itself is the call-to-action at full size.                                                                             |
| Floating bubble | **None.** There is no separate floating launcher on mobile.                                                                                                                             |

**Why this is the stronger marketing position, and the line to give Harvey:** in a bottom bar, KRISS gets _permanent, labelled, thumb-zone placement on every page_ — more prominence than a bubble, with none of the intrusion. And it stops looking like an ad bolted onto a hospital.

**[DECISION: Harvey]** The bar composition is genuinely his call and it visibly changes the site. Options: `Call ER · Book · Ask` (recommended) / `Call ER · Ask · Directions` / four slots `Call · Book · Ask · Directions` (we advise against four — targets narrow below 375px). Bring the trade-off, not the answer.

### 3.2 Coexistence with the emergency affordance — no competition by design

Three separate mechanisms, deliberately non-overlapping:

1. **Slot 1 of the bottom bar** — `Call ER`, red, permanent, never occluded, one tap to dial.
2. **A thin header emergency strip** — `Emergency 24/7 · [number]`, visible on scroll-to-top, `z-index: 900`.
3. **The `/emergency` page** — where the bottom bar and the widget both stand down entirely.

Colour discipline: **red is reserved for emergency across the entire site and inside the widget.** KRISS is never red. Nothing else is red. That single rule means a patient who is panicking has exactly one thing to look for.

### 3.3 Expanded state — full screen

| Property                  | Value                                                                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Presentation              | Full-screen sheet, `height: 100dvh`, slides up from the bottom bar (200ms, `prefers-reduced-motion: reduce` → no transform, opacity only)                                                 |
| Header                    | 56px, sticky. Left: back chevron / `×` (48×48). Centre: `Ask UASHMC`. Right: `Call` icon linking to the trunkline — **the human exit is on screen at all times, even inside the widget.** |
| Disclaimer strip          | Persistent under the header, 32px, never dismissible                                                                                                                                      |
| Transcript                | Scrolls; newest at bottom; auto-scroll on new message unless the user has scrolled up                                                                                                     |
| Suggested prompts         | Horizontally scrollable chip row directly above the composer; collapses after the first user message, re-expandable via a `Suggestions` chip                                              |
| Composer                  | Sticky bottom, 56px + safe area, `inputmode="text"`, `enterkeyhint="send"`, `autocomplete="off"`, `autocapitalize="sentences"`                                                            |
| Close                     | `×`, Android hardware back, and swipe-down from the header. All three restore scroll position and focus to the `Ask` slot.                                                                |
| Bottom bar while expanded | Hidden (the widget replaces it) — **except** that the header `Call` icon preserves the emergency path. Verified as a launch gate.                                                         |

### 3.4 Keyboard handling — the detail everyone gets wrong

```js
// The composer must sit on the keyboard, not under it.
const vv = window.visualViewport;
function fit() {
  const inset = window.innerHeight - (vv.height + vv.offsetTop);
  root.style.setProperty("--kb-inset", `${Math.max(0, inset)}px`);
}
vv.addEventListener("resize", fit);
vv.addEventListener("scroll", fit);
```

Rules:

- Panel height uses `100dvh` (not `100vh`) and subtracts `--kb-inset`; composer is pinned above the keyboard.
- On keyboard open, scroll the transcript to the latest message — never leave the user staring at the middle of an old answer.
- **Never** auto-focus the composer on open on mobile. Auto-focus summons the keyboard over the suggested prompts, which is exactly the content that makes a first session succeed. Focus only on explicit tap.
- `font-size: 16px` minimum on the input, to prevent iOS Safari auto-zoom.
- Send button remains visible and reachable with the keyboard open, at ≥48×48.
- Dismissing the keyboard must not close the widget.

### 3.5 Mobile hard stops

- Launcher/bar never covers: an open filter drawer, an open search autocomplete, a focused form field, any `tel:` link, the emergency strip, or video controls.
- Widget not rendered on `/emergency` or on booking/enquiry forms.
- Automated overlap test at **320px, 375px, 390px, 414px and 768px** widths: zero intersection between the widget/bar and any `a[href^="tel:"]` or the primary page CTA. **Launch gate.**
- Tested one-handed, in bright sunlight, on a mid-range Android on mobile data, on a cracked screen. This is the actual user.

---

## SECTION 4 — THE OPENING EXPERIENCE

### 4.1 Launcher label (exact string)

```
Ask UASHMC
```

Screen-reader name:

```
Ask UASHMC about doctors, services, HMOs and schedules
```

Never `Chat with AI`. Never `👋 Hi there!`. Never `Talk to our AI assistant!`. The label sets the expectation that determines whether the first question is answerable.

### 4.2 Greeting (exact strings, in render order)

**Line 1 — persistent disclaimer strip** (always visible, never dismissible, above the transcript):

```
KRISS shares UASHMC information only. It is an AI assistant, not a doctor,
and cannot diagnose or give medical advice. In an emergency, call 911 or go
to the UASHMC Emergency Room.
```

**Line 2 — greeting message** (first bubble in the transcript):

```
Hello. I'm KRISS, the UASHMC information assistant.

I can help you find a doctor, understand a service or procedure, check
which HMOs we have agreements with, and get directions or clinic hours.
Every answer I give comes from a page on this website, and I'll link it
so you can read it yourself.

For anything medical — symptoms, results, or what treatment you need —
please speak with a doctor. I can help you reach one.
```

**Line 3 — capability line above the prompt chips:**

```
Try one of these, or type your question:
```

**Line 4 — persistent footer link inside the widget frame** (always visible, not gated behind a failure count):

```
Talk to a person
```

Voice rules for all bot copy: calm, plain, institutional. Target reading age 9–11; 11–14 only where the medical content makes 9 impossible. No exclamation marks. No emoji. No "Great question!". No first-person enthusiasm. It sounds like a competent information desk, because that is what it is.

### 4.3 Homepage starter prompts — 6, exact strings

Ordered by what this catchment actually asks. Every one is non-clinical, high-volume, and fully hospital-approvable — which is also why the **KRISS demo at the onsite should lead with these and never with a symptom.**

```
1.  Do you accept my HMO?
2.  How much is an X-ray?
3.  What are the clinic hours for Pediatrics?
4.  How do I get to UASHMC from Marcos Highway?
5.  Do you offer online consultation?
6.  How do I book with a cardiologist?
```

Why these six:

- **#1** is the single question that decides which hospital a Filipino patient goes to. Every competitor has an HMO surface; none has a searchable checker. This is the money question and the widest wedge.
- **#2** matches the catchment's demonstrated behaviour — Antipolo Doctors Hospital puts `Our Packages` first in its nav and `OPD Pricing` in the nav at all. This corridor shops on price. X-ray/imaging is a confirmed UASHMC service.
- **#3** Pediatrics is one of the four confirmed specialties, and "can I actually be seen on the day I'm free" is the conversion question.
- **#4** Marcos Highway is a landmark-navigated corridor, and UASHMC's own third-party listings disagree about its address (Waze carries "625 Marikina-Infanta Hwy" against the official #7 Marcos Highway, Mambugan). Owning the directions answer is both a UX win and a NAP-consistency fix.
- **#5** telemedicine is already a live UASHMC service with an existing content series, "Doctor in the House". It is an underused differentiator.
- **#6** Cardiology is confirmed, and this prompt ends in a NowServing.ph handoff — it demonstrates the architecture (KRISS informs, NowServing books) in a single click.

**[DECISION: Harvey]** He has the primary research none of us do — the actual Facebook Messenger inbox. Ask him for the ten most-repeated questions UASHMC receives today and let him replace two or three of these six. This is the fastest quality win available, and it makes the prompt set his.

### 4.4 Prompt-set rules (engineer-enforceable)

- Show **4–6** chips. Never more.
- **Every chip must return a correct, grounded, cited answer.** Verified in CI against the live corpus on every content deploy. A failing chip blocks the deploy.
- Chips are stored in the CMS, not in code, so Harvey can edit them without a release.
- Chips are phrased **as the patient would type them**, not as the hospital would title a page. `Do you accept Maxicare?` not `HMO Partner Information`.
- No chip may be clinical, symptom-based, or coverage-guaranteeing.
- Chip set varies by page context (§2.5); the guardrails do not.

---

## SECTION 5 — KNOWLEDGE BASE GOVERNANCE

### _The section that wins the Medical Director_

**Frame it in one sentence:** _KRISS is not trained on the internet. It is indexed from your website, and your website is a governed document set with named owners and review dates. Nothing reaches a patient that you have not signed._

**Frame the liability honestly, before anyone asks:** under **NPC Advisory 2024-04 (19 Dec 2024)**, accountability for an AI system processing personal data sits with **UASHMC as Personal Information Controller** — it cannot be delegated to Iozera or to the technology. Volunteering that is the credibility move. It also converts this from "a cool chatbot" into "a governed, owned system," which is the register this board will respond to.

### 5.1 The single-source rule

```
CMS (published, approved)  ──►  KB INDEX  ──►  KRISS ANSWERS
        ▲                                            │
        └──────────── cannot be written to ──────────┘
```

**Three hard rules:**

1. **KRISS has no private content store.** There is no "bot knowledge" edited separately from the website. If a fact needs to change for KRISS, it changes on the page — which means patients, Google and KRISS all get the correction at once.
2. **Only `status: published` + `approved_by != null` records are indexed.** Drafts, internal notes, and pending-approval records are invisible to retrieval.
3. **KRISS cannot answer from the model's general knowledge.** Ungrounded generation is disabled at the pipeline level (§6.7), not requested in a prompt.

> **[OPEN — INTERNAL, for Allan before the onsite]** KRISS's published setup process today is _vendor-managed_: a questionnaire, then manual expert training by the KRISS team, then an IT-to-IT website embed. There is no documented document-upload or site-crawl ingestion, and no customer-facing content console. The CMS-indexed architecture above is therefore a **build requirement we are placing on the KRISS deployment**, not a capability to assert as already shipped. Confirm the ingestion path internally before this slide is shown. If ingestion must be vendor-mediated in Phase 1, say so plainly and put automated sync in Phase 2 — a named, dated gap is survivable; a discovered overclaim in front of Dr. Pedraja is not.

### 5.2 Content classes, owners, and review cadence

Every indexed record carries `owner`, `approver`, `review_cadence`, `last_reviewed`, `review_due`, `answer_class`.

| #   | Content class                                            | Content owner (does the work) | Approver (signs off)             | Cadence                                 | Answer class        |
| --- | -------------------------------------------------------- | ----------------------------- | -------------------------------- | --------------------------------------- | ------------------- |
| 1   | Doctor profiles & credentials                            | Medical Affairs / HR          | **Medical Director**             | On change + quarterly                   | `directory`         |
| 2   | Clinic schedules                                         | Clinic coordinator / Nursing  | Medical Director (template only) | **Weekly**                              | `volatile`          |
| 3   | Services & procedures (what it is, prep, what to expect) | Department heads              | **Medical Director**             | Semi-annual + on change                 | `clinical-adjacent` |
| 4   | HMO list & LOA mechanics                                 | HMO / Billing desk            | **COO**                          | **Monthly**                             | `financial`         |
| 5   | PhilHealth accreditations & benefit packages             | Billing / PhilHealth liaison  | COO                              | Quarterly + on circular                 | `financial`         |
| 6   | Prices, packages, room rates                             | Finance / Billing             | **President + COO**              | Quarterly, or annual with a dated stamp | `financial`         |
| 7   | Admission, billing, records, visiting hours              | Patient Relations             | COO                              | Semi-annual                             | `logistics`         |
| 8   | Emergency information & no-deposit (RA 10932) explainer  | Patient Relations + ER head   | **Medical Director**             | Semi-annual                             | `safety-critical`   |
| 9   | Licensing, DOH level, authorized services                | Admin / Compliance            | **President**                    | On LTO renewal                          | `regulatory`        |
| 10  | Directions, hours, parking, accessibility                | Facilities                    | COO                              | Semi-annual                             | `logistics`         |
| 11  | Concern-to-specialty routing table                       | Content + Medical Affairs     | **Medical Director (mandatory)** | Quarterly                               | `routing`           |
| 12  | Red-flag / emergency lexicon                             | Iozera drafts                 | **Medical Director (mandatory)** | Quarterly + on incident                 | `safety-critical`   |
| 13  | News, promos, packages, careers                          | **Marketing (Harvey)**        | Marketing Director               | Ad hoc                                  | `marketing`         |
| 14  | Refusal & escalation copy                                | Iozera drafts                 | Medical Director + COO           | Semi-annual                             | `system`            |

**[VERIFY: UASHMC]** Every "owner" cell needs a **named person** by the end of the onsite. An unowned content class is a stale-answer generator. This table, filled in with names, _is_ meeting goal #3.

### 5.3 The governance workflow

```
 ┌─────────────┐
 │ 1. DRAFT    │  Author writes in CMS. status=draft. Sets owner,
 │             │  answer_class, review_cadence. Invisible to KRISS.
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 2. REVIEW   │  Routed by answer_class:
 │             │   clinical-adjacent / routing / safety-critical → Medical Director
 │             │   financial → COO (+ President for prices)
 │             │   regulatory → President / Compliance
 │             │   logistics / marketing → COO / Marketing Director
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 3. COMPLIANCE│ Automated gate. BLOCKS publish on failure:
 │    GATE     │  ✗ superlatives ("best", "#1", "leading",
 │             │    "world-class", "state-of-the-art") — RA 7394 Art.110
 │             │  ✗ comparative physician claims — PRC/PMA Code of Ethics
 │             │  ✗ outcome/cure/success-rate claims without a cited source
 │             │  ✗ service not present on the LTO service list
 │             │    (required field: lto_authorized = true)
 │             │  ✗ coverage guarantees ("PhilHealth will cover this")
 │             │  ✗ missing "as of [date]" on any financial-class record
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 4. PUBLISH  │  status=published. approved_by + approved_at stamped.
 │             │  content_version incremented. Live on the website.
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 5. INDEX    │  Webhook → KB sync. Chunked, embedded, tagged with
 │             │  source_url, content_version, answer_class,
 │             │  last_reviewed, review_due. kb_index_version bumped.
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 6. VERIFY   │  Automated smoke suite runs against the new index:
 │             │  · all suggested prompts still answer correctly
 │             │  · all red-flag phrases still interrupt
 │             │  · banned-phrase scan on 50 canned queries
 │             │  · every answer carries a resolvable citation
 │             │  FAIL → auto-rollback to previous kb_index_version,
 │             │  alert to Iozera + content owner.
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ 7. MONITOR  │  review_due countdown. Unanswered-question log.
 │             │  Red-flag trigger log. Monthly report (§8).
 └─────────────┘
```

**Publication latency target: content live on the website → answerable by KRISS in under 15 minutes.** Never a separate content project.

### 5.4 Versioning and provenance

Every chunk carries:

```json
{
  "chunk_id": "svc-lap-chole-0004",
  "source_url": "https://uashmc.com.ph/services/laparoscopic-cholecystectomy",
  "source_title": "Gallbladder removal (Laparoscopic cholecystectomy)",
  "content_version": 7,
  "answer_class": "clinical-adjacent",
  "owner": "Dept. of Surgery",
  "approved_by": "Dr. M. I. Pedraja",
  "approved_at": "2026-08-14T09:12:00+08:00",
  "last_reviewed": "2026-08-14",
  "review_due": "2027-02-14",
  "lto_authorized": true,
  "language": "en",
  "supersedes": "svc-lap-chole-0003"
}
```

Every KRISS answer logs `[chunk_id, content_version, kb_index_version]`. So a complaint from a patient in November resolves to _exactly the words that were live in August_ — a real audit trail, not a reconstruction. That is the artefact that makes this defensible to a board.

### 5.5 How out-of-date answers are structurally prevented

Five mechanisms, in ascending strictness:

1. **Review-due dashboard.** Anything with `review_due` inside 30 days appears on the content owner's queue and in the monthly report.
2. **Overdue behaviour is class-dependent — enforced in the pipeline, not by policy memo:**

| `answer_class`                        | If `review_due < today`                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `logistics`, `directory`, `marketing` | Serve, appended with: _"This information was last reviewed [date]. Please confirm when you call."_                          |
| `volatile` (schedules)                | Serve, with the mandatory caveat in §5.6                                                                                    |
| `financial` (HMO, PhilHealth, prices) | **Refuse to serve the figure.** Route to the human desk. This is the class where a stale answer causes real financial harm. |
| `clinical-adjacent`                   | Serve prep/logistics; suppress any clinical detail; append the review date.                                                 |
| `safety-critical`, `routing`          | **Alert immediately** to Medical Director + Iozera. Emergency copy and the routing table never silently expire.             |

3. **Dated everything.** Every financial and HMO record renders "as of [Month Year]" on the page _and_ in the KRISS answer. Undated prices are worse than no prices.
4. **No parallel truth.** Because there is no separate bot content store, KRISS cannot lag the website by more than the index interval.
5. **Deploy-gated smoke tests** (step 6 above). A content change that breaks an answer is caught in minutes, and rolls back automatically.

### 5.6 The three mandatory caveats

Appended automatically by `answer_class`, not written by the model:

**`financial` / HMO:**

```
Coverage depends on your specific plan, your doctor, and the exact
procedure — and planned procedures need an LOA, which usually takes
1 to 5 business days. Please confirm with your HMO and with the UASHMC
HMO desk before your visit.
```

**`volatile` / schedules:**

```
Schedules can change. Please confirm when you book.
```

**`clinical-adjacent`:**

```
This is general information about the service, not advice about your
situation. Your doctor decides what's right for you.
```

---

## SECTION 6 — THE SAFETY MODEL

**The framing that matters for the Medical Director, and it is a legal point, not a preference:** under FDA **AO 2018-0002**, software is included in the definition of a medical device, and classification turns on _intended use_. A patient-facing tool that assesses symptoms or recommends a level of care raises a plausible medical-device classification question. **"Information and navigation only" is what keeps this system outside the Software-as-a-Medical-Device perimeter.** The guardrail protects the hospital's licence exposure, not just the patient. Say that out loud.

### 6.1 The pipeline — guardrails run BEFORE the model, not inside a prompt

```
User input
   │
   ▼
[0] SESSION INIT ─── AI disclosure + privacy notice shown before first input
   │                 (NPC Advisory 2024-04; DPA IRR Sec. 34)
   ▼
[1] NORMALISE ────── lowercase, strip diacritics, expand common
   │                 Taglish/SMS spellings, keep the raw string for logging
   ▼
[2] EMERGENCY GATE ─ deterministic lexicon match (regex + keyword)
   │                 HIT → EMERGENCY INTERRUPT. Pipeline STOPS. No LLM call.
   ▼
[3] REFUSAL GATE ─── prohibited-intent classifier
   │                 HIT → refusal template + route. No LLM answer generated.
   ▼
[4] RETRIEVE ─────── vector + keyword search over the approved corpus ONLY
   │                 filters: status=published, approved_by NOT NULL,
   │                 answer_class allowed, staleness rule (§5.5)
   ▼
[5] GROUNDING GATE ─ ≥1 chunk above similarity threshold τ?
   │                 NO → "I don't know" template. No LLM call.
   ▼
[6] GENERATE ─────── LLM composes ONLY from retrieved chunks.
   │                 System instruction forbids outside knowledge.
   ▼
[7] OUTPUT FILTER ── banned-phrase + pattern scan on the generated text
   │                 HIT → discard, serve the safe fallback, log for review
   ▼
[8] DECORATE ─────── append citation, class caveat (§5.6), escalation footer
   ▼
[9] LOG ──────────── query, intent class, chunks used, versions, outcome
   ▼
Answer to patient
```

**Design principle to state plainly:** stages 2, 3, 5 and 7 are **deterministic code**. They do not depend on the model behaving. A prompt is a request; a gate is a guarantee. This distinction is what makes the safety model inspectable by a clinician who does not want to read prompts.

### 6.2 What KRISS ANSWERS — the allow-list

Retrieval is permitted only for these intent classes. Anything unclassified falls through to §6.6.

| Class                                | Examples                                                                                                                  | Source                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **A1 — Directory**                   | Who are the cardiologists? What are Dr. X's clinic hours? Which doctors accept Maxicare? Is there a female OB?            | Provider database                        |
| **A2 — Service information**         | What is a laparoscopic cholecystectomy? Do you do CT scans? What's in the executive check-up?                             | Service pages                            |
| **A3 — Preparation & logistics**     | How do I prepare? How long will I be there? What do I bring? Do I need to fast?                                           | Service pages                            |
| **A4 — Coverage mechanics**          | Do you have an agreement with Intellicare? How do I get an LOA? Where is the HMO desk? What does PhilHealth need from me? | HMO / PhilHealth pages                   |
| **A5 — Money**                       | How much is a chest X-ray? What are the room rates? Is there a senior citizen discount?                                   | Price/package pages                      |
| **A6 — Access & wayfinding**         | How do I get there from Marcos Highway? Where do I park? Is there PWD parking? Where's the ER entrance?                   | Directions / accessibility               |
| **A7 — Hospital facts**              | Is UASHMC PhilHealth-accredited? What is your DOH classification? Who leads the hospital?                                 | About / licensing                        |
| **A8 — Process & admin**             | How do I get a medical certificate? How do I request my medical records? What are visiting hours? How do I book?          | Patients & Visitors                      |
| **A9 — Concern → specialty routing** | Which doctor handles knee pain? Who do I see about my child's fever?                                                      | **Signed routing table only** — see §6.4 |
| **A10 — Careers**                    | What jobs are open? How do I apply?                                                                                       | Careers pages                            |

Note **A8** — "how do I get a medical certificate?" and medico-legal certificate requests are high-volume, 100% informational, and **no competitor in Antipolo publishes a clear procedure for either.** Free win, zero clinical risk.

### 6.3 What KRISS REFUSES — the deny-list, with exact copy

Each class is matched **before** retrieval. On a hit, no answer is generated; the template is served verbatim with a route attached.

**R1 — Diagnosis** _(triggers: "do I have", "is this", "what's wrong with me", "ano ang sakit ko", "could it be", "what condition")_

```
I can't tell you what's causing a symptom — only a doctor can do that
after examining you.

What I can do is help you find the right specialist and book a
consultation. Would you like me to show you our doctors?
```

**R2 — Treatment advice** _(triggers: "should I have surgery", "what treatment", "do I need", "is surgery necessary", "kailangan ba")_

```
Decisions about treatment belong to you and your doctor.

I can explain what a service or procedure involves at UASHMC and how to
prepare for it, and I can help you book a consultation to discuss it.
```

**R3 — Medication guidance** _(triggers: any drug name, "dosage", "how many mg", "can I take", "pain reliever", "antibiotic", "gamot", "ok lang ba kumuha ng")_

```
I can't give advice about medicines, including doses or whether something
is safe for you. Please ask your doctor or a licensed pharmacist.

If you'd like to speak with a UASHMC doctor, I can help you book.
```

**Engineering note:** the drug-name trigger is a **name list**, not a semantic guess. Ship with a Philippine-market OTC and common-prescription list, reviewed by Pharmacy. _This is the rule that prevents the exact failure mode visible in KRISS's own public marketing demos, where the bot volunteers ibuprofen/acetaminophen guidance. Raise it as our deliberate configuration for UASHMC, in writing, before anyone opens kriss.ai in the meeting._

**R4 — Interpreting results** _(triggers: "my result", "my lab", "is 140 high", "what does this mean", "normal ba ang", uploaded image/file)_

```
I can't read or interpret test results. Your doctor will explain them
in the context of your health.

I can tell you how to get a copy of your results, or help you book a
follow-up consultation.
```

**R5 — Triage / severity / urgency assessment** _(triggers: "how serious", "should I go to the ER", "can it wait", "is this urgent", "delikado ba", "kailangan ba mag-ER")_

```
I'm not able to judge how serious a symptom is.

If you think this may be an emergency, call 911 or go to the UASHMC
Emergency Room at 7 Marcos Highway, Barangay Mambugan, Antipolo City —
we are open 24/7. If you're unsure, please call us at 02 8248 3460 and
speak with our staff.
```

**Note:** the reason KRISS may not use the RA 10932 statutory definitions of "emergency" and "serious case" to evaluate a patient is that both definitions turn on _the objective findings of a prudent medical officer on duty_ — precisely the judgment KRISS is barred from making. Worth saying to Dr. Pedraja; it shows we read the law rather than the summary.

**R6 — Coverage guarantees** _(triggers: "will PhilHealth cover", "will my HMO pay", "how much will I pay in total", "magkano lahat")_

```
I can't confirm whether a specific service will be covered, or what your
final bill will be — that depends on your plan, your doctor, and the exact
procedure.

Here's what I can tell you: [agreement status + what to bring + LOA steps].
For a definite answer, please contact your HMO and our HMO desk at
02 8248 3460.
```

**R7 — Comparative / superiority claims about doctors or the hospital** _(triggers: "who is the best", "sino ang magaling", "which doctor is better", "are you better than [hospital]")_

```
I don't rank our doctors or compare hospitals. All our specialists are
board-certified, and I can show you each one's training, credentials,
sub-specialty and clinic schedule so you can choose.
```

Grounded in the PRC/PMA Code of Ethics: false, extravagant or unethical advertising is a disciplinary ground, and a hospital promoting individual physicians risks reading as an agent soliciting patients. **The same Code expressly carves out websites** as the one medium where certificates, post-graduate training and former hospital connections _may_ be published, on the reasoning that a patient has a right to know their doctor's qualifications. So: rich credentials, yes. Rankings, never. That carve-out is also the green light for the substantive Find-a-Doctor build.

**R8 — Anything outside UASHMC's scope** _(other hospitals, general medical questions, non-hospital topics)_

```
I only have information about UASHMC. For that question, please speak
with a doctor or check with the relevant office directly.
```

**R9 — Personal or sensitive data submission** _(triggers: patient volunteers ID numbers, full clinical history, uploads a document)_

```
Please don't share personal health details or ID numbers here. This chat
isn't the right place for them.

To discuss your records or a specific case, call 02 8248 3460 or message
us on Viber at +63 947 875 4949.
```

Then: **truncate and do not persist the volunteered SPI**; log the event, not the content. This is data minimisation as a runtime behaviour, and it is the cheapest DPA compliance win available.

### 6.4 The one clinical-adjacent thing KRISS may do — routing, not reasoning

Patients say "my chest hurts", not "cardiology". The bridge is built from **content, not inference**.

**Mechanism 1 (the backbone — build this first, zero risk):** every service and condition page carries a _"Who treats this at UASHMC"_ module naming the specialty and the doctors. The patient searches "chest pain", lands on the page, and the _page_ tells them who handles it. Nothing inferred anything about _this patient_. It is editorial content about the world plus a directory join.

**Mechanism 2 (the routing table — low risk, tightly bounded):** a hand-built lookup of 100–200 rows: `plain-language concern → 1–3 candidate specialties → related service pages → red_flag boolean`.

Properties that make it defensible, each stated as an engineering rule:

```yaml
routing_table:
  finite: true # a reviewable spreadsheet, not a model
  generative: false # synonym match only, no reasoning
  min_outputs: 1
  max_outputs: 3 # a single confident answer READS as diagnosis
  framing: population # "people with X usually see Y"
  never_framing: personal # never "you should see", "this could be"
  red_flag_screen: first # runs BEFORE routing, suppresses the answer
  clinical_followups: 0 # HARD ZERO
  navigational_followups: allowed # "is this for an adult or a child?"
  escape_hatch: mandatory # every output ends with a human channel
  approved_by: Medical Director
  version_controlled: true
  review_cadence: quarterly
```

**The line that must be drawn and documented:** the moment the system asks _"how long have you had it?"_ or _"how severe, 1 to 10?"_, it is performing triage. **KRISS never asks a clinical question.** It may ask a navigational one — _"Is this for you or for a child?"_ routes to Pediatrics — because that is logistics, not medicine. Draw this line explicitly in the SOW; it is the cleanest way to satisfy the constraint in a form a board can inspect.

**Wording standard:**

| Never                         | Always                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| "You may have angina."        | "Chest discomfort is usually seen by a Cardiologist or an Internal Medicine doctor." |
| "This sounds serious."        | _(replaced by the emergency card)_                                                   |
| "I recommend you see Dr. X."  | "These UASHMC doctors handle this: […]"                                              |
| "Based on your symptoms…"     | "Based on what you're looking for…"                                                  |
| "How bad is the pain?"        | _(never asked)_                                                                      |
| "Let me check your symptoms." | "Let me help you find the right service."                                            |

**Mechanism 3 (free text):** accepted, but it may resolve **only** to table entries. Unmatched input returns the §6.6 template. It must **never** fall through to the model's general medical knowledge. Every unmatched term is logged — that log is the editorial backlog _and_ a direct readout of what Antipolo is actually worried about (see §8).

### 6.5 Emergency detection and escalation — the most safety-critical rule in the system

**Detection**

```
Stage [2]. Deterministic. Pre-LLM. Non-bypassable.
Lexicon: keyword + regex, English + Filipino + Taglish + common SMS spellings.
Bias: OVER-trigger. A false positive costs a moment of alarm.
      A false negative costs more. Always resolve toward the higher
      level of care.
Owner: drafted by Iozera, SIGNED BY THE MEDICAL DIRECTOR, version-controlled,
      reviewed quarterly and after every incident.
Every trigger is logged and reviewed monthly by the Medical Director.
```

Seed lexicon (illustrative, not exhaustive — Dr. Pedraja owns the final list):

```
EN: chest pain · chest tightness · can't breathe · difficulty breathing ·
    shortness of breath · unconscious · not breathing · no pulse ·
    severe bleeding · won't stop bleeding · coughing blood · vomiting blood ·
    stroke · face drooping · slurred speech · sudden weakness one side ·
    seizure · convulsion · severe head injury · head trauma · blue lips ·
    turning blue · overdose · poisoning · suicidal · want to kill myself ·
    severe burn · broken bone sticking out · car accident · fell from height ·
    high fever infant · baby not breathing · water broke · heavy bleeding
    pregnant · not moving · collapsed · anaphylaxis · allergic reaction
    swelling throat

FIL/TAGLISH: sumasakit ang dibdib · masakit dibdib · hirap huminga ·
    hindi makahinga · nawalan ng malay · nahimatay · hindi humihinga ·
    duguan · hindi tumitigil ang dugo · nagsusuka ng dugo · umuubo ng dugo ·
    atake sa puso · stroke · nangisay · kinukumbulsyon · namumutla ·
    nangingitim ang labi · nalasing sa gamot · nagpakamatay · gusto ko
    nang mamatay · napaso · nabalian · naaksidente · nalaglag · malubha ·
    emergency · tinamaan · hindi gumagalaw · bumagsak · mataas ang lagnat
    ng sanggol · sumakit ang tiyan buntis · nagdurugo buntis
```

**Behaviour on a hit — five absolute rules:**

1. **Interrupt, don't converse.** The pending answer is discarded and replaced.
2. **No confirmation gate.** Never "Are you sure this is an emergency?" or "Would you like emergency info?" One tap of friction is one tap too many.
3. **No follow-up questions.** Not clinical, not navigational. The conversation stops.
4. **No booking offer.** Do not offer an appointment to someone describing an emergency.
5. **No severity assessment.** KRISS does not evaluate whether it _really_ is an emergency.

**Exact escalation copy — the emergency card** _(NHS care-card pattern, localised: 999 → 911, A&E → Emergency Room; red + dark-grey emergency variant; visually-hidden urgency prefix `Immediate action required: ` on the heading with `role="text"`, because colour alone is not an accessible urgency signal)_

```
┌────────────────────────────────────────────────────────┐
│  [sr-only: Immediate action required: ]                │
│  Call 911 now, or go straight to our Emergency Room    │
│  ────────────────────────────────────────────────────  │
│  Some symptoms need emergency care right away.          │
│  Please stop reading and get help now.                  │
│                                                         │
│  [  📞 CALL 911  ]      ← tel:911                       │
│  [  📞 CALL UASHMC 02 8248 3460  ]  ← tel:+63282483460  │
│                                                         │
│  UASHMC Emergency Room — open 24 hours                  │
│  7 Marcos Highway, Barangay Mambugan, Antipolo City     │
│  [ Open in Waze ]   [ Open in Google Maps ]             │
│                                                         │
│  Come now. Bring your documents later.                  │
│  By law, we cannot ask you for a deposit before          │
│  emergency care. (Republic Act 10932)                    │
└────────────────────────────────────────────────────────┘
```

That last line is a trust signal disguised as compliance. RA 10932 makes it unlawful to request, solicit, demand or accept any deposit or advance payment as a prerequisite for administering basic emergency care. Almost no Philippine hospital site says so proactively. For a hospital building census from zero, saying it is a differentiator.

**Post-card state:** the widget shows the card and **one** further line, then accepts no further clinical input in that session:

```
I've stopped here because this needs a person, not an assistant.
If this isn't an emergency, please call 02 8248 3460 and our staff
will help you.
```

**[VERIFY: UASHMC]** Is there an **ER-direct number** distinct from the trunkline? Asian Hospital publishes separate `tel:` links for its trunkline and its emergency line in the persistent header — the correct pattern, and only two of eleven benchmarked hospitals do it. Marikina Valley publishes a landline plus two mobiles. If UASHMC has or can create an ER-direct line and a second mobile, publish both. It is a free, nameable advantage over every hospital in the corridor.

### 6.6 "I don't know" — handled without hallucination

Triggered by: grounding gate failure (no chunk above τ), an unmatched routing term, or an output-filter rejection.

**Exact copy:**

```
I don't have that information.

I only answer from what UASHMC has published, so if it isn't on this
website, I won't guess.

Here's how to get a real answer:
  📞 Call 02 8248 3460 — Monday to Saturday, [hours]
  💬 Viber or SMS +63 947 875 4949
  ✉️  [hospital email]
  🏥 The Information Desk, 7 Marcos Highway, Brgy. Mambugan, Antipolo City
```

**Engineering rules:**

```
IF max_similarity < τ_hard        → "I don't know" template. NO LLM CALL.
IF τ_hard ≤ max_similarity < τ_soft → serve, but prefix:
     "I'm not certain this fully answers your question —"
     and append the citation + a human channel.
IF output_filter fails            → discard silently, serve "I don't know",
                                    log full context for review.
NEVER  synthesise across the gap.
NEVER  say "I think" or "it's likely" or "generally speaking".
NEVER  produce a phone number, price, schedule, room rate, or LOA
       instruction that is not present verbatim in a retrieved chunk.
```

**Additional hard rule — no fabricated specifics.** Numbers (phone, price, room rate, extension, hours, dates) and named entities (doctor names, HMO names, department names) must be **string-verified against the retrieved chunk** before the answer is served. A generated number that does not appear in a retrieved chunk fails the output filter unconditionally. This closes the single most damaging hallucination mode in a hospital context.

**Persistent disclaimer strip** (never dismissible, all viewports, both states):

```
KRISS shares UASHMC information only. It is an AI assistant, not a doctor,
and cannot diagnose or give medical advice. In an emergency, call 911 or go
to the UASHMC Emergency Room.
```

A one-time modal is not sufficient. It must be a standing element of the frame.

### 6.7 Consolidated guardrail table — an engineer could build from this

| ID  | Rule                                                                                                     | Enforcement point    | Failure mode if omitted                        | Regulatory anchor                      |
| --- | -------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------- | -------------------------------------- |
| G1  | AI disclosure before first input; states what is logged, retention, and that it is not a doctor          | Session init         | Non-disclosure of automated processing         | NPC Advisory 2024-04; DPA IRR Sec. 34  |
| G2  | Emergency lexicon match pre-LLM; interrupt, no conversation                                              | Stage 2              | Conversational handling of an emergency        | RA 10932                               |
| G3  | No severity, urgency, or triage assessment, ever                                                         | Stage 3 (R5)         | Undertriage; SaMD classification exposure      | FDA AO 2018-0002                       |
| G4  | No diagnosis, treatment advice, medication guidance, or result interpretation                            | Stage 3 (R1–R4)      | Clinical harm; practising medicine             | FDA AO 2018-0002; PRC/PMA              |
| G5  | No clinical follow-up questions. Navigational only.                                                      | Stage 3 + generation | Silent triage by conversation                  | FDA AO 2018-0002                       |
| G6  | Retrieval restricted to `status=published AND approved_by NOT NULL`                                      | Stage 4              | Unapproved content reaching patients           | Institutional                          |
| G7  | Grounding gate: no chunk above τ → "I don't know". No LLM call.                                          | Stage 5              | Hallucination                                  | RA 7394 Art. 110                       |
| G8  | Generation strictly from retrieved chunks; outside knowledge disabled                                    | Stage 6              | Hallucination                                  | RA 7394 Art. 110                       |
| G9  | Numbers and named entities string-verified against retrieved chunks                                      | Stage 7              | Fabricated prices, phones, schedules           | RA 7394 Art. 110                       |
| G10 | Banned-phrase filter: superlatives, comparatives, outcome/cure claims                                    | Stage 7              | False/extravagant advertising                  | RA 7394 Art. 110; PRC/PMA              |
| G11 | No coverage determinations, no total-bill amounts                                                        | Stage 3 (R6) + 7     | Patient billed unexpectedly; complaint trail   | IC/EO 192; sector norm                 |
| G12 | Physician information = credentials only, never comparative                                              | Stage 3 (R7) + 7     | Ethics violation; hospital as soliciting agent | PRC/PMA Code                           |
| G13 | Every answer carries a resolvable citation to a live page                                                | Stage 8              | Untraceable, unfixable answers                 | Institutional                          |
| G14 | Class caveats appended automatically, not model-written                                                  | Stage 8              | Missing mandatory qualifications               | Sector convention                      |
| G15 | "Talk to a person" persistently visible, not failure-gated                                               | UI frame             | Trapped patient                                | NPC Advisory 2024-04                   |
| G16 | Widget suppressed on `/emergency` and all forms                                                          | Route config         | Occluding the emergency path                   | WCAG 2.2; safety                       |
| G17 | Never occludes focusable content or a `tel:` link at any viewport                                        | CSS + CI test        | Blocked call button                            | WCAG 2.4.11/2.4.12                     |
| G18 | Volunteered SPI truncated, not persisted; event logged, not content                                      | Stage 1 + logging    | SPI accumulation without basis                 | RA 10173; NPC 2023-06                  |
| G19 | Chat logs: declared retention, access controls, deletion route, objection/rectification/erasure honoured | Storage layer        | Unlawful SPI processing                        | NPC 2023-06, 2023-04; Advisory 2024-04 |
| G20 | PIA completed and signed before launch                                                                   | Pre-launch gate      | Deploying an AI system without assessment      | NPC Advisory 2024-04                   |
| G21 | Grievance mechanism + named human escalation published                                                   | Site + widget        | No route to complain                           | NPC Advisory 2024-04                   |
| G22 | Accountability documented: UASHMC = PIC, Iozera = PIP, DPA/DSA executed                                  | Contract             | Misplaced liability                            | NPC Advisory 2024-04                   |
| G23 | Stale `financial`-class content refuses rather than serves                                               | Stage 4              | Wrong price/coverage from an expired record    | Institutional                          |
| G24 | Red-flag triggers logged and reviewed monthly by the Medical Director                                    | Ops                  | No clinical oversight loop                     | Governance                             |

**[VERIFY: UASHMC]** G20/G22 need names: the **DPO** and the **NPCRS registration status**. A hospital almost certainly crosses NPC Circular 2022-04's thresholds (≥1,000 individuals' sensitive personal information; hospitals are a named example). Ask in the room.

**[VERIFY: UASHMC — quick win for Tere Barcelona]** `uashmc.customerrelations@gmail.com` receiving patient inquiries that contain health information sits outside any access-control regime the hospital can evidence under NPC Circular 2023-06. Frame the migration to `@uashmc.com.ph` as a **data-security remediation item**, not a branding preference. It is a much easier budget conversation, it is actionable immediately, and it forces the domain decision the website needs anyway.

### 6.8 Language

KRISS publishes **no multilingual claim** anywhere — there is no public evidence of Filipino, Tagalog or Taglish support. **Do not claim it.** [OPEN — INTERNAL: test Taglish against the live widget before the onsite; this _will_ be asked in an Antipolo boardroom.]

The honest Phase 1 design, which is also good design:

- **Detection is bilingual regardless of generation.** The emergency lexicon and the refusal triggers include Filipino and Taglish terms from Day One (§6.5). Safety must not depend on the patient's language choice. This is non-negotiable and it is cheap.
- **Approved bilingual answer variants for the four money questions** — HMO/LOA steps, admission requirements, ER instructions, PhilHealth — stored as _pre-approved paired strings_ in the CMS and selected by a language flag. This is canned content retrieval, not machine translation, so nothing unapproved is generated. Antipolo Doctors Hospital already proves bilingual works here: their 7-step HMO Approval Process is presented in English and Filipino, and it is the single smartest thing on any Antipolo hospital site.
- **Full conversational Filipino: Phase 2, and only after testing.** Name it as scope, with a date. Do not name it as capability.

---

## SECTION 7 — ESCALATION & HANDOFF

### 7.1 Triggers — when KRISS hands off

| #   | Trigger                                                                        | Behaviour                                                                                    | Latency                    |
| --- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | -------------------------- |
| E1  | **Emergency lexicon hit**                                                      | Emergency card. Session clinically closed.                                                   | Immediate, no confirmation |
| E2  | **Explicit request** — "talk to a person", "human", "gusto ko makausap ng tao" | Immediate handoff panel. This is an instruction, not a query.                                | Immediate                  |
| E3  | **Two consecutive unresolved turns**                                           | Offer handoff proactively. Two, not five.                                                    | After turn 2               |
| E4  | **Refused category** (R1–R7)                                                   | Refusal copy + handoff channels in the same message                                          | Immediate                  |
| E5  | **"I don't know"**                                                             | Channels included in the template                                                            | Immediate                  |
| E6  | **Financial-class stale content** (§5.5)                                       | Refuse the figure, route to the HMO/Billing desk                                             | Immediate                  |
| E7  | **Distress signal** (self-harm, suicidal ideation)                             | Emergency card variant + national/local crisis line **[VERIFY: which line UASHMC endorses]** | Immediate, no assessment   |
| E8  | **Complaint or grievance intent**                                              | Route to the published grievance mechanism + DPO contact                                     | Immediate                  |
| E9  | **Output filter rejection**                                                    | Silent discard → "I don't know" + channels; full context logged                              | Immediate                  |

### 7.2 Handoff panel — exact copy

```
Let me connect you with our team.

  📞  Call the trunkline — 02 8248 3460
      [Mon–Sat, hours to confirm]

  💬  Viber or SMS — +63 947 875 4949
      [We reply within [X] hours during office hours]

  ✉️  Email — [hospital-domain address]
      [We reply within [X] business days]

  🏥  Visit the Information Desk
      7 Marcos Highway, Barangay Mambugan, Antipolo City
      [ Open in Waze ]  [ Open in Google Maps ]

Emergencies are handled 24/7 at our Emergency Room.
```

**[VERIFY: UASHMC]** Every bracketed value needs a real number. "We reply on Viber within 4 hours, Monday to Saturday, 8am–5pm" is worth more than a generic contact form. Operational specificity is a trust proxy — precision signals a functioning organisation, vagueness signals one that is not ready. It is also the cheapest content on the whole site to produce.

### 7.3 What context transfers

**Phase 1 — pre-filled channel handoff (ships Day One):**

The Viber and SMS links are constructed with a pre-filled body so the patient does not have to retype:

```
viber://chat?number=%2B639478754949&text=
  Hi%20UASHMC%2C%20I%20was%20on%20your%20website%20and%20need%20help%20with%3A%20
  {sanitised_last_question}%0A%0A
  Page%3A%20{page_title}%0A
  Ref%3A%20{session_ref}
```

Payload rules:

- **Sanitised.** The volunteered-SPI filter (G18) runs on the payload before it is written into the link.
- **Truncated** to the last question plus the page title. No transcript.
- `session_ref` is a short opaque code (e.g. `K-8F42`) that staff can quote back to Iozera for a log lookup. It carries no personal data.
- The patient sees the pre-filled message and can edit or delete any of it before sending. **Consent is the send button.**

**Phase 2 — assisted handoff:** a staff-side inbox with transcript summary and `session_ref` lookup, so a patient never repeats themselves. Requires a staffing decision by the COO — who monitors it, in what hours, with what response-time commitment. **Do not promise live handoff in Phase 1**; KRISS's own published channel surface is website-widget only, with no Viber, Messenger or SMS integration documented anywhere. The pre-filled deep link is the honest version, it costs almost nothing, and it works.

### 7.4 Outside office hours

This is the whole reason the layer exists, so it must be explicit rather than apologetic.

**On-hours vs off-hours is computed server-side from a CMS-managed hours record, not hardcoded, and it accounts for Philippine national holidays _and_ Antipolo's local fiesta calendar** — the "except holidays" qualifier is standard in this market for a reason.

**Off-hours answer footer, appended automatically:**

```
It's currently outside our office hours. I can still answer questions
about our doctors, services, schedules, HMOs and directions right now.

For anything that needs a person:
  · Emergencies — the Emergency Room is open 24/7, or call 911
  · Non-urgent — leave a Viber message at +63 947 875 4949 and our
    team will reply on [next working day, computed]
  · Or call 02 8248 3460 from [opening time, computed]
```

**Emergency escalation is never gated by hours.** The emergency card is identical at 2pm and at 2am.

**The executive line:** today, an off-hours question either goes unanswered on Facebook until morning, or the patient calls a competitor. With this layer, the ~60–70% of inquiries that are purely informational — HMOs, hours, prices, directions, prep instructions, how to get a medical certificate — are answered at the moment the patient asks. That is not automation for its own sake. That is census.

---

## SECTION 8 — WHAT KRISS LEARNS FOR THE HOSPITAL

### _The strategic argument for Harvey and Dr. Bravo_

**The pitch, in one line:** every question a patient types is a piece of market research UASHMC currently throws away. The unanswered-question log is the most honest demand signal the hospital will ever own — nobody edits it, nobody flatters it, and no competitor has one.

For a hospital that opened in 2025 and is still building service visibility, this reverses the usual order: instead of guessing which service to add and then marketing it, you read what your own catchment asked for last month, with volumes and dates.

### 8.1 Dashboard — tabs and exact fields

**TAB 1 — Volume & Coverage**

| Field                                              | Type                   | Purpose                                                                                            |
| -------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `sessions`                                         | int, by day/week/month | Adoption                                                                                           |
| `sessions_business_hours` / `sessions_after_hours` | int + %                | **The "why 24/7" number.** Expect this to be the single most persuasive chart at the first review. |
| `messages_per_session`                             | avg, median            | Engagement depth                                                                                   |
| `answered_grounded`                                | count + % of total     | Coverage rate                                                                                      |
| `answered_with_soft_caveat`                        | count + %              | Content quality gap                                                                                |
| `unanswered`                                       | count + %              | **The content backlog.** Target: falling month over month.                                         |
| `refused_by_category`                              | count by R1–R9         | Guardrails working as designed                                                                     |
| `handoff_rate`                                     | %                      | Where content is thin                                                                              |
| `top_entry_page`                                   | ranked                 | Where patients get stuck on the site                                                               |
| `device_split`                                     | mobile/desktop %       | Design priority                                                                                    |
| `language_detected`                                | en / fil / taglish %   | **Evidence for the Phase 2 Filipino decision.**                                                    |

**TAB 2 — Top Inquiries** _(Harvey's tab)_

| Field                      | Type                                    |
| -------------------------- | --------------------------------------- |
| `normalised_question`      | clustered string                        |
| `volume`                   | int, trend arrow vs. previous period    |
| `intent_class`             | A1–A10                                  |
| `resolution_status`        | answered / soft / unanswered / refused  |
| `source_page_served`       | URL                                     |
| `page_click_through_rate`  | % who opened the cited page             |
| `booking_click_through`    | % who clicked through to NowServing     |
| `entity_mentioned`         | doctor / specialty / service / HMO name |
| `first_seen` / `last_seen` | date                                    |

**TAB 3 — Unanswered Questions** _(the editorial backlog — the highest-value table in the system)_

| Field                         | Type                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------- |
| `raw_query`                   | verbatim (SPI-scrubbed)                                                           |
| `cluster_label`               | auto-clustered theme                                                              |
| `volume`                      | int                                                                               |
| `trend`                       | new / rising / steady / falling                                                   |
| `nearest_existing_page`       | URL + similarity score                                                            |
| `gap_type`                    | **no page** / page exists but thin / page exists but unindexed / wording mismatch |
| `assigned_owner`              | from the §5.2 owner table                                                         |
| `status`                      | new / assigned / drafted / published                                              |
| `days_open`                   | int — **SLA: no cluster above 10 queries/month stays "new" past 14 days**         |
| `resolved_by_content_version` | closes the loop                                                                   |

**TAB 4 — Demand Signals** _(Dr. Bravo's tab — the strategic one)_

| Field                               | Type                                              | Why it matters                                                                                                              |
| ----------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `requested_service_not_offered`     | clustered + volume + trend                        | **Direct, unsolicited service-line demand.** "How many people asked us for dialysis last quarter?" is a board-grade number. |
| `requested_specialty_not_on_roster` | clustered + volume                                | Recruitment priority, evidence-based                                                                                        |
| `requested_hmo_not_accredited`      | HMO name + volume                                 | **Contract negotiation ammunition.** "We turned away 140 Intellicare inquiries this quarter" is how you get a better rate.  |
| `price_sensitivity_queries`         | service + volume                                  | Which prices to publish, and package design                                                                                 |
| `schedule_gap_signals`              | specialty × requested day/time vs. available      | Clinic-hour expansion, e.g. Saturday demand for Ortho                                                                       |
| `geographic_signals`                | landmark/barangay mentioned in directions queries | Catchment mapping, and where to place signage                                                                               |
| `competitor_mentions`               | hospital name + context                           | Who UASHMC is actually compared against                                                                                     |
| `channel_preference_signals`        | Viber vs. call vs. email handoff clicks           | Where to staff                                                                                                              |
| `telemedicine_interest`             | volume + specialty                                | Whether to scale "Doctor in the House"                                                                                      |
| `seasonality`                       | volume by intent by week                          | Campaign timing                                                                                                             |

**TAB 5 — Safety & Governance** _(Dr. Pedraja's tab)_

| Field                                                | Type                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| `red_flag_triggers`                                  | count, by trigger term, with full verbatim query           |
| `red_flag_false_positive_review`                     | Medical Director disposition per trigger                   |
| `refusals_by_category`                               | R1–R9 counts + trend                                       |
| `output_filter_rejections`                           | count + verbatim rejected text (for prompt/content fixing) |
| `citation_resolution_failures`                       | count — broken or moved source URLs                        |
| `stale_content_served`                               | count by `answer_class`                                    |
| `content_overdue_for_review`                         | list by owner, days overdue                                |
| `escalations_to_human`                               | count by trigger, by hour of day                           |
| `patient_complaints_traced_to_KRISS`                 | count + `session_ref` + `content_version`                  |
| `routing_table_version` / `red_flag_lexicon_version` | current + last reviewed date                               |

### 8.2 Reporting cadence

| Report                | To                              | Cadence         | Contents                                                                                                     |
| --------------------- | ------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Safety log review** | Dr. Pedraja                     | **Monthly**     | Tab 5 in full. Every red-flag trigger read individually. Sign-off recorded.                                  |
| **Content backlog**   | Content owners + Tere Barcelona | **Monthly**     | Tab 3, assigned and dated                                                                                    |
| **Marketing insight** | Harvey Lozada                   | **Monthly**     | Tabs 2 + 4. Top 20 questions, top 10 unanswered, demand signals.                                             |
| **Executive brief**   | Dr. Bravo, Dr. Directo          | **Quarterly**   | One page: volume, after-hours share, coverage rate trend, top 5 demand signals with volumes, safety summary. |
| **Governance review** | All stakeholders                | **Semi-annual** | Routing table, red-flag lexicon, refusal copy, retention policy, PIA refresh                                 |

### 8.3 The metric we do NOT optimise

**Open rate is not a success metric.** A widget that interrupts people has a high open rate and a low resolution rate. The metrics that matter are `answered_grounded %`, `unanswered %` falling, `handoff_rate` falling as content deepens, and `booking_click_through` rising. Agree this in the room, before someone asks why the bot doesn't pop up.

### 8.4 Privacy constraints on all of the above

Analytics are **aggregate and de-identified**. Verbatim queries are retained only in the safety and unanswered tables, SPI-scrubbed by G18, under a declared retention period with access controls, a deletion route, and honouring of objection/rectification/erasure requests. Retention period is a **[VERIFY: UASHMC + DPO]** decision, published in the privacy notice, and stated in the widget's pre-chat disclosure. This is required by NPC Circulars 2023-06 and 2023-04 and Advisory 2024-04 — and stating the number publicly is itself a trust signal.

---

## SECTION 9 — PHASING

### Making "AI-ready from Day One" concrete

**The distinction that makes the phrase mean something:** _AI-ready from Day One_ is not "the chatbot launches on day one." It is **"every architectural decision made on day one assumes the assistant, so nothing has to be rebuilt to add it."** Structure, not features. Present it that way and it stops sounding like a slogan.

### 9.1 What "AI-ready" means as architecture — decided at kickoff, costs nothing extra

| Decision                                                                                                     | Why it must be made at kickoff                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Semantic, server-rendered HTML — no content locked in images or PDFs                                         | Prices in pixels and rosters in PDFs are unindexable, unquotable and unreadable by any assistant. ADH's OPD Pricing nav item resolves to a SharePoint Excel file; their packages are images with prices baked into the pixels. Retrofitting text later means re-authoring everything. |
| One CMS, one provider database, many views                                                                   | Fragmented content means the bot and the site disagree. Centralising the provider database is repeatedly named the top optimisation for health-system sites.                                                                                                                          |
| Stable, human-readable URLs                                                                                  | Citations must not break. A moved URL is a broken answer.                                                                                                                                                                                                                             |
| Structured fields, not prose blobs, on doctor/service/HMO/price records                                      | Retrieval quality is a function of structure. Prose-only content cannot be filtered, dated, or class-gated.                                                                                                                                                                           |
| `schema.org` markup: `MedicalOrganization`, `Physician`, `MedicalProcedure`                                  | One content effort, three payoffs: SEO, AI-answer visibility, chatbot grounding.                                                                                                                                                                                                      |
| Every record carries `owner`, `approved_by`, `last_reviewed`, `review_due`, `answer_class`, `lto_authorized` | Governance is a schema property, not a later policy memo.                                                                                                                                                                                                                             |
| Content export/index endpoint                                                                                | The ingestion path for KRISS, and for whatever comes after it.                                                                                                                                                                                                                        |
| Widget slot reserved in the layout system; suppression rules coded                                           | No z-index archaeology later; no re-testing every page.                                                                                                                                                                                                                               |
| Bilingual field pairs on the four money-question content types                                               | Adding Filipino later becomes content entry, not re-architecture.                                                                                                                                                                                                                     |

Every item above is free if decided now and expensive if decided in month six. **That is the argument.**

### 9.2 Day One — ships at launch

| #   | Deliverable                                                                                                                                                                                                 | Notes                                                            |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 1   | **Website Layer 1 complete** for the priority journeys: Find a Doctor · Services & Specialties · HMOs & PhilHealth · Patients & Visitors · Emergency Information · About & Licensing · Contact & Directions | The foundation. Non-negotiable prerequisite.                     |
| 2   | **Emergency architecture** — header strip, mobile `Call ER` slot, `/emergency` page, NHS-pattern care cards                                                                                                 | Must be live before any assistant.                               |
| 3   | **KRISS widget** on desktop + mobile, per §2 and §3                                                                                                                                                         | Collapsed, user-initiated, no auto-open                          |
| 4   | **Guardrail pipeline G1–G24**                                                                                                                                                                               | The full deterministic stack. Not partial.                       |
| 5   | **Emergency lexicon** (EN + FIL + Taglish), signed by the Medical Director, version-controlled                                                                                                              | Signature required before launch                                 |
| 6   | **Refusal copy R1–R9**, approved                                                                                                                                                                            | Verbatim as specified                                            |
| 7   | **Grounded answering** across intent classes A1–A8 and A10                                                                                                                                                  | With citations                                                   |
| 8   | **Routing table v1** (~100 rows), signed by the Medical Director                                                                                                                                            | Enables A9                                                       |
| 9   | **"Who treats this at UASHMC" module** on every service and specialty page                                                                                                                                  | Mechanism 1 — the backbone                                       |
| 10  | **Pre-filled Viber/SMS/trunkline handoff** with sanitised context                                                                                                                                           | Not live agent handoff                                           |
| 11  | **Bilingual approved variants** for HMO/LOA, admission, ER, PhilHealth                                                                                                                                      | Canned pairs, not translation                                    |
| 12  | **CMS → index sync** with the automated verify + rollback gate                                                                                                                                              | §5.3 steps 5–6                                                   |
| 13  | **Analytics Tabs 1, 2, 3, 5**                                                                                                                                                                               | Tab 4 (demand signals) needs ~90 days of volume to be meaningful |
| 14  | **Privacy artefacts**: privacy notice, layered + just-in-time notices, in-widget pre-chat disclosure, DPO contact, NPC complaint route, grievance mechanism, retention policy                               | NPC 2023-04, 2023-06, Advisory 2024-04                           |
| 15  | **PIA completed and signed**                                                                                                                                                                                | Advisory 2024-04. Pre-launch gate.                               |
| 16  | **DPA/DSA executed**: UASHMC = PIC, Iozera = PIP                                                                                                                                                            | Advisory 2024-04                                                 |
| 17  | **Hospital-domain email live**                                                                                                                                                                              | Prerequisite, not a nice-to-have. Security remediation.          |

### 9.3 Later phases — dated, not vague

**Phase 2 (target: 60–120 days post-launch)**

- Searchable **HMO type-ahead checker** — the single widest wedge in the market: nobody, anywhere in the Philippine sample, has one. "Is my Maxicare accepted?" currently requires scrolling 47 items or squinting at logos.
- Full **conversational Filipino / Taglish**, subject to capability testing **[OPEN — INTERNAL]**
- **Assisted human handoff** — staff inbox, transcript summary, response-time SLA **[requires COO staffing decision]**
- Analytics **Tab 4** live with 90 days of trend
- Routing table expanded to ~200 rows, second Medical Director review
- Contextual proactive nudge — **at most once per session, only on genuine intent signals** (long dwell on a service page, a zero-result search, hesitation in a form). Never on the homepage.
- Deeper **NowServing.ph** integration: live availability surfaced in KRISS answers, if the platform permits

**Phase 3 (6–12 months)**

- **Viber / Messenger channel** for KRISS — **this is new engineering, not configuration.** KRISS's documented channel surface is website-widget only. It is also where UASHMC's patients actually are, so expect the question and answer it as scope. **[OPEN — INTERNAL: is KRISS built on a third-party chat platform underneath? That determines whether this is configuration or a build.]**
- Price/package coverage expansion, subject to the §9.5 transparency decision
- Post-visit information flows, results-availability notifications _(logistics only, never content of results)_
- Multi-site support if UASHMC expands

**Explicitly NOT roadmapped, at any phase**

- Symptom checking · triage · severity scoring
- Diagnosis or diagnostic support · reading imaging
- Medication guidance
- Result interpretation
- Autonomous booking without a human-visible confirmation
- Voice

The last group is not "not yet." It is **out of scope by design**, because it is what keeps the system outside the medical-device perimeter. Put that sentence on the slide.

### 9.4 Launch gate — the acceptance criteria

Agree these in the room so scope is testable rather than aspirational. Any failure blocks launch.

```
□ 100% of suggested prompts (all contexts) return a correct, cited answer
□ 100% of red-flag lexicon terms trigger the emergency card — automated suite
□ 0 diagnostic-language phrases produced across a 500-query adversarial suite
□ 0 fabricated numbers or named entities across the same suite (G9)
□ 100% of answers carry a resolvable citation to a live page
□ 0 occlusion of any tel: link or primary CTA at 320/375/390/414/768/1280/1440/1920 px
□ Widget absent on /emergency and on all booking/enquiry forms
□ WCAG 2.2 AA on the widget: keyboard, focus, Esc, aria-live, 4.5:1, 200% zoom,
  reduced motion, 44×44 minimum targets
□ Emergency card legible one-handed, in bright sunlight, on a cracked mid-range
  Android on mobile data
□ CMS→index propagation under 15 minutes, verified
□ Auto-rollback verified by deliberately breaking a smoke test
□ Routing table + red-flag lexicon signed and dated by the Medical Director
□ PIA signed · DPA/DSA executed · DPO published · retention policy published
□ Hospital-domain email live
```

### 9.5 Decisions that belong to UASHMC, not to us

The brief is explicit that Harvey must help _shape_ this, not rubber-stamp it. These are real choices with real consequences, and each visibly changes the product:

1. **[Harvey]** Mobile bottom-bar composition — which two or three actions earn the sticky bar.
2. **[Harvey]** The opening prompt set. He owns the Messenger inbox; that is primary research we do not have.
3. **[Harvey + Dr. Bravo]** Price-transparency posture — how much to publish. Genuinely commercial. Note that third-party aggregators already rank for "[hospital] Rates & Fees 2026" pages about other hospitals; the vacuum gets filled by someone with worse accuracy and no accountability. But a stale online price list is worse than none, so the decision comes with a maintenance commitment attached.
4. **[Dr. Pedraja]** Routing table scope and the red-flag lexicon. Hers to sign, and the signature is the governance artefact.
5. **[Dr. Pedraja]** Whether telemedicine clinical scope claims may be published at all. The 2020 DOH telemedicine circulars are COVID-response instruments whose current force we could not verify. Recommendation: Phase 1 describes the service and how to book it, and publishes no clinical scope claims. That is a defensible phase boundary and it is her call.
6. **[Tere Barcelona]** Content owners by name (§5.2), and the human-handoff staffing model and response-time commitments.
7. **[Dr. Bravo]** Whether the assistant is announced publicly as a first-in-market capability, or launched quietly and announced after 60 days of clean logs. There is a real case for quiet.

---

## SECTION 10 — THE HONEST LIMITATIONS SLIDE

**Why this slide exists:** credibility with a hospital board comes from naming limits before they do. Every item below is something a sharp person in that room could find in ten minutes. Naming them first converts each from an ambush into evidence of diligence.

### 10.1 What KRISS will not do well at launch

| #   | Limitation                                                                                                                                                                   | Why                                                                                                                 | How we manage it                                                                                                                                                                                                                                                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **It only knows what the website says.** On day one, coverage will have holes.                                                                                               | The corpus starts small.                                                                                            | Answer-coverage rate is a published, tracked metric with a falling target. The unanswered log is the roadmap. Expect roughly 60–75% grounded coverage in month one, rising with content.                                                                                                |
| 2   | **It cannot diagnose, advise, or triage — and never will.**                                                                                                                  | Deliberate. It is the FDA SaMD boundary and the hospital's licence exposure.                                        | Named as a design constraint, not a gap. Say the boundary out loud, every time.                                                                                                                                                                                                         |
| 3   | **It does not book appointments.**                                                                                                                                           | Confirmed from the vendor's own FAQ: KRISS provides links to the scheduling portal rather than scheduling directly. | Framed as the intended architecture: KRISS informs, **NowServing.ph** books. UASHMC's existing investment becomes deliberate rather than incidental.                                                                                                                                    |
| 4   | **Website only at launch — not Viber, not Messenger, not SMS.**                                                                                                              | KRISS's documented channel surface is a website widget. This is where UASHMC's patients actually are.               | Named as Phase 3 scope with an engineering dependency, not as a capability. Pre-filled Viber deep links bridge it on Day One.                                                                                                                                                           |
| 5   | **Full conversational Filipino is not confirmed at launch.**                                                                                                                 | No public multilingual claim exists for KRISS.                                                                      | Emergency and refusal _detection_ is bilingual from Day One. Approved bilingual variants cover the four money questions. Full Filipino is Phase 2, subject to testing. **We will not claim it before we have tested it.**                                                               |
| 6   | **No voice, no phone, no IVR.**                                                                                                                                              | Vendor roadmap Level 3, marked not complete.                                                                        | Not scoped. Not promised.                                                                                                                                                                                                                                                               |
| 7   | **No EMR / HIS / HMO-system integration.** No live coverage checks, no real-time bed or queue status.                                                                        | No named integration exists.                                                                                        | KRISS answers _process_ questions ("how do I get an LOA") not _account_ questions ("am I covered"). The distinction is a guardrail (G11), not a limitation to apologise for.                                                                                                            |
| 8   | **No ER wait times.**                                                                                                                                                        | We have no live feed, and a stale wait time is a specific broken promise at the worst possible moment.              | Deliberately omitted. Strictly better than publishing a number we cannot honour.                                                                                                                                                                                                        |
| 9   | **Human handoff is a pre-filled message, not a live agent, at launch.**                                                                                                      | Live handoff needs a staffing decision and an owned inbox.                                                          | Honest Day One version. Phase 2 upgrade, contingent on a COO decision.                                                                                                                                                                                                                  |
| 10  | **Answer quality will vary by content class.** Schedules and prices are the fastest to go stale.                                                                             | Weekly schedule accuracy needs a named owner.                                                                       | Class-based staleness rules (§5.5): stale financial content **refuses rather than guesses**. Mandatory caveats. Named owners with review dates.                                                                                                                                         |
| 11  | **It will get things wrong.**                                                                                                                                                | Any retrieval system will.                                                                                          | Every answer is cited, so every error is traceable to a page, an owner, and a version — and fixable in one place, in minutes. This is the difference between a fixable system and a mysterious one.                                                                                     |
| 12  | **No public hospital deployment to point to.** KRISS's shipped maturity is Levels 1–2 of its own six-level roadmap; the deployments we can speak to are US dental practices. | It is a young product.                                                                                              | We are honest about it, and we compensate with a **PIA, a signed guardrail spec, a signed routing table, a signed red-flag lexicon, and monthly Medical Director log review**. Governance substitutes for reference logos, and for a hospital board it is arguably the better currency. |

### 10.2 The three things to say out loud when this slide is up

1. **"We would rather it say 'I don't know' than guess."** A hospital assistant that guesses is worse than no assistant. Every design choice in this deck follows from that sentence.
2. **"The safety model is code, not a prompt."** Emergency detection, refusals, the grounding gate and the output filter are deterministic gates that run before and after the model. They do not depend on the model behaving well on a bad day.
3. **"Accountability sits with UASHMC, and we will say so in the contract."** Under NPC Advisory 2024-04, the hospital is the Personal Information Controller and that responsibility cannot be delegated to us or to the technology. We are the Personal Information Processor, we will sign a data processing agreement saying so, and we are telling you this before you have to ask.

---

## APPENDIX A — OPEN ITEMS FOR ALLAN, BEFORE THE ONSITE

Internal. Not for the client deck. Each one is a live exposure if it surfaces in the room unprepared.

1. **Settle the corporate story.** Is KRISS Iozera's product, a sister company, or a client? Iozera's own homepage carries kriss.ai as a _customer testimonial_; kriss.ai's site contains zero mentions of Iozera. Pick one story and brief everyone. Telling both is how you lose Harvey Lozada.
2. **Did we build kriss.ai's website?** If yes, it is the centrepiece proof of web capability and we should say so explicitly. If no, we have no public web-design portfolio and need a different proof — most likely a working prototype built for UASHMC.
3. **Fix or disown iozera.ai.** `iozera.ai/contact/` currently publishes a stock WordPress demo address in New York, `youremail@yourdomain.com`, and a `+88` phone number; the blog is untouched theme filler including "hello-world". We are about to pitch website craft to a Marketing Director who will google us. Either fix `/contact/` and purge the demo posts before the onsite, or decide never to reference iozera.ai and lead entirely with kriss.ai.
4. **Test Taglish on the live KRISS widget.** This will be asked in an Antipolo boardroom. Have the real answer.
5. **Confirm the ingestion path** (§5.1). The CMS-indexed architecture in this document is a build requirement, not a shipped feature. Know which parts are configuration and which are engineering before the slide goes up.
6. **Is KRISS built on a third-party chat platform underneath?** The widget's DOM suggests it might be. This determines whether Viber/Messenger and Filipino support are configuration or new engineering — and therefore whether Phase 3 is weeks or months.
7. **Commercial framing.** KRISS's public price is $199/month plus a $500 setup fee — SMB dental-clinic pricing that UASHMC can find in thirty seconds. Decide how a hospital engagement is framed before someone anchors on it.
8. **Prepare the written guardrail spec as an artefact**, not a verbal promise. Sections 6.3, 6.5 and 6.7 of this document are that artefact. Print them. Dr. Pedraja and Dr. Bravo are clinicians; if they open kriss.ai during the meeting and see the marketing demo where the bot volunteers ibuprofen guidance, a verbal assurance will not hold. A signed configuration spec will.
9. **Record a screen capture of kriss.ai as a demo backup.** Its WebGL preloader stalled repeatedly in testing and did not always recover on reload. Do not bet the demo on hospital wifi.
10. **Our real DPA posture** — RA 10173, data residency, PHI handling, retention. Nothing is publishable today, and §9.2 items 14–16 are launch gates.

## APPENDIX B — CONTENT-GATHERING ASKS FOR THE ONSITE

_This list is meeting goal #4, and it gives Harvey and Dr. Pedraja substantive decisions to own rather than a finished design to approve._

1. Copy of the **DOH License to Operate** — registered facility name, classification level, authorized services, validity dates.
2. Confirmation that the **"Medical Center"** designation matches the licensed functional capacity (AO 2012-0012 requires the name to be compatible with functional capacity).
3. **PhilHealth accreditations held, by benefit package**, including Konsulta status.
4. **HMO list** with a named owner, an update cadence, LOA desk location, hours and direct extension.
5. **ER-direct phone number** and any additional mobile numbers for the emergency block.
6. **Clinic schedules** for all doctors, with a named weekly owner.
7. **DPO** name and contact; **NPCRS** registration status.
8. Whether **telemedicine** clinical claims are cleared for publication, and by whom.
9. Decision on publishing a **price list** online, with the maintenance commitment stated.
10. **Physician profile template** approved by the Medical Director (the PRC/PMA Code's website carve-out permits substantive credentials — use it deliberately).
11. **Accessibility inventory**: PWD parking, ramps, accessible restrooms, priority lanes, assistance desk.
12. **Response-time commitments** per channel, and office hours including the holiday policy.
13. **Photography access** — building from the street, ER entrance, reception, room types, OR, imaging suite, real staff. No stock photos of people; for a hospital whose existence a patient cannot yet verify from reputation, stock imagery is net negative.
14. **"Doctor in the House" back catalogue** — the most expensive kind of E-E-A-T content, already produced and already approved. It makes a small roster look substantially deeper on day one, and it turns Harvey's existing content calendar into the website's content pipeline.
15. **Migration of customer relations email off Gmail**, framed as an NPC Circular 2023-06 access-control item.
