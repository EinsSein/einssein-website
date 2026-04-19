export default function CalendarSection() {
  return (
    <section id="kalender" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
              Termine
            </p>
            <h2 className="mt-3 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[60px]">
              Aktivitäten Kalender
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-[var(--fg-muted)]">
            Alle Treffen, Camps und Veranstaltungen auf einen Blick.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/5 bg-[var(--bg-card)]">
          <iframe
            title="EinsSein Aktivitäten Kalender"
            src="https://calendar.google.com/calendar/embed?src=de.german%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBerlin&mode=AGENDA&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTabs=0&bgcolor=%23ffffff"
            className="block h-[600px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-3 text-center text-[12.5px] text-[var(--fg-soft)]">
          Hinweis: Hier wird aktuell ein Demo-Kalender eingebettet. Der
          EinsSein-Kalender kann in <code>src/components/CalendarSection.tsx</code>
          {" "}durch die echte Google-Calendar-URL ersetzt werden.
        </p>
      </div>
    </section>
  );
}
