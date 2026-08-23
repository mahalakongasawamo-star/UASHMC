# ADVERSARIAL REVIEW — Dr. Myrna Pedraja, Medical Director

## Pre-board review of the Iozera website + KRISS AI package

I championed this internally. That means if it goes wrong, it goes wrong with my name on it. What follows is what I would say in a closed room before this is shown to Dr. Bravo and Dr. Directo.

**Headline verdict: do not show this package to the Board in its current form.** The strategy is genuinely strong — better than anything I have seen from a Philippine vendor on this subject. But there are nine defects that would each, on their own, damage us: three are safety defects, three are fabrication defects, two are privacy defects, and one is an exposure of the vendor's own internal file into the client bundle.

---

# P0 — BLOCKERS. Fix before the Board sees anything.

### P0-1 · The vendor's internal file is in the client bundle

**Category 6**

> "**APPENDIX A — OPEN ITEMS FOR ALLAN, BEFORE THE ONSITE** … Internal. Not for the client deck."
> "**Fix or disown iozera.ai.** `iozera.ai/contact/` currently publishes a stock WordPress demo address in New York, `youremail@yourdomain.com`, and a `+88` phone number; the blog is untouched theme filler including 'hello-world'."
> "**Settle the corporate story.** Is KRISS Iozera's product, a sister company, or a client?"
> "KRISS's public price is $199/month plus a $500 setup fee — SMB dental-clinic pricing that UASHMC can find in thirty seconds."
> "Record a screen capture of kriss.ai as a demo backup. Its WebGL preloader stalled repeatedly in testing and did not always recover on reload."

**Risk:** Appendix A is labelled internal and is sitting inside the same document set as the client deliverables. If one PDF goes out with it, the Board learns in a single page that the vendor does not know whether it owns its own flagship product, publishes a fake New York address, prices at $199/month, and cannot reliably load its own website. Everything else in the package becomes unreadable after that.

**Fix:** Physically separate. Appendix A, CONTENT-PLAN §R0, §R8, and §10.1 item 12 go into a file that never leaves Iozera. The client-facing set must be re-exported from scratch, and someone other than the author must diff it for the strings "Allan", "OPEN — INTERNAL", "iozera.ai/contact", "$199", "dental".

---

### P0-2 · The section written to win me describes a system that does not exist

**Category 6**

> "**[OPEN — INTERNAL, for Allan before the onsite]** KRISS's published setup process today is _vendor-managed_: a questionnaire, then manual expert training by the KRISS team… **There is no documented document-upload or site-crawl ingestion, and no customer-facing content console.** The CMS-indexed architecture above is therefore a **build requirement we are placing on the KRISS deployment**, not a capability to assert as already shipped."

**Risk:** Section 5 is explicitly framed as "_the section that wins the Medical Director_," and its entire argument rests on the single-source CMS→index pipeline. The vendor's own note concedes that pipeline is unbuilt and the ingestion path is unconfirmed. So is the 24-gate deterministic safety stack in §6.7. Yet CONTENT-PLAN promises "**KRISS AI live | Week 12**" with Day-One deliverables including "**Guardrail pipeline G1–G24**", "Emergency lexicon… signed", "CMS → index sync with the automated verify + rollback gate", and "PIA completed and signed." That is not a four-week build on top of an unconfirmed ingestion path. I am being asked to sign a clinical guardrail spec for software that does not yet have a way to read our content.

**Fix:** Before any date is presented, split the KRISS scope into (a) confirmed shipped capability, (b) configuration, (c) new engineering — line by line, with the vendor's engineering owner named against each. Then re-derive the timeline. If the honest answer is "KRISS live at week 20 with a staged corpus," say week 20. I would rather defend a slow, true plan than a fast one that collapses in month three.

---

### P0-3 · Invented UASHMC facts inside KRISS answer bubbles, with fabricated citations and fabricated update dates

**Category 2 — highest risk**

The journeys document has a marker convention (`[TO SUPPLY: …]`) and then repeatedly abandons it. These are asserted as our facts, in quoted assistant answers, with source lines and "updated" dates:

> "**Yes — UASHMC has an accreditation agreement with Maxicare.** _(HMO list as of 12 Aug 2026.)_"
> "**No referral is needed for a first Cardiology consultation at UASHMC.** You can book directly."
> "Dr. J. Ocampo · Tue & Thu, 1:00–4:00 PM · Room 305 / Dr. R. Sandoval · Mon & Sat, 9:00 AM–12:00 NN · Room 305"
> "**Internal Medicine** — general adult medicine, often the first stop `[3 doctors →]`"
> "_From: Patient Information — Outpatient Consultations · updated 12 Aug 2026_"
> "Our Billing Section applies this automatically when the ID is presented."
> "Room 305 is on the 3rd floor."
> "PhilHealth CF1 forms are available at our **PhilHealth Section / Admitting counter**, and the staff fill them out with you at admission."
> "**Room class affects other charges**, including professional fees." / "Room charging is computed by **admission hour**, with a 24-hour minimum."
> "'Ok na sa UASHMC. DOH-licensed, level [X], **may ICU**…'"
> "**Real photographs:** the building from Marcos Highway, the ER entrance, reception, each room type, **the OR, the imaging suite**, named staff."
> "In-house X-ray with **a radiologist's reading**, so you are not sent to another facility for your tests."
> "Consultant clinics, **in-house imaging and laboratory**, and an Emergency Room that does not close."
> "Heart care _(Cardiology)_ | `Chest pain, blood pressure, ECG, heart station tests.`"
> "20% off and VAT-exempt on **medical and dental services**…"

None of the following are established facts about this hospital: a Maxicare agreement, a no-referral policy, an ICU, an OR photographable as ours, a clinical laboratory, a staff radiologist, ECG/heart-station services, dental services, a PhilHealth Section, a 24-hour ER, Room 305 or a third floor, doctor counts per specialty, or an admission-hour room-charging rule. The "updated 12 Aug 2026" stamps are the worst detail: they model the exact behaviour the governance section forbids — a dated citation on unverified content.

**Risk:** Two failure modes. First, in the room: Tere or I read "no referral needed" or "may ICU" and realise the vendor invented our clinical operating policy and our facility inventory. That is not a design disagreement, it is a competence judgment, and it is unrecoverable in that meeting. Second, worse: a screenshot of one of these transcripts circulates internally or externally as a description of our services. An asserted ICU or laboratory we do not hold is a service claim against our License to Operate — the exact exposure the package's own LTO publish-gate is designed to prevent.

**Fix:** One rule, applied without exception across all four documents: **every hospital-specific noun in a KRISS answer bubble carries a marker or is deleted.** No invented HMO names in affirmative answers — demo the checker with `[HMO NAME]` or an explicitly fictional "Provider A". No room numbers, floors, doctor counts, or department names. No fabricated "updated" dates — use `[updated: date]`. Delete "in-house laboratory", "radiologist's reading", "ECG / heart station", "dental services", "ICU", "OR" from every unmarked position. Then have one person do a single pass whose only job is to find un-markered hospital facts; the current markers are inconsistent enough that the vendor plainly did not do this.

---

### P0-4 · The flagship demo transcript violates the package's own emergency rules — three times

**Categories 1 and 4**

The safety spec is unambiguous:

> "**Behaviour on a hit — five absolute rules:** 1. **Interrupt, don't converse.** … 3. **No follow-up questions.** Not clinical, not navigational. The conversation stops. 4. **No booking offer.** Do not offer an appointment to someone describing an emergency."
> "**Post-card state:** the widget shows the card and **one** further line, then accepts no further clinical input in that session."

Journey A, immediately after the chest-pain card:

> "When you're ready, I can show you the Cardiology clinic days so he can be seen this week. `[ Cardiology clinic schedule → ]`"
> …and four turns later: "`[ Book Dr. Sandoval on NowServing → ]`"

