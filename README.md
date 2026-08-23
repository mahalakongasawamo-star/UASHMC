# UASHMC Website + KRISS AI — onsite presentation kit

Prepared for the onsite with Dr. Bravo, Dr. Pedraja, Tere Barcelona, Dr. Directo and Harvey Lozada.

## Start here

| File                                                                       | What it is                                                                                                                                                                                                                                                                            | Show the client?                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`prototype/uashmc-prototype.html`](prototype/uashmc-prototype.html)       | **The clickable homepage concept.** Eight pages (including About UASHMC and News & Resources, both footer-only), two homepage directions, desktop/mobile toggle, a working HMO checker, and a live KRISS AI demo. Uses UASHMC's own photography — the real building, the CT suite, a sleep study, their maternity campaign. Runs offline from a laptop. | ✅ **Yes — this is the centrepiece**                    |
| [`docs/uashmc-presentation-pack.html`](docs/uashmc-presentation-pack.html) | **The plan.** Sitemap, three patient journeys, KRISS integration + safety model, content checklist by owner, 8-week build plan, risks, 10 discovery questions, 90-minute agenda.                                                                                                      | ✅ Yes                                                  |
| [`docs/uashmc-design-guidelines.md`](docs/uashmc-design-guidelines.md)     | **The build contract.** Design tokens taken from UASHMC's own logo and collateral, component state rules, WCAG 2.2 AA acceptance criteria, tone standards and a QA checklist. Written to be attached to the SOW.                                                                      | ✅ Yes — if the conversation turns to how it gets built |
| [`DESIGN.md`](DESIGN.md) / [`DESIGN.json`](DESIGN.json)                    | **Internal tooling.** The same token system as the design guidelines, in the machine-readable schema our own AI design tools read. Not written for a client audience — keep it in sync with the guidelines by hand, don't hand it to UASHMC.                                          | ❌ Internal only                                        |
| [`docs/INTERNAL-before-the-onsite.md`](docs/INTERNAL-before-the-onsite.md) | **⛔ Internal only.** The client-reference gap, the commercial numbers still unset, what not to claim about KRISS, the three hardest questions, and defects already fixed.                                                                                                            | ❌ **Never**                                            |

Published (private) links:

- Prototype — https://claude.ai/code/artifact/82fd0edc-3a3b-4b47-969f-bddc124c1e85
- Presentation pack — https://claude.ai/code/artifact/6f1071f4-477b-44bd-b0ba-12c96e248b83

The prototype also deploys to Vercel (`vercel.json` rewrites `/` to the HTML file). On any
`*.vercel.app` hostname it auto-detects and hides the studio chrome — dev toolbar, tweak panel,
provenance legend, mock browser frame — so the link you hand UASHMC shows only the real, full-page
site, sized to whatever device they open it on. Locally (`file://` or `localhost`) the studio chrome
still shows, for demoing in the room or editing.

## Using the prototype in the room

Three controls in the dark bar along the top:

- **View** — Desktop / Mobile. Mobile shows the sticky `Call · Book · Ask` bar.
- **Content sources** — the honest-placeholder layer. Toggling it on colour-codes every fact on the
  page: green = from UASHMC's own public channels, amber = plausible but needs confirming,
  violet = our placeholder. **This is the moment that reframes the meeting** from "approve our
  design" to "here is your content list."
- **Homepage direction** — A (task-first) or B (story-first). Both keep UASHMC's tagline; they differ
  in whether the hospital leads with utility or with presence. This is Harvey's decision to make.

Things worth demonstrating live:

- Type `may medicard ba kayo?` into the assistant. It answers from UASHMC's **own** published
  partner poster — twenty names, transcribed from `images/hmo partners.jpg`.
- Then type `Maxicare` into the HMO checker on `/hmo`. It says _not on our partner list_, because
  they are not on that poster. Placeholder HMO names have been removed from the prototype
  entirely: in a demo a patient cannot tell a placeholder from a claim.
- Type `magkano ang room?`. It refuses to quote a room rate, then names the four packages UASHMC
  _does_ publish a price for.
- Then ask it something it cannot answer and let the room watch it refuse.
  **The refusal is the demo.**
- A distress phrase gets a calm green crisis card routed to the NCMH hotline — never the red ER
  card, and never UASHMC's ER.

## Research behind it

`research/` holds the source material. All of it is from **public sources**, gathered for concept
development only — nothing in it is confirmed by UASHMC.

| File                                                                                                    | Contents                                                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `verified-facts.md`                                                                                     | What is actually known about UASHMC, with sources, and what only they can answer                                                     |
| `ph-hospital-sites.md`                                                                                  | Field report on 11 Philippine hospital websites + the Antipolo/Rizal field, with the twelve attackable gaps                          |
| `ph-compliance.md`                                                                                      | DOH, PhilHealth, HMO/LOA mechanics, Data Privacy Act, FDA software boundary, RA 10932, senior/PWD, price transparency                |
| `finder-ux.md`                                                                                          | Find-a-Doctor and Find-a-Service UX, safe symptom routing, emergency care cards, chatbot placement, trust signals for a new hospital |
| `kriss-product.md`                                                                                      | What KRISS AI demonstrably is, safe-to-claim vs overclaim, reference candidates                                                      |
| `sitemap.md` · `patient-journeys.md` · `kriss-integration.md` · `delivery-plan.md` · `homepage-spec.md` | Full strategy documents the presentation pack is distilled from                                                                      |
| `critique-1.md`                                                                                         | Adversarial review in the voice of the Medical Director — clinical safety, fabrication and privacy defects                           |
| `critique-2.md`                                                                                         | Adversarial review in the voice of an agency founder — whether it closes, the Harvey problem, commercial gaps                        |

Both critiques were acted on; the fixes are listed in §10 of the internal brief.

## The one thing to keep saying

The mock-up is a **starting concept for discussion**. The meeting succeeds if UASHMC leaves owning
the direction — not if they approve ours.
