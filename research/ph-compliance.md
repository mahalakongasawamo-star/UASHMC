## PHILIPPINE REGULATORY & TRUST-SIGNAL REQUIREMENTS — UASHMC WEBSITE + KRISS AI

Confidence is marked per item. **[CONFIRMED]** = found in primary text or a directly-quoting source. **[REPORTED]** = credible secondary source only. **[UNCERTAIN / VERIFY]** = flag to counsel or to UASHMC before it goes on a slide.

---

## 1. DOH LICENSING & HOSPITAL CLASSIFICATION

**The requirement.** RA 4226 (Hospital Licensure Act) requires a DOH **License to Operate (LTO)** before any hospital operates; the LTO is also a prerequisite to accreditation by any DOH-recognised accrediting body **[CONFIRMED]**. DOH **AO 2012-0012** governs classification by _service capability_ **[CONFIRMED]**:

|             | Must have                                                                                                                                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Level 1** | Acute medical & surgical services, anesthesia, emergency + outpatient; OR with sterilization provisions, post-op recovery room, maternity + isolation facilities, dental section, blood station, **secondary** clinical laboratory, **Level 1** imaging, licensed pharmacy                   |
| **Level 2** | All of Level 1, plus **departmentalized** with capability to support board-certified/eligible specialists; general ICU, NICU, High-Risk Pregnancy Unit, respiratory therapy, **tertiary** clinical laboratory, **Level 2** imaging (mobile x-ray + contrast studies)                         |
| **Level 3** | All of Level 2, plus **teaching/training hospital with accredited residency in the 4 major specialties**; physical medicine & rehab unit, ambulatory surgical clinic, dialysis facility, **blood bank**, tertiary lab with histopathology, **Level 3** imaging with interventional radiology |

Two provisions matter more than the levels themselves:

- **AO 2012-0012 naming rule [CONFIRMED]:** _"The name of the institution shall be compatible with the functional capacity of the health facility."_ The AO's own worked example: a clinic cannot call itself a medical center.
- **RA 10932, Section 3 [CONFIRMED]:** _"All hospitals are required to post at their entrance a notice indicating the classification level of the hospital as licensed by the Department of Health (DOH) and the list of medical services that the hospital is authorized to perform."_

**Why it matters for THIS project.** RA 10932 Sec. 3 is the single most useful regulatory hook we have, because **the law already tells us what the front door must say — and the homepage _is_ the front door now.** "Level [X] hospital, licensed by DOH, authorized to perform these services" is not compliance boilerplate we're bolting on; it is exactly the credibility payload a brand-new 2025 hospital with no website needs. Compliance and marketing point the same direction here. That is the argument to open with in front of Dr. Pedraja.

Second, the naming rule is a **live risk flag**: the client trades as "…Specialists Hospital **and Medical Center**." We must confirm their LTO classification and registered facility name support that. Not our call to make — but raising it _before_ we print it 40 times across a website is exactly the kind of diligence that buys credibility with a Medical Director. **[ACTION: ask for a copy of the LTO.]**

**Website implication.**

- An "About / Licensing & Accreditation" block carrying: registered facility name as licensed, DOH classification level, and the authoritative list of DOH-authorized services. Mirror the entrance notice.
- **Never publish a service the LTO does not cover.** Advertising lab or imaging services without the matching licence is the textbook violation **[REPORTED]**. This constrains the "feature NEW services as the hospital expands" requirement: the publish gate for a new service card must be _"is it on the LTO?"_, not _"is marketing ready?"_ Build that as a required field in the CMS, not a policy memo.
- LTO contents available to display: facility name/address, licence number, service category authorized, issuance and expiry dates, issuing DOH office **[REPORTED]**.
- DOH/HFSRB publishes lists of licensed facilities that the public can check **[REPORTED]** — linking out to the regulator is a stronger trust signal than any self-assertion.

**[UNCERTAIN / VERIFY]** I found **no rule requiring the LTO _number_ on a website**, and no strong convention of PH hospitals doing so. Recommend displaying **classification level + authorized services + "licensed by DOH"** (statutorily grounded) and treating the licence number as optional. Do not tell the board it is mandatory — it isn't, as far as I can establish.

---

## 2. PHILHEALTH ACCREDITATION

**The requirement.** Accreditation is PhilHealth's verification that a provider's qualifications and capabilities meet its standards **[CONFIRMED]**. Critically, **it is not one binary status**: PhilHealth accredits by facility _and_ by provider category / benefit package — hospitals Levels 1–3, ambulatory surgical clinics, dialysis, maternity care, TB DOTS, HIV/AIDS treatment, primary care (Konsulta), cancer, etc. **[CONFIRMED]**. Initial/re-accreditation may be filed anytime; renewals run 1 October to year-end **[CONFIRMED]**.

**Konsulta** is the primary care benefit under RA 11223 (UHC Act): free consultation, health-risk screening, selected labs/diagnostics, and medicines. Every member enrols with **one** Konsulta provider. Case rate: ₱500 public / ₱750 private **[REPORTED]**. PhilHealth is transitioning from case rates to a **DRG** model **[REPORTED]**.

**Display duties already imposed on the physical facility [REPORTED]:** PhilHealth Circular No. 01 s.2001 requires accredited facilities to display conspicuous PhilHealth accreditation signage, outside the facility, preferably near the facility name, to PhilHealth's size specs. The **Performance Commitment** requires a **PhilHealth Bulletin Board** posting updated NHIP information (circulars, memoranda, IEC materials, price reference index) in conspicuous places accessible to patients and members.

