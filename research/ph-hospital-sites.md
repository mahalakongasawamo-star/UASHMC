# PHILIPPINE HOSPITAL WEBSITE RESEARCH — FIELD REPORT

All observations below are from direct fetch/browser inspection between the dates of this session, unless flagged as "search-derived". Where a site blocked automated fetch or was down, I say so.

---

## PART A — SITE-BY-SITE OBSERVATIONS

### A1. BENCHMARK / NATIONAL TIER

---

#### 1. St. Luke's Medical Center — https://www.stlukes.com.ph/

**Top-level nav (verbatim):** `Health Specialties & Services` · `Our Doctors` · `Patients & Visitors` · `International Patients` · `Online Portals` · `News & Events` · `Health Library` · `Healthcare Professionals (HCP)` · `About Us` · `Contact Us`
**Utility bar (verbatim):** `EXTENSION CLINIC` · `GLOBAL CITY` · `QUEZON CITY` (campus switcher — dual-campus toggle is the top-most element)

**Find a Doctor:** Best-in-market. Filter fields: Specialization (50+ options), Clinic Location (Any / Global City / Quezon City), Clinic Schedule (day + AM/PM), Gender (Any/Male/Female), **HMO Accreditation**. The HMO filter is the single most sophisticated feature I found on any PH hospital site — and note their own caveat: "The choice of doctor for each HMO is based on the list of accredited doctors provided by the respective HMOs."

**Patient's Guide sub-nav (verbatim, from https://www.stlukes.com.ph/patients-guide/hmo-information):** `EHealth Patient Portal` · `Admission Procedure` · `Accommodations` · `HMO Information` · `PhilHealth` · `Billing and Payment` · `Patient Safety` · `Medical Records`

**HMO presentation:** https://www.stlukes.com.ph/patients-guide/hmo-information — **plain searchable HTML text lists**, 20 HMOs, plus separate blocks for Preferred Provider Organizations (7), Company Insurance (9), and international TPAs/PPOs. Entries are formatted like "IntelliCare (Asalus Corporation)", "Pacific Cross Health Care Inc." Includes an **online LOA Request form** ("eHMO Concierge"): "Click the link below and fill up the online LOA Request form to help us facilitate your request before your date of visit."

**Admission info:** https://www.stlukes.com.ph/patients-guide/admission-procedures — requires "Doctor's Admission Order Sheet"; walk-ins routed via ER; **"Patients without LOA will be automatically considered as private-paying patients and an initial deposit will be required."** PhilHealth page spells out CF1 / CF2 / Certificate of Contributions / Membership Registration Form for undeclared dependents.

**Accommodations:** https://www.stlukes.com.ph/patients-guide/accommodations — **no peso rates published.** Prose only ("from the most basic rooms to fully-furnished suites… selective menu, private butler service and cable television"). Room types not even enumerated.

**Emergency:** Numbers present (+63-2-8789-7700 BGC / +63-2-8723-0101 QC) but as general trunklines, not a distinct ER treatment.

**Chatbot/live chat:** **None.** No widget of any kind.

**Medical records:** https://www.stlukes.com.ph/patients-guide/medical-records — entirely paper/in-person. "Medical Information Release (MIR) form" obtained at the Nurse's Station; after discharge requires attending physician **and** Medical Director approval. No downloadable form, no fees, no processing time, no online submission.

---

#### 2. Makati Medical Center — https://www.makatimed.net.ph/

**Main nav (verbatim, browser-verified):** `About Us` · `Our Services` · `Careers` · `What's New` · `Contact Us`
**Utility/top bar (verbatim, browser-verified):** `Find a Doctor` · `Online Results` · `Online Payment` · `Book an Appointment` · `Radiology Portal` — plus a header `tel:` link to `+632 8888 8999`
Note: main nav is only 5 items; the _transactional_ nav lives in the utility bar. Also note `Find a Doctor` resolves to `https://www.makatimed.net.ph/doctors-v2/index.php` — a legacy PHP subsystem bolted onto a WordPress front end. `Book an Appointment` goes off-domain to `portal.makatimed.net.ph`; `Careers` goes to `rms.makatimed.net`. The estate is fragmented across four hostnames.

**Find a Doctor:** Weaker than St. Luke's. Filters: Select Day (Mon–Sat), Select Time (From/To), plus an "Advanced Search". No visible HMO filter on the front end.

**Patient & Visitor Guide sub-nav (verbatim):** `Patient Admission` · `Visitor Information` · `Patient Reference`

**HMO presentation:** https://www.makatimed.net.ph/about-us/hmo/ — **the best HMO page in the Philippines, and the one to copy.** Logo + HTML text per HMO, ~30+ listed, and crucially each entry carries a **"Primary Location for LOA Request"** and often an **"Alternative Channel for LOA Request"** — e.g. "Dr. Jose Sanchez - Rm. 257 - Hall C, Tower 1", "HMO Assist: 1st Floor - Tower 1", plus hotlines and emails ("mrd.forticare@gmail.com"). Recurring instruction: "Proceed to Medical Concierge to use the landline to call the HMO's hotline." There is also a centralized **`HMO eLOA Request`** form — hosted on a **Zoho form**, not native.
Data-quality flaw observed: Medocare appears **four times** (duplicate rows).

**Admission:** Documents enumerated: valid government photo ID, current medications list, "Letter of Guarantee (LOG) or Letter of Authority (LOA)", PhilHealth ID, **"Senior Citizen's ID or Persons with Disability ID (if eligible)"**, prior records/tests. Deposit: "a reasonable amount is required as initial deposit" — **waived if valid LOA/LOG**. Room types enumerated (Presidential Suite, Suite, Large Premium, Large Private, Small Private, Semi-Private, Ward) with **zero pricing**.

**Emergency:** "MakatiMed 24/7 OnCall: +632 8888 8999" — a strong, memorable, single-number treatment. JCI badge on homepage.

**Chatbot/live chat:** **None** (browser-verified: 17 interactive elements in header/footer, no chat widget, not even a Messenger link).

---

#### 3. The Medical City — https://www.themedicalcity.com/

**Main nav (verbatim):** `Our Services` · `Find A Doctor` · `Our Institutes` · `Our Network` · `Our Partners` · `Login` · `Make a Booking`
**Utility nav (verbatim):** `About Us` · `News` · `Careers` · `Contact Us` · `Search`
**Footer groups:** Services · Our Network · Latest News · About Us · Online Services · Connect

Browser-verified header elements: a search box placeheld **"How can we help you?"**, `tel:` links to `(02) 8988-1000` and `(02) 8988-7000`, and a link literally labelled **"or chat with us"** pointing to `http://m.me/themedicalcity`.

**Visitors section (verbatim path `/visitors/…`):** `Admission Process and Guidelines` · `Accomodation and Amenities` [sic — misspelled on their own site] · `Visitor Guidelines and Visitor Hours` · `Billing and Discharge-process` · `Patients Rights and Responsibilities` · `Security and Safety` · `How to Get to The Medical City` · `Center for Patient Experience`

