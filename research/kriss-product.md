## DISAMBIGUATION — RESOLVED (and it's not what the brief assumed)

The brief expected two unrelated things named KRISS. **There is really one product with two framings**, plus a genuinely murky corporate relationship.

- **KRISS = "Knowledge Resource Intelligent Search System."** Confirmed via trade press.
- **Iozera's "Project Kriss"** (https://iozera.ai/project-kriss/) is the 2023-era generic pitch: _"a revolutionary leap in the world of Chatbot-as-a-Service."_ No channels, languages, KB mechanics, integrations, pricing, or clients stated. It is a stub page.
- **kriss.ai** is that same thing productized and **launched to US dentists in early 2024**, HQ **Houston, TX**. LinkedIn/press describe it as _"Iozera.ai's newest startup kriss.ai."_
- **The dental-AI assistant IS the chatbot-as-a-service.** They are not two products to keep apart.
- **BUT the corporate link is inconsistently told**, and this is the part to be careful about: iozera.ai's own homepage lists **Kriss.ai as a customer testimonial** (quote attributed to **Timothy Ngo, Co-Founder**, about needing "a robust data platform for storing and accessing distributed data across multicloud environment"). Meanwhile kriss.ai's own About page names **Timothy Ngo — CEO** and **Takeshi Hirota — Founder**, and **contains zero mentions of Iozera anywhere on the site** (I grepped the full page payload: no "Iozera", no agency credit, no parent-company reference). A third source (an Iozera staffer's LinkedIn) describes supporting "KrissAI, ChatliAI, and GenV" under "IOZERA AI."
- **Net:** internally Iozera treats KRISS as its own; publicly kriss.ai stands alone as a Houston company and Iozera frames it as a client. **Allan must settle which story we tell UASHMC before the meeting.** Telling both is how you lose Harvey Lozada.
- Sibling products: **Denchat.com** ("Powered by Kriss.ai"), **AI Vision** and **Ortho AI Vision** (both "coming soon"), **Chatli.ai** (JS-only shell, unreadable, no confirmable Iozera link).

---

## 1. What KRISS AI demonstrably is

I recovered kriss.ai's **complete PayloadCMS content payload** from the page source (the site is SvelteKit + PayloadCMS + WebGL and renders nothing to scrapers), so the following is verbatim from their own CMS, not inference.

**Product category:** LLM-powered informational chatbot embedded in a healthcare provider's website. Their own words: _"I'm integrated into your website to help with intelligent, AI-driven insights to deliver personalized care and transform the patient experience."_ Widget copy: _"I will live down here on your website. Click to try me!"_

**Positioning has broadened beyond dental.** Meta description is now _"An AI chatbot for healthcare professionals."_ The homepage rotates through five industries: **pharmacists, healthcare professionals, dentists, health insurance agents, doctors**. This is favorable for the hospital pitch — but note the _body_ copy, FAQ, and feature demos are still overwhelmingly dental, and the competitor comparison table still lists "Dental Terminology Proficiency" as a differentiator.

**Channels — website widget only.** No mention of Messenger, WhatsApp, Viber, SMS, or telephony anywhere in the entire payload (I searched all of these explicitly; all returned zero hits). The setup step is literally titled "Website integration." **Voice is explicitly unshipped** — see roadmap below. Given UASHMC's real presence is Facebook + Viber, this is a material gap.

**Languages:** **No language claim at all.** No "multilingual," no Spanish, no Tagalog/Taglish. Zero hits. Do not claim Filipino-language support.

**How the knowledge base is populated — vendor-managed, not self-serve.** Four-step process from their /setup content:

1. **Questionnaire** — _"Our team will send a detailed questionnaire to gather information specific to your practice and essential for customization of the bot."_
2. **Chatbot Training** — _"Our expert team uses the information provided in the questionnaire to further train the chatbot."_
3. **Website integration** — _"Our IT team then collaborates with your IT team to integrate the chatbot seamlessly into your website."_
4. **Ongoing Maintenance** — _"regular updates, input of the latest medical terminology and performance monitoring."_

There is **no document upload, no site-crawl ingestion, no admin console for content** described anywhere. Stated turnaround: _"The initial setup and training process typically takes about 1-2 days."_ Accuracy basis: _"trained using a comprehensive database of dental terminologies, treatments, and procedures"_ plus continuous manual expert updates.

**Booking — it does NOT book. This is the single most useful confirmed fact for the pitch.** Verbatim FAQ:

> **"Can Kriss.ai help with appointment scheduling?"** — _"While Kriss.ai does not handle appointment scheduling directly, it can provide links to your dental office's scheduling portal, allowing patients to book appointments themselves. This ensures a seamless and convenient experience for your patients."_

That maps **perfectly** onto UASHMC already running NowServing.ph. KRISS informs and hands off; NowServing books. Lead with this — it's true, it's defensible, and it makes their existing investment look deliberate.

**Stated integrations:** none named. Only "seamlessly integrates into your existing systems" (Iozera) and the IT-to-IT website embed. No EMR/HIS, no PMS, no HMO systems.

**Tech stack claim:** _"Kriss.ai leverages advanced language models (LLMs) like ChatGPT... Our approach integrates LLMs with proprietary data and custom fine-tuning."_

**Their own published maturity roadmap** — this is the honesty artifact, with completion flags straight from the CMS:

- Level 1 — Conversational AI (basic patient inquiries, routine info) — **`completed: true`**
- Level 2 — Structured Training for Staff — **`completed: true`**
- Level 3 — Two-Way Voice Communication — **`completed: false`**
- Level 4 — AI-Assisted Diagnostics, reading X-rays, diagnostic support — **`completed: false`**
- Level 5 — Automation of Administrative Tasks incl. appointment scheduling, records, billing — **`completed: false`**
- Level 6 — AI-to-AI Communications with insurers — **`completed: false`**

**Shipped = Levels 1–2 only.** Everything operationally interesting is roadmap.

**Pricing (public):** **$199/month + $500 one-time setup fee.** Plan features: 24/7 Availability, Automated Documentation Generation, Patient Education, Expert Clinical Resources, Supplies and Equipment Support. This is SMB dental-clinic pricing — be ready for it to anchor UASHMC's expectations far below a hospital engagement, and for them to find it.

**Healthcare-specific features:** journey is modelled on physical rooms — Front Desk, Consultation Room, Surgery Room, Doctors Office, Server Room, Administration Room, Post-Operative Care. Features include clinical-note generation from dictated findings, treatment-plan explanation with costs, patient education, staff training modules, and an inquiry-analytics report.

### ⚠️ The compliance problem you must handle before the slide gets written

Our hard constraint is _hospital-approved information and navigation only; no diagnosis, no clinical advice, no triage._ **KRISS's own marketing demos violate that constraint.** From their CMS:

- A patient asks about root-canal recovery and the bot answers with **drug guidance**: _"Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage this."_
- Post-operative content advises _"avoiding NSAIDs like ibuprofen which can increase bleeding risk."_
- A clinician demo shows the bot **generating a clinical note from a diagnosis** ("diagnosed severe decay to the pulp...").
- Roadmap Level 4 openly aims at **reading X-rays and providing diagnostic support**.

Additionally: **no HIPAA mention anywhere on the site** (zero hits), **no clinical disclaimer**, **no "not medical advice" language**, **no escalation-to-human or emergency-escalation feature described**, and **no Philippine Data Privacy Act / RA 10173 reference**. The only safety-adjacent text is one generic line in the About page — _"we adhere to strict ethical guidelines and comply with all relevant regulations"_ — and a boilerplate website privacy policy (contact: support@kriss.ai) that covers cookies and IP addresses, not patient data.

Dr. Pedraja and Dr. Bravo are clinicians. If they open the KRISS site during the meeting and see the ibuprofen answer, our "no clinical advice" promise collapses. **Get ahead of it:** present the constraint as _our deliberate configuration decision for UASHMC_, with a named guardrail spec, not as an inherent property of the product.

---

## 2. Iozera's positioning and stated service lines — the web-design evidence is absent

**Positioning:** tagline _"Prepare for AI success"_; _"Creating AI Success — Advancing Your Business with AI"_; LinkedIn: _"Empowering Businesses with AI-Driven Data Management and Strategic Innovation."_

**Actual stated service lines (four, all data/AI infrastructure):** Data Prep · Data Storage · Data Management · Consultation. Adjacent pages cover Cloud Solutions, Turnkey AI Solution, an **AI Data Center** (GPU/Grace-Hopper), "Project Genesis" (secure on-prem genAI, beta 2024), and a **GenV + HPE + NVIDIA** infrastructure collaboration reselling HPE ProLiant / GreenLake.

**Web design / web development capability: ZERO public evidence.** I checked the homepage, /about-us/, /software-solution/, and the full page sitemap. The word "website" does not appear as a service. No web design, no web development, no front-end, no UI/UX, no mobile apps, no custom application development. `/software-solution/` is entirely about _"machine learning, deep learning, and neural networks... predictive analytics, natural language processing, and image recognition."_

**Iozera also appears in no third-party B2B directory** — not Clutch, not TechBehemoths, despite both indexing Philippine AI and chatbot firms heavily. No verified reviews, no ratings, no portfolio listing.

**No public Philippines presence.** iozera.ai states no Philippine office. The only address published is on /contact/ (see below). The Philippine connection is real but exists **only in staff LinkedIn profiles** (multiple ph.linkedin.com employees: Febie Jane Casipong, Legen Simil, and others). The brief's premise — "AI enablement + web design/development firm in the Philippines" — is **internally true and externally invisible**.

### 🔴 STOP-SHIP ISSUE: iozera.ai is an unfinished WordPress template

This is the most urgent thing in this report.

**`iozera.ai/contact/` still displays raw theme placeholder data:**

- Address: **"198 West 21th Street, Suite 721 New York, NY 10010"** (a stock WordPress demo address, typo "21th" included)
- Email: **"youremail@yourdomain.com"**
- Phone: **"+88 (0) 101 0000 000"** · Fax: "+88 (0) 202 0000 001"

**And the blog is untouched theme demo content.** From `post-sitemap.xml`, all 12 posts are theme filler: `hello-world`, `a-retina-theme`, `a-powerful-theme`, `post-with-audio`, `post-with-link`, `the-pictures`, `the-best-blog`, `is-very-easy-to-post`, `all-of-the-lights`. Site footer still reads "Copyright © 2023."

**Implication:** we are about to pitch website design and build to a hospital's **Marketing Director**, and our own corporate site has a fake New York address, a `youremail@yourdomain.com` contact, and "Hello world" in the blog. Harvey Lozada will google us. Either **fix /contact/ and delete the demo posts before the onsite**, or make a deliberate decision never to reference iozera.ai and lead entirely with kriss.ai as our craft proof.

---

## 3. Publicly visible client work — and your best available reference

**Named clients: none, anywhere.** And it's worse than "not published":

**The kriss.ai "Current Clients" section is disabled placeholder data.** In the CMS payload, a block titled _"Kriss.ai is compatible with all healthcare industries"_ carries `enabled: false`, and every client name under all six categories (Hospital, Pharmaceuticals, Dentistry, Biotechnology, Health Insurance, Telehealth) is **fake, identical across categories, and links to `https://www.google.com/`**: "Bright Smiles Dental," "Harmony Dental Care," "Radiant Dental Studio," "Pure Dental Wellness," "Gentle Touch Dentistry," "Premier Dental Solutions," "Pearl White Dental," "Happy Teeth Clinic," "Evergreen Family Dental." **There is no client list.** Note the "Hospital" category exists and is empty — nobody has ever shipped this to a hospital publicly.

**The only real named references** are two anonymised dental testimonials on the older staging build (kriss-ai.vercel.app): **"Dr. Vu," general dentist, Houston TX** and **"Drs. Tran & Nguyen," cosmetic dentist, Memorial City TX**. Thin, but real-sounding and geographically consistent with Houston HQ.

### Ranked reference candidates for the meeting

**① kriss.ai — https://kriss.ai — STRONGEST. Rating: 9/10 on craft, 5/10 on relevance.**
This is genuinely impressive work and it is the answer to "can Iozera actually build?" It's a full WebGL/3D interactive experience: an isometric cutaway clinic building you scroll and click hotspots through (Front Desk → Consultation → Surgery → Doctors Office → Server Room → Administration → Post-Operative Care), animated headline "Hi, I'm Kriss.", clean typography, a live embedded chatbot, PayloadCMS-backed content, Calendly demo booking. This is high-production front-end work, not a template.
**Caveats:** (a) heavy — the WebGL preloader stalled at "0%" repeatedly in my testing and never recovered on reload, which is a real risk if you demo it live on hospital wifi. **Record a screen capture as backup.** (b) Content last updated **Aug–Dec 2024** and footer says "© 2024" — it will read as stale to a sharp observer. (c) Dental-specific in the body copy. (d) **No agency credit anywhere** — nothing on that site says Iozera built it, so Allan must confirm we can claim it.

**② DenChat — https://denchat.com — MOST RELEVANT structurally. Rating: 6/10.**
This is the closest thing to what UASHMC is asking for: _"Find a Trusted Dentist Near You—Fast / AI-powered matching. Verified clinics. Book in minutes."_ Search → Match → Book, with location taxonomy across the US and Canada, provider profiles with specialty, ratings, reviews, and detail pages. Footer: **"Powered by Kriss.ai."** It is a working proof that the team has shipped a provider-directory-plus-booking web platform — exactly the "Find a Doctor" journey.
**But it has visible defects — screenshot it, do not hand over the link:** stat block has **missing numbers** ("Trust our platform monthly," "Verified Dentists," "Average Rating" with no figures); truncated copy (_"found their perfect den"_); testimonial carousel **repeats the same three fake-sounding people** (Emily Rodriguez / Sarah Johnson / Dr. Michael Chen) three times with **empty ☆☆☆☆☆ stars on supposedly 5-star reviews**; most listed dentists show **0.0 rating / 0 reviews**; and the location list is dirty — "Quebce QC" alongside "Québec QC" / "Quebec City QC" / "Québec, QC", "Kitchener, O", "St., Catharines", "aneohe", "Canada" duplicated as a top-level region, and under San Diego the entries **"Manufacturer," "Neighborhood," "Nicaragua."**

**③ iozera.ai — DO NOT SHOW.** See §2.

---

## 4. Safe to claim vs. overclaiming

**✅ Defensible on a slide:**

- KRISS AI is an LLM-based patient-information and navigation chatbot that embeds in a hospital website.
- KRISS = Knowledge Resource Intelligent Search System.
- Purpose-built for healthcare, deployed in US dental practices since early 2024; positioning now spans doctors, pharmacists, insurers.
- 24/7 availability; answers service, procedure, insurance/coverage, logistics, hours, location and directions questions in natural language.
- Tailored to the institution's own policies and procedures via a structured questionnaire and vendor-led training.
- Serves three audiences: patients, admin staff, clinicians.
- **Does not book appointments — it deep-links patients into the hospital's existing scheduling portal.** (Their own FAQ. Frame as the NowServing.ph handoff.)
- Deliberately scoped for UASHMC to hospital-approved information only, with human and emergency escalation.
- Vendor-managed content updates and ongoing tuning are part of the service.

**❌ Overclaiming — do not say:**

- **"Deployed in hospitals."** Zero public hospital deployments; their own Hospital category is empty.
- **"Trusted by [any client]."** There is no client list; the one on their site is fake placeholder data.
- **"Multilingual" / "supports Filipino/Tagalog/Taglish."** No language claim exists publicly. Highest-risk claim in a Philippine setting.
- **"Voice / phone / IVR."** Roadmap Level 3, `completed: false`.
- **"Books appointments" / "manages records or billing."** Level 5, `completed: false`.
- **"Reads X-rays" / "diagnostic support."** Level 4, `completed: false` — and out of scope by our own constraint.
- **"Works on Messenger / Viber / WhatsApp / SMS."** Zero evidence. Note this is where UASHMC's actual patients live — expect the question, and answer it as scope, not capability.
- **"HIPAA-compliant" / "DPA-compliant" / "we'll sign a BAA."** No compliance posture is published at all.
- **"Integrates with your EMR/HIS/HMO systems."** No named integration anywhere.
- **"Iozera is a web design and development firm."** Not supported by anything public — and our own site actively undercuts it.
- Any implied Iozera↔kriss.ai parentage until §Disambiguation is settled internally.

---

## 5. Confidence levels

**HIGH (primary-source, verbatim from kriss.ai's own CMS payload):** pricing $199/mo + $500 setup; 1–2 day setup; the four-step questionnaire→training→integration→maintenance process; the six-level roadmap with exact completion flags; "does not handle appointment scheduling directly"; website-only channel; absence of any language claim; absence of HIPAA/disclaimer/escalation content; fake placeholder client list with `enabled: false`; Timothy Ngo CEO / Takeshi Hirota Founder; the ibuprofen and clinical-note demo content.

**HIGH (directly observed):** iozera.ai placeholder NY address / `youremail@yourdomain.com` / "+88" phone; WordPress demo blog slugs in the sitemap; total absence of web-design services across iozera.ai; kriss.ai's 3D site quality and its WebGL loading fragility; DenChat's structure and every defect listed.

**MEDIUM:** KRISS = "Knowledge Resource Intelligent Search System" and the early-2024 US dental launch (trade press: Dentistry Today, Dental Resource Asia — both blocked direct fetch, 403 and expired certificate respectively; recovered via search snippets only). Houston TX HQ (CB Insights). The Iozera↔kriss.ai relationship. The DOM label "Livechat Chatbot Iframe" on the widget, which _suggests_ a third-party live-chat platform underneath rather than fully bespoke infrastructure — **unconfirmed, and worth knowing before anyone promises custom channel work.**

**LOW / UNRESOLVED:** whether Chatli.ai is ours (JS shell, unreadable); whether Iozera's team actually built the kriss.ai website; any Philippine corporate entity; whether AI Vision / Ortho AI Vision exist beyond "coming soon"; real deployment count.

### Only Allan / the internal team can confirm

1. **Which corporate story we tell** — is KRISS Iozera's product, a sister company, or a client? Pick one, brief everyone before the onsite.
2. **Did we build kriss.ai's website?** If yes, this is the centerpiece proof of web capability and we should say so explicitly. If no, we have **no** web-design portfolio and need a different proof (working prototype built for UASHMC, or a named local reference not visible online).
3. **Is there private client work under NDA?** Any real hospital, clinic, or Philippine client — logos or a reference call — would resolve the biggest credibility gap here.
4. **Is KRISS actually built on a third-party chat platform?** Determines whether Messenger/Viber and Filipino-language support are configuration or new engineering.
5. **Can KRISS do Tagalog/Taglish today?** Test it before the meeting. This _will_ be asked.
6. **Our real compliance posture** on RA 10173, data residency, PHI handling, and retention — nothing is publishable today.
7. **Commercial framing for a hospital** vs. the public $199/mo dental price that UASHMC can find in thirty seconds.
8. **Guardrail spec** — the concrete mechanism that prevents the ibuprofen-style answer at UASHMC, plus emergency-escalation behaviour. Needed as a written artifact, not a verbal promise, for Dr. Pedraja and Dr. Bravo.
9. **Decision on iozera.ai:** fix /contact/ and purge the demo blog before the onsite, or commit to never referencing it.

**Sources:** [iozera.ai](https://iozera.ai/) · [iozera.ai/project-kriss](https://iozera.ai/project-kriss/) · [iozera.ai/about-us](https://iozera.ai/about-us/) · [iozera.ai/software-solution](https://iozera.ai/software-solution/) · [iozera.ai/contact](https://iozera.ai/contact/) · [iozera.ai/page-sitemap.xml](https://iozera.ai/page-sitemap.xml) · [iozera.ai/post-sitemap.xml](https://iozera.ai/post-sitemap.xml) · [iozera.ai/iozera-secures-project-genesis](https://iozera.ai/iozera-secures-project-genesis/) · [iozera.ai/iozera-and-genv-collaboration](https://iozera.ai/iozera-and-genv-collaboration/) · [kriss.ai](https://kriss.ai/) · [kriss-ai.vercel.app](https://kriss-ai.vercel.app/) · [denchat.com](https://denchat.com/) · [CB Insights — KRISS.AI](https://www.cbinsights.com/compare/arini-vs-krissai) · [Dentistry Today](https://www.dentistrytoday.com/kriss-ai-transforms-the-dental-industry-with-revolutionary-dentistry-chatbot/) · [Dental Resource Asia](https://dentalresourceasia.com/kriss-ai-introduces-ai-chatbot-service-to-us-dentists/) · [Iozera.ai LinkedIn](https://www.linkedin.com/company/iozera) · [Iozera.ai salesperson posting](https://www.linkedin.com/jobs/view/salesperson-at-iozera-ai-3807486765) · [Gil Martin Garcia LinkedIn](https://www.linkedin.com/in/gil-martin-garcia-6863a474/) · [KRISS AI bio.link](https://bio.link/krissaidental)