**Why it matters.** The Bulletin Board obligation is the perfect framing device: **UASHMC already owes patients a continuously-updated PhilHealth information surface.** The website is that surface, done properly. Low argumentative resistance, obvious patient value.

The danger is **Zero/No Balance Billing**. ZBB applies to basic/ward accommodation and is concentrated in DOH-retained/public facilities; in **private** hospitals it is materially narrower — reportedly capped around 10% of bed capacity for ward accommodation, under strict conditions **[REPORTED / VERIFY WITH UASHMC BILLING]**. A chatbot that answers _"Does PhilHealth cover my confinement?"_ with anything resembling "yes, fully" generates billing disputes and a complaint trail.

**Website implication.**

- A PhilHealth page listing **which accreditations UASHMC actually holds, by package** — not the word "PhilHealth-accredited" floating alone.
- Konsulta: if UASHMC is a Konsulta provider, this is a genuine patient-acquisition funnel — but registration is **exclusive to one provider**, so copy must be precise about what enrolling means.
- **Do not hardcode peso amounts.** Case rates are mid-migration to DRG. Publish process and eligibility; link to philhealth.gov.ph for figures. This is a maintenance-burden argument as much as a compliance one.
- Chatbot rule: PhilHealth questions resolve to _"here is the benefit, here is what you bring, here is who to call"_ — never to a coverage determination or an amount.

---

## 3. HMO ACCREDITATION — THE HIGHEST-RISK JOURNEY ON THE SITE

**Regulator.** HMOs moved from DOH to the **Insurance Commission** under **EO 192, s. 2015** **[CONFIRMED]**. An HMO is an entity that provides or arranges pre-agreed health services for enrolled members for a fixed prepaid fee **[CONFIRMED]**.

**What "accredited" actually is.** A **commercial contract** between hospital and HMO: negotiated procedure rates, billing mechanics (direct / LOA / reimbursement), service levels **[REPORTED]**. It is not a regulatory status and it is not a property of the patient's question.

**The five independent variables** behind "Do you accept my HMO?" **[REPORTED, consistent across multiple sources]**:

1. **Hospital ↔ HMO** — is there an agreement at all?
2. **Plan tier** — listings reflect broad acceptance, but _plan-level gates apply_. A hospital showing an HMO's sign does not mean every plan is covered there.
3. **Doctor** — HMOs maintain their own accredited-doctor lists. St. Luke's states it plainly: _"The choice of doctor for each HMO is based on the list of accredited doctors provided by the respective HMOs."_
4. **Service / procedure** — planned procedures need an **LOA**, typically **1–5 business days**; many HMOs now issue digital LOAs via app/portal.
5. **Setting** — outpatient is commonly **direct swipe** (HMO card + 1 valid ID); **emergency care at accredited facilities is usually cashless without an LOA**; inpatient needs card + government ID + LOA for planned procedures.

**Industry disclaimer convention [CONFIRMED by example].** Chong Hua Hospital: the list _"may change without prior notice. For the latest information, please confirm with our Information Desk or directly with your provider."_ Davao Doctors dates its list ("as of January 2025"). So the caveat-plus-date pattern is established PH hospital practice — we are not inventing defensive lawyering, we are matching the sector.

**Why it matters.** Patient Journey B is the one place where a plausible-sounding chatbot answer can cause **direct financial harm** to a patient and a reputational hit to a hospital that is still building trust. A confident "Yes, we accept Maxicare" to someone whose _plan_ excludes the procedure, or whose _chosen doctor_ isn't on Maxicare's list, produces a family with an unexpected bill in the billing queue.

**Website + chatbot implication — design this as routing, never as adjudication.**

- Publish the HMO list as **"HMOs we have accreditation agreements with"** — never "HMOs we accept."
- Mandatory visible **"last updated [date]"** on the list, with a named internal owner. This is the single highest-value maintenance commitment on the whole site.
- Every HMO answer carries the four caveats: _plan tier, your doctor, your specific procedure, LOA lead time._
- Split **Outpatient / Inpatient / Emergency** explicitly — the mechanics genuinely differ, and conflating them is how patients get hurt.
- **KRISS AI hard rule:** the bot may state _whether an agreement exists_ and _what the patient should bring and do next_. It must **never** state that a service will be covered, an amount, or that a specific doctor is accredited under a specific plan. Terminal action is always: verify with your HMO **and** UASHMC's HMO/billing desk before admission.
- Include an **LOA lead-time warning** ("request as soon as your doctor recommends a procedure — allow 1–5 business days"). Genuinely useful, and it demonstrates to Harvey that compliance copy can _be_ the marketing differentiator.

---

## 4. DATA PRIVACY ACT (RA 10173) & NPC

Health information is **sensitive personal information** with heightened protection; for SPI, consent must be **prior** and **specific to the purpose** unless another lawful basis under DPA Sec. 13 applies **[CONFIRMED]**. Every inquiry form, appointment form, and chatbot log on this site will contain SPI or something close to it.

**Obligations in force:**

