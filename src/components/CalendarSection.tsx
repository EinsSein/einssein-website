export default function CalendarSection() {
  return (
    <section id="kalender" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="t-badge uppercase tracking-[0.18em] text-[var(--support-120)]">
              Termine
            </p>
            <h2 className="t-h2 mt-3 font-serif">Aktivitäten Kalender</h2>
          </div>
          <p className="t-body-18 max-w-md text-[var(--support-120)]">
            Alle Treffen, Camps und Veranstaltungen auf einen Blick.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--dash)]/50 bg-[var(--wrapped-fill)]">
          <iframe
            title="EinsSein Aktivitäten Kalender"
            src="https://calendar.google.com/calendar/embed?src=de.german%23holiday%40group.v.calendar.google.com&ctz=Europe%2FBerlin&mode=AGENDA&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTabs=0&bgcolor=%23F9F7F6"
            className="block h-[600px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="t-body-14 mt-3 text-center text-[var(--support-120)]">
          Demo-Kalender. In{" "}
          <code className="font-mono">src/components/CalendarSection.tsx</code>{" "}
          die Embed-URL des echten Google-Kalenders eintragen.
        </p>
      </div>
    </section>
  );
}