**Violation 1:** an appointment pathway offered to a patient who just disclosed exertional chest pain. **Violation 2:** the session continues for four more turns and completes a booking, when the spec says it is clinically closed.

**Violation 3, and the one that worries me most.** The opening message is:

> "yung tatay ko 68, pahingal na pahingal pag umaakyat ng hagdan. mataas din daw BP nya"

KRISS answers routinely. It does not trigger. Yet the lexicon in §6.5 contains "shortness of breath" and "hirap huminga," and the bias is stated as "**OVER-trigger**." And note precisely what the reply does:

> "At UASHMC, high blood pressure and **shortness of breath** are usually handled by Cardiology or Internal Medicine."

The system normalised "pahingal" to "shortness of breath" _for routing_ but not _for red-flag screening_. Exertional dyspnoea in a 68-year-old hypertensive is a presentation I want escalated, not routed to a Tuesday clinic. The demo, as written, shows the safety gate missing on turn one of the flagship journey.

Compounding this: three documents specify three different post-card behaviours — KRISS-CONCEPT §6.5 ("session clinically closed"), HOMEPAGE-SPEC §8.3 ("Any further symptom text re-shows the identical card"), and JOURNEYS (conversation continues and books). **There is no single normative spec, so there is nothing for me to sign.**

**Fix:** (a) Rewrite Journey A: the card fires on turn one, the session ends, no clinic days, no booking, no continuation. (b) Designate ONE controlled document as the normative guardrail spec, versioned, and mark every other document non-normative and illustrative. (c) The emergency gate must run on the same normalised string that routing runs on — write that as an explicit engineering rule. (d) Add "pahingal", "hapo", "kinakapos ang hininga", "parang may bumabara sa dibdib" and their variants; and see P1-3 on how recall gets tested.

---

### P0-5 · KRISS gives condition-specific clinical safety-netting and makes an urgency determination

**Category 1**

Journey B, unprompted, to a patient with gallstones:

> "If you ever get **severe or constant pain in the upper right abdomen, fever with chills, vomiting you can't stop, or yellowing of your eyes or skin**, **that's an emergency** — go to an Emergency Room."

Journey C, unprompted, to a family with a pre-operative 79-year-old:

> "If anything changes tonight and she has **severe pain, difficulty breathing, confusion, a fall, or a fever**, don't wait for 6:00 AM…"

That is a tailored complication watch-list for a named condition, plus the words "that's an emergency" — an urgency determination that R5 and G3 expressly prohibit ("**No severity, urgency, or triage assessment, ever**"). Whoever wrote those bullet lists performed a clinical act. It was not me.

And separately in the same journey:

> Patient: "may maxicare ba kayo? need ko kasi opera sa gallstone"
> KRISS: "_'I need a laparoscopic cholecystectomy at United Antipolo Specialists Hospital and Medical Center…'_"

The patient said "gallstone surgery." KRISS converted that into a specific named operative approach and scripted the patient to say it to his insurer. If his surgeon plans an open cholecystectomy, the LOA is requested for the wrong procedure and the admission is delayed or denied. That is clinical inference with a financial consequence.

**Fix:** Delete all condition-specific red-flag lists from KRISS output. The generic emergency card is the only safety-net message the system may produce, and it fires only from the signed lexicon — never volunteered. KRISS may never name a procedure the patient did not name; the script becomes "the procedure your doctor recommended" verbatim. Add an explicit rule to §6.3: **KRISS does not author safety-netting advice, and does not restate a lay description as a clinical term.**

---

### P0-6 · Suicidal ideation is routed to a chest-pain card

**Categories 1 and 4**

HOMEPAGE-SPEC §8.3 lists the red-flag triggers, including "**suicide, ayaw nang mabuhay**", and then specifies one response card:

> "### Call 911 or go to the Emergency Room now if someone: `— has chest pain, pressure or tightness` `— is having trouble breathing` `— is bleeding heavily…`"