| Instrument                                                             | Requirement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Status                           |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **DPA IRR Sec. 34**                                                    | Right to be informed — data subject **notified and furnished information before entry of personal data into the processing system**, or at the next practical opportunity; must include **existence of automated decision-making and profiling**; right to **object** to automated processing/profiling and direct marketing                                                                                                                                                                                                                                                            | **[CONFIRMED]**                  |
| **NPC Circular 2023-04** (eff. 29 Nov 2023)                            | Criteria for valid consent; **"minimum specific information"** must be disclosed at the point consent is asked; **just-in-time and layered notices are the DEFAULT format**; rules on withdrawal of consent                                                                                                                                                                                                                                                                                                                                                                             | **[CONFIRMED]**                  |
| **NPC Circular 2022-04**                                               | Mandatory registration of Data Processing Systems + DPO via NPCRS. Triggers: ≥250 employees, **OR SPI of ≥1,000 individuals**, **OR** processing likely to pose risk to rights and freedoms — **hospitals are named as an example**                                                                                                                                                                                                                                                                                                                                                     | **[REPORTED, multiple sources]** |
| **NPC Circular 2023-06** (eff. 30 Mar 2024; compliance by 30 Mar 2025) | Updated minimum organizational / physical / technical security requirements; DPO obligations, storage & retention limits, **access controls**, privacy management programme. Non-compliance → compliance/enforcement orders, cease-and-desist, processing ban, fines                                                                                                                                                                                                                                                                                                                    | **[CONFIRMED]**                  |
| **NPC Circular 16-03**                                                 | Breach: notify **NPC and data subjects within 72 hours** of knowledge/reasonable belief; **no delay** where ≥100 data subjects affected or SPI disclosure would harm; **full report within 5 days**                                                                                                                                                                                                                                                                                                                                                                                     | **[CONFIRMED]**                  |
| **NPC Advisory 2024-04** (19 Dec 2024) — **the KRISS AI document**     | DPA applied to AI systems across collection, training, testing, prompts, profiling, inference, output, monitoring. Requires: **transparency** on nature, purpose, extent and _risks_ of AI processing; **accountability stays with the PIC** — cannot be delegated to the vendor or the technology; **governance mechanisms — privacy impact assessments, human intervention protocols, grievance mechanisms**; bias elimination and data accuracy; **effective mechanisms for the rights to object, rectification, and erasure/blocking even where data has entered AI training sets** | **[CONFIRMED]**                  |

**Pending — do not present as law [UNCERTAIN].** As of August 2026 a **draft** NPC circular would supersede NPC Advisory 2017-03 on PIAs, confining mandatory PIAs to eight defined categories while imposing stricter treatment of **AI systems, biometrics, and cross-border transfers** — including PIA before AI deployment, privacy-by-design/PETs, and **explainability of AI decisions materially affecting individuals**. Draft, number unassigned. Flag as directional, not binding.

**Why it matters, and the sharpest point to make to the board.** NPC Advisory 2024-04 puts accountability on **UASHMC as Personal Information Controller** — not on Iozera, not on KRISS AI. That is a fact the board must hear from us first, unprompted. It converts the KRISS AI conversation from "cool chatbot" into "governed clinical-adjacent system with named owners," which is precisely the register Dr. Pedraja and Dr. Directo will respond to. Volunteering the liability is the credibility move.

**Related — and this is a real finding.** The published contact is **uashmc.customerrelations@gmail.com**. Patient inquiries containing health information flowing into a consumer mailbox sit outside any access-control regime the hospital can evidence under **NPC Circular 2023-06**. That reframes the hospital-domain email migration from a branding nice-to-have into a **data-security remediation item** — a much easier budget conversation, and one Tere Barcelona can act on immediately.

**Concrete deliverables (name these as scope line items):**

1. **Privacy Notice / Policy** page. Content set derived from DPA Sec. 16 and IRR Sec. 34: identity and contact of the PIC; categories of personal and sensitive personal data collected; purposes; methods of processing; recipients and third parties including any cross-border transfer; retention period; **existence of automated processing/profiling**; the full list of data subject rights and how to exercise them; **DPO name and contact**; complaint route to the NPC. _(Presented as derived from the statute and IRR — not a verbatim NPC checklist.)_
2. **Layered + just-in-time notices** at each collection point — the _default_ format per Circular 2023-04. Not one buried policy link.
3. **Chatbot pre-chat notice**, in-widget: that it is an AI system, what is logged, retention period, that it is not a doctor, and how to reach a human. Satisfies IRR Sec. 34 automated-processing disclosure and Advisory 2024-04 transparency in one component.
4. **Consent that is granular and withdrawable** — separate purposes (respond to my inquiry / book me / marketing). No bundling, no pre-ticked boxes.
5. **Data minimisation on forms.** Do not collect symptoms or diagnoses to book an appointment. Collect the least SPI that makes the journey work — the cheapest compliance win available and it improves form conversion.
6. **PIA** on the website + chatbot before launch; **human escalation path**; **grievance mechanism**. Required by Advisory 2024-04, and likely hardened by the draft circular.
7. **Retention + deletion policy for chat logs**, with a route to honour erasure/blocking requests.
8. Confirm UASHMC's **DPO designation and NPCRS registration** status — a hospital almost certainly crosses the thresholds. **[ACTION: ask.]**

---

## 5. AI, TELEMEDICINE, AND ADVERTISING OF MEDICAL SERVICES

### 5a. AI — no statute yet

There is **no AI law in force** in the Philippines **[CONFIRMED]**. HB 7396 and a consolidated _Artificial Intelligence Development and Regulation Act_ (House TWG consolidating 26 bills, 3 resolutions, as of July 2026) remain pending; the National AI Strategy Roadmap 2.0 / NAIS-PH are executive policy, not law **[REPORTED]**. Notably, the emerging draft reserves strict regulation for **high-risk systems affecting loans, jobs, and health** — so a patient-facing health chatbot sits squarely in the category future law will target. Building to Advisory 2024-04 now is cheap; retrofitting later is not. That is the forward-looking argument for the board.

### 5b. FDA — the reason the scope constraint is a legal boundary, not a preference