**Admission requirements (verbatim items):** "Letter of Authorization (for HMO/ Company patients)", "Physician's Admitting Order Sheet", "Results of diagnostic procedures", IDs (HMO card, company ID, voter's ID, driver's license), and **discount cards (senior citizen, PWD, TMC Community Card)**. Room charges are **time-of-admission tiered**: 100% at midnight scaling down to 25% at 5pm, 24-hour minimum — a genuinely Philippine billing convention published as text.

**Senior/PWD (from their billing page):** "proof of entitlement should be presented at the Billing Section" and the senior/PWD "can avail of the promotional discount or the discount provided under the **Expanded Senior Citizen Act of 2010**, whichever is higher." This is the most explicit statutory-discount language I found.

**HMO presentation:** Buried under `Our Partners` — no dedicated, obvious "Accredited HMOs" page. Weakest HMO IA of the big three.

**Find a Doctor:** The page (`/find-a-doctor`) renders client-side and returned no server-side content to a fetch — meaning **the doctor directory is invisible to search engines and to any AI crawler.** That is a real SEO/AI-discoverability defect.

**Chatbot:** No on-site chat. "CHAT WITH US!" = Facebook Messenger handoff.
**Other:** TeleConsultation Services; TMC Patient Assistance Center; a stale "COVID-19 Online Screening Tool" still in the IA; cookie consent gate ("I AGREE").

---

#### 4. Asian Hospital and Medical Center — https://www.asianhospital.com/

**Top-level nav (verbatim):** `Find a Doctor` · `Our Services` · `Packages & Promos` · `Patient & Visitors` · `News & Updates` · `Medical Professionals` · `Careers` · `Contact Us`
**Utility:** a **shopping cart** (`/cart`) — they sell health packages as e-commerce. Only site I found doing this.

**Find a Doctor:** Two search tools. Doctors: specialty dropdown (16 options) + name field. **Services**: service name + "Unit/Institute" (Asian Brain Institute, Asian Cancer Institute, Asian Cardiovascular Institute, …). The **service-level search is a differentiator most PH sites lack.**

**HMO presentation:** https://www.asianhospital.com/accredited-hmos-insurances/ — nav label verbatim `Accredited HMOs, Insurances`. **Plain searchable HTML text**, no logos, no PDF. ~20 HMOs + **60+ insurers/third-party payors**. Critically: **zero guidance on LOA, validation, or claim process.** A long roster with no instructions — the opposite failure mode from MakatiMed.

**Patient resources:** `Admission`, `Patient's Right & Responsibilities`, `Visitors Guide`, `Medical Records`, `Philhealth` (dedicated page), `Patient Registration Form` (e-admission).

**Emergency:** Header carries **two distinct `tel:` links** — Trunk Line `+(632) 8-771-9000` and **Emergency `+(632) 8-876-57-55`**. This is the correct pattern: emergency number separated from trunkline, in the persistent header. Best emergency treatment observed.

**Chatbot:** They market **"AHRA (Asian Hospital Response Assistant)"** as a chatbot — but browser inspection shows it is a **Facebook Messenger deep link** (`https://m.me/1645413019026475`, button labelled "Send Message"), alongside "Send us an email" and "Send us a message on Facebook". **There is no chatbot on the website.** A named AI assistant that is actually a Messenger button is the exact gap KRISS AI closes.

---

#### 5. Cardinal Santos Medical Center — https://cardinalsantos.com.ph/

(WebFetch 403s; observed via browser.)
**Header (verbatim):** `Contact Directory` · social icons **including a Viber icon** (links to a real Viber community invite: `invite.viber.com/?g2=…`) · email icon (`mailto:info@csmc.ph`) · Search box · **`Find a Doctor`** (the only nav CTA promoted to the header)
**Footer nav (verbatim):** `Flagship Services` · `Our Packages` · `Our Doctors` · `Training Programs` · `Patient and Family Corner` · `Research Ethics Review Committee` · `About Us` · `Contact Us` · `Charities & Foundations` · `Accreditation and Awards`
Off-domain tools: `careconsult.csmc.ph` (teleconsult), `myportal.csmc.ph` (patient portal), and `cempia.com/mph/eQrmph?branchID=65` (a Metro Pacific Health e-QR queueing tool).

**HMO presentation — the single best example of _content_ I found:** https://cardinalsantos.com.ph/accredited-hmos/ — **47 HMOs as numbered plain HTML text** (ADVANCED MEDICAL ACCESS PHILIPPINES, ASIANCARE, BRIGHTCARE, BUPA, CARITAS, CIGNA, COCOLIFE, EASTWEST, ETIQA, FORTICARE, FORTUNE MEDICARE, GENERALI, INTELLICARE (ASALUS CORP), INTELLICARE (AVEGA MANAGED CARE), KAISER INTERNATIONAL, MAXICARE, MEDICARD, MEDOCARE, METROCARE, PACIFIC CROSS, PHILHEALTH CARE, VALUCARE, WELLCARE, …), **plus operational instructions above the list**:

> "Prior to admission, please coordinate with your HMO for the Letter of Guarantee (LOG) or Letter of Authorization (LOA) and additional documentation requirements to avoid delays. Patients may secure their LOA/LOG at Patients Concierge located at GF, Medical Arts Bldg. 1, Room 112 or they may call (02) 8727-0001 local 2249/2251/3069. Operating hours are from 7:00 AM to 5:00 PM, Monday to Saturday (except holidays)."

And a **"Related information" cluster at the bottom of the HMO page** cross-linking to PhilHealth, Patient Rooms, and Patient Admissions Guide. This is the correct pattern: _the money question links to the other three money questions._
Defect: the plain-text list has **broken line-wraps mid-company-name** ("COOPERATIVE HEALTH MANAGEMENT / FEDERATION"), and the same LOA hotline is given as "local 2249/2251/3069" at the top and "local 3059" at the bottom — **contradictory numbers on one page.**
**Chatbot:** None.

---

#### 6. Metro Pacific Health (network parent) — https://www.metropacifichealth.com/

**Top-level nav (verbatim — note the unconventional verb-phrase labels):** `Explore our network` · `Get to know us` · `Learn the latest on MPH` · `Be part of the network` · `Watch and scroll` · `Grow with us` · `Get in touch`
Claims **"31 Hospitals and growing"** (news items reference "22nd" and "28th" hospital — the count is a moving target).

**Network-wide Find a Doctor:** https://www.metropacifichealth.com/our-care-network/find-a-doctor — filters: Specialization (100+, including sub-specialties like "Internal Medicine - Cardiology", "Surgery - Laparoscopic"), Hospital Affiliation (~50 facilities), **HMO Accreditation (Yes / No / All)**, and doctor name. **245 pages of results.**
Results show name, specialty, hospital(s), phone, HMO indicator — **no photos, no clinic schedules, no booking links.** A phone number is the end of the journey.
Named program: **MPH OneCare**. No chatbot.

