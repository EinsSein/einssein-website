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
    image: images.campTents,
    accent: "bg-[#fff3e1]",
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
    image: images.activityDance,
    accent: "bg-[#e9f1eb]",
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
    image: images.activityGarden,
    accent: "bg-[#eef0f6]",
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
            <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
              Unsere Arbeit
            </p>
            <h2 className="mt-3 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[60px]">
              Was wir machen
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-[var(--fg-muted)]">
            Überblick unserer Projekte und Veranstaltungen – mit Herz, Haltung
            und langfristiger Wirkung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[var(--bg-card)]"
            >
              <div className={`relative aspect-[4/3] w-full ${p.accent}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-[var(--fg)] backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-[24px] leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--fg-muted)]">
                  {p.description}
                </p>
                <dl className="mt-5 grid grid-cols-1 gap-2 text-[13px] text-[var(--fg-muted)]">
                  <div className="flex items-center gap-2">
                    <Dot />
                    <dt className="sr-only">Wann</dt>
                    <dd>{p.when}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dot />
                    <dt className="sr-only">Wo</dt>
                    <dd>{p.where}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex-1" />
                <Link
                  href={p.href}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-[14px] font-medium text-[var(--accent-foreground)] transition-transform group-hover:translate-x-0.5"
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
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/sommercamp"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[14px] font-medium text-[var(--fg)] transition-colors hover:bg-black/5"
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

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg-soft)]" />;
}
