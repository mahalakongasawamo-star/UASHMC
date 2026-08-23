# UX Research Brief: "Find a Doctor", "Find a Service", Emergency Info & AI Assistant Placement

### For UASHMC website workstream — Iozera.ai

---

## 0. The three findings that should change your plan

Before the section-by-section detail, three research results that cut against the default instinct:

**(a) A small roster is not a credibility problem. A _thin_ roster is.** The failure mode is publishing 40 doctors where 25 have no photo, no schedule, and no HMO list. Completeness reads as competence; headcount doesn't. Design for 100% field coverage and hold incomplete profiles out of launch.

**(b) The chatbot should NOT auto-open, and on mobile it should probably not be a floating bubble at all.** Baymard's testing of live chat found all three common implementations (overlay dialogs, pop-up dialogs, sticky floating bubbles) actively disruptive — users said things like "if I wanted chat I would ask for it" — and found sticky chat _especially_ damaging on mobile because it obscures autocomplete, filters, and controls with no way to move it ([Baymard](https://baymard.com/blog/live-chat-usability-issues)). This is your strongest evidence-based argument in the room if Marketing pushes for a loud, auto-greeting bot. Reframe: KRISS AI wins on _answer quality and always-available_, not on _interrupting_.

**(c) The safest symptom-to-specialty design does no inference at all.** Mayo's pattern — every condition and procedure page carries a "Doctors & Departments" module ([Mayo](https://www.mayoclinic.org/diseases-conditions/yips/doctors-departments/ddc-20379025)) — routes patients from plain-language content to the right specialist with zero clinical reasoning. Content-as-router, not bot-as-triager. This is how KRISS AI stays inside its hard constraint by _architecture_ rather than by prompt discipline.

---

## 1. "Find a Doctor"

### 1.1 What patients actually search by

Ranked by observed real-world facet provision and, critically, by what Philippine hospitals prioritise. Makati Medical Center's live directory is the best regional reference — its actual facet set is:

> Doctor's name · Consultation type (Face-to-Face / Teleconsultation) · Clinic day (Mon–Sat) · Clinic hours (AM/PM + from/to) · Specialization · **HMO accreditation (30+ providers)** · Gender · A-to-Z by surname
> — [makatimed.net.ph/doctors-v2](https://www.makatimed.net.ph/doctors-v2/index.php)

Note what that tells you: in the PH market, **HMO accreditation and clinic schedule are first-class facets, not afterthoughts.** In US directories (Cleveland Clinic: name / specialty / location / ratings — [my.clevelandclinic.org/providers](https://my.clevelandclinic.org/providers)) insurance is secondary and _ratings_ are primary. Do not copy the US pattern here. NowServing — which UASHMC already uses — also exposes specialty, condition, service, hospital, and HMO as discovery axes ([nowserving.ph/hospital](https://nowserving.ph/hospital/)), confirming the same market read.

**Recommended facet priority for UASHMC v1:**

| Priority        | Facet                                                      | Rationale                                                                                                                                    | Data cost                                                  |
| --------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| P0              | **Specialty** (plain-language labelled)                    | The single most-used entry point                                                                                                             | Low — you have ~4-10                                       |
| P0              | **HMO accepted**                                           | Affordability gate; determines whether the patient can come at all                                                                           | Medium — needs per-doctor mapping, not just hospital-level |
| P0              | **Clinic day + AM/PM**                                     | "Can I actually see them Saturday?" is the conversion question                                                                               | Medium — needs a maintenance owner                         |
| P0              | **Doctor name** (autocomplete)                             | Referrals: someone told them a name                                                                                                          | Low                                                        |
| P1              | **Consultation type** (in-person / teleconsult)            | You already run telemedicine — this is a differentiator, surface it                                                                          | Low                                                        |
| P1              | **Concern / condition** (curated — see §2)                 | Serves the patient who doesn't know the specialty word                                                                                       | High — editorial                                           |
| P2              | Language spoken (Filipino / English / Tagalog-Bisaya etc.) | Matters less in Metro Manila than in multilingual SG/MY; keep as profile _content_, not a filter, at v1                                      | Low as content                                             |
| P2              | Gender                                                     | Real demand (OB-GYN, some cultural preferences) but low volume                                                                               | Low                                                        |
| Do not build v1 | **Ratings / reviews**                                      | A new hospital has no rating volume. An empty or 1-review rating widget is a _negative_ trust signal. Omit entirely rather than show sparse. | —                                                          |

**Deliberately excluded:** "Location" facet. Single-campus hospital — a location filter with one option is noise. Replace it with clinic building/floor/room on the profile (Makati Med shows "clinic location code and room number" — very practical for arrival wayfinding).

### 1.2 The doctor profile card — what converts

Two artefacts, don't conflate them.

**Result card (in list/grid).** Must be scannable and must not require a click to disqualify. Fields, in order:

1. **Photo** — real headshot, consistent crop, consistent background. Non-negotiable; a placeholder silhouette kills the card.
2. **Name + title + suffix** ("Juan Dela Cruz, MD, FPCP")
3. **Specialty in plain language, with the technical term second** — "Heart doctor (Cardiologist)" or "Cardiologist — heart and blood vessels". NHS convention is plain English first, medical term in parentheses: they write "piles (haemorrhoids)" ([NHS content guide](https://service-manual.nhs.uk/content/how-we-write)).
4. **Sub-specialty / focus line** — one line, the differentiator. "Interventional cardiology, heart failure."
5. **Next available clinic** — "Next clinic: Tue 9:00 AM" beats a schedule table for scanning.
6. **HMO badges** — 3-4 logos + "+8 more". This is the affordability answer.
7. **Consultation type chip** — "In-person" / "Teleconsult available"
8. **One primary CTA + one secondary.** Primary: _Book appointment_ (deep-link to their NowServing profile — do not rebuild booking at v1). Secondary: _View profile_.

**Profile page.** Everything above, plus: full weekly schedule table; clinic room/floor; medical school, residency, fellowship; PRC licence and specialty board certification (Philippine board — e.g. FPCP, FPOA, FPSGS — spelled out, not just the acronym); hospital affiliations; procedures performed (linked into the service catalogue); languages; a 100-150-word first-person paragraph in the doctor's own voice; **and the highest-leverage asset you already own — embed their "Doctor in the House" episode.** Provider profiles with photos and bios reduce booking intimidation, and one documented redesign saw a 60% engagement lift on provider profiles from richer bios ([WG Content](https://wgcontent.com/services/content-development/doctor-and-provider-profiles/)).

Add `Physician` / `MedicalWebPage` schema.org markup on every profile. Physician-specific schema exists and directly drives eligibility for rich results ([Pilot Digital](https://pilotdigital.com/blog/top-12-doctor-directory-best-practices/)).

### 1.3 Classic failure modes and the fix

| Failure mode                      | Why it happens                                                                                                                                                 | Fix                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zero results**                  | Small roster × many filters = frequent empty sets. Zero-results pages drive ~69% abandonment ([Baymard](https://baymard.com/blog/collections/on-site-search)). | **Prevent, don't recover.** Show result counts on every facet option _before_ it's applied; grey out or hide zero-count options entirely. Make it structurally impossible to reach zero via filters.                                                                                                                                                                                          |
| Empty state with no exit          | "No results found." full stop                                                                                                                                  | Fallback ladder: (1) relax the last-applied filter and say so — "No cardiologist has Saturday PM clinic. Showing all cardiologists."; (2) offer nearest alternatives; (3) offer the human — call/Viber + KRISS AI. Never a dead end. Announce via `aria-live` ([NN/g](https://www.nngroup.com/articles/empty-state-interface-design/)).                                                       |
| **Jargon specialty names**        | Taxonomy copied from the medical staff org chart                                                                                                               | Plain-language primary label, clinical term secondary. Maintain a synonym layer so "OB", "OB-GYN", "obgyne", "women's doctor", "buntis" all resolve.                                                                                                                                                                                                                                          |
| Misspellings return nothing       | No fuzzy matching. 69% of sites fail on closely-misspelled terms ([Baymard](https://baymard.com/blog/collections/on-site-search)).                             | Fuzzy/typo-tolerant matching + autocomplete. With ~40 names, autocomplete over the full roster is trivially cheap and effectively never fails.                                                                                                                                                                                                                                                |
| **No schedule**                   | Schedule data has no owner, so it's omitted                                                                                                                    | Assign a named owner at the onsite. A directory with no schedules is a phone-call generator, not a website. If you cannot maintain daily accuracy, publish _typical_ clinic days and label them "Schedules may change — confirm when booking." Honest and stable beats precise and stale.                                                                                                     |
| **No next step**                  | Profile ends with the bio                                                                                                                                      | Every profile ends with a booking action. Sticky on mobile.                                                                                                                                                                                                                                                                                                                                   |
| Slow autocomplete / slow profiles | Heavy directory queries                                                                                                                                        | Directories must be fast — users won't wait for autocomplete or a profile to load ([Pilot Digital](https://pilotdigital.com/blog/top-12-doctor-directory-best-practices/)). With ~40 doctors, ship the whole roster as a static JSON payload and filter client-side. Instant, and it removes a backend dependency from v1.                                                                    |
| Fragmented data                   | Directory content duplicated across specialty pages, homepage, PDFs                                                                                            | **One centralised provider database, many views.** Centralising the provider DB is repeatedly named the top optimisation for health-system sites ([Eastern Standard](https://www.easternstandard.com/blog/hospital-system-website-checkup-have-you-centralized-your-provider-database-yet/)). Specialty pages, service pages, homepage carousels, and KRISS AI must all read the same record. |

### 1.4 Designing for a SMALL roster — making it read credible, not thin

This is the section to walk Harvey through, because the instinct ("hide it, we look small") is wrong and the fix is a marketing win.

1. **Never surface a count you can't win on.** Mount Elizabeth says "more than 850 doctors" ([mountelizabeth.com.sg](https://www.mountelizabeth.com.sg/find-doctor)) because scale _is_ their claim. UASHMC's claim is different. Copy: "Find the right specialist for you" — not "Search our 42 doctors."

2. **Default to browse, not search.** A bare search box implies a large corpus and invites queries you'll fail. Land the page on a **specialty tile grid** (4-8 tiles, icon + plain-language name + "3 doctors"), with search available but secondary. A complete-looking grid of 6 tiles reads as _organised_; an empty search box reads as _prove we have anyone_. This also mirrors NHS A-to-Z findings that many users prefer browsing a finite list to searching, especially when unsure of spelling ([NHS A to Z pattern](https://service-manual.nhs.uk/design-system/patterns/a-to-z-page)).

3. **Depth over breadth — enforce a completeness gate.** Publication rule: no doctor goes live without photo, plain-language specialty, credentials, schedule, HMO list, and 100+ word bio. 25 complete profiles outperform 42 profiles where 17 are stubs. Make this an explicit acceptance criterion in scope — it converts "we need content from you" into a testable gate the UASHMC team owns.

4. **Tune grid density to the roster size.** Don't use a 5-across card grid that leaves a ragged half-row. Use larger 2-across (desktop 3-across) cards with richer content per card. 12 doctors fill a screen handsomely at 3-across; the same 12 look sparse at 5-across. Layout density is a credibility variable.

5. **Decouple institutional capability from headcount.** Doctor count is one signal among many, and it's your weakest. Give equal page weight to signals that don't scale with roster: 24/7 emergency, diagnostic imaging, laparoscopic surgical capability, PhilHealth accreditation, HMO roster breadth, equipment, bed count, DOH licence. A patient asking "can this hospital handle what I need?" is asking about _the institution_, and you can answer strongly.

6. **Turn newness into freshness.** Publish an "as of [Month Year]" stamp on the directory and a visible "New specialists joining" or "Recently added" strip. A growing roster with dates reads as momentum. A static roster with no dates reads as abandoned.

7. **Lead with the four you have.** Internal Medicine, Orthopedics, Cardiology, Pediatrics is a coherent, defensible general-hospital core — that's adult medicine, bones/trauma, heart, and children. Present it as a deliberate clinical focus with depth, and give each of the four a real specialty page. Do not publish empty specialty pages for services you don't yet offer; a "Coming soon" oncology page is a credibility leak. Use a single, honest "Services we're adding" page instead.

8. **Consequence for search scope:** with a small roster, prefer _name-only_ free-text search plus faceted browse over a general "search anything" box. General search sets an expectation of a large corpus and will fail more often than it succeeds.

---

## 2. Symptom-to-specialty mapping — the safe, non-diagnostic design

The patient says "my chest hurts." They do not say "cardiology." Every hospital site must bridge this, and it's the single highest-risk surface for KRISS AI. Here is a design that bridges it without ever performing clinical reasoning.

### 2.1 The core principle: route content, not patients

Three mechanisms, in ascending order of risk. **Ship 1 and 2. Treat 3 as strictly bounded.**

**Mechanism 1 — Reverse index on content (zero risk, highest value).**
Every service and condition page carries a _"Who treats this at UASHMC"_ module listing the specialty and the named doctors — Mayo's "Doctors & Departments" pattern. The patient searches "chest pain", lands on your chest-pain information page, and the page tells them which specialty handles it and who those doctors are. No system inferred anything about _this patient_. It's editorial content about the world, plus a directory join. **This is the backbone. Build this first.**

**Mechanism 2 — A curated, finite, medically-signed-off routing table (low risk).**
A hand-built lookup: `plain-language concern → 1-3 candidate specialties → related service pages → red-flag flag`. Properties that make it safe:

- **Finite and auditable.** A spreadsheet of 100-200 rows, not a model. Every row reviewable by Dr. Pedraja and signed off. Version-controlled, with a review date. This is what lets you say in the room: _the Medical Director owns this table, not the AI._
- **Not generative.** KRISS AI matches the patient's words against this table via synonyms; it does not reason about them.
- **Many-to-many, never single-answer.** Output 1-3 options. Single confident answers _read_ as diagnosis even when they aren't.
- **Framed as population norms, not personal assessment.** "People with chest discomfort usually see a **Cardiologist** or an **Internal Medicine** doctor." Never "You should see…", never "This could be…", never "You may have…".
- **Red-flag interception runs FIRST.** Before routing, the input is screened against a red-flag vocabulary (chest pain, difficulty breathing, severe bleeding, stroke signs, blue lips, unconsciousness, seizure, severe head injury, suspected fracture with deformity, sudden severe headache, suicidal ideation, active labour complications…). On a hit, the routing answer is **suppressed and replaced** by the emergency card (§4). Escalation guidance is explicit that red-flag symptom keywords must route immediately, and that ambiguity should always resolve toward the higher level of care ([Adaptive Health AI](https://adaptivehealthai.com/blog/hipaa-compliant-ai-chatbots-for-healthcare-practices-a-practical-2026-guide)).
- **One input, one output. No clinical follow-up questions.** The moment the system asks "how long have you had it?" or "how severe, 1-10?", it is performing triage. Hard stop: KRISS AI never asks a clinical question. It may ask a _navigational_ one ("Is this for you or for a child?" → routes to Pediatrics) — that's logistics, not medicine. Draw and document this line explicitly; it's the cleanest way to satisfy the hard constraint in a way a board can inspect.
- **Always an escape hatch.** Every routing answer ends with "Not sure? Call 02 8248 3460 or message us on Viber." The bot is never the only path.

**Mechanism 3 — Free-text symptom entry (bounded).**
If you accept free text, it must resolve _only_ to table entries. Unmatched input returns: "I'm not sure which service fits that. Here are our specialties, or talk to our team." It must **never** fall through to an LLM's general medical knowledge. **Log every unmatched term** — that log is the editorial backlog for Mechanism 1 and 2, and it's a genuinely valuable, Harvey-ownable asset: it's a direct readout of what your catchment area is actually worried about.

### 2.2 Why this matters more than it looks

The current evidence on unbounded health chatbots is bad and getting worse: some frontier models returned **zero** medical disclaimers across 500 health questions including emergency prompts, and a Mount Sinai study found ChatGPT Health undertriaged medical emergencies roughly **52%** of the time ([MIT Technology Review](https://www.technologyreview.com/2025/07/21/1120522/ai-companies-have-stopped-warning-you-that-their-chatbots-arent-doctors/); via [Association of Health Care Journalists](https://healthjournalism.org/blog/2026/08/ai-powered-symptom-checkers/)). A curated table cannot undertriage in novel ways, because it has no novel behaviour. **Sell the constraint as the feature** — "KRISS AI can only tell you what UASHMC has approved it to say" is a stronger clinical-governance pitch than "KRISS AI is smart."

### 2.3 Wording patterns to standardise

| Never                         | Always                                                 |
| ----------------------------- | ------------------------------------------------------ |
| "You may have angina."        | "Chest discomfort is usually seen by a Cardiologist."  |
| "This sounds serious."        | "Some symptoms need emergency care right away. [card]" |
| "I recommend you see Dr. X."  | "These UASHMC doctors handle this: […]"                |
| "Based on your symptoms…"     | "Based on what you're looking for…"                    |
| "How bad is the pain?"        | _(never asked)_                                        |
| "Let me check your symptoms." | "Let me help you find the right service."              |

Reading level: target reading age 9-11, and 11-14 where medical content makes 9 impossible ([NHS](https://service-manual.nhs.uk/content/how-we-write)). Apply this to the bot, the specialty labels, and the service pages alike.

---

## 3. "Find a Service"

### 3.1 Structure: one catalogue, three doors

The perennial argument is department vs. body system vs. patient need. The resolution is: **the argument is about navigation, not about data.** Build one canonical service record set, then expose three indexes over it. This also settles the internal-politics version of the argument (Medical wants departments, Marketing wants patient-need) without either side losing.

- **Door 1 — By specialty/department.** Matches how the hospital is organised, how doctors refer, and how patients arriving with a referral think ("I was told to see Ortho"). Also the natural join to Find a Doctor.
- **Door 2 — By concern / body area (primary for cold traffic).** Patients don't think in departments; when a site is organised by department instead of patient need, users get lost ([Webstacks](https://www.webstacks.com/blog/hospital-website-designs)). This is the door for someone who found you via Google or Facebook. Plain-language groupings: _Heart & circulation · Bones, joints & injuries · Children's health · Women's health · Stomach & digestion · Check-ups & screening · Scans & tests · Surgery · Emergency_.
- **Door 3 — A to Z of Services.** Cheap, complete-looking, excellent for SEO, and it directly serves users who prefer an alphabetical list to search — including those unsure of spelling. Use the NHS pattern: letter nav at top with non-populated letters styled as muted non-links, letter panels below. Write it "A to Z", not "A-Z", because some screen readers read the dash out as "Ay zed" ([NHS A to Z pattern](https://service-manual.nhs.uk/design-system/patterns/a-to-z-page)). NHS testing also found users often ignore the anchor links and just scroll, so **the list must work as a plain scroll** — don't make anchors load-bearing.

**Recommendation for UASHMC:** make Door 2 the primary homepage entry ("Find a Service"), Door 1 the primary nav structure, Door 3 a single flat page. Doors 1 and 3 are nearly free once the catalogue exists.

### 3.2 Service page template

The service page is where the anxious patient converts or bounces. Nine blocks, in this order — the order is the design, because it front-loads the questions patients actually ask first:

1. **Plain-language name, clinical name second.** "Gallbladder removal (Laparoscopic cholecystectomy)"
2. **One-paragraph "What this is"** — 40-60 words, reading age ~11.
3. **"Who this is for" / conditions it addresses** — bulleted, plain language. This is the reverse index that makes symptom-to-specialty work.
4. **What to expect** — a step-by-step timeline: before → arrival → during → after → recovery. Real hospitals structure exactly this way, with day-of timelines that reduce anxiety and improve prep compliance ([HSS](https://hss.edu/what-to-expect.asp), [UChicago Medicine](https://www.uchicagomedicine.org/patients-visitors/patient-information/preparing-for-your-hospital-stay/preparing-for-your-procedure-or-surgery/the-day-of-your-procedure)).
5. **How to prepare** — fasting, medications, what to bring, who should come with you, clothing. Concrete and numeric ("stop eating 8 hours before"), because vague prep instructions cause cancelled procedures.
6. **Duration & where** — procedure time, total time on site, expected admission length, building/floor. "Total time on site" is the number patients actually need and almost nobody publishes.
7. **Requirements** — referral needed? fasting? lab work first? PhilHealth documents? HMO Letter of Authorization? **The LOA process is the single most common friction point for a Philippine outpatient, and almost no hospital site explains it clearly. Explaining it well is a differentiator available to you at zero clinical risk.**
8. **Cost & coverage** — see below.
9. **"Who does this at UASHMC"** + primary CTA. Named doctors pulled live from the provider DB, then _Book_ / _Enquire_.

### 3.3 Price transparency — the pragmatic PH position

The US has a legal mandate (machine-readable files plus a consumer-friendly display of shoppable services — [CMS](https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency)); the Philippines does not. But the _demand_ is identical, and the documented failure in the US is instructive: the data is technically published but buried in unreadable files ([AHA](https://www.aha.org/fact-sheets/2023-02-24-fact-sheet-hospital-price-transparency)). Compliance is not usefulness.

Do this instead — **transparency about the process, indicative ranges where safe:**

- Publish **indicative ranges** for genuinely shoppable items: X-ray, ultrasound, lab panels, executive check-up packages, room rates by room type. These are stable and low-risk.
- For procedures, publish a **package range** plus an explicit **"what's included / what's not included"** list. The exclusions list is where trust is won or lost.
- State the **PhilHealth case-rate deduction** applies and link to how.
- State **which HMOs are accepted and how the LOA works**, with an estimated turnaround.
- Where you can't publish a number, publish **"how to get an exact quote in one step"** with a named channel and a promised response time. A patient who gets a real quote in 4 hours is better served than one who reads a fake precise number.
- Every price carries an "as of [date]" stamp. Undated prices are worse than no prices.

This is also the highest-value KRISS AI job in the whole build. "How much is an X-ray?" and "Do you accept Maxicare?" are high-volume, entirely non-clinical, fully hospital-approvable questions. **Lead the KRISS AI demo with these, not with symptoms.** It sidesteps the clinical-risk conversation and shows immediate call-centre load reduction.

---

## 4. Emergency information design

### 4.1 Surfacing without burying — and without hijacking

Emergency info fails in two opposite directions: buried three levels deep, or a giant red hero that makes a hospital homepage feel like a crisis. Layer it instead:

**Layer 1 — Persistent utility strip.** A thin bar above or within the header, on every page, always: `Emergency: [ER direct number as tel: link] · 24/7` plus _Directions_. Thin, permanent, high-contrast, not competing with the hero. Contact info must be reachable from every page ([Nopio](https://www.nopio.com/blog/hospital-website-design/)), and critical info should be within about three clicks — for emergency, target **zero**.

**Layer 2 — Homepage priority action.** "Emergency Information" as one of the primary actions, visually distinct from the others but not screaming.

**Layer 3 — A dedicated `/emergency` page** — the page that has to work when someone is panicking in a car on Marcos Highway. Content, in this order: the ER number, huge, tapping to dial · "Call 911" for ambulance/national emergency response · the plain street address, copyable, one tap to Waze/Google Maps · **landmark-based approach directions from both Marcos Highway directions**, plus where the ER entrance is versus the main entrance, and where to drop off versus park · what to bring (and explicitly: _come now, bring documents later_) · what happens on arrival · what is and isn't an emergency, using care cards · non-emergency alternatives with the trunkline and Viber. Written at the lowest reading level on the site, biggest type on the site, and it must be legible in bright sunlight and on a cracked phone. Test it one-handed.

**Layer 4 — Inline care cards** wherever symptom-adjacent content appears.

**One caution: don't publish ER wait times** unless you have a live, reliable feed. A stale wait time is a specific, verifiable broken promise at the worst possible moment — strictly worse than publishing nothing.

### 4.2 The care card pattern — adopt it wholesale

The NHS's care card pattern is the best-tested solution to "tell users what level of care to seek", and NHS testing found users scanning a page _stopped to read the care cards and understood what action to take_ ([NHS care cards pattern](https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care)). Three variants ([component spec](https://service-manual.nhs.uk/design-system/components/care-cards)):

| Variant    | Colour          | Visually-hidden prefix          | Heading form                                   |
| ---------- | --------------- | ------------------------------- | ---------------------------------------------- |
| Non-urgent | Blue            | `"Non-urgent advice: "`         | "Speak to a doctor if:"                        |
| Urgent     | Red             | `"Urgent advice: "`             | "Get help today if:"                           |
| Emergency  | Red + dark grey | `"Immediate action required: "` | "Call 911 or go to the Emergency Room now if:" |

Localised for UASHMC (999→911, A&E→Emergency Room, NHS 111→your trunkline/Viber). Rules that come with the pattern and matter:

- **The heading is one clear call to action**, followed by a bulleted list of circumstances.
- **Cards must be self-contained.** NHS is explicit: don't say "Contact your GP if this happens" — spell out the circumstances _inside the card_. A card that requires surrounding context has failed when it's scanned in isolation.
- **The visually-hidden urgency prefix with `role="text"` on the heading span** is what makes urgency survive screen-reader linearisation. Don't drop it — colour alone is not an accessible urgency signal.
- Multiple cards per page are fine and often correct (different severities), but don't over-use them — the goal is to inform, not alarm.

### 4.3 The ethical requirement: emergencies must never be _handled_ by the chatbot

Design rules, stated as hard requirements so they can go into the SOW:

1. **Red-flag detection preempts everything.** On a red-flag match, KRISS AI **replaces** its answer with an emergency care card containing a tappable call button. It does not continue the conversation, does not ask a follow-up, does not offer to book an appointment.
2. **No confirmation gate.** Never "Are you sure this is an emergency?" or "Would you like me to show emergency info?" — one tap of friction is one tap too many. Show the card unprompted.
3. **Bias toward over-escalation.** False positives cost a patient a moment of alarm. False negatives cost more. Err toward the higher level of care, always ([Adaptive Health AI](https://adaptivehealthai.com/blog/hipaa-compliant-ai-chatbots-for-healthcare-practices-a-practical-2026-guide)).
4. **A standing disclaimer, not a one-time modal.** Persistent in the chat frame: _"KRISS AI shares UASHMC information only. It cannot diagnose or give medical advice. In an emergency, call 911 or go to the Emergency Room."_ Visible at all times, not dismissed after first read.
5. **The chatbot must never occlude the emergency call affordance** at any viewport (see §5).
6. **"Talk to a person" is always one tap away** — never behind a failed-intent counter.
7. **Log and review.** Every red-flag trigger is logged and periodically reviewed by the Medical Director. That review loop is the governance artefact that makes this defensible to a hospital board — and it's a concrete reason to name Dr. Pedraja as clinical content owner at the onsite.

---

## 5. Healthcare chatbot / AI assistant placement patterns

### 5.1 The evidence, plainly

- Baymard: overlay dialogs and pop-up dialogs are experienced as pushy and coercive; sticky floating elements obstruct content unpredictably; **sticky chat is especially problematic on mobile**, where testing showed it blocking autocomplete suggestions, swatches, and filter controls with no way to dismiss it. Their recommendations: **user-initiated only**, footer/header/help-section placement, avoid sticky on mobile, exclude it from checkout and filtering interfaces, and delay any site-initiated invitation ([Baymard](https://baymard.com/blog/live-chat-usability-issues)).
- ~55% of consumers report dismissing AI tools that interrupt their browsing session ([Oscar Chat](https://www.oscarchat.ai/blog/how-to-use-popups-without-annoying-visitors/)).
- Immediate invitations on landing read like "an over-friendly stranger invading your personal space"; flashing banners, ping sounds, and sliding animations push a chat invitation into pop-up territory ([WhosOn](https://www.whoson.com/live-chat-best-practice/best-practice-proactive-chat-invitations/)).
- WCAG 2.2 requires that persistent overlays and dialogs **not cover focusable content**, and this must hold at all viewport sizes including phones. Help mechanisms should also be in a **consistent location** across pages, both visually and in tab order ([Siteimprove](https://help.siteimprove.com/support/solutions/articles/80000448423-faq-on-wcag-2-2-the-new-standard-for-accessibility), [Talkative](https://gettalkative.com/capabilities/web-content-accessibility-guidelines)).

### 5.2 Desktop placement

- **Bottom-right, 24px inset.** Collapsed launcher: 56-64px circle.
- **Collapsed by default. No auto-open, ever, on first visit.**
- Launcher content: hospital mark or a neutral chat glyph + a short static label. **Label it for its job, not its technology:** "Ask UASHMC" or "Ask about our services" — not "Chat with AI", not "👋 Hi there!". The label sets the expectation that determines whether the first question is answerable.
- Expanded: 380-420px wide, ~600px tall, max 80vh, bottom-right anchored, does not modal-block the page.
- **Also place a text link in the footer and in the header help/contact area.** Baymard's finding is that the footer is where users _expect_ to find help. Two low-cost non-intrusive entry points is more effective than one loud one, and the redundancy protects you if the widget is ad-blocked.

### 5.3 Mobile placement — where most implementations go wrong

Mobile is where the floating bubble collides with the sticky call button, and for a hospital the call button must win. Two viable options:

**Option A (recommended): fold KRISS into a sticky bottom action bar.**
A single sticky bottom bar with 2-3 equal-weight actions: **`Call` | `Book` | `Ask`**. Full-width, 56-64px tall, respecting `env(safe-area-inset-bottom)`. Advantages: nothing floats over content; the call button is guaranteed never occluded; the bot sits in the thumb zone, where primary actions belong ([Parachute Design](https://parachutedesign.ca/blog/thumb-zone-ux/)); one predictable, consistent location satisfying WCAG 2.2's consistent-help expectation; and it _reframes KRISS as a peer of calling_ rather than an ad layered on top. This is the strongest argument to bring to Harvey — the bot gets _more_ prominence than a bubble would, and less friction.

**Option B: small launcher parked above the sticky bar.** 48px launcher, bottom-right, offset above the sticky bar, auto-hiding on scroll-down and revealing on scroll-up. Acceptable, but you inherit the obscuring risk and the z-index maintenance burden.

Mobile hard rules:

- Expanded state goes **full-screen** (or near-full-screen sheet). A tiny chat window on a phone is unusable.
- **Never render the launcher over:** an open search autocomplete, an open filter panel, a form in focus, a `tel:` call button, the emergency strip, or a video's controls. Suppress the launcher on the `/emergency` page and any booking form entirely.
- Minimum target 44×44 CSS px (WCAG 2.5.5), 48×48 preferred per platform guidance; 24×24 (WCAG 2.5.8 AA) is the floor and is not enough here ([Silktide](https://silktide.com/accessibility-guide/the-wcag-standard/2-5/input-modalities/2-5-8-target-size-minimum/)).

### 5.4 Opening prompts and suggested questions

On open, show **4-6 suggested questions**. Design rules:

- **Every suggested question must be answerable.** A suggested question that fails is worse than no suggestion — it's a self-inflicted first impression of incompetence. Test all of them before launch, and treat this as an acceptance criterion.
- **Phrase them as the patient would type them**, not as the hospital would title a page: "Do you accept Maxicare?" not "HMO Partner Information".
- **Draw them from the priority journeys**, and lead with logistics rather than clinical: _"Do you accept my HMO?" · "How much is an X-ray?" · "What are the clinic hours for Pediatrics?" · "How do I get there from Marcos Highway?" · "Do you offer online consultation?" · "How do I book with a cardiologist?"_
- **Vary by page context.** On a doctor profile: "What are Dr. X's clinic hours?" On a service page: "How do I prepare for this?" On the homepage: the HMO/hours/directions set. Context-appropriate prompts are the cheapest available quality signal.
- Autocomplete/suggestion sets teach users the site's vocabulary and the right query scope ([Baymard](https://baymard.com/blog/collections/on-site-search)) — the same logic applies to bot prompts. Use them to _teach_ patients what KRISS can do, which is also how you keep them away from what it shouldn't do.

### 5.5 Handoff to humans

- **"Talk to a person" persistently visible** in the chat frame, not surfaced only after failure.
- **Offer handoff on the second failure, not the fifth.** Two unresolved turns → "Let me connect you with our team."
- **Name the channels and their hours** honestly: Trunkline 02 8248 3460 · SMS/Viber +63 947 875 4949 · email · and _when each is answered_. "We reply on Viber within X hours (Mon-Sat, 8AM-5PM)" is worth more than a generic contact form.
- **Carry the context across.** Handoff should pass a transcript summary so the patient doesn't repeat themselves. If v1 can't do live handoff, do the honest version: pre-fill a Viber/SMS message with the question. Cheap and it works.
- **Escalate on request immediately.** "I want to talk to a human" is an instruction, not a query to be answered.
- Escalate on red flags, high-risk cases, or explicit human requests ([Adaptive Health AI](https://adaptivehealthai.com/blog/hipaa-compliant-ai-chatbots-for-healthcare-practices-a-practical-2026-guide)).

### 5.6 How to not look like a sales popup

| Avoid                                                   | Do instead                                                                                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto-open on landing                                    | User-initiated only                                                                                                                            |
| "👋 Hi! How can I help you today?!" bubble              | Static, quiet label: "Ask UASHMC"                                                                                                              |
| Cartoon avatar / winking mascot                         | Hospital mark or a neutral glyph                                                                                                               |
| Notification sound, red dot, pulsing/bouncing animation | No sound, no false unread badge, no attention-seeking motion                                                                                   |
| Unread-count badge with nothing unread                  | Nothing. Never fake a notification.                                                                                                            |
| Appearing on every page including forms and the ER page | Suppressed on emergency, booking, and form pages                                                                                               |
| Exclamation marks, emoji, sales energy                  | Calm, plain, institutional voice                                                                                                               |
| Proactive nudge on the homepage                         | Nudge only on genuine intent signals (long dwell on a service page, a zero-result search, hesitation in a form) — and at most once per session |
| "Chat with our AI assistant!"                           | "Ask about our doctors, services, HMOs and schedules." (scope, stated)                                                                         |

The register point is worth stating explicitly to Harvey: for a hospital, **quiet is a trust signal**. Users seeking help find a quiet widget; users not seeking help are not annoyed by it. The measured outcome to optimise is _resolution rate among users who opened it_, never _open rate_.

### 5.7 Accessibility checklist for the widget

Keyboard reachable in a consistent tab position on every page · `aria-expanded` on the launcher · focus moves into the panel on open and returns to the launcher on close · `Esc` closes · focus trapped **only while expanded** · new messages announced via `aria-live="polite"` · high-contrast bubbles meeting 4.5:1 · never covers focusable content (WCAG 2.2) · honours `prefers-reduced-motion` · screen-reader label describes the job ("Ask UASHMC about doctors and services") · fully usable at 200% zoom and 320px width.

### 5.8 The governance layer that makes it a _hospital_ assistant

Every KRISS AI answer should cite and link the approved source page it came from ("See the full page: Laparoscopic cholecystectomy"). This does four things at once: it satisfies the hospital-approved-information-only constraint _visibly_; it gives the patient a verification path; it drives traffic into the real content; and it makes wrong answers **traceable and fixable** instead of mysterious. It is also, in a board presentation, the difference between "an AI on our website" and "an AI that can only repeat what we approved."

---

## 6. Trust and credibility signals for a NEW hospital

Google places medical content in its highest-stakes YMYL category and instructs raters to assess who created content, what credentials they hold, and whether it's expert-reviewed ([eSEOspace](https://eseospace.com/blog/e-e-a-t-for-healthcare-websites/)). Trust for a new domain is not automatic and takes deliberate construction ([eos Healthcare Marketing](https://eoshealthcaremarketing.com/building-trust-in-seo-applying-e-e-a-t-principles-for-medical-websites/)). Ranked by impact-per-effort for UASHMC specifically:

1. **Fix the email domain. This is the cheapest large credibility win available.** `uashmc.customerrelations@gmail.com` on a hospital's public contact page signals _provisional_ — a free consumer mailbox for an institution asking people to trust it with surgery. Move to `customerrelations@uashmc.com.ph` (or your chosen domain) on day one of the website project. It costs almost nothing, it's not a design decision, and it removes a signal that quietly undercuts everything else on the page. Raise it at the onsite as a quick win — it also forces the domain decision early, which the website needs anyway.

2. **Own domain, HTTPS, and consistent NAP.** Name/address/phone identical across the site, Facebook, Instagram, Google Business Profile, NowServing, and the third-party listings. Right now those listings are fragmented (findhealthclinics.org, Waze, NowServing), which both weakens trust and splits SEO. Correcting them is a defined, ownable v1 task. Trustworthiness signals for medical sites explicitly include SSL, clear privacy policy, and accurate contact information ([eSEOspace](https://eseospace.com/blog/e-e-a-t-for-healthcare-websites/)).

3. **DOH License to Operate + PhilHealth accreditation, stated precisely.** These are _distinct_ things and patients conflate them — a DOH licence does not imply PhilHealth facility accreditation, and a non-accredited facility means the patient pays full fee and struggles to claim ([Respicio & Co.](https://www.respicio.ph/commentaries/how-to-check-if-a-clinic-is-philhealth-accredited)). Publish both explicitly, with numbers and validity dates, and explain what each means for the patient's bill. Almost no Philippine hospital site does this clearly. Doing it well is differentiating _and_ genuinely useful.

4. **The HMO roster, prominently and searchably.** For a Philippine patient this is simultaneously a trust signal (real insurers have vetted and contracted with this hospital) and the affordability gate. Show logos, a searchable list, an "as of" date, and a clear explanation of the LOA process. Makati Med treats 30+ HMOs as a first-class search facet; match that seriousness.

5. **Named, credentialed doctors.** Full names, PRC licence, Philippine specialty board fellowship spelled out, training institutions. Verifiable credentials on real named people is the substance behind E-E-A-T; affiliations with recognised institutions and professional bodies are core authority credentials ([eos](https://eoshealthcaremarketing.com/authority-in-seo-applying-e-e-a-t-principles-for-medical-websites/)).

6. **Photograph the actual hospital. No stock photography.** For a new hospital whose existence a patient cannot yet confirm from reputation, stock imagery is _net negative_ — it reads as a hospital that either doesn't exist yet or won't show itself. You need: the building from the street (so drivers recognise it), the ER entrance, reception, patient rooms by type, the OR, the imaging suite, and real staff. Budget a photo shoot as a **line item in scope**, and flag it as a dependency with a date. This is Harvey's natural territory and a good first co-owned deliverable.

7. **Be openly new. Don't hedge.** "Opened 2025" reframes as _new facility, new equipment, current standards, shorter waits, unhurried consultations_. Patients discover the founding date regardless; controlling the frame beats being caught omitting it. A vague "years of combined experience" formulation reads evasive.

8. **Operational specificity as a trust proxy.** Exact hours per department (not "office hours"), a direct number per department, a stated response-time commitment per channel, exact floor/room for each clinic. Precision signals a functioning organisation. Vagueness signals one that isn't ready. This is also the cheapest content to produce, and it's exactly the content KRISS AI needs.

9. **Visible, named leadership.** A leadership page with real photos and real names — Dr. Bravo, Dr. Pedraja, Ms. Barcelona, Dr. Directo. Accountable, findable humans are a strong governance signal, and it's easy content to gather while you're all in the room.

10. **Author and reviewer bylines on all clinical content.** "Written by Dr. X, Cardiologist" / "Medically reviewed by Dr. Y — [date]". Google's raters look for exactly this on YMYL content, and it doubles as the audit trail for KRISS AI's source corpus. One process, two payoffs.

11. **Repurpose the social assets you already have.** "Doctor in the House" is already-produced, doctor-fronted, hospital-approved video — the most expensive kind of E-E-A-T content, already paid for. Embed episodes on doctor profiles and matching service pages. It makes a small roster look substantially deeper immediately, and it gives Harvey a direct, visible win from the website in week one. (It also means his existing content calendar becomes a website content pipeline, which is a much better conversation than "we need content from you.")

12. **Seed reviews properly, and do not fake depth.** Build the Google Business Profile and encourage genuine reviews. But at 33 Instagram followers and a new GBP, **do not build a testimonial wall** — three anonymous glowing quotes reads as fabricated and costs more trust than it earns. Show volume-based social proof only when you have volume. In the interim, substitute _verifiable institutional_ proof (items 3-6), which doesn't depend on volume at all.

13. **What NOT to publish at v1:** star ratings with almost no ratings; "trusted by thousands"; unbadged award graphics; anonymous testimonials; "coming soon" service pages; undated content; a blog with two posts from six months ago. Each of these substitutes fake scale for real specificity, and each is individually detectable.

---

## 7. Measurable success criteria (for scoping the SOW)

Concrete, testable acceptance criteria — worth agreeing in the room so scope is verifiable rather than aspirational:

- **Find a Doctor:** 100% of published profiles have all required fields. Zero filter combinations can return an empty result set. Autocomplete responds under 100ms. A first-time user finds a cardiologist's Saturday availability in under 60 seconds, unaided.
- **Find a Service:** every service page has all nine template blocks populated. Every service page names at least one doctor. The top 20 plain-language concerns each resolve to a page in one search.
- **Symptom routing:** the routing table is signed off by the Medical Director, dated, and version-controlled. 100% of red-flag terms trigger the emergency card. Zero routing outputs contain diagnostic language (test against a banned-phrase list).
- **Emergency:** ER number reachable in zero clicks from every page. `/emergency` passes a one-handed, bright-sunlight, cracked-screen test.
- **KRISS AI:** 100% of suggested opening questions answered correctly. 100% of answers carry a source link. Zero occlusion of the call CTA at 320px, 375px, and 768px widths. WCAG 2.2 AA on the widget.
- **Trust:** hospital-domain email live before launch. DOH and PhilHealth details published. Real photography, zero stock images of people.

---

## 8. Taking this into the room with Harvey

The brief is explicit that Harvey must help _shape_ the site, not rubber-stamp it. This research gives you four genuine open decisions to hand him — real choices with real stakes, not theatre:

1. **The service catalogue's primary door** (§3.1) — department-first or concern-first? Legitimately contested, marketing-owned, and it visibly changes the homepage.
2. **The mobile bottom bar composition** (§5.3) — which two or three actions earn the sticky bar: Call, Book, Ask, Directions? His call.
3. **The opening prompt set** (§5.4) — he knows what people actually ask on Facebook Messenger today. That's primary research you don't have, and it's the fastest quality win available.
4. **The price-transparency posture** (§3.3) — how much to publish. A real business decision with commercial consequences, correctly his and Dr. Bravo's, not yours.

And bring the four evidence-backed positions that will be counterintuitive to a marketing lead, each with a citation so it lands as research rather than as vendor preference: **the bot doesn't auto-open** (Baymard); **don't publish the doctor count** (small-roster framing); **no stock photos of people** (verifiability for a new hospital); **no testimonial wall yet** (fabrication risk at low volume).

---

## Sources

- [Baymard — These Three (Popular) Approaches to Implementing 'Live Chat' are Often Highly Disruptive for Users](https://baymard.com/blog/live-chat-usability-issues)
- [Baymard — On-Site Search UX article collection](https://baymard.com/blog/collections/on-site-search)
- [Baymard — Allow Users to 'Search Within' Their Current Category](https://baymard.com/blog/search-within-current-category)
- [NHS digital service manual — Care cards pattern](https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care)
- [NHS digital service manual — Care cards component](https://service-manual.nhs.uk/design-system/components/care-cards)
- [NHS digital service manual — A to Z page pattern](https://service-manual.nhs.uk/design-system/patterns/a-to-z-page)
- [NHS digital service manual — Patterns index](https://service-manual.nhs.uk/design-system/patterns)
- [NHS digital service manual — How we write](https://service-manual.nhs.uk/content/how-we-write)
- [NN/g — Designing Empty States in Complex Applications](https://www.nngroup.com/articles/empty-state-interface-design/)
- [Makati Medical Center — Doctors directory (live facet reference)](https://www.makatimed.net.ph/doctors-v2/index.php)
- [NowServing.ph — hospital and doctor discovery](https://nowserving.ph/hospital/)
- [St. Luke's Medical Center — HMO information](https://www.stlukes.com.ph/patients-guide/hmo-information)
- [Mount Elizabeth Hospitals — Find a Doctor](https://www.mountelizabeth.com.sg/find-doctor)
- [Cleveland Clinic — Find a Provider](https://my.clevelandclinic.org/providers)
- [Mayo Clinic — Doctors and departments (condition-page pattern)](https://www.mayoclinic.org/diseases-conditions/yips/doctors-departments/ddc-20379025)
- [Pilot Digital — Best Practices for Creating a Doctor Directory](https://pilotdigital.com/blog/top-12-doctor-directory-best-practices/)
- [Eastern Standard — Have You Centralized Your Provider Database Yet?](https://www.easternstandard.com/blog/hospital-system-website-checkup-have-you-centralized-your-provider-database-yet/)
- [Eastern Standard — Best Navigation Solutions for Hospital & Health System Websites](https://www.easternstandard.com/blog/the-best-navigation-solutions-for-hospital-health-system-websites/)
- [Webstacks — Hospital Website Designs](https://www.webstacks.com/blog/hospital-website-designs)
- [Geonetric — UX Research for Health System Websites](https://www.geonetric.com/insights/user-experience/ux-research-for-health-system-websites-what-it-is-why-you-need-it/)
- [WG Content — Healthcare provider profile writing](https://wgcontent.com/services/content-development/doctor-and-provider-profiles/)
- [HSS — Surgery: What to Expect](https://hss.edu/what-to-expect.asp)
- [UChicago Medicine — The Day of Your Procedure](https://www.uchicagomedicine.org/patients-visitors/patient-information/preparing-for-your-hospital-stay/preparing-for-your-procedure-or-surgery/the-day-of-your-procedure)
- [CMS — Hospital Price Transparency](https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency)
- [AHA — Fact Sheet: Hospital Price Transparency](https://www.aha.org/fact-sheets/2023-02-24-fact-sheet-hospital-price-transparency)
- [Adaptive Health AI — HIPAA-Compliant AI Chatbots: A Practical Guide](https://adaptivehealthai.com/blog/hipaa-compliant-ai-chatbots-for-healthcare-practices-a-practical-2026-guide)
- [MIT Technology Review — AI companies have stopped warning you that their chatbots aren't doctors](https://www.technologyreview.com/2025/07/21/1120522/ai-companies-have-stopped-warning-you-that-their-chatbots-arent-doctors/)
- [Association of Health Care Journalists — AI-powered symptom checkers direct worried patients to care](https://healthjournalism.org/blog/2026/08/ai-powered-symptom-checkers/)
- [WhosOn — Best practice tips for proactive chat invitations](https://www.whoson.com/live-chat-best-practice/best-practice-proactive-chat-invitations/)
- [Oscar Chat — How to Use Popups Without Annoying Your Visitors](https://www.oscarchat.ai/blog/how-to-use-popups-without-annoying-visitors/)
- [Siteimprove — FAQ on WCAG 2.2](https://help.siteimprove.com/support/solutions/articles/80000448423-faq-on-wcag-2-2-the-new-standard-for-accessibility)
- [Talkative — Web Content Accessibility Guidelines for chat widgets](https://gettalkative.com/capabilities/web-content-accessibility-guidelines)
- [Silktide — WCAG 2.5.8 Target Size (Minimum)](https://silktide.com/accessibility-guide/the-wcag-standard/2-5/input-modalities/2-5-8-target-size-minimum/)
- [Parachute Design — Mastering the Thumb Zone](https://parachutedesign.ca/blog/thumb-zone-ux/)
- [eSEOspace — E-E-A-T for Healthcare Websites](https://eseospace.com/blog/e-e-a-t-for-healthcare-websites/)
- [eos Healthcare Marketing — Building Trust in SEO: E-E-A-T for Medical Websites](https://eoshealthcaremarketing.com/building-trust-in-seo-applying-e-e-a-t-principles-for-medical-websites/)
- [eos Healthcare Marketing — Authority in SEO for Medical Websites](https://eoshealthcaremarketing.com/authority-in-seo-applying-e-e-a-t-principles-for-medical-websites/)
- [Respicio & Co. — How to Check if a Clinic Is PhilHealth Accredited](https://www.respicio.ph/commentaries/how-to-check-if-a-clinic-is-philhealth-accredited)
- [PhilHealth — Accredited Institutional Health Care Providers](https://www.philhealth.gov.ph/partners/providers/institutional/map/)
- [DOH HFSRB — Licensing/Accreditation of Health Facilities and Services](https://hfsrb.doh.gov.ph/licensing-accreditation-of-health-facilities-and-services/)
- [Nopio — Hospital Website Design for Multi-Location Healthcare Systems](https://www.nopio.com/blog/hospital-website-design/)
- [314e — Healthcare Website Navigation Best Practices](https://www.314e.com/practifly/blog/healthcare-website-navigation-best-practices/)

**Note for the orchestrator:** two sources could not be retrieved directly and are cited only via search-result summaries — `mountelizabeth.com.sg/find-doctor` and `mayoclinic.org/patient-centered-care/does-mayo-clinic-treat-my-condition` both returned HTTP 403 to WebFetch. The Mayo "Doctors & Departments" pattern is corroborated by the retrievable condition-page URLs; the Mount Elizabeth facet detail is the weaker of the two claims and is used only for the "850 doctors" framing point. Also note that no Baymard _healthcare-specific_ benchmark exists — their live-chat and search findings are e-commerce-derived, so the §5 mobile-sticky guidance is an adaptation, not a direct healthcare finding. The direction of the adaptation is conservative (a hospital's call button matters more than a retailer's, not less), but flag it as inference if it goes into a client-facing deck.