---

#### 7. Chong Hua Hospital (Cebu) — https://chonghua.com.ph/

Included because it is the **only** PH private hospital I found that publishes room rates.
**Top-level nav (verbatim):** `Home` · `About` · `Services` · `Doctors` · `Patients` · `News` · `Careers` · `Contact`
**https://chonghua.com.ph/patient-room-rates/** — room rates as **image-card layouts with peso amounts in HTML text**, per campus, with photo + feature icons + "More Details":

- Cebu: Premier Suite `₱ 14,490 / day`; Superior Suite `₱ 6,510 / day`; Semi-Suite `₱ 4,650 / day`; Junior Suite `₱ 4,300 / day`; Regular Private New `₱ 3,300 / day`; Regular Private `₱ 2,800 / day`; Semi-Private Bldg AB `₱ 1,800 / day`; Semi-Private Bldg C `₱ 1,500 / day`; Ward `₱ 1,200 / day`
- Mandaue: Premier Suite `₱ 16,750 / day`; Executive Suite `₱ 13,860 / day`; Suite `₱ 6,550 / day`; Regular Private `₱ 3,300 / day`; Semi-Private `₱ 2,000 / day`; Ward `₱ 1,600 / day`

**This is the proof point for the meeting:** room-rate transparency is _not_ taboo in the Philippine market. Capitol Medical Center (QC) also publishes daily rates (₱1,250 SSU → ₱6,550 Suite; Private ₱3,100–3,550; Semi-Private ₱1,550 — search-derived). Manila's big four do not.

---

### A2. DIRECT LOCAL COMPETITORS — ANTIPOLO / RIZAL / EASTERN CORRIDOR

**Headline finding: the local bar is on the floor.** Of the ~10 private hospitals in Antipolo City, I could verify **exactly three** with a real website. One of those three is currently offline.

---

#### 8. Antipolo Doctors Hospital — https://adh.com.ph/ ⭐ _the hospital to beat_

Metro Pacific Health's 22nd hospital investment. Level 2-ready, 77 beds, founded 1992, on Manuel L. Quezon Extension.

**Top-level nav (verbatim):** `Our Packages` · `About Us` · `Facilities and Services` · `Doctors` · `E-Learning` · `Contact Us` · `Careers` · `OPD Pricing`
Note: `Our Packages` is the **first** nav item and `OPD Pricing` is in the nav at all. In the Antipolo market, **price is the lead nav item.** That tells you what this catchment actually shops on.

**Homepage sections in order:** (1) **HMO Approval Process** — a 7-step illustrated guide, **presented bilingually English/Filipino**, with a **QR code to register online**, stating processing takes 1–2 days; (2) Facilities & Services grid — 11 tiles: pharmacy, laboratory, dialysis, emergency, radiology, dietary, CSR, X-ray, CT scan, chapel, private rooms; (3) Departments & Doctors teaser; (4) Careers CTA; (5) **HMO logo wall** — 18+ logos (Philcare, Medicard, Maxicare, Pacific Cross, …).

**Find a Doctor:** **None.** No search, no filter. https://adh.com.ph/doctors is five hard-coded tabs — verbatim: `Medicine` · `Surgery` · `OB-GYN` · `Pediatrician` · `Anesthesiology` — each containing an **HTML table of name / specialization / clinic hours by day** (e.g. "11-2 PM", "BY APPOINTMENT"). Sub-specialties named inside: Cardiology, Psychiatry, Pulmonology, Nephrology, Neurology, Gastroenterology, Oncology, ENT, Orthopedics, Urology, Ophthalmology. **No photos. No booking link. No HMO-per-doctor.** Note the label bug: "Pediatrician" is a _person_, used as a _department_ name.

**OPD Pricing:** https://adh.com.ph/opd-pricing — the nav promises pricing; the page delivers **a link to an external SharePoint Excel file.** No prices on the page. No senior/PWD or PhilHealth mention.
**Packages:** https://adh.com.ph/packages — packages are **images with prices baked into the pixels** (filenames observed: BOJ Delivery Package, BOJ Package D/A/H, Wellness Wonders, DM Screening, Heart Station Packages, Back to School). Categories: Closed Packages (inclusions "Hospital Fees (Operating Room Fees, Supplies, Medicines and Equipments)", "Doctors' fee", "Room and Board"), Outpatient Packages, Executive Check-Up. **Unsearchable, un-indexable, unreadable by screen readers, and un-answerable by any chatbot.**

**Emergency:** listed as one of 11 facility tiles. **No dedicated ER hotline, no 24/7 framing, nothing above the fold.**
**Admission requirements:** absent. **Room rates:** absent. **Chatbot:** none.
Contact: 8638-1804 / 1805, mail.antipolodoctors@adh.com.ph, address with **Waze deep link** (not Google Maps), socials on YouTube/Facebook/TikTok/LinkedIn/Instagram.
Build quality: copyright 2024; **live placeholder images named `dummy.png` shipped to production.**

---

#### 9. Metro Antipolo Hospital and Medical Center — https://www.metroantipolo.com/ 🔴 **CURRENTLY OFFLINE**

The most geographically direct competitor: 99–109 beds, Level 2, **on Marcos Highway / 1348 Marikina-Infanta Hwy, Brgy. Mayamot** — the same road as UASHMC at #7 Marcos Highway, Mambugan. Metro Pacific Health's 28th hospital investment. Tel (02) 8722 3208. Tagline (from search metadata): _"Serving Beyond Medical Expertise in Antipolo City."_

**I could not load a single page.** Verified **three separate ways** — WebFetch on `/`, `/about-us`, `/doctors`, `/facilities/semi-private`, and a real Chrome browser session — all returned **`503 Service Temporarily Unavailable` / nginx**. The entire site is down, not one path.

Known IA from indexed URLs: `/about-us`, `/services`, `/facilities`, `/departments`, `/doctors`, `/contact-us`, plus per-facility pages `/facility/semi-private`, and room types Presidential Room, Deluxe Room, Semi-Private, ICU/ASU (Acute Stroke and Neurological Unit).

**Use this in the meeting.** The nearest same-corridor competitor, backed by the country's largest hospital group, has a website that does not respond. Uptime, monitoring, and a static-first architecture are therefore not "nice to have" — they are a demonstrable, name-the-competitor differentiator.

---

#### 10. Fatima University Medical Center – Antipolo — https://www.fumc.com.ph/

Km. 23 Sumulong Highway, Sta. Cruz, Antipolo. DOH-accredited, 100 beds. Two-branch site (Antipolo + Valenzuela).

