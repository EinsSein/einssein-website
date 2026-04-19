import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    title: "Begegnen",
    body: "Wir hören zu. In Gesprächen mit Kindern, Jugendlichen und Eltern erkennen wir Bedürfnisse.",
    icon: images.gradientSilk,
    color: "var(--support-400)",
  },
  {
    title: "Gestalten",
    body: "Wir entwickeln Programme – Camps, Kinderklassen und Juniorgruppen – mit klarer pädagogischer Ausrichtung.",
    icon: images.gradientShapes,
    color: "var(--support-200)",
  },
  {
    title: "Erleben",
    body: "Gemeinschaft, Freundschaft und Verantwortung werden praktisch erfahren.",
    icon: images.gradientBubble,
    color: "var(--support-300)",
  },
  {
    title: "Wachsen",
    body: "Reflexion, Dienstprojekte und persönliche Entwicklung stehen im Mittelpunkt.",
    icon: images.partnerExtra8,
    color: "var(--support-500)",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-3xl">
          <p className="t-badge uppercase tracking-[0.18em] text-[var(--support-120)]">
            Unser Weg
          </p>
          <h2 className="t-h2 mt-3 font-serif">
            Von der Idee zur Gemeinschaft
          </h2>
          <p className="t-body-18 mt-5 max-w-xl text-[var(--support-120)]">
            Wie wir Jugendprojekte planen, begleiten und nachhaltig Wirkung
            entfalten.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="card-hover relative overflow-hidden rounded-[24px] border border-[var(--dash)]/50 bg-[var(--wrapped-fill)] p-6"
            >
              <div
                className="relative h-28 w-full overflow-hidden rounded-2xl"
                style={{ backgroundColor: s.color }}
              >
                <Image
                  src={s.icon}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--text)] text-[12px] font-semibold text-[var(--background)]">
                  {i + 1}
                </span>
                <h3 className="t-h5 font-serif">{s.title}</h3>
              </div>
              <p className="t-body-16 mt-3 text-[var(--support-120)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
