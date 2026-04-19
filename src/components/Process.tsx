import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    title: "Begegnen",
    body: "Wir hören zu. In Gesprächen mit Kindern, Jugendlichen und Eltern erkennen wir Bedürfnisse.",
    icon: images.gradientSilk,
  },
  {
    title: "Gestalten",
    body: "Wir entwickeln Programme – Camps, Kinderklassen und Juniorgruppen – mit klarer pädagogischer Ausrichtung.",
    icon: images.gradientShapes,
  },
  {
    title: "Erleben",
    body: "Gemeinschaft, Freundschaft und Verantwortung werden praktisch erfahren.",
    icon: images.gradientBubble,
  },
  {
    title: "Wachsen",
    body: "Reflexion, Dienstprojekte und persönliche Entwicklung stehen im Mittelpunkt.",
    icon: images.partnerExtra8,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-3xl">
          <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
            Unser Weg
          </p>
          <h2 className="mt-3 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[60px]">
            Von der Idee zur Gemeinschaft
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--fg-muted)]">
            Wie wir Jugendprojekte planen, begleiten und nachhaltig Wirkung
            entfalten.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="card-hover relative overflow-hidden rounded-[24px] border border-black/5 bg-[var(--bg-card)] p-6"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-2xl">
                <Image
                  src={s.icon}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--accent)] text-[12px] font-semibold text-[var(--accent-foreground)]">
                  {i + 1}
                </span>
                <h3 className="font-serif text-[22px] tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--fg-muted)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