**AO 2018-0002** expressly includes **software** in the definition of a medical device; wellness/lifestyle/fitness software is typically **not** a device; Class A–D devices require a **CMDN or CMDR** to be placed on the market **[REPORTED]**. Classification turns on **intended use**.

**This is the finding that validates the brief's hard constraint.** "Hospital-approved information and patient navigation only — no diagnosis, no clinical advice, no triage decisions" is not merely prudent positioning. It is what keeps KRISS AI **outside the Software-as-a-Medical-Device perimeter**. Add a symptom checker or an acuity/triage recommendation and you have created a plausible medical-device classification question requiring FDA analysis **[UNCERTAIN — counsel territory if ever scoped]**. Say this out loud at the onsite: the guardrail protects the hospital's licence exposure, not just the patient.

### 5c. Physician advertising — PRC / PMA Code of Ethics

Adopted jointly by the **PRC Board of Medicine** and the **PMA** (Board of Medicine Resolution No. 34, s. 2009) **[CONFIRMED]**:

- **False, extravagant, or unethical advertisement** is a ground for reprimand, suspension, or revocation of the certificate of registration.
- _"A physician shall not employ agents in the solicitation and recruitment of patients."_ Soliciting patients by circulars, advertisements, or personal relations is incompatible with honorable standing.
- On **signboards and conventional advertising**, only name, field of specialty, office hours, and office/residential address may appear. Publishing personal superiority, special certificates, diplomas, post-graduate training, specific treatment methods, operative techniques, or former hospital connections is not allowed.

**The carve-out that makes Find-a-Doctor viable [CONFIRMED — and this is the best single finding for the design conversation]:** the Code says _"Except in internet web sites…"_ — and expressly permits websites to display **special certificates or diplomas, post-graduate training, and former hospital connections**, on the reasoning that a patient has the **right to know the capabilities and qualifications of his doctor**.

So: **rich physician profiles are affirmatively contemplated by the Code of Ethics for websites in a way they are not for any other medium.** That is a green light for the highest-value module on the site — and it lets us tell Dr. Pedraja that a substantive Find-a-Doctor directory is the _more_ ethical choice, not the riskier one.

**Constraints to build in [part CONFIRMED, part my interpretation — flagged]:**

- Publish **credentials**, not **superiority**. Board certification, fellowships, training, sub-specialty, clinic hours, languages — yes. "Best," "leading," "top," "most experienced" — no.
- No promotion of specific treatment methods or operative techniques as superior.
- **[INTERPRETATION — flag as ours, not a citation]** Keep the directory **uniform and neutral**: same profile template, same fields, neutral sort. Ranked, "featured," or paid-placement doctor listings risk positioning the hospital as an _agent soliciting patients_ for individual physicians — the conduct the Code prohibits. Practical upshot: no "Doctor of the Month" promotion in the directory. Worth a Medical Director sign-off on the profile template.

### 5d. Hospital service advertising — claims

**RA 7394 (Consumer Act), Art. 110 [CONFIRMED]:** unlawful to disseminate any **false, deceptive or misleading advertisement** for the purpose of inducing the purchase of consumer products **or services**. Penalties reported up to **₱300,000 and/or imprisonment** **[REPORTED]**.

**Concrete banned-copy list for the site and for KRISS AI's response templates:**

- ❌ "Best hospital in Antipolo / Rizal", "#1", "world-class", "state-of-the-art" (unsubstantiated), "leading"
- ❌ Any service not on the LTO (AO 2012-0012 + RA 10932 Sec. 3)
- ❌ Outcome or cure claims; success-rate figures without a documented source
- ❌ Facility descriptors above the licensed classification level
- ✅ Verifiable, attributable, dated facts: DOH classification, authorized services, credentials, equipment actually installed, accreditations actually held

The existing tagline **"Excellence in Every Life We Touch"** is aspirational, non-comparative, and non-factual — safe. Use it; don't let it drift into comparative claims elsewhere in the copy.

### 5e. Telemedicine — relevant to "Doctor in the House"

Instruments identified **[CONFIRMED as existing]**: DOH DM 2020-0016 / **DOH-NPC Joint Memorandum Circular 2020-0001**, _"Guidelines on the Use of Telemedicine in COVID-19 Response"_ (28 March 2020); and **DOH-UPM Joint Memorandum Circular 2020-0001**, _"Telemedicine Practice Guidelines"_ (8 June 2020, transmitted via DOH MC 2020-0034). Reported content: consultation permitted by phone, chat, SMS, or audio/video conferencing, with electronic issuance of clinical abstracts, referrals, and prescriptions; provisions on **informed consent** and **privacy**; positioned for use where a physician is physically inaccessible and for **follow-up** consultations after an initial visit **[REPORTED]**.

**[UNCERTAIN / VERIFY — state this honestly at the onsite].** I could not extract the primary text; both are scanned image PDFs. More importantly, these are **COVID-response instruments**, and whether they remain in force, were superseded, or are now merely advisory **must be verified with counsel or DOH before the website makes any promise about telemedicine eligibility, prescription issuance, or coverage.** Recommendation: Phase 1 describes the telemedicine _service_ and how to book it. It does **not** publish clinical scope claims. That is a defensible, honest phase boundary — and it is a decision for Dr. Pedraja to make, not for us to pre-empt.

---

## 6. ACCESSIBILITY, DISCOUNTS, AND THE ANTI-HOSPITAL DEPOSIT LAW

### 6a. Senior citizen — RA 9994