KRISS-CONCEPT does better — "E7 | **Distress signal** (self-harm, suicidal ideation) | Emergency card variant + national/local crisis line **[VERIFY: which line UASHMC endorses]**" — but the prototype that will actually be demonstrated has no variant. So a person in crisis receives a cardiac checklist. And the presenter's own script has them typing symptom text live; if anyone in that room types the ideation trigger, that is what appears on the projector.

**Fix:** Build the distress variant before the demo, not after. It needs: no ER-checklist body copy, the NCMH Crisis Hotline and 911 as the two actions, and a single line of non-clinical acknowledgement. I will not sign a lexicon that contains self-harm triggers without a matching card, and I need to confirm what our ER can actually receive before we direct a psychiatric presentation to it.

---

### P0-7 · "Call ER" points at the trunkline

**Category 4**

> "Slot 1 | Label `Call ER`, red ground. `href='tel:+63282483460'` until an ER direct line exists"
> "📞 `Call UASHMC 02 8248 3460`" — inside the emergency card
> "UASHMC Emergency Room — **open 24 hours**" — asserted, unmarked, in the safety-critical card
> "go to the UASHMC Emergency Room at 7 Marcos Highway… **we are open 24/7**" — refusal copy R5

We have one published number: the trunkline. If the trunkline goes to a switchboard that is not staffed overnight, then a button labelled "Call ER," presented in red on every page, is a promise of an answered emergency line that does not exist. That is a specific broken promise at the worst possible moment — the same objection the package correctly makes against publishing ER wait times.

Also: "**Do not drive him yourself if he is in pain — call 911 for an ambulance**" (Journey A) contradicts "**bring her to the Emergency Room**" (Journey C), and neither is verified. I do not know that 911 dispatches an ambulance to Mambugan within a useful time. Telling a family not to drive, when private transport up Marcos Highway may be materially faster, could cost minutes that matter.

**Fix:** (a) The button label must match the number's actual behaviour. If there is no ER-direct line, the label is "Call hospital", and provisioning an ER-direct line becomes a P0 launch dependency with Tere's name on it — I support that ask. (b) Every "24 hours" / "24/7" string in every document gets a marker until I confirm it. (c) One transport instruction, written by me, used everywhere. My default: "Go to the nearest Emergency Room now. If you cannot move the patient safely, call 911."

---

### P0-8 · Patient chat logs are repurposed for insurer negotiation and monthly Marketing reporting

**Category 5**

> "`requested_hmo_not_accredited` | HMO name + volume | **Contract negotiation ammunition.** 'We turned away 140 Intellicare inquiries this quarter' is how you get a better rate."
> "**Marketing insight** | Harvey Lozada | **Monthly** | Tabs 2 + 4. Top 20 questions, top 10 unanswered, demand signals."
> "`raw_query` | verbatim (SPI-scrubbed)"

Against the disclosure the patient actually sees:

> "Your messages are logged **so we can improve the answers**, so please do not share medical details you would not want recorded."

Improving answers is not the same purpose as commercial leverage over an insurer or a marketing demand study. That is a purpose-limitation problem under the DPA, and it is not cured by an automated scrubber the patient never sees validated. Meanwhile verbatim patient questions — which in these very journeys contain "Need lap chole", "Maxicare Platinum", "my mother, 79, orthopedic surgery" — are scheduled to land on the Marketing Director's desk every month.

**Fix:** (a) The pre-chat notice must state every purpose, including service planning and marketing analytics, or those purposes are removed. (b) Marketing never receives verbatim queries — clustered labels and counts only, with a documented de-identification step and a named reviewer. (c) The insurer-negotiation use case is deleted from the deck; if we want that number, we derive it from aggregate counts with no query text. (d) I want the DPO's written opinion on this table before it appears in a board pack.

---

### P0-9 · The "TODAY" journeys allege specific operational failures by our own staff, as if documented

**Category 6**

> "**Worse than lost: the Messenger reply was dangerously wrong.** _'Yes po, accredited po kami sa Maxicare'_ is the answer that produces a family at the billing counter with an unexpected bill. Nobody was negligent. A front-desk staffer at 9 AM gave the natural, friendly, incomplete answer…"
> "Admission processes at ~9:10 AM. Lola Consuelo waits in a wheelchair in the lobby for three hours, NPO since midnight."
> "**Steps: 9. Time elapsed: ~31 hours. Outcome: lost — and lost to a competitor**"

