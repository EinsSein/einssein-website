import Image from "next/image";
import { images } from "@/lib/images";

const stats = [
  { value: "600+", label: "Teilnehmende in den letzten Camps" },
  { value: "8", label: "Jahre engagierte Vereinsarbeit" },
  { value: "40+", label: "Helferinnen und Helfer pro Camp" },
  { value: "12", label: "Programme im Jahr" },
];

const tags = [
  "Sommercamps",
  "Kinderklassen",
  "Juniorgruppen",
  "Nachbarschaft",
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-[var(--bg-card)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12">
              <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                Wirkung
              </p>
              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[44px] md:text-[52px]">
                Aus kleinen Taten wird große Wirkung
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--fg-muted)]">
                Wir bringen Menschen zusammen – mit Programmen, die Kindern und
                Jugendlichen Raum zum Wachsen geben und unsere Nachbarschaft
                lebendig halten.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 bg-[var(--bg-soft)] px-3.5 py-1.5 text-[13px] text-[var(--fg)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-serif text-[40px] leading-none tracking-[-0.02em] sm:text-[48px]">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-[13.5px] text-[var(--fg-muted)]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src={images.activityTheater}
                alt="EinsSein Veranstaltung – People's Theater"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
