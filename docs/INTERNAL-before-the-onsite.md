# ⛔ INTERNAL — DO NOT TAKE THIS FILE INTO THE BUILDING

**Audience: Allan + the Iozera team only.** Not for UASHMC, not for the leave-behind folder,
not printed and left in a stack on a table. It contains our own gaps.

Everything client-facing lives in two places:

- The prototype → `prototype/uashmc-prototype.html`
- The presentation pack → `docs/uashmc-presentation-pack.html`

Before anything is exported or printed for the client, have **someone other than the author**
search the client bundle for: `Allan`, `INTERNAL`, `iozera.ai/contact`, `$199`, `dental`,
`Houston`, `portfolio`, `denchat`, `vercel`.

---

## 1. The five things to settle before you drive there

Ranked. If you only get through four, get through the first four.

| #   | Decision                                                                       | Why it can't wait                                                        |
| --- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 1   | **The client reference.** Pick one, or decide to have none and say so.         | §2 below. Most likely deliverable to lose the account.                   |
| 2   | **Fix or firewall `iozera.ai`.**                                               | Harvey will google you mid-meeting. §3.                                  |
| 3   | **The commercial numbers.** Price, payment schedule, retainer, KRISS model.    | "What does this cost?" is certain, probably in the first 20 minutes. §4. |
| 4   | **The KRISS corporate story.** One sentence, everyone says only that sentence. | §5.                                                                      |
| 5   | **Test Filipino/Taglish on KRISS.**                                            | You will be asked. Don't guess in the room. §6.                          |

---

## 2. The client reference — the one deliverable I could not research for you

The brief asked for _"our strongest existing client website."_ **Nothing usable is publicly
visible**, and this is genuinely internal knowledge only you have. What the research established:

- `iozera.ai` publishes **no web design or web development service line at all** — not on the
  homepage, not in the sitemap. The Philippine presence exists only in staff LinkedIn profiles.
- `kriss.ai` is **genuinely impressive front-end work** — a WebGL/3D isometric clinic you scroll
  and click through, PayloadCMS-backed, clean typography. Rated 9/10 on craft, 5/10 on relevance
  (the body copy is dental). **But nothing on that site credits Iozera**, so you must confirm
  internally whether we can claim it.
- `denchat.com` is the **most structurally relevant** thing that exists — search → match → book,
  a provider directory with profiles, footer reads "Powered by Kriss.ai." That is literally the
  Find-a-Doctor journey, already shipped. **But it has visible defects** — missing numbers in the
  stat block, truncated copy, a testimonial carousel repeating three people with empty stars,
  most listed dentists at 0.0 rating, and a dirty location list. **Screenshot it; do not hand over
  the link.**
- `kriss.ai`'s "Current Clients" block is **disabled placeholder data** — the client names are
  fake and every one links to `google.com`. There is no client list. The **Hospital category is
  empty**: nobody has shipped this to a hospital.

### What to do

**A. Pick ONE site. Not three.** Live URL, opened on a phone over cellular in front of them.
Be ready with six answers, unhesitatingly:

1. What was the client's problem?
2. What did we do?
3. What changed, measurably?
4. What was our role exactly — design, build, both, or subcontracted?
5. How long did it take?
6. Who was the client contact, and may they be called? _(Get their permission first.)_

**B. If it's `kriss.ai` and we built it — say so explicitly and early.** It becomes the centrepiece
web-craft proof, and right now it reads as nobody's work. **Do not open it live** — its WebGL
preloader stalled repeatedly in testing and did not always recover on reload. Screen recording or
a static walkthrough.

**C. If there is genuinely nothing showable, volunteer it first, in one sentence, and substitute
immediately:**

> _"I should tell you before you ask: we don't have a hospital in our portfolio, and I'm not going
> to show you a restaurant website and pretend it's relevant. That's exactly why I built you a
> working prototype instead of a slide deck. Judge us on this — it's the same craft, and it's
> about your hospital."_

That is a **strong** move delivered proactively and a **fatal** one extracted under questioning.

> **The rule that governs the entire meeting:** any weakness you volunteer is diligence.
> Any weakness they discover is a lie.

**D. Negotiate portfolio rights into this contract.** Our structural weakness is the absence of a
reference. This project is the cure. Ask for the right to publish UASHMC as a named case study
with metrics — **ask in the room while goodwill is high.** It is much harder to get later, and a
hospital may want to restrict it.

---

## 3. `iozera.ai` — fix or firewall tonight. No half measures.

`iozera.ai/contact/` currently publishes, live:

- Address: **"198 West 21th Street, Suite 721 New York, NY 10010"** — a stock WordPress demo
  address, typo included
- Email: **`youremail@yourdomain.com`**
- Phone: **`+88 (0) 101 0000 000`**

