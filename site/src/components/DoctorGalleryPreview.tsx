import { ExpandableGallery } from "@/components/ui/gallery-animation";
import { DOCTOR_PHOTOS } from "@/data/doctor-photos";

// Thin wrapper around the pasted-verbatim ExpandableGallery (gallery-animation.tsx),
// driven by UASHMC's real doctor photos instead of the component's stock Unsplash
// demo images, plus a name/specialty legend since the gallery itself has no
// captions. Nothing in gallery-animation.tsx was changed to make this work.
export default function DoctorGalleryPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <ExpandableGallery images={DOCTOR_PHOTOS.map((d) => d.src)} />
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-600 dark:text-neutral-300">
        {DOCTOR_PHOTOS.map((d, i) => (
          <li key={d.slug}>
            <span className="font-semibold text-neutral-900 dark:text-white">
              {i + 1}. {d.name}
            </span>{" "}
            — {d.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}
