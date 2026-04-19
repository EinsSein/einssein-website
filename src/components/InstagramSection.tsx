import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const tiles = [
  images.activityDance,
  images.activityGarden,
  images.activityTheater,
  images.campTents,
  images.hero,
  images.gradientBubble,
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="t-badge uppercase tracking-[0.18em] text-[var(--support-120)]">
              @einssein.bv
            </p>
            <h2 className="t-h2 mt-3 font-serif">Instagram</h2>
          </div>
          <Link
            href="https://www.instagram.com/einssein.bv"
            target="_blank"
            rel="noreferrer noopener"
            className="t-menu inline-flex items-center gap-2 rounded-full border border-[var(--dash)] bg-[var(--wrapped-fill)] px-5 py-2.5 font-medium transition-colors hover:bg-[var(--support-100)]"
          >
            Auf Instagram folgen
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {tiles.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/einssein.bv"
              target="_blank"
              rel="noreferrer noopener"
              className="card-hover relative block aspect-square overflow-hidden rounded-2xl border border-[var(--dash)]/40 bg-[var(--wrapped-fill)]"
            >
              <Image
                src={src}
                alt={`EinsSein Instagram Beitrag ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 180px, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.05]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