And the blog is untouched theme filler — `hello-world`, `a-retina-theme`, `post-with-audio`.
Footer still reads "Copyright © 2023."

We are about to pitch website craft to a **Marketing Director**. Two options, pick one:

1. **Fix it** — clean `/contact/`, purge the demo posts, update the footer year. A few hours.
2. **Firewall it** — decide nobody says the words "iozera.ai" and we lead entirely with the
   prototype and (if we can claim it) `kriss.ai`.

A New York placeholder address on a Philippine agency's contact page is a credibility event you
cannot talk your way out of afterwards.

---

## 4. The commercial gaps — fill these before you go

The plan has a gate with no key: the content checklist says a signed SOW **blocks start**, and
there is no price anywhere. "What does this cost, and what do we get?" is a **certain** question.

### Must have a fluent answer for

| Item                                                                                                                        | Status                                              |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Phase 1 fixed fee                                                                                                           | ❌ not set                                          |
| Payment schedule (mobilization / design approval / launch — e.g. 40/30/30)                                                  | ❌ not set                                          |
| Monthly retainer figure + what it covers                                                                                    | ❌ not set                                          |
| **KRISS commercial model for a hospital**                                                                                   | ❌ not set — and urgent, see below                  |
| Value hypothesis (the numbers that justify the price)                                                                       | ❌ not set                                          |
| Change-order rate + content volume assumption ("Phase 1 includes N service pages and M profiles; additional at X each")     | ❌ not set                                          |
| IP: who owns source, design files, content                                                                                  | ❌ not stated                                       |
| **Photography copyright** — by default the _photographer_ owns the images; physician releases cover likeness, not copyright | ❌ not stated, and a real dispute waiting to happen |
| Hosting/CDN/SSL/monitoring — who pays renewals                                                                              | ❌ not stated                                       |
| Exit terms — what happens if they leave                                                                                     | ❌ not stated (volunteering this is a trust win)    |
| Liability cap, indemnity, insurance                                                                                         | ❌ not stated — hospital procurement will ask       |
| Retainer term, notice period, annual uplift                                                                                 | ❌ not stated                                       |

### The $199 problem

**KRISS's public price is $199/month plus a $500 setup fee.** That is SMB dental-clinic pricing
and UASHMC can find it in thirty seconds. Decide the hospital framing **before** anyone searches:
configuration, guardrail authoring, corpus governance, the clinical review loop, the PIA, and
ongoing tuning are the hospital engagement — the dental SKU is not what is being sold.

### Two structural moves worth making

- **Offer a low-friction first yes.** Nine verbal asks in a room with five senior stakeholders
  evaporate in the car park. Give Dr. Bravo one small, cheap, immediate decision he can make today.
- **Offer risk reversal before they ask for it.** The 5-day default-approval rule protects _our_
  schedule; nothing protects theirs. Pick one: a launch-date commitment with a stated consequence,
  a fixed-fee cap, or a milestone exit at design approval. A first-time buyer with no reference
  site to check needs one asymmetric commitment from us.

---

## 5. The KRISS corporate story — pick one sentence

The public record is inconsistent, and it will not survive a curious Marketing Director:

- `iozera.ai` lists **kriss.ai as a customer testimonial** (quote attributed to Timothy Ngo, Co-Founder).
- `kriss.ai`'s own About page names **Timothy Ngo — CEO** and **Takeshi Hirota — Founder**, and
  **never mentions Iozera anywhere on the site.**
- An Iozera staffer's LinkedIn describes supporting "KrissAI, ChatliAI, and GenV" under "IOZERA AI."

So internally we treat KRISS as ours; publicly it stands alone as a Houston company and Iozera
frames it as a client. **Decide which story we tell, brief everyone before the onsite, and have
everyone say only that sentence.** Telling both stories is how we lose Harvey.

Also worth knowing: the widget's DOM label reads "Livechat Chatbot Iframe", which _suggests_ a
third-party live-chat platform underneath rather than fully bespoke infrastructure.
**Unconfirmed** — but confirm it before anyone promises Messenger/Viber channel work, because it
determines whether that is configuration or new engineering.

---

## 6. Test these tonight

- [ ] **Filipino / Taglish on KRISS.** There is **no public language claim** anywhere on kriss.ai
      — zero hits for multilingual, Tagalog or Filipino. Do not claim it untested. The honest
      structure if it partially works: detection bilingual from day one, generation Phase 2.
- [ ] **The prototype, offline, on the actual presentation laptop.** Open it from the file, with
      wifi off. Check both hero directions, the mobile view, and the KRISS widget.
- [ ] **The prototype on the actual phone** you'll pass around.
- [ ] **A 60-second screen recording of the opening failure demo** — in case the wifi is dead or
      Dr. Bravo would rather not hand over his phone.