20% discount **plus VAT exemption** on medical and dental services, diagnostic and laboratory fees, and professional fees of attending physicians in **all private hospitals, medical facilities, outpatient clinics and home care facilities** **[CONFIRMED]**. Senior = resident citizen aged **60+**. Computation order: **remove the 12% VAT first, then apply 20% to the VAT-exclusive amount** **[CONFIRMED]** — a detail patients constantly get wrong and a chance for the site to be genuinely more useful than any competitor's. ID: **OSCA-issued** senior citizen ID **[CONFIRMED]**.

**Current and worth featuring:** the **purchase booklet is no longer required** for the 20% discount on medicines and medical devices — DOH **AO 2024-0017**, implemented by **FDA Circular 2025-005** **[CONFIRMED]**. Publishing this signals the site is maintained by people who track issuances.

### 6b. PWD — RA 10754 (amending RA 7277 / RA 9442)

20% discount + VAT exemption on covered goods and services for the PWD's exclusive use **[CONFIRMED]**. **IRR Rule IV, Sec. 6: all establishments shall place signages in conspicuous areas within their premises informing persons with disabilities that they are entitled to the 20% discount and VAT exemption** **[CONFIRMED]**.

**[UNCERTAIN]** I confirmed the **PWD** signage duty; I could **not** confirm an equivalent express "shall post" signage clause in the RA 9994 IRR for senior citizens. Do not assert a senior-citizen posting mandate. The safe, accurate framing: _a disclosure duty is expressly established for PWDs, and disclosing both is the obvious practice._

Adjacent, retail-focused: **JAO 24-02 s.2024** revised rules on SC/PWD discounts for basic necessities and prime commodities **[CONFIRMED it exists]** — mention only, not hospital-services core.

### 6c. BP 344 — Accessibility Law (physical, but a website job)

Private buildings open to the public must comply; **hospitals are expressly named** **[CONFIRMED]**. 2024 Revised IRR specifics: ramps at max **1:20** slope (1:15 exception), PWD toilet min **1.80m × 1.80m**, PWD parking **4.0m × 5.0m**, handrails, wider doorways, curb cuts, **detectable tapping rails at hazard edges**, elevators with **Braille buttons and audio signals**, clear visible signage **[CONFIRMED]**.

**Website implication.** BP 344 governs the building — but the _website_ is where the family bringing a wheelchair-using grandparent decides whether the trip up Marcos Highway is feasible. An **Accessibility at UASHMC** section (PWD parking location, ramp access, accessible restrooms, priority lanes, elevator access, senior/PWD assistance desk) is a real differentiator that costs nothing and converts.

### 6d. Web accessibility — get the legal status right

**NCDA Memorandum Circular 2017-004** prescribes the **Philippine Web Accessibility Policy**, adopting **ISO/IEC 40500:2012 / W3C WCAG 2.0** as the Philippine standard **[CONFIRMED]** — but it is directed at **government** websites. **[UNCERTAIN]** I found **no confirmed statutory WCAG mandate for private establishments**; sources indicate private operators of public-facing digital services _increasingly adopt_ the standard under anti-discrimination and consumer-protection expectations, not a clear legal duty.

**Recommend WCAG 2.1 AA voluntarily** — and pitch it on merit, not fear: a Philippine hospital's actual audience is elderly patients, low-vision users, and anxious families one-handed on mid-range Android phones on mobile data. Large tap targets, real contrast, readable type, keyboard operability, and no text-in-images are simply what makes this site work. Do **not** tell the board it is legally required. Say the government holds itself to WCAG 2.0 and UASHMC choosing to meet it is a positioning statement.

### 6e. RA 10932 — Anti-Hospital Deposit Law (patients ask about this constantly)

**[CONFIRMED from primary text]:**

- Unlawful to **request, solicit, demand or accept any deposit or any other form of advance payment as a prerequisite for administering basic emergency care**.
- **"Emergency"**: a condition where, based on the objective findings of a prudent medical officer on duty, there is **immediate danger** and delay in initial support and treatment may cause loss of life or permanent disability — or, for a pregnant woman, permanent injury or loss of the unborn child, or non-institutional delivery.
- **"Serious case"**: a condition characterized by gravity or danger which, based on the same objective findings, if left unattended may cause loss of life or permanent disability — or, for a pregnant woman, permanent injury or loss of the unborn child.
- **Transfers**: permitted where the receiving facility agrees and the patient consents (unconscious patients without consent where necessary); and _"no hospital or clinic, after being informed of the medical indications for such transfer, shall refuse to receive the patient nor demand from the patient or his next of kin any deposit or advance payment."_
- **Penalties**: 6 months–2 years 4 months, or ₱100,000–₱300,000; for management, 4–6 years or ₱500,000–₱1,000,000; **three repeated violations → revocation of licence**.
- **Sec. 3 posting duty** — classification level + authorized services at the entrance (see §1).
- Complaints filed initially with the **Health Facilities Oversight Board** **[REPORTED]**.

**Why it matters.** This belongs in Patient Information _and_ in Emergency Information, and it is a **trust signal disguised as compliance**: a hospital that proactively explains "we cannot and will not ask you for a deposit before emergency care" is doing something most PH hospital sites don't. For a hospital building census from zero, that is a differentiator.

**Chatbot rule — the most safety-critical rule in the whole system.** Emergency intent must **never** be handled conversationally. Any signal of emergency → immediate, unconditional interrupt: call **911**, or the trunkline **02 8248 3460**, or proceed to the Emergency Room at 7 Marcos Highway, Brgy. Mambugan, Antipolo City. The bot must not assess severity, must not ask triage questions, and must not use the statutory definitions of "emergency" or "serious case" to evaluate the patient — those definitions turn on **the objective findings of a prudent medical officer on duty**, which is precisely the judgment KRISS AI is barred from making.