The cross-journey summary table presents these as findings, with step counts and elapsed times, and carries no illustrative marker. Tere's staff are in that room. We have no evidence any of this happened.

**Fix:** Re-label every "TODAY" journey as a constructed scenario, in the table as well as the prose, and strip the specific allegations of staff error and the 3.5-hour delay. Make the same argument structurally — "we have no published admission checklist, so a family that loses the paper has no path" — which is true, verifiable, and does not accuse anyone.

---

# P1 — HIGH. Fix before implementation; several before the Board.

**P1-1 · The staleness matrix has the risk ordering backwards. (Cat 1)**

> "`financial` (HMO, PhilHealth, prices) | **Refuse to serve the figure.**" but "`clinical-adjacent` | **Serve** prep/logistics; suppress any clinical detail; append the review date."
> An out-of-date fasting or preparation instruction can harm a diabetic patient. An out-of-date price generates a complaint. Overdue clinical-adjacent content must refuse the preparation instruction and route to the department. **Fix:** move `clinical-adjacent` into the refusing tier for anything actionable (fasting, medication-hold, arrival timing), and give me the overdue alert.

**P1-2 · "Do I need to fast?" answered from a generic page. (Cat 1)**

> "**A3 — Preparation & logistics** | How do I prepare? … **Do I need to fast?**" / "Stop eating 8 hours before"
> Fasting instructions interact with insulin, anticoagulants and paediatric weight. **Fix:** all preparation answers carry a mandatory non-removable line — "your doctor's instruction overrides this" — and must refuse and route whenever the patient's message names a condition, a medication, a pregnancy or a child.

**P1-3 · The launch gate cannot measure what matters. (Cat 4)**

> "□ 100% of red-flag lexicon terms trigger the emergency card — automated suite"
> Testing that lexicon terms trigger measures nothing about the false negatives — the paraphrases not in the lexicon, which is exactly how Journey A fails. **Fix:** add a held-out set of at least 300 real Taglish and Tagalog phrasings, collected from Harvey's Messenger inbox and written by clinical staff, none of which appear in the lexicon, with a stated minimum recall I sign off on. Publish the measured recall to me monthly. And the 500-query adversarial suite must include cases authored outside Iozera.

**P1-4 · Third-party health data has no basis, notice or rule. (Cat 5)**
Every journey is a relative disclosing a patient's sensitive personal information: "yung tatay ko 68…", "admission po bukas ng nanay ko", "My mother, 79, is scheduled for orthopedic surgery". Consent for that data is not the sender's to give. Nothing in the package addresses it. **Fix:** an explicit rule and a visible notice covering third-party disclosures, a hard prohibition on retaining identifiable third-party clinical detail, and the DPO's written position before launch.

**P1-5 · Consent is collected after collection, and may not meet the SPI standard. (Cat 5)**

> "☐ Send my question to the UASHMC HMO Desk … Held for `[TO SUPPLY: retention period]`."
> This appears at turn six, after health information has already been typed and logged at turn one. And a chat checkbox for sensitive personal information needs to be evidenced — stored with a timestamp, the exact notice text, and the notice version. **Fix:** move the layered notice to session start; log the consent artefact with its version; and resolve the direct contradiction with G18 ("**volunteered SPI truncated, not persisted; log the event, not the content**"), which the inquiry-capture flow plainly breaks.

**P1-6 · The Call button disappears when a form field is focused. (Cat 4)**

> "**Suppressed on:** `#/emergency`, and while any form field on the page has focus (the bar hides on `focusin`…)"
> The bar contains "Call". A patient typing into the HMO checker loses the call button. This contradicts the package's own principle that "for a hospital **the call button must win every time**." **Fix:** suppress the `Ask` slot on form focus; the `Call` slot never hides. Add this to the automated occlusion test.