- [ ] **A screen recording of `kriss.ai`** — its loader is unreliable and you should never demo it live.
- [ ] Print the leave-behinds. Five items, stapled, in a folder with UASHMC's name on it.

---

## 7. KRISS — safe to claim vs. overclaiming

### ✅ Defensible

- An LLM-based patient-information and navigation chatbot that embeds in a hospital website.
- KRISS = **K**nowledge **R**esource **I**ntelligent **S**earch **S**ystem.
- Purpose-built for healthcare; deployed in US dental practices since early 2024; positioning now
  spans doctors, pharmacists and insurers.
- 24/7 availability; answers service, procedure, coverage, logistics, hours, location questions.
- Tailored to the institution's own policies via a structured questionnaire and vendor-led training.
- **Does not book appointments — it deep-links into the hospital's existing scheduling portal.**
  _(Their own FAQ. Frame it as the NowServing handoff — it makes UASHMC's existing investment look
  deliberate, and it's true.)_
- Deliberately scoped for UASHMC to hospital-approved information only, with human and emergency escalation.

### ❌ Do not say

- **"Deployed in hospitals."** Zero public hospital deployments; their own Hospital category is empty.
- **"Trusted by [any client]."** There is no client list — the one on their site is fake placeholder data.
- **"Multilingual" / "supports Tagalog."** No language claim exists. Highest-risk claim in a PH setting.
- **"Voice / phone / IVR."** Roadmap level 3, flagged incomplete.
- **"Books appointments" / "manages records or billing."** Level 5, flagged incomplete.
- **"Reads X-rays" / "diagnostic support."** Level 4, flagged incomplete — and out of scope by our own constraint.
- **"Works on Messenger / Viber / WhatsApp / SMS."** No evidence. This is where UASHMC's patients
  actually live, so expect the question — answer it as **scope**, not capability.
- **"HIPAA-compliant" / "DPA-compliant" / "we'll sign a BAA."** No compliance posture is published at all.
- **"Integrates with your EMR/HIS."** No named integration anywhere.
- **"Iozera is a web design and development firm."** Not supported by anything public.

### ⚠️ The ibuprofen problem — get ahead of it

KRISS's own public marketing demos **violate our "no clinical advice" constraint**: a demo answer
recommends _"over-the-counter pain relievers like ibuprofen or acetaminophen"_, post-op content
advises avoiding NSAIDs, and a clinician demo generates a clinical note from a diagnosis. There is
also **no HIPAA mention, no clinical disclaimer, no escalation feature** described anywhere on the site.

Dr. Bravo and Dr. Pedraja are clinicians. If either opens `kriss.ai` during the meeting and finds
that, our promise collapses. **Say it first, in the same breath as the guardrail spec:**

> _"If you open kriss.ai you'll find their demo assistant volunteering ibuprofen advice. That's
> their dental product. This is the configuration we're proposing for you — and here it is in writing."_

---

## 8. The three hardest questions

### Q1 — Dr. Bravo or Dr. Directo: _"What does this cost, and what do we get?"_

**Probability: certain.** See §4. The answer must be fluent, not derived on the spot. If you can't
say it without looking down, open with _"commercials at the end, and I'll give you real numbers"_ —
and then actually give them. **Do not let the meeting end with the number unnamed.**

### Q2 — Dr. Pedraja: _"Show me another hospital where this chatbot is running."_

There isn't one. Three-part answer, and part one must be **volunteered before she asks**:

1. _"There is no hospital deployment anywhere. You'd be the first, and I'd rather you heard that
   from me than found it."_
2. Substitute the artifacts, and **hand her the printed document at that exact moment** — signed
   guardrail spec, red-flag lexicon, routing table, PIA, monthly log review to her desk.
   _"Governance is better currency than a borrowed logo, and for a hospital board I think you'll agree."_
3. **De-risk it structurally:** offer a **90-day internal-only pilot**, staff-facing, no public
   exposure, with her holding a kill switch and a written exit. This is what actually converts a
   cautious clinician, and it costs us very little.

### Q3 — Harvey: _"You've already designed our website. What am I contributing?"_

Or the sharper version: _"who writes the copy?"_

1. **Name the boundary out loud:** _"We drafted so you'd have something to react to, not to lock
   it. Anything on this screen can change. The brand layer is yours — and clinical drafting is us
   saving your Medical Director time, not us taking your job."_
2. Give him a **Brand & Voice Sheet** as his own signed artifact, governing the site _and_ KRISS's tone.
   Right now he is the only stakeholder with no artifact: Dr. Bravo gets the licensing block,
   Dr. Pedraja gets a signed guardrail spec, Tere gets the owner table — Harvey gets markers he can click.
3. **Two homepage directions to choose between** — now built into the prototype.
4. **Ask him question 7 before you show the task grid.** When the grid appears with four of his
   Messenger answers on it, he has co-written it and will defend it to his own colleagues. This
   single reordering is worth more than every "open decision" label combined.
5. If time allows, the real concession: **offer to rebuild the hero to his direction inside 48
   hours, and mean it.** A fast visible response to his first instruction converts a gatekeeper
   into a sponsor.

---

## 9. Objections to pre-empt rather than wait for

| Objection                                                       | Pre-empt with                                                                                                                                     |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| _"Who are you? What have you built?"_                           | Volunteer the portfolio position first. §2.                                                                                                       |
| _"Your website has a New York address on it."_                  | Fix or firewall tonight. Don't improvise. §3.                                                                                                     |
| _"Is KRISS yours or someone else's?"_                           | One sentence. Everyone says only that sentence. §5.                                                                                               |
| _"$199 a month?"_                                               | Frame the hospital model **before** anyone searches. §4.                                                                                          |
| _"Can it speak Tagalog?"_                                       | Test tonight. Detection bilingual day one, generation Phase 2. §6.                                                                                |
| _"What if our content doesn't arrive?"_                         | Publish-thin, the launch cohort, 5-day default approval — with a consequence that is fair in both directions.                                     |
| _"Do we need a website, or should we just do Facebook better?"_ | **Journey D.** The overseas family member who funds the surgery never sees the Facebook page. She uses Google, at midnight, from another country. |

---

## 10. Defects already fixed in the prototype after adversarial review

Recorded so nobody reintroduces them:

- **Suicidal-ideation input received a cardiac checklist.** Now has its own crisis card routing to
  the **NCMH Crisis Hotline 1553 / 0917 899 8727 / 0966 351 4518** and 911 — with **no ER checklist**
  and no direction to UASHMC's ER, because what that ER can receive for a psychiatric presentation
  is unconfirmed. The lexicon is deliberately over-inclusive and allows floating Tagalog particles
  ("ayaw **ko nang** mabuhay" must match as surely as "ayaw mabuhay").
- **Exertional dyspnoea in an elderly hypertensive was routed to a clinic, not escalated.**
  "pahingal", "hapo", "kinakapos", "hirap huminga" are now in the emergency lexicon and fire the
  interrupt before any routing runs.
- **Unverified "open 24/7" asserted in safety-critical copy.** Every instance is now either marked
  `confirm` or replaced with a visible _"to confirm"_ marker.
- **"Call ER" button pointed at the trunkline.** Relabelled **"Call hospital"** until an ER-direct
  line exists. Provisioning one is a launch dependency worth asking for — only two hospitals in the
  entire competitive sample get this right.
- **HMO names appeared with "Agreement in place" and no visible caveat.** The HMO page now carries a
  permanent banner stating the names are placeholders and are _not_ a claim of accreditation.
- **Senior/PWD VAT arithmetic published as a worked example.** Removed. Hospital services may
  already be VAT-exempt, so stripping a 12% VAT that was never charged overstates the discount —
  and a published worked example is exactly what a family holds up at the counter. The entitlement
  and required documents stay; the arithmetic is Billing's.
- **RA 10932 stated as an unbounded promise.** Every instance now says **"basic emergency care"**,
  which is what the law actually covers.
- **Invented services in assistant answers** (ECG). Removed or marked.
- **Journeys read as documented incidents alleging staff error.** Now explicitly labelled
  constructed scenarios, with the failures framed structurally — no published answer — rather than
  as someone's mistake. Tere's staff will be in that room.
- **Absolute competitive claims.** "No Philippine hospital has…" is now "in a sample of eleven,
  checked August 2026." The competitor-outage point is reframed: it's a Metro Pacific property and
  they are as plausibly a partner as a rival, so the argument is _the bar is low_, not _they are failing_.

---

## 11. Still open — decisions only the team can make

1. Which corporate story for KRISS. (§5)
2. Did we build `kriss.ai`? If yes it's the centrepiece; if no we have no web portfolio. (§2)
3. Is there private client work under NDA — any real hospital, clinic or PH client?
4. Is KRISS built on a third-party chat platform? Determines whether Viber/Messenger is config or engineering.
5. Can KRISS do Tagalog/Taglish today? (§6)
6. Our real compliance posture on RA 10173, data residency, PHI handling, retention. Nothing is publishable today.
7. All commercial numbers. (§4)
8. Whether to fix or firewall `iozera.ai`. (§3)
9. Who at Iozera owns the KRISS guardrail spec as a versioned, signable document — Dr. Pedraja
   should be handed a controlled document, not asked to countersign something in a demo.
