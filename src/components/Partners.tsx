import Image from "next/image";
import { images } from "@/lib/images";

const partners = [
  {
    name: "SSV Heilsberg",
    logo: images.partnerSsv,
    href: "https://www.ssvheilsberg.de/",
    note: "Stellt den Sportplatz für Übernachtungen.",
  },
  {
    name: "Stadt Bad Vilbel",
    logo: images.partnerStadt,
    href: "https://www.bad-vilbel.de/",
    note: "Unterstützung der Stadt Bad Vilbel.",
  },
  {
    name: "Familienzentrum Quellenpark",
    logo: images.partnerFamilienzentrum,
    href: "https://www.familienzentrum-quellenpark.de/",
    note: "Edelstein Kids und weitere Projekte.",
  },
  {
    name: "Bahá'í Bad Vilbel",
    logo: images.partnerBahai,
    href: "https://bad-vilbel.bahai.de/",
    note: "Die Bahá'í Gemeinde unterstützt den Verein.",
  },
  {
    name: "Feuerwehr Heilsberg",
    logo: images.partnerFeuerwehr,
    href: "https://www.ffw-badvilbel.de/",
    note: "Sicherheitspartner der Camps.",
  },
  {
    name: "People's Theater e.V.",
    logo: images.partnerPeoplesTheater,
    href: "https://www.peoples-theater.de/",
    note: "Pädagogische Theaterarbeit.",
  },
];

export default function Partners() {
  const items = [...partners, ...partners];

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="text-center text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
          Unsere Partnerschaften
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div className="flex w-max gap-4 animate-marquee">
          {items.map((p, idx) => (
            <a
              key={`${p.name}-${idx}`}
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-[88px] w-[300px] shrink-0 items-center gap-4 rounded-2xl border border-black/5 bg-white/70 px-5 backdrop-blur transition-colors hover:bg-white"
              title={p.name}
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[14px] font-medium text-[var(--fg)]">
                  {p.name}
                </div>
                <div className="truncate text-[12.5px] text-[var(--fg-muted)]">
                  {p.note}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