**P1-7 · The senior/PWD discount arithmetic may be wrong for hospital services. (Cat 3)**

> "**the correct computation order (strip 12% VAT first, then 20%)**" — presented as a worked example on a public page and in a KRISS answer.
> Hospital and medical services are already VAT-exempt under the Tax Code; professional fees are treated differently. Stripping a 12% VAT that was never charged overstates the discount, and a published worked example is exactly what a family will hold up at the counter. **Fix:** no worked arithmetic goes online until Billing and Finance sign the computation per line-item class. Publish the entitlement and the documents required; leave the arithmetic to Billing.

**P1-8 · RA 10932 is stated over-broadly in some places and correctly in others. (Cat 3)**

> "no hospital may ask you for a deposit or advance payment **before giving emergency care**" (Journey A) versus "before giving **basic emergency care**" (Homepage S5), alongside the standalone sentence "**We will not ask you for one.**"
> The law is bounded — basic emergency care, emergency or serious cases. An unbounded promise on our own website invites a dispute at a non-emergency admission. **Fix:** one approved sentence, containing "basic emergency care", used verbatim everywhere; the promise is never separated from that qualifier.

**P1-9 · Unsourced performance statistics presented to a board. (Cat 6)**

> "Expect roughly **60–75% grounded coverage** in month one"
> "the **~60–70%** of inquiries that are purely informational"
> There is no basis given for either number, and the vendor's only comparable deployments are US dental practices. **Fix:** delete both, or state the source. Replace with "we will publish the measured coverage rate monthly from month one, with a falling target" — which is the honest and more persuasive claim.

**P1-10 · Statutory citations are load-bearing and unverified. (Cats 3 and 6)**
The package builds whole pages on specific issuances: "**RA 10932 §3**" as the authority for posting classification level and authorised services; "AO 2024-0017 / FDA Circular 2025-005" on the purchase booklet; "FDA AO 2018-0002" for the software-as-medical-device boundary; "AO 2012-0012" on facility naming; "NCDA MC 2017-004". Dr. Directo will check one of these. If a single citation is misattributed, the Board will discount all of them — including the SaMD argument, which is the argument protecting our licence. **Fix:** one person reads the primary text of every issuance cited and initials a citation table. Anything unverified is phrased as "we understand, and recommend your counsel confirm."

**P1-11 · Absolute and perishable competitive claims. (Cat 6)**

> "which **no Philippine hospital currently does**" · "**no Philippine hospital has a real on-site assistant**" · "metroantipolo.com is **returning 503 on every path** right now" · "Chong Hua publishes 15 rates from ₱1,200/day to ₱16,750/day"
> Absolute negatives are one counter-example away from collapse, and the 503 is one deploy away. Also: naming a Metro Pacific outage in our boardroom is a weak move — they are a potential counterparty. **Fix:** "we found none in a sample of eleven, as of [date]"; drop the competitor outage from the spoken script; date every competitor price.

---

# P2 — MEDIUM. Fix, but they will not lose the room.

- **Sample doctors imply capability we may not be licensed for. (Cat 2)** "Interventional cardiology, heart failure" implies a cath lab; "Fellow, Philippine Orthopedic Association" attaches a real professional body to a fabricated physician. **Fix:** sample sub-specialties must be deliberately unremarkable, and no real board or society name attaches to a fake doctor.
- **Example questions leak invented service lines. (Cat 2)** "Is there a female OB?", "What's in the executive check-up?", "Do you do CT scans?" **Fix:** draw all examples from the four confirmed specialties and confirmed services only.
- **The demo script manufactures agreement. (Cat 6)** "Ask Tere to drive it, or drive it yourself and say so: '**I'm marking that as agreed**.'" And Beat 6 asks for my signature as a piece of theatre: "_We want your name in it._" **Fix:** remove the self-declared "agreed" mechanism — items are agreed when the owner says so. And any request for my countersignature comes to me as a written, versioned document with a change-control process, reviewed offline. I will not sign a clinical artefact in a demo.
- **Vendor credit in our footer. (Cat 6)** "`Website by Iozera.ai`" — presented as a given, before a contract. **Fix:** make it a negotiated line, not a default.
- **Homepage cannot ship without facts we do not have. (Cat 2)** Sitemap's homepage minimum includes "trust row (DOH level, PhilHealth, **bed count**, 24/7 ER)". **Fix:** make the trust row degrade gracefully, or mark the homepage itself as LTO-blocked.
- **CF1 signing advice. (Cat 3)** "she signs the member portions herself, or **you sign as her authorised representative**" — a claims-validity determination. **Fix:** describe the form and route the question to the PhilHealth/Admitting desk.
- **Post-card session lock is undefined.** "accepts no further clinical input in that session" — no definition of "clinical input", and it would also block a legitimate HMO question. **Fix:** define it, or adopt the HOMEPAGE-SPEC behaviour (re-show the identical card on any further symptom text) as the single normative rule.