### 6f. Price transparency — DOH AO 2021-0008 (a finding worth surfacing on its own)

_"Guidelines in Public Access to Price Information of All Health Services and Goods in Health Facilities in the Philippines"_ **[CONFIRMED]**:

- Price list **readily available to the public in a conspicuous area** — lobby, reception, information kiosk, business office.
- Price list of all health services **itemized comprehensively, all fees indicated clearly, including outsourced services**.
- **Updated at least annually or as needed, with the date of last update indicated.**
- **DC 2021-0216** is an addendum to the assessment tools monitoring compliance **[CONFIRMED]**.
- **[REPORTED]** Reported items in the list include accommodation, procedures, laboratory, imaging, professional fees, medicines, supplies, PhilHealth case rates, and HMO rates where applicable; patient or guardian informed of the price list on admission or before outpatient services; non-compliance may affect the LTO or Certificate of Accreditation.

**[UNCERTAIN — important not to overclaim].** The AO text I could verify speaks of **physical conspicuous areas**. It does **not** clearly mandate publication on a website. So online price transparency is a **differentiator, not an obligation** — and it carries a real risk: a stale online price list is worse than none. If UASHMC opts in, replicate the AO's own discipline: itemized, dated, with a named owner and an annual review. Present this to Harvey as a genuine choice with a maintenance cost attached, not a fait accompli.

---

## CONSOLIDATED: WHAT THIS MEANS FOR THE BUILD

**Non-negotiable site components (each traceable to a cited instrument):**

| Component                                                        | Anchored in                                      |
| ---------------------------------------------------------------- | ------------------------------------------------ |
| Licensing block — classification level + DOH-authorized services | RA 10932 Sec. 3; AO 2012-0012                    |
| Privacy Notice (full DPA Sec. 16 / IRR Sec. 34 content set)      | RA 10173; IRR Sec. 34                            |
| Layered + just-in-time consent at every collection point         | NPC Circular 2023-04                             |
| Chatbot AI-disclosure + human escalation + grievance route       | NPC Advisory 2024-04; IRR Sec. 34                |
| DPO contact + NPC complaint route published                      | RA 10173; NPC Circular 2022-04                   |
| Emergency Information page with RA 10932 no-deposit explainer    | RA 10932                                         |
| Senior citizen + PWD discount disclosure                         | RA 9994; RA 10754 IRR Rule IV Sec. 6             |
| Physical accessibility information                               | BP 344 + 2024 Revised IRR                        |
| HMO page with dated list + four-caveat framing                   | Insurance Commission / EO 192; sector convention |
| PhilHealth page by benefit package, no hardcoded amounts         | PhilHealth accreditation framework; RA 11223     |
| CMS publish-gate: "is this service on the LTO?"                  | AO 2012-0012; RA 10932 Sec. 3                    |
| Claims blocklist in the copy style guide                         | RA 7394 Art. 110; PRC/PMA Code of Ethics         |

**KRISS AI guardrails — the Day-One spec, all regulator-traceable:**

1. Identifies itself as an AI system in-widget, before first input _(Advisory 2024-04; IRR Sec. 34)_.
2. Answers only from hospital-approved content; no generative clinical inference.
3. **No diagnosis, no clinical advice, no triage, no symptom assessment** — this is the FDA SaMD boundary, not just policy _(AO 2018-0002)_.
4. Emergency intent → unconditional interrupt to 911 / trunkline / ER. No conversation, no severity assessment _(RA 10932)_.
5. HMO/PhilHealth → existence of agreement + what to bring + who to call. Never coverage determinations, never amounts.
6. Physician information → credentials only, never comparative or superiority claims _(PRC/PMA Code)_.
7. Named human escalation path + grievance mechanism _(Advisory 2024-04)_.
8. Logged conversations = SPI: declared retention, access controls, deletion route, honouring objection/rectification/erasure _(Circulars 2023-06, 2023-04; Advisory 2024-04)_.
9. PIA completed before launch _(Advisory 2024-04; likely hardened by the pending draft circular)_.
10. Accountability sits with UASHMC as PIC — documented in the contract, with Iozera as Personal Information Processor and a data sharing/processing agreement in place _(Advisory 2024-04)_.

**Content-gathering asks for the onsite** — this list _is_ meeting goal #4, and it gives Harvey and Dr. Pedraja substantive decisions to own rather than a finished design to approve:

1. Copy of the **DOH LTO** — registered facility name, classification level, authorized services, validity dates.
2. Confirmation the **"Medical Center"** designation matches the licensed functional capacity.
3. **PhilHealth accreditations held, by benefit package** — including Konsulta status.
4. **ZBB / basic accommodation** policy as it actually applies at UASHMC — from Billing, in writing.
5. **HMO list** with a named owner and an update cadence, plus who answers HMO questions by phone.
6. **DPO** name/contact and **NPCRS registration** status.
7. Whether telemedicine claims are cleared for publication, and by whom (Medical Director sign-off).
8. Decision on publishing a **price list** online — opt in or out, with the maintenance commitment stated.
9. **Physician profile template** approved by the Medical Director _(the Code's website carve-out permits substantive credentials — use it deliberately)_.
10. Accessibility inventory: PWD parking, ramps, accessible restrooms, priority lanes, assistance desk.
11. Migration of **customer relations email off Gmail** to a hospital domain — framed as a Circular 2023-06 access-control item.

**Open items I will not assert as settled:** current force of the 2020 telemedicine circulars; whether AO 2021-0008 reaches websites; existence of a senior-citizen-specific posting mandate; any WCAG duty on private entities; whether a website must show the LTO number; FDA classification of any future triage feature; and the status of the draft NPC PIA circular. Each of these is a "verify with counsel / verify with UASHMC" line, and saying so at the onsite will read as competence, not hedging.

---

**Sources:**

- [DOH AO 2012-0012 — New Classification of Hospitals and Other Health Facilities (Legaldex)](https://legaldex.com/laws/rules-and-regulations-governing-the-new-classification-of-hospitals-and)
- [HFSRB — Hospital licensing](https://hfsrb.doh.gov.ph/hospital/) · [List of licensed health facilities](https://hfsrb.doh.gov.ph/list-of-licensed-health-facilities/) · [Licensing/Accreditation](https://hfsrb.doh.gov.ph/licensing-accreditation-of-health-facilities-and-services/)
- [DOH AO 2011-0020 — Streamlining of Licensure and Accreditation of Hospitals](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/50686) · [DOH AO 183 s.2004 (LTO posting, ASC)](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/40503)
- [RA 10932 — Anti-Hospital Deposit Law (full text)](https://thecorpusjuris.com/legislative/republic-acts/ra-no-10932.php) · [IRR: DOH AO 2018-0012](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/90415)
- [DOH AO 2021-0008 — Public Access to Price Information (HFDB)](https://sites.google.com/view/doh-hfdb/updates/ao-2021-0008) · [PDF](https://law.upd.edu.ph/wp-content/uploads/2021/05/DOH_ao2021-0008.pdf) · [HFSRB price advisory](https://hfsrb.doh.gov.ph/advisory-re-health-facilities-price-advisory/)
- [PhilHealth — Accreditation Process: Health Facilities](https://www.philhealth.gov.ph/partners/providers/facilities/process.php) · [Konsulta minimum requirements](https://www.philhealth.gov.ph/circulars/2020/AnnexA_KonsultaProvidersMinimumRequirements.pdf) · [Performance Commitment](<https://www.philhealth.gov.ph/downloads/accreditation/AnnexC_PerformanceCommitment(Revised062023).pdf>) · [Konsulta enhancement PC2024-0013](https://www.philhealth.gov.ph/circulars/2024/PC2024-0013.pdf) · [PHIC accreditation signage requirement (jur.ph)](https://jur.ph/law/summary/rural-health-units-philhealth-accreditation-signage-requirements)
- [Zero balance billing — Rappler explainer](https://www.rappler.com/newsbreak/iq/zero-balance-billing/) · [PIA](https://pia.gov.ph/news/zero-balance-billing-now-covers-all-philhealth-members/) · [Philstar explainer](https://www.philstar.com/headlines/2025/08/02/2462356/confused-about-zero-balance-billing-policy-heres-explainer)
- [EO 192 s.2015 — HMO regulation transferred to Insurance Commission (Official Gazette)](https://www.officialgazette.gov.ph/2015/11/12/executive-order-no-192-s-2015/) · [Insurance Commission](https://www.insurance.gov.ph/transfer-of-hmo-eo-192-s-2015/) · [DOF](https://www.dof.gov.ph/hmo-regulation-transferred-from-doh-to-ic/)
- [St. Luke's — HMO Information](https://www.stlukes.com.ph/patients-guide/hmo-information) · [Chong Hua — HMOs and Insurances](https://chonghua.com.ph/hmos-and-insurances/) · [Davao Doctors — HMO Insurance](https://ddh.com.ph/services-and-centers/hmo-insurance/) · [UniHealth Southwoods — HMO Insurance Guide](https://unihealthsouthwoodshospital.com/hmo-insurance-guide/) · [LOA explainer](https://www.ourhivehealth.com/blog/what-is-an-loa-in-hmo)
- [RA 10173 — Data Privacy Act (NPC)](https://privacy.gov.ph/data-privacy-act/) · [IRR (as amended)](https://privacy.gov.ph/wp-content/uploads/2023/06/IRR_RA-10173-as-amended.pdf) · [IRR (Supreme Court E-Library)](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/70735)
- [NPC Circular 2023-04 — Guidelines on Consent](https://privacy.gov.ph/wp-content/uploads/2023/11/NPC-Circular-No.-2023-04_Guidelines-on-Consent_07Nov2023.pdf) · [Baker McKenzie analysis](https://www.globalcompliancenews.com/2023/11/18/https-insightplus-bakermckenzie-com-bm-data-technology-philippines-national-privacy-commission-issues-comprehensive-guidelines-on-consent_11162023/)
- [NPC Circular 2022-04 — DPS/DPO registration](https://privacy.gov.ph/wp-content/uploads/2023/05/Circular-2022-04-1.pdf) · [Cruz Marcelo note](https://cruzmarcelo.com/mandatory-registration-of-data-processing-systems-and-data-protection-officer-due-on-10-july-2023/)
- [NPC Circular 2023-06 — Security of Personal Data (Lexology)](https://www.lexology.com/library/detail.aspx?g=17c3936f-124b-45cf-b2e7-7acd00be9747) · [NPC announcement](https://privacy.gov.ph/npc-issues-circulars-to-strengthen-personal-data-protection-in-ph/)
- [NPC Circular 16-03 — Personal Data Breach Management](https://privacy.gov.ph/wp-content/uploads/2022/01/sgd-npc-circular-16-03-personal-data-breach-management.pdf) · [NPC Breach Reporting](https://privacy.gov.ph/pips-and-pics/breach-reporting/)
- [NPC Advisory 2024-04 — DPA applied to AI systems (Rajah & Tann)](https://www.rajahtannasia.com/viewpoints/npcs-advisory-on-ai-and-data-privacy-ensuring-compliance-with-the-data-privacy-laws-for-ai-systems/) · [Securiti summary](https://securiti.ai/philippines-data-privacy-act-application-to-ai-systems-processing-personal-data/) · [Regulations.AI entry](https://regulations.ai/regulations/RAI-PH-NA-NAN2GXX-2024)
- [Draft NPC PIA circular, Aug 2026 — pending](https://www.techtimes.com/articles/323797/20260810/philippines-replaces-blanket-pia-rule-ai-biometric-processing-faces-new-scrutiny.htm)
- [PRC Board of Medicine Resolution 34 s.2009 — Code of Ethics](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/55446) · [PRC Code of Ethics (Board of Medicine)](https://www.prc.gov.ph/uploaded/documents/Board%20of%20Medicine-CE.pdf) · [PMA Code of Ethics](https://www.philippinemedicalassociation.org/wp-content/uploads/2017/10/FINAL-PMA-CODEOFETHICS2008.pdf)
- [RA 7394 Consumer Act (WIPO Lex)](https://www.wipo.int/wipolex/en/legislation/details/9574) · [False advertising commentary](https://www.respicio.ph/commentaries/consumer-protection-in-the-philippines-filing-a-complaint-for-false-advertising)
- [DOH-NPC JMC 2020-0001 / DM 2020-0016 telemedicine](https://privacy.gov.ph/wp-content/uploads/2020/10/DOH-mc2020-0016.pdf) · [DOH-UPM JMC 2020-0001 Telemedicine Practice Guidelines](https://law.upd.edu.ph/wp-content/uploads/2020/07/DOH-UPM-JMC-No-2020-0001.pdf) · [PMA telemedicine guidance](https://www.philippinemedicalassociation.org/wp-content/uploads/2020/05/1-Telemedicine-for-Health-Professionals.pdf)
- [Philippines medical device registration of software / SaMD (AO 2018-0002)](https://asiaactual.com/philippines-main/medical-device-registration-of-software/) · [FDA Verification Portal](https://verification.fda.gov.ph/medical_deviceslist.php)
- [Philippine AI bill status, July 2026 (Philstar)](https://www.philstar.com/business/technology/2026/07/14/2542095/proposed-ai-bill-gains-momentum-congress) · [HB 7396](https://regulations.ai/regulations/RAI-PH-NA-HN7AIXX-2024) · [PH AI regulation overview](https://law.asia/ai-regulation-philippines-laws/)
- [RA 9994 senior citizen discount & VAT exemption](https://batasnatin.com/doctrine/senior-citizens-20-percent-discount-vat-exemption) · [RA 9994 IRR](https://www.catbaloganwd.gov.ph/files/IRR%20-%20RA%209994.pdf) · [Medical services discount commentary](https://www.lawyer-philippines.com/articles/understanding-discounts-for-senior-citizens-on-medical-services-in-the-philippines) · [FDA Circular 2025-005 / DOH AO 2024-0017 — purchase booklet delisted](https://www.fda.gov.ph/fda-circular-no-2025-005-delisting-of-purchase-booklet-from-the-checklist-of-requirements-to-avail-of-the-20-senior-citizen-discount-on-the-purchase-of-medicines-and-medical-devices-in-accordance-w/)
- [IRR of RA 10754 — PWD benefits, incl. signage duty (NCDA)](https://ncda.gov.ph/disability-laws/implementing-rules-and-regulations-irr/irr-of-ra-10754-an-act-expanding-the-benefits-and-privileges-of-persons-with-disability-pwd/) · [IRR of RA 9442](https://ncda.gov.ph/disability-laws/implementing-rules-and-regulations-irr/implementing-rules-and-regulations-of-republic-act-no-9442/) · [JAO 24-02 s.2024](https://ncda.gov.ph/2024-revised-rules-on-granting-special-discounts-to-senior-citizens-and-persons-with-disability-on-purchase-of-basic-necessities-and-prime-commodities-joint-administrative-order-no-24-02-series-of-2/)
- [BP 344 Accessibility Law + IRR (DPWH)](https://www.dpwh.gov.ph/dpwh/sites/default/files/laws_codes_orders/BP_344_IRR_0.pdf) · [2024 Revised IRR dimensions](https://aedoconstruction.com/blog/bp344-accessibility-law-philippines/) · [PWD accessibility compliance for establishments](https://www.respicio.ph/commentaries/pwd-accessibility-compliance-requirements-for-establishments-philippines)
- [NCDA Memorandum Circular 2017-004 — Philippine Web Accessibility Policy (WCAG 2.0)](https://ncda.gov.ph/memorandum-circular-no-2017-004-prescribing-the-philippine-web-accessibility-policy-and-adopting-for-this-purpose-iso-iec-405002012-information-technology-w3c-web-content-accessibility-gu/)
- [RA 11223 Universal Health Care Act (Supreme Court E-Library)](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/86448)
- [Verifying a facility's DOH registration](https://www.respicio.ph/commentaries/how-to-check-if-a-clinic-is-registered-with-the-doh) · [DOH licensing & permit requirements](https://www.respicio.ph/commentaries/doh-licensing-and-permit-requirements-for-healthcare-facilities-philippines)
- [Magna Carta of Patients' Rights — bill status (Senate LRB)](https://ldr.senate.gov.ph/subject/magna-carta-patients-rights-and-obligations)