**Top-level nav (verbatim):** `Home` · `About Us` · `Patient Care` · `Centers and Departments` · **`I WANT TO`** · `Contact Information`
The **`I WANT TO`** label is a genuinely good, task-oriented idea — worth stealing as a concept and executing better.
**Footer groups (verbatim):** _Stay Connected_ · _Quick Links_ (About Us, Mission and Vision, Founder's Vision, 5 Operating Principles, Find a Doctor) · _Others_ (Centers and Departments, Privacy Policy, Patient Information, News and Updates, Contact Information)

**Homepage order:** nav → laboratory home-service booking → hotline + clinic hours → intro copy → featured services (Heart Station, Emergency Medicine, Anesthesiology, Internal Medicine, Family Medicine) → welcome/history → Carl Zeiss Asia Pacific Training Hub → Antipolo branch description → **HMO logo grid** → doctor-appointment CTA → trust badges ("Certified Doctors", "Fast Results", "Affordable Medicines") → promos by branch → News → Careers → **magazine download** → Messenger buttons → footer.

**Find a Doctor:** link exists in the footer only; **no search or filters** exposed.
**HMOs:** **logo grid only, ~20 providers, no text list, no LOA guidance.** PhilHealth appears as a _logo among HMO logos_ — a category error, since PhilHealth is national insurance, not an HMO.
**Emergency:** "FUMC HOTLINE NUMBERS (02) 87278845 (Antipolo) and (02) 82916538 (Valenzuela)" — a general hotline, not an ER line.
**Admission requirements / PhilHealth detail / room rates:** **all absent.**
**Chatbot:** none — Messenger buttons per branch.

---

#### 11. Marikina Valley Medical Center — https://www.marikinavalley.net/

Sumulong Highway cor. Aguinaldo St., Marikina — immediately downhill from Mambugan; shares UASHMC's catchment. Metro Pacific Health network, Platinum Accreditation Canada International.

**Top-level nav (verbatim):** `HOME` · `FIND A DOCTOR` · `ABOUT US` · `OUR SERVICES` · `PATIENTS & VISITORS` · `CAREERS` · `CONTACT US` — plus a prominent **`DONATE NOW`** button in the nav.
**Emergency — the best-in-catchment treatment:** at the very top of the page, "8-682-2222 Local 101-102, **09178100639**, or **09985937169**" — i.e. **a landline plus two mobile numbers.** This is correct for the Philippine market and something no Manila benchmark does.
**Patients & Visitors sub-topics (verbatim):** `Room Accommodations` · `HMOs & Corporate Partners` · `PhilHealth` · `Reminders for Patients & Guests` · `Hospital Directory` · `Patient's Rights and Responsibilities` — a clean, correct set of six.
**Weaknesses:** Room Accommodations has **no rates** ("Explore our range of clean, comfortable, and well-equipped room options"). HMO partners are **not actually enumerated** — only "a wide network of HMO providers and corporate partners." The **Hospital Directory is a PDF download** ("Download the file here"). No senior/PWD or medical-records content. `/find-a-doctor` is a Wix page so slow it **timed out twice in a real browser** and returned no content to a fetch — so its directory, like TMC's, is invisible to crawlers.
**Platform:** Wix (`static.wixstatic.com`). **Chatbot:** none.

---

#### 12–17. The rest of Antipolo/Rizal — **NO WEBSITE AT ALL**

Verified via search that these operating private hospitals in Antipolo have **Facebook pages and third-party directory listings only**, no owned website:

- **Assumption Specialty Hospital and Medical Center** (Sumulong Highway, Dela Paz) — DOH-licensed, ER + OPD + inpatient + ICU + CT scan + clinical lab. Presence: `facebook.com/assumption.hospital2019`, healthspace.ph, nowserving.ph, doktor.ph, medicareplusinc.com. No site.
- **Unciano Colleges and General Hospital – Antipolo** (Circumferential Road) — the _college_ has `uca-nexus.site`; **the hospital has no website of its own.** The hospital is a sub-mention of a school site.
- **Clinica Antipolo Hospital and Wellness Center** (Ninoy Aquino Ave., formerly Taktak Rd., Brgy. dela Paz) — no site found.
- **Antipolo City Medical Hospital** — no site found.
- **Dionisio M. Cornel Medical Center, Inc.** — no site found.
- **Blessed Trinity Maternity and Medical Hospital, Inc.** — no site found.

**UASHMC's own current footprint, for comparison:** healthspace.ph carries it as "Verified", last updated Sep 19 2025, with address, phones, email, sector "Private" — and **blank fields for services, specialties, HMOs, bed capacity, and licence.** The nowserving.ph and Waze listings exist but Waze has the address as **"625 Marikina-Infanta Hwy"**, which conflicts with the official "#7 Marcos Highway, Mambugan." That NAP inconsistency is actively costing walk-ins and should be fixed on day one.

---

## PART B — SYNTHESIS

### 1. The CONVENTIONAL Philippine hospital site IA

Patients in this market arrive with a learned mental model. Deviating from it costs trust; matching it and then executing better is the play.

**The five nav labels that are effectively mandatory** (each appears on 5+ of the sites examined, in near-identical wording):

| Slot | Conventional label      | Seen as                                                                                                                                                               |
| ---- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Find a Doctor**       | St. Luke's `Our Doctors`; MakatiMed / TMC / Asian / MVMC / MPH `Find a Doctor`; Cardinal Santos `Find a Doctor` (in header); ADH / Chong Hua `Doctors`                |
| 2    | **Our Services**        | MakatiMed / TMC / Asian / MVMC `Our Services`; St. Luke's `Health Specialties & Services`; ADH `Facilities and Services`; FUMC `Centers and Departments`              |
| 3    | **Patients & Visitors** | St. Luke's `Patients & Visitors`; Asian `Patient & Visitors`; MVMC `PATIENTS & VISITORS`; TMC `/visitors/…`; MakatiMed `Patient & Visitor Guide`; FUMC `Patient Care` |
| 4    | **About Us**            | universal                                                                                                                                                             |
| 5    | **Contact Us**          | universal                                                                                                                                                             |

**Plus, near-universally: `Careers`** (present on all 11 with a site — hospital sites in PH are also recruitment sites, driven by nurse/allied-health hiring pressure), and **`News & Events` / `What's New` / `Promos`**.

**The canonical `Patients & Visitors` page set** — the union of St. Luke's, MakatiMed, TMC, Asian, MVMC and Cardinal Santos converges tightly on:

1. **Admission Procedure / Requirements**
2. **Accredited HMOs** (+ LOA/LOG mechanics)
3. **PhilHealth** (own page, separate from HMOs — this separation is a hard convention)
4. **Room Accommodations**
5. **Billing and Payment**
6. **Visitor Guidelines / Visiting Hours**
7. **Patient's Rights and Responsibilities** (near-mandatory; DOH-expected)
8. **Medical Records**

**Conventional transactional layer, usually in a utility bar above the main nav:** Book an Appointment · Online Lab Results · Online Payment · Patient Portal · Teleconsult. On every benchmark these live on **separate hostnames or third-party platforms** (portal.makatimed.net.ph, careconsult.csmc.ph, cempia.com, Zoho forms) — nobody has integrated them.

**Conventional homepage furniture:** trunkline in the header as a `tel:` link · specialty/service grid · HMO logo wall · packages/promos block · news · careers CTA · social icons (FB, IG, YouTube, TikTok, LinkedIn — TikTok is standard here) · JCI or Accreditation Canada badge if held.

**Recommended UASHMC top nav** — native to the convention, mapped to your seven priority actions, and reading in the market's own words:
`Find a Doctor` · `Services & Specialties` · `HMOs & PhilHealth` · `Patients & Visitors` · `About UASHMC` · `Contact & Directions` — with a persistent, visually distinct **`Emergency 24/7`** element in the header (number, not a page), and a **`New at UASHMC`** slot on the homepage for the expansion story. Note `HMOs & PhilHealth` promoted to top-level: no benchmark does this, and in the Antipolo price-sensitive catchment it is arguably the #1 question.

---

### 2. Where these sites are WEAK — the competitive wedge

Twelve specific, verified, attackable gaps. The first five are the ones I'd put on the slide.

**W1. Money answers are locked inside images, PDFs and Excel files.**

- ADH: `OPD Pricing` in the top nav resolves to **a SharePoint .xlsx link** — https://adh.com.ph/opd-pricing
- ADH: all packages are **images with prices in the pixels** — https://adh.com.ph/packages
- MVMC: hospital directory is **"Download the file here"** PDF
- Consequence: not searchable, not indexable, not screen-reader accessible, not quotable by any chatbot, not readable on a slow mobile connection. **UASHMC ships every price, package and department as real HTML text.** Immediate, demonstrable, and cheap.

**W2. Nobody has chat on their own website. Not one.**
Verified by direct browser inspection: St. Luke's — none. MakatiMed — none. Cardinal Santos — none. ADH — none. MVMC — none. FUMC — Messenger buttons. TMC — "or chat with us" → `m.me/themedicalcity`. Asian Hospital — markets a named AI assistant, **"AHRA (Asian Hospital Response Assistant)"**, which is a **`m.me/1645413019026475` link labelled "Send Message"**.
So the state of the art at the top of the Philippine market is: _push the patient off your website into Facebook and hope someone replies._ **KRISS AI on uashmc.com would make UASHMC the first Philippine hospital with a real on-site patient-navigation assistant** — ahead of St. Luke's, MakatiMed and The Medical City. That is the single strongest line available for the Bravo/Pedraja conversation, and it is a verified observation, not a claim.

**W3. HMO pages are either a roster with no instructions, or instructions with no roster — almost never both, and never filterable.**

- Asian Hospital: 20 HMOs + 60+ insurers as text, **zero LOA guidance**
- FUMC: **logo grid only**, no names as text, no guidance (and PhilHealth mis-filed as an HMO logo)
- MVMC: "a wide network of HMO providers" — **no list at all**
- ADH: **logo wall only**, 18+ logos
- Cardinal Santos: 47 named HMOs + excellent LOA instructions — but broken mid-name line-wraps and **two contradictory LOA extension numbers on the same page** (local 2249/2251/3069 at top, local 3059 at bottom)
- MakatiMed: best content in the country (per-HMO LOA location + alternative channel) — but **Medocare duplicated four times**, and the eLOA form is **an off-site Zoho form**
- **Nobody, anywhere, has a searchable/type-ahead HMO checker.** "Is my Maxicare accepted?" requires scrolling 47 items or squinting at logos.
- **The wedge:** one type-ahead field — _"Type your HMO"_ → accepted/not · what to bring · where the LOA desk is · its hours · its direct number · and the same answer available through KRISS AI in English or Filipino. This is a small build with outsized perceived value, and it is the #1 pre-admission question in this market.

**W4. Doctor directories dead-end at a phone number.**

- ADH: **no search whatsoever** — five hard-coded department tabs and static tables
- FUMC: "Find a Doctor" is a footer link with no filters
- MVMC: `/find-a-doctor` **timed out twice in a real browser** and serves nothing to a crawler
- TMC: `/find-a-doctor` renders client-side — **the directory is invisible to search engines and AI crawlers**
- MPH network tool: 245 pages, HMO filter, but **no photos, no schedules, no booking**
- MakatiMed: filters are only day + time; runs on a legacy `doctors-v2/index.php`
- Only St. Luke's does this properly (specialization + location + schedule + gender + HMO)
- **The wedge:** UASHMC has a _small_ roster — Internal Medicine, Orthopedics, Cardiology, Pediatrics. Small is an advantage. Every doctor gets a real page: photo, sub-specialty, clinic days/hours, room, languages spoken, HMO accreditations, **and a live "Book" button through NowServing.ph** (which UASHMC already uses). A complete, photographed, bookable 25-doctor directory beats a 245-page phone list, and it beats ADH outright.

**W5. Emergency information is treated as a page, not as a phone number.**
Only two sites in the entire sample do this correctly: **Asian Hospital** (separate `tel:` links for Trunk Line `+(632) 8-771-9000` and **Emergency `+(632) 8-876-57-55`** in the persistent header) and **MVMC** (landline + **two mobile numbers** at the top of the page). ADH buries "emergency" as one of eleven facility tiles. St. Luke's, TMC, FUMC and MakatiMed publish only trunklines.
**The wedge:** a persistent header/sticky-footer emergency block — ER direct line, the **+63 947 875 4949 Viber/SMS number**, "Open 24/7", one-tap Waze **and** Google Maps, and a plain-language "what to do if you're coming to the ER now". This also satisfies the KRISS AI escalation constraint: the assistant always has a hard-coded human/emergency exit visible on the same screen.

**W6. Room rates are hidden in Manila — and rate transparency is already proven in the Philippines.**
St. Luke's: no rates, room types not even listed. MakatiMed: seven room types named, zero prices. MVMC: no rates. TMC: no rates (though it _does_ publish the time-of-admission tiering). But **Chong Hua publishes 15 room rates with photos and peso amounts per day** (`₱ 1,200 / day` ward → `₱ 16,750 / day` premier suite) and **Capitol Medical Center publishes ₱1,250–₱6,550**. And in Antipolo, **ADH put `Our Packages` first in its nav and `OPD Pricing` in the nav at all** — this catchment shops on price.
Meanwhile the vacuum is being filled by third parties: `clinicfinderph.com` now ranks for "St. Luke's Medical Center Rates & Fees 2026", "Cardinal Santos… ₱800 Consult, ₱15K MRI, ₱180K CS", "Capitol Medical Center Rates 2026". **Someone else is already publishing your prices, with worse accuracy and no accountability.** Publishing an indicative room-rate card with photos is a credibility play for a brand-new hospital, not a risk. Frame it to Dr. Bravo as _owning the answer before an aggregator invents it._

**W7. No hospital in the sample has a task-oriented entry layer that works.**
FUMC has the right instinct with **`I WANT TO`** in its nav, but it's a bare dropdown. Everyone else organises by _org chart_ (Institutes, Departments, Centers) rather than by _patient intent_. The core homepage job — "can this hospital handle what I need, and what do I do next?" — is answered by nobody. **The wedge:** a visible task row on the homepage: _Book a consult · Check if my HMO is accepted · Go to the ER now · Get my lab results · Find directions · Ask about a procedure._ Six intents, six destinations, above the fold. This is also exactly the intent taxonomy KRISS AI should be trained on — the site's IA and the assistant's skill list become the same artifact.

**W8. Digital estates are fragmented across hostnames and third-party forms.**
MakatiMed spans `makatimed.net.ph` + `portal.makatimed.net.ph` + `rms.makatimed.net` + a **Zoho** eLOA form. Cardinal Santos spans `csmc.ph` + `careconsult.csmc.ph` + `myportal.csmc.ph` + `cempia.com`. ADH's pricing lives on **SharePoint**. Every hand-off is a trust drop and a bounce. **UASHMC starts clean: one domain, one design system, one place the patient never has to leave.** (This also directly addresses the `uashmc.customerrelations@gmail.com` credibility gap — a real domain with real `@uashmc.com.ph` mailboxes is table stakes for a hospital and should be scoped into Phase 1.)

**W9. Visible production-quality defects at every tier.**
`dummy.png` placeholders live on ADH. TMC misspells its own nav item **"Accomodation and Amenities"** and still ships a **COVID-19 Online Screening Tool** in its IA. Cardinal Santos contradicts its own LOA phone extension within one page. MakatiMed repeats Medocare four times. ADH labels a department **"Pediatrician"**. MPH claims 31 hospitals while its own newsroom says 22nd and 28th. **The bar for "obviously well-made" is low enough that basic editorial discipline reads as premium.**

**W10. Reliability is not a given — and that is provable by name.**
**metroantipolo.com — the nearest same-corridor competitor, Metro Pacific Health-backed — returned 503 nginx on every path, verified via three tools including a live browser.** Cardinal Santos 403s automated clients. MVMC's Wix pages timed out twice. St. Luke's `/our-doctors` threw a 500. **UASHMC should commit publicly to a static-first, CDN-served, uptime-monitored build** — and Allan can say, in the room, that the competitor 4 km down Marcos Highway is offline right now.

**W11. Everything of value is invisible to search engines and AI assistants.**
Doctor directories that render client-side (TMC, MVMC), prices in images (ADH), rosters in PDFs (MVMC) — none of it can be indexed by Google, and none of it can be retrieved by ChatGPT, Gemini or Claude when an Antipolo resident asks "which hospital near Marcos Highway does laparoscopic gallbladder surgery and takes Maxicare?" **A semantic-HTML, server-rendered, schema.org-marked-up site (`MedicalOrganization`, `Physician`, `MedicalProcedure`) would make UASHMC the most machine-readable hospital in Rizal** — and it doubles as the retrieval corpus KRISS AI grounds on. One content effort, three payoffs: SEO, AI-answer visibility, and chatbot grounding. This is the argument that makes "KRISS AI-ready from Day One" an _architecture_ decision rather than a bolt-on.

**W12. Nobody serves Filipino, except ADH — and ADH proves it works.**
Every benchmark is English-only. **ADH's 7-step HMO Approval Process is presented bilingually English/Filipino** — the single smartest thing on any Antipolo hospital site, and it is on the money question. **UASHMC should be bilingual where it counts** (HMO/LOA steps, admission requirements, ER instructions, PhilHealth) and KRISS AI should answer in Filipino, English, or Taglish. In this catchment that is not a nicety.

---

### 3. What the Antipolo/Rizal competitive bar actually is

**The bar is astonishingly low. UASHMC can be the best hospital website in its catchment area in one build, and the best in the _province_ comfortably.**

The catchment, ranked as it stands today:

| #    | Hospital                                                                                                                  | Site               | State                                                                                                                                                                                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Antipolo Doctors Hospital**                                                                                             | adh.com.ph         | The one to beat. Copyright 2024. Genuinely good bilingual HMO explainer, packages-first nav. But **no doctor search**, prices in **images and a SharePoint Excel**, `dummy.png` in production, no admission info, no room rates, no chat, emergency buried. |
| 2    | **Marikina Valley Medical Center**                                                                                        | marikinavalley.net | Wix. Correct six-topic Patients & Visitors set and the **best emergency-number treatment in the corridor** (landline + 2 mobiles, top of page). But HMOs unnamed, no rates, directory as PDF, `/find-a-doctor` too slow to load.                            |
| 3    | **Fatima University Medical Center – Antipolo**                                                                           | fumc.com.ph        | Two-branch site. Good `I WANT TO` instinct. HMOs as logos only, no admission info, no rates, no doctor search, Messenger-only contact.                                                                                                                      |
| 4    | **Metro Antipolo Hospital and Medical Center**                                                                            | metroantipolo.com  | **Offline. 503 on every path.** Same road as UASHMC.                                                                                                                                                                                                        |
| 5–10 | Assumption Specialty · Unciano Antipolo · Clinica Antipolo · Antipolo City Medical · Dionisio M. Cornel · Blessed Trinity | —                  | **No website. Facebook and directory listings only.**                                                                                                                                                                                                       |

**How much does UASHMC need to do?**

- **To beat the median Antipolo hospital: just exist.** Six of ten have no site. UASHMC currently sits in this tier — Facebook, 33 Instagram followers, and scattered third-party listings with an address that doesn't even match.
- **To beat #2–#4 (MVMC, FUMC, Metro Antipolo): a competent, fast, mobile-first site with a real working doctor directory, HMO list as text with LOA steps, and a prominent ER block.** This is a Phase-1 scope. No heroics.
- **To beat #1 ADH decisively — i.e. to be unambiguously the best in Antipolo: five things.**

1.  A **real filterable Find a Doctor** with photos, schedules, HMO accreditation, and live booking via NowServing (ADH has _no search at all_ — this is the widest gap and the easiest win)
2.  **Prices and packages as HTML text**, not images or SharePoint (matching ADH's own price-forward nav instinct, but readable)
3.  **Searchable HMO checker** + bilingual LOA steps (take ADH's best idea and make it a tool)
4.  **Emergency block in the persistent header** — ER line + Viber + Waze + Google Maps
5.  **KRISS AI on-site** — which nobody in the Philippines has

Do those five and UASHMC's site is better than every hospital in Antipolo and Rizal, and better _in specific, nameable ways_ than St. Luke's, MakatiMed and The Medical City on chat, HMO usability, price transparency, and machine-readability. **A brand-new 2025 hospital can credibly claim the best hospital website in the province within one project cycle.** That is the promise to put in front of Dr. Bravo — and the specific list to put in front of **Harvey Lozada as decisions still open for him to shape**, not as a finished design. Each of the five is a genuine choice with marketing consequences (how much price to show, how bilingual to go, how aggressive the ER block is, what the doctor cards feature, what KRISS AI is allowed to say) — which is exactly the collaborative agenda the brief demands.

---

### 4. Distinctly Philippine content conventions a foreign-designed site would miss

A designer working from US or European hospital references would get **eleven** things wrong. Every one below is verified on at least two Philippine sites.

**1. HMO accreditation is a top-three page, not a footnote.**
In the US, insurance is a plan-network question handled at booking. Here, _"tinatanggap ba ang HMO ko?"_ is the question that decides which hospital you go to. Every single site in the sample has a dedicated HMO surface. Cardinal Santos lists **47**. Asian Hospital lists 20 HMOs **plus 60+ insurers/third-party payors**. A foreign template would bury this under "Billing".

**2. The LOA / LOG mechanic has no Western equivalent and must be explained operationally.**
Verbatim conventions: **"Letter of Authorization (LOA)"**, **"Letter of Guarantee (LOG)"**, "Letter of Authority". The content patients need is _procedural_: where the desk is, its hours, its direct extension. Cardinal Santos: "secure their LOA/LOG at Patients Concierge located at GF, Medical Arts Bldg. 1, Room 112… (02) 8727-0001 local 2249/2251/3069… 7:00 AM to 5:00 PM, Monday to Saturday (except holidays)." MakatiMed gives a **"Primary Location for LOA Request"** and an **"Alternative Channel for LOA Request"** per HMO, including "Proceed to Medical Concierge to use the landline to call the HMO's hotline." Note the **"except holidays"** qualifier — a PH-specific necessity given the number of national and local holidays (and Antipolo's own fiesta calendar). Note also the deposit linkage: MakatiMed waives the initial deposit **if** a valid LOA/LOG is presented; St. Luke's converts you to "private-paying" **without** one. This is the highest-anxiety fact on the whole site and belongs stated plainly. **ADH's bilingual 7-step LOA guide with a QR code is the local benchmark to beat.**

**3. PhilHealth is a separate page from HMOs, with a specific form list.**
St. Luke's, Asian Hospital, MVMC and Cardinal Santos all give PhilHealth its own page. The convention is to enumerate documents by their form codes: **"Original CF1 (Member/Patient Parts I, II, III & Employer Part IV)"**, **"Original CF2 (signed by attending physicians)"**, "Certificate of Contributions or Receipt of Premium Payment (at least 3 months from confinement backward)", "PhilHealth Membership Registration Form for undeclared dependents". FUMC gets this wrong by dropping the PhilHealth logo into its HMO grid — PhilHealth is national social insurance, not an HMO, and Filipino patients know the difference.

**4. Senior Citizen and PWD discounts are statutory and must be named as such.**
TMC's language is the model: present proof "at the Billing Section", and the patient "can avail of the promotional discount or the discount provided under the **Expanded Senior Citizen Act of 2010**, whichever is higher." MakatiMed lists **"Senior Citizen's ID or Persons with Disability ID (if eligible)"** among admission documents; TMC lists "discount cards (senior citizen, PWD, TMC Community Card)". A foreign designer would omit this entirely — it is a legal entitlement (RA 9994 / RA 10754) with real peso value, and Antipolo has a large senior population. **Notably, ADH and FUMC — the local competitors — don't mention it at all.** Free win.

**5. Viber is a primary contact channel, alongside SMS to a mobile number.**
Cardinal Santos puts a **Viber icon in its site header** next to Facebook and Instagram, linking to a live Viber community invite. MVMC publishes **two mobile numbers (0917…, 0998…) beside its landline** at the top of the page. UASHMC's `+63 947 875 4949` SMS/Viber number should be first-class site furniture — header, footer, contact page, ER block, and every doctor card. A US-trained designer would put an email form there instead; email is the _least_ trusted channel in this market, and UASHMC's is a Gmail address, which makes it worse.

**6. Waze is co-equal with Google Maps — sometimes primary.**
ADH's homepage address links to **Waze**, not Google Maps. UASHMC already has a Waze place entry. Publish **both** deep links, and fix the conflicting address (Waze shows "625 Marikina-Infanta Hwy" against the official "#7 Marcos Highway, Mambugan"). Also publish jeepney/UV Express landmarks and the nearest LRT-2 Antipolo station relationship — Philippine wayfinding is landmark-based, not address-based, and Marcos Highway is a corridor people navigate by landmark.

**7. Room rates and packages are a shopping decision, published with photos.**
Chong Hua publishes 15 rates from `₱ 1,200 / day` to `₱ 16,750 / day` with room photos. Room _type_ vocabulary is a fixed local taxonomy: **Ward · Semi-Private · Regular Private · Suite · Executive/Presidential Suite** (MakatiMed adds Large Premium / Large Private / Small Private; Metro Antipolo uses Presidential / Deluxe / Semi-Private). Related PH-specific facts a foreign designer wouldn't know exist: **hospital charges are keyed to room classification** (TMC states this outright — your room class drives your professional fees), room charging is **tiered by admission hour** (TMC: 100% at midnight down to 25% at 5pm, 24-hour minimum), and rooms are expected to include a **"watcher's bed"** because a family member stays overnight. Cardinal Santos writes this explicitly: rooms are "designed to accommodate visitors, with space for family members to stay". A Western site would never mention a companion bed; here it's a purchase criterion.

**8. "Packages" are a core product category with their own nav slot.**
ADH puts `Our Packages` **first** in its nav. Asian Hospital has `Packages & Promos` **and a shopping cart**. Cardinal Santos and MVMC both have `Our Packages`. FUMC runs `Promos` by branch. Recognisable local package genres observed: **Executive Check-Up**, **Closed Packages** for deliveries (bundling "Hospital Fees (Operating Room Fees, Supplies, Medicines and Equipments)" + "Doctors' fee" + "Room and Board"), maternity/delivery packages, **Back to School** screening, DM (diabetes) screening, Heart Station packages, laboratory bundles, and **senior citizen** packages. UASHMC's laparoscopic cholecystectomy and X-ray/imaging offerings map directly onto this convention. "Closed package" — an all-in fixed price — is a specifically Philippine construct and a strong trust signal from a new hospital.

**9. Medical records and certificates are bureaucratic, in-person, and need a published procedure.**
St. Luke's: the **"Medical Information Release (MIR)"** form, from the Nurse's Station, requiring **both** attending physician and **Medical Director** approval after discharge — no download, no fee schedule, no processing time, no online route. This is the norm. Distinct Philippine needs a foreign site would never anticipate: **medico-legal certificates** (for assault, vehicular accident, workplace injury, domestic violence — often required by police or an employer within days) and routine **medical certificates** for work/school absence. Publishing a clear page — form, requirements, fee, turnaround, window location, hours — is cheap and **no competitor in Antipolo has one.** Also a natural KRISS AI intent: _"how do I get a medical certificate?"_ is high-volume and 100% informational, squarely inside the no-clinical-advice constraint.

**10. Careers is a patient-facing page, not an HR afterthought.**
Every one of the eleven sites with a website has `Careers` in the primary nav. ADH gives it a homepage CTA block; FUMC too; MVMC has it in the top nav; ADH even runs an `E-Learning` section. UASHMC already runs a separate `facebook.com/uashmc.hr` page — that traffic should land on the site. For a new hospital, a strong Careers presence also signals growth and stability to _patients_, not just applicants.

**11. Accreditation badges and the DOH/level vocabulary carry real weight.**
JCI (MakatiMed, TMC), Accreditation Canada Platinum (Cardinal Santos, MVMC), "DOH-licensed", "Level 2", explicit bed counts (ADH 77 beds, Metro Antipolo 99–109, FUMC 100), "fully accredited by PhilHealth", and membership in the Private Hospitals Association of the Philippines (phapi.online). For a hospital opened in 2025 with awareness still to build, **whatever UASHMC legitimately holds — DOH licence and level, PhilHealth accreditation, bed capacity, PHAPI membership, specialty society affiliations — belongs prominently on the homepage and About page**, stated plainly. This is the market's language for "we are real", and it is the direct antidote to the credibility gap of a Gmail contact address and a 33-follower Instagram. Also worth noting for the tagline work: **"Excellence in Every Life We Touch"** sits comfortably alongside the corridor's own register — Metro Antipolo uses _"Serving Beyond Medical Expertise in Antipolo City"_, MVMC leads with "exceptional care with genuine compassion" — so the existing tagline is native to the market and should be kept, not replaced.

---

### Sources

**Benchmark tier:** [St. Luke's Medical Center](https://www.stlukes.com.ph/) · [SLMC HMO Information](https://www.stlukes.com.ph/patients-guide/hmo-information) · [SLMC Accommodations](https://www.stlukes.com.ph/patients-guide/accommodations) · [SLMC Admission Procedures](https://www.stlukes.com.ph/patients-guide/admission-procedures) · [SLMC Medical Records](https://www.stlukes.com.ph/patients-guide/medical-records) · [Makati Medical Center](https://www.makatimed.net.ph/) · [MakatiMed HMO](https://www.makatimed.net.ph/about-us/hmo/) · [MakatiMed Patient Admission](https://www.makatimed.net.ph/patients-and-visitors/patient-admission/) · [The Medical City](https://www.themedicalcity.com/) · [TMC Admission Procedures](https://www.themedicalcity.com/visitors/admission-procedures) · [TMC Visitors & Patients Detailed Guide](https://www.themedicalcity.com/visitors/visitors-patients-detailed-guide) · [TMC Billing & Payment](https://www.themedicalcity.com/visitors/billing-payment) · [Asian Hospital and Medical Center](https://www.asianhospital.com/) · [Asian Hospital Accredited HMOs, Insurances](https://www.asianhospital.com/accredited-hmos-insurances/) · [Cardinal Santos Medical Center](https://cardinalsantos.com.ph/) · [CSMC Accredited HMOs](https://cardinalsantos.com.ph/accredited-hmos/) · [CSMC Patients' and Visitors' Guide](https://cardinalsantos.com.ph/patients-and-visitors-guide/) · [Metro Pacific Health](https://www.metropacifichealth.com/) · [MPH network Find a Doctor](https://www.metropacifichealth.com/our-care-network/find-a-doctor) · [Chong Hua Hospital Patient Room Rates](https://chonghua.com.ph/patient-room-rates/)

**Antipolo / Rizal / eastern corridor:** [Antipolo Doctors Hospital](https://adh.com.ph/) · [ADH Doctors](https://adh.com.ph/doctors) · [ADH OPD Pricing](https://adh.com.ph/opd-pricing) · [ADH Packages](https://adh.com.ph/packages) · [Metro Antipolo Hospital and Medical Center](https://www.metroantipolo.com/) (503 — offline) · [Metro Antipolo Doctors](https://www.metroantipolo.com/doctors) (503) · [Fatima University Medical Center](https://www.fumc.com.ph/) · [FUMC Contact Information](https://www.fumc.com.ph/contact-information/) · [Marikina Valley Medical Center](https://www.marikinavalley.net/) · [MVMC Patients and Visitors](https://www.marikinavalley.net/patientsandvisitors-1) · [MVMC Contact Us](https://www.marikinavalley.net/contactus) · [MPH invests in Antipolo Doctors Hospital](https://www.metropacifichealth.com/news/article/metro-pacific-health-invests-its-22nd-hospital-antipolo-doctors-hospital-adh) · [MVMC Accreditation Canada Platinum](https://www.metropacifichealth.com/news/article/marikina-valley-medical-center-receives-prestigious-platinum-accreditation-from-accreditation-canada-international-for-achieving-global-healthcare-standards-in-patient-safety-and-quality) · [Assumption Specialty Hospital (Facebook only)](https://www.facebook.com/assumption.hospital2019/) · [Unciano Colleges Antipolo](https://www.uca-nexus.site/) · [Antipolo hospitals list — NowServing](https://nowserving.ph/antipolo-city-rizal/hospital/) · [Antipolo hospital contacts — FOI](https://www.foi.gov.ph/requests/contact-number-and-email-address-of-hospitals-in-antipolo-city-rizal-philippines-doh-268700111590/) · [Private Hospitals Association of the Philippines members](https://phapi.online/members/) · [DOH National Health Facility Registry](https://nhfr.doh.gov.ph/VActivefacilitiesList)

**UASHMC's current footprint:** [HealthSpace listing](https://healthspace.ph/facility/united-antipolo-specialists-hospital-and-medical-center-FCD03304) · [NowServing profile](https://nowserving.ph/united-antipolo-specialists-hospital-and-medical-center-uashmc/) · [NowServing specialties](https://nowserving.ph/united-antipolo-specialists-hospital-and-medical-center-uashmc/specialty/) · [Waze directions](<https://www.waze.com/live-map/directions/ph/calabarzon/antipolo-city/united-antipolo-specialists-hospital-and-medical-center-(uashmc)>) · [Facebook](https://www.facebook.com/uashmc/) · [Instagram](https://www.instagram.com/uashmc/)

**Context / market:** [Proto AICX — 1,600 PH hospitals case study](https://www.proto.cx/case-study/ai-enabled-healthcare-support-in-the-philippines) · [Bot MD patient engagement (Viber/Messenger/SMS)](https://www.botmd.com/) · [SmartChat PH healthcare communication](https://www.smartchat.ph/) · [Responsible AI in Philippine healthcare — npj Digital Medicine](https://www.nature.com/articles/s41746-025-01755-3) · [Requesting hospital medical records in the Philippines](https://www.respicio.ph/commentaries/how-to-request-hospital-medical-records-in-the-philippines) · [Capitol Medical Center rates](https://www.clinicfinderph.com/blog/capitol-medical-center-rates-fees) · [Third-party rate aggregation example](https://www.clinicfinderph.com/blog/st-lukes-medical-center-rates-fees)
