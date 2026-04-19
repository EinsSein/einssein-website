const faqs = [
  {
    q: "Wie kann ich als Helferin oder Helfer zu den Sommercamps beitragen?",
    a: "Das Sommercamp von EinsSein e.V. lebt von Gemeinschaft und freiwilligem Engagement. Du kannst dich als Helferin oder Helfer einbringen – bei der Betreuung, Organisation oder im Hintergrund. Auch Essensbeiträge, Materialspenden oder finanzielle Unterstützung helfen, dass das Camp ein besonderes Erlebnis wird. Schreib uns gerne über das Kontaktformular und wir finden gemeinsam, wo dein Beitrag passt.",
  },
  {
    q: "Für welches Alter sind die Camps und Programme gedacht?",
    a: "Die Sommercamps richten sich an Kinder und Jugendliche im Alter von etwa 6 bis 16 Jahren. Daneben gibt es Kinderklassen und Juniorgruppen, die sich altersspezifisch über das ganze Jahr treffen.",
  },
  {
    q: "Was kostet die Teilnahme – und gibt es Unterstützung?",
    a: "Wir halten die Teilnahmebeiträge bewusst niedrig und bieten auf Anfrage eine geförderte Teilnahme an, damit niemand aus finanziellen Gründen ausgeschlossen ist. Sprich uns einfach vertraulich an.",
  },
  {
    q: "Wie kann ich EinsSein e.V. finanziell unterstützen?",
    a: "Du kannst uns über eine direkte Spende oder eine regelmäßige Förderung unterstützen. Spendenquittungen stellen wir gerne aus. Details findest du auf der Seite „Unterstützen“.",
  },
  {
    q: "Wo finden die Veranstaltungen statt?",
    a: "Die meisten Programme finden in Bad Vilbel statt – insbesondere am Sportgelände des SSV Heilsberg sowie im Familienzentrum Quellenpark. Genaue Orte stehen jeweils in der Einladung.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
              Häufige Fragen
            </p>
            <h2 className="mt-3 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[60px]">
              FAQ
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[var(--fg-muted)]">
              Antworten auf die häufigsten Fragen zu unseren Camps, Programmen
              und der Mitarbeit. Du findest deine Frage nicht? Schreib uns!
            </p>
          </div>

          <div className="divide-y divide-black/10 rounded-[24px] border border-black/5 bg-[var(--bg-card)]">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5 md:px-8">
                <summary className="flex items-center justify-between gap-6 text-left">
                  <span className="text-[16px] font-medium text-[var(--fg)] md:text-[17px]">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--bg-soft)] transition-transform group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--fg-muted)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
