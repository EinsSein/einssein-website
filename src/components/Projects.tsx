import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const projects = [
  {
    tag: "Camp",
    title: "Sommercamps – Bad Vilbel",
    description:
      "Mehrtägige Camps voller Begegnung, Spiel, Sport und gemeinsamer Reflexion – getragen von einem starken Team aus Jugendlichen und Eltern.",
    when: "Frohnleichnam Feiertage",
    where: "Sportgelände SSV Heilsberg – Bad Vilbel",
    image: images.gradientBubble,
    photo: images.campTents,
    palette: {
      surface: "var(--support-200)",
      tint: "var(--support-220)",
      ink: "var(--support-230)",
    },
    href: "/sommercamp",
    cta: "Ansehen",
  },
  {
    tag: "Programm",
    title: "Kinder- und Jugendangebote",
    description:
      "Wöchentliche Klassen, Junior-Gruppen und Begegnungsräume, die Kinder und Jugendliche begleiten – mit klarer pädagogischer Haltung.",
    when: "Ganzjährig",
    where: "Familienzentrum Quellenpark & Heilsberg",
    image: images.gradientShapes,
    photo: images.activityDance,
    palette: {
      surface: "var(--support-300)",
      tint: "var(--support-320)",
      ink: "var(--support-330)",
    },
    href: "/jugendangebote",
    cta: "Ansehen",
  },
  {
    tag: "Nachbarschaft",
    title: "Nachbarschaftsprojekte",
    description:
      "Gemeinsame Aktionen, die das Miteinander stärken: Garten, Theater, Feste und Dienstprojekte – von Menschen für Menschen.",
    when: "Über das Jahr verteilt",
    where: "Heilsberg & Bad Vilbel",
    image: images.gradientSilk,
    photo: images.activityGarden,
    palette: {
      surface: "var(--support-400)",
      tint: "var(--support-420)",
      ink: "var(--support-430)",
    },
    href: "/nachbarschaft",
    cta: "Ansehen",
  },
];

export default function Projects() {
  return (
    <section id="projekte" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="t-badge uppercase tracking-[0.18em] text-[var(--support-120)]">
              Unsere Arbeit
            </p>
            <h2 className="t-h2 mt-3 font-serif">Was wir machen</h2>
          </div>
          <p className="t-body-18 max-w-md text-[var(--support-120)]">
            Überblick unserer Projekte und Veranstaltungen – mit Herz, Haltung
            und langfristiger Wirkung.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group relative grid grid-cols-1 overflow-hidden rounded-[28px] border border-[var(--dash)]/50 md:grid-cols-[1.4fr_1fr]"
              style={{ backgroundColor: p.palette.surface }}
            >
              <div className="flex flex-col p-7 md:p-10">
                <span
                  className="t-badge inline-flex w-fit items-center rounded-full bg-[var(--wrapped-fill)] px-3 py-1 font-medium"
                  style={{ color: p.palette.ink }}
                >
                  {p.tag}
                </span>
                <h3 className="t-h3 mt-5 font-serif text-[var(--text)]">
                  {p.title}
                </h3>
                <p className="t-body-16 mt-3 max-w-md text-[var(--text)]/80">
                  {p.description}
                </p>
                <dl className="t-body-14 mt-6 grid grid-cols-1 gap-2 text-[var(--text)]/70">
                  <div className="flex items-center gap-2">
                    <Dot color={p.palette.ink} />
                    <dt className="sr-only">Wann</dt>
                    <dd>{p.when}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dot color={p.palette.ink} />
                    <dt className="sr-only">Wo</dt>
                    <dd>{p.where}</dd>
                  </div>
                </dl>
                <div className="flex-1" />
                <Link
                  href={p.href}
                  className="t-menu mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--text)] px-5 py-2.5 font-medium text-[var(--background)] transition-transform group-hover:translate-x-0.5"
                >
                  {p.cta}
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

              <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[340px]">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/sommercamp"
            className="t-menu inline-flex items-center gap-2 rounded-full border border-[var(--dash)] bg-[var(--wrapped-fill)] px-6 py-3 font-medium text-[var(--text)] transition-colors hover:bg-[var(--support-100)]"
          >
            Mehr ansehen
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
      </div>
    </section>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}