---

# What is genuinely sound, and I will defend it

I am not going to manufacture criticism of the parts that are right.

- **The refusal set R1–R9** is the best-drafted patient-facing refusal copy I have read. R4 (results), R6 (coverage), R7 (comparative claims) are correct in both substance and tone.
- **Journey D's two refusals** — the nurse-to-patient ratio and the medical records request — are exactly how I want this system to behave. "_I have no access to patient records and I'm not able to confirm anything about her care. That's by design_" is the sentence I would use myself.
- **"HMOs we have accreditation agreements with," never "HMOs we accept,"** plus the four caveats and the LOA lead-time warning. That framing is the single most protective decision in the package and it should not be softened by anyone in marketing.
- **The LTO field as a required CMS publish gate** — "`Is this service on the DOH LTO? [Yes/No]` … No is unpublishable" — is real governance, not a memo, and it is the mechanism that makes "feature new services as we expand" safe. Keep it, and the answer to the open decision is that the approval sits with me, not Marketing.
- **Suppressing the widget on `/emergency`**, colour-reserving red for emergency only, no auto-open, no sound, no badge, and the persistent "Talk to a person" that is not failure-gated. All correct. Quiet is the right register for us.
- **Refusing to publish ER wait times**, and **refusing to compute a personal bill estimate**. Both right, for the reasons given.
- **The honest-placeholder marker system** is the best idea in the package — when it is actually applied. My complaint in P0-3 is not with the mechanism, it is that the journeys stopped using it.
- **The gates-are-code-not-prompts principle** — "_A prompt is a request; a gate is a guarantee_" — is the argument that lets me defend this to the Board. It only holds if the gates exist (P0-2) and if the demo obeys them (P0-4).

---

# My conditions before this goes to Dr. Bravo and Dr. Directo

1. Appendix A and all internal risk notes physically removed from the client bundle, verified by a second reader.
2. One normative, versioned guardrail document. Everything else marked illustrative and non-normative.
3. Journey A rewritten so the gate fires on turn one and the session closes. No booking, no clinic days.
4. All condition-specific safety-netting deleted from KRISS output. All lay-to-clinical term conversion prohibited.
5. A distress/self-harm card built, with a crisis line, before any live demo.
6. Every un-markered hospital fact markered or deleted — with the Maxicare affirmative, "no referral needed", the laboratory, the radiologist, the ICU, the OR, and the "updated 12 Aug 2026" stamps as the named priorities.
7. "Call ER" relabelled until an ER-direct line exists; every "24/7" markered.
8. The analytics purposes reconciled with the pre-chat notice, and the DPO's written position on Tabs 2–4 and on third-party health data.
9. A KRISS scope table splitting shipped / configuration / new engineering, with a re-derived timeline.
10. My countersignature request delivered to me in writing, offline, at least five working days before I am asked for it — never as a demo beat.

Fix these and I will take this to the Board myself and argue for it. Presented as it stands, I would be arguing for a package that invents our clinical policy, books an appointment for a man with chest pain, and shows a cardiac checklist to someone who says they want to die. I am not doing that with my name on it.
