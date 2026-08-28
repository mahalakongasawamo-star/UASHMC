import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

// Ported from the pitch-kit prototype's DOCS array. `verifiedFields` mirrors the
// prototype's `v: {}` object — the field is real when UASHMC's own poster states
// it, and left blank in the UI otherwise. Never fill a blank in with a guess.
const doctors = defineCollection({
  loader: file("src/content/doctors.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    specialty: z.string(),
    note: z.string(),
    clinicDays: z.array(z.string()),
    clinicTime: z.string(),
    room: z.string(),
    hmos: z.array(z.string()),
    photoSlug: z.string(),
    verifiedFields: z.array(
      z.enum(["name", "specialty", "note", "clinicDays", "clinicTime", "room", "hmos"]),
    ),
  }),
});

// Ported from the pitch-kit prototype's FAQ array. One source feeding this page,
// the inline mini-FAQ blocks, and (once KRISS is built here) the assistant's
// knowledge base — see design guidelines §4.8 and §10.4. `pat` is kept as a plain
// regex-source string (all patterns use the "i" flag) so KRISS can reconstruct it
// with `new RegExp(pat, "i")` later without a second content migration.
const faq = defineCollection({
  loader: file("src/content/faq.json"),
  schema: z.object({
    id: z.string(),
    group: z.enum([
      "About",
      "Doctors",
      "Services",
      "Cost",
      "Admission",
      "Emergency",
      "Getting here",
      "Other",
    ]),
    src: z.enum(["verified", "confirm", "sample"]),
    kb: z.boolean(),
    kbpri: z.number().optional(),
    pat: z.string().optional(),
    checked: z.boolean().optional(),
    question: z.string(),
    answer: z.string(), // HTML string, rendered with set:html — matches the prototype's `a` field
    acts: z.array(z.tuple([z.string(), z.string(), z.string()])).optional(),
  }),
});

// Ported from the pitch-kit prototype's /services page. That page was hand-authored
// HTML, not an array, so this is a genuine restructuring rather than a like-for-like
// port — but every value below is transcribed unchanged from the prototype's real,
// already-vetted copy. Nothing here was invented for this migration.
const services = defineCollection({
  loader: file("src/content/services.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(["Diagnostics", "Surgery", "Maternity", "Emergency and online"]),
    src: z.enum(["verified", "confirm", "sample"]),
    summary: z.string(),
    contact: z.string().optional(),
    priceChecked: z.boolean().optional(),
    priceNote: z.string().optional(),
    priceTable: z
      .array(z.object({ package: z.string(), smallPrivate: z.string(), semiPrivate: z.string() }))
      .optional(),
    isUrgent: z.boolean().optional(),
  }),
});

export const collections = { doctors, faq, services };
