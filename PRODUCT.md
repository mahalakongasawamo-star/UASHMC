# Product

## Register

brand

## Users

Patients and families in Antipolo City and the wider Rizal corridor, plus the Marikina and Masinag
approaches along Marcos Highway.

- **Mostly first-time, always anonymous.** No accounts, no returning-user memory. Every visit is
  someone's first visit.
- **Phone-first, often on a slow connection.** One-handed use is the default posture.
- **Frequently anxious.** A meaningful share arrive mid-decision about an emergency, a scheduled
  procedure, or whether they can afford care at all.
- **Bilingual in practice.** English and Tagalog, mixed as Taglish in the same sentence.
- **A large senior and PWD cohort**, entitled by Philippine law to a 20% discount and VAT exemption,
  and correspondingly likely to have presbyopia, tremor, or low digital confidence.

The jobs, in the order the research says they matter: reach the ER · find a doctor and their clinic
day · check whether an HMO is accredited and what to bring · learn admission requirements · get
directions · reach a human.

## Product Purpose

United Antipolo Specialists Hospital and Medical Center opened in 2025 and **has no website at
all.** Its entire owned digital presence is a Facebook page and an Instagram account with roughly
33 followers. A patient searching "cardiologist Antipolo" cannot currently find the hospital through
any channel the hospital controls; third-party directories carry fragmented and partly inaccurate
information in its place.

This product is the hospital's digital front door: the first surface it owns, the first place its
own facts are authoritative, and the first channel where a patient can get a real answer without
being pushed into Messenger.

Success is not visual approval. Success is: a patient in Antipolo finds the right clinic and the
right clinic day without phoning; a patient knows before travelling whether their HMO is accredited
and what to bring; and no one is ever told something the hospital has not confirmed.

## Brand Personality

**Calm, specific, unembarrassed.**

- **Calm** — the reader may be frightened. The interface never adds urgency it did not find. Red is
  reserved for genuine emergencies and nothing else.
- **Specific** — plain Philippine English, short sentences, the patient's word before the clinical
  one. "Gallstone surgery" then "cholecystectomy". Never a superlative, never "world-class".
- **Unembarrassed** — a new hospital with gaps says so. Publishing what is not yet known, in plain
  sight, is the credibility play. Hedging is the failure.

The emotional target is _relief_: the feeling of having found the one page that actually answers the
question.

## Anti-references

Sourced from a field survey of eleven Philippine hospital websites in `research/ph-hospital-sites.md`.
These are named, verified failures to design against, not generic cautions.

- **Prices and packages locked inside images, PDFs and spreadsheets.** Antipolo Doctors Hospital
  serves OPD pricing as a SharePoint `.xlsx` and its packages as images with the peso figures baked
  into the pixels. Unsearchable, unquotable, invisible to a screen reader. Everything here ships as
  real HTML text.
- **Logo walls instead of information.** FUMC and ADH present accredited HMOs as a grid of logos with
  no names as text and no guidance. Cardinal Santos lists 47 HMOs with two contradictory LOA
  extension numbers on the same page. MakatiMed duplicates one provider four times.
- **Chat that ejects the patient to Facebook.** Not one hospital in the sample has real on-site chat.
  The state of the art is a Messenger deep link, including Asian Hospital's branded "AI assistant",
  which is an `m.me/` URL.
- **Directories that dead-end.** The Medical City's find-a-doctor renders client-side and is
  invisible to search engines. MVMC's timed out twice in a real browser. ADH has no search at all.
- **Emergency treated as a page rather than a phone number.** Most publish a trunkline and bury the
  ER as one facility tile among eleven.
- **Organisation by org chart.** Institutes, Centers, Departments. Nobody organises by what the
  patient came to do.
- **Estates fragmented across hostnames and third-party forms.** Four hostnames and a Zoho form is
  normal here. Every hand-off is a trust drop.

Aesthetically: not the international-hospital template (stock photography of smiling clinicians,
blue gradients, "Excellence in Healthcare" over a lens flare). Not a SaaS dashboard. Not a startup
landing page with a hero metric.

## Design Principles

1. **Provenance over polish.** Every claim about the hospital carries a visible source state:
   confirmed by UASHMC, plausible but unconfirmed, or our placeholder. A page that admits what it
   does not know is more trustworthy than a page that reads smoothly. This constraint outranks
   visual preference and is never traded away for a cleaner comp.

2. **Organise by intent, not by org chart.** The homepage answers "what did you come here to do",
   not "here is how the hospital is structured". The site's information architecture and the
   assistant's skill list are the same artifact.

3. **The emergency path is never more than one tap away.** On every page, at every breakpoint, in
   every state. It is not a nav item and cannot be collapsed into a menu.

4. **Refuse rather than guess.** The assistant, the HMO checker and the content all decline to
   answer beyond what is confirmed, and hand off to a named human instead. A plausible invented
   answer is the worst failure this product can produce.

5. **Small is an advantage.** A complete, photographed, bookable roster of a few dozen doctors beats
   a 245-page phone list. Depth on what exists, silence on what does not.

## Accessibility & Inclusion

- **Target: WCAG 2.2 Level AA**, verified by tooling rather than asserted. The build currently
  passes `axe-core` (WCAG 2.0/2.1/2.2 A+AA) with zero violations across all routes, and has zero
  interactive targets under the 24x24px minimum of §2.5.8.
- **Seniors and PWDs are a primary cohort, not an edge case.** 16px is the body-copy floor. Targets
  are generous well beyond the accessibility minimum. Statutory discount information is stated
  plainly.
- **Reduced motion is fully honoured.** Parallax, typing indicators and auto-scroll disable
  outright under `prefers-reduced-motion`, not merely shorten.
- **Bilingual.** Tagalog and Taglish are first-class in the assistant and in search matching, with
  `lang` marked correctly for screen readers.
- **Degrades on a slow connection.** The page must be readable before webfonts arrive; no content
  depends on script or on scroll effects to be revealed.
- **Distress routing is a safety requirement.** Language suggesting self-harm is screened ahead of
  everything else and routed to the national crisis line, never to the hospital's ER.
