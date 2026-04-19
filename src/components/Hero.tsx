import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120%]"
        style={{ background: "var(--hero-gradient)", opacity: 0.95 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, var(--bg) 100%)",
        }}
      />

      <div className="mx-auto flex max-w-[1180px] flex-col items-center px-6 text-center">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[13px] text-[var(--fg-muted)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Heilsberg – Bad Vilbel
        </span>

        <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--fg)] sm:text-[64px] md:text-[88px]">
          In Vielfalt vereint
          <br />
          für eine{" "}
          <span className="italic">
            <span className="font-script text-[1.15em] leading-[0.7] align-[-0.1em]">
              bessere
            </span>
          </span>{" "}
          Zukunft!
        </h1>

        <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-[var(--fg-muted)] md:text-[18px]">
          Willkommen bei EinsSein e.V. – wir stärken ein wertschätzendes und
          lebendiges Miteinander in unserer Nachbarschaft und verbinden Menschen
          – unabhängig von Herkunft oder Hintergrund.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/sommercamp/kleine-taten-grosse-wirkung-2026"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-[15px] font-medium text-[var(--accent-foreground)] transition-transform hover:scale-[1.02]"
          >
            Zum Sommercamp 2026
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/helfer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3.5 text-[15px] font-medium text-[var(--fg)] backdrop-blur transition-colors hover:bg-white"
          >
            Dabei sein als Helfer
          </Link>
        </div>

        <div className="mt-16 w-full overflow-hidden rounded-[28px] border border-black/5 bg-white/40 shadow-[0_40px_120px_-40px_rgba(20,20,20,0.35)] md:mt-20">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={images.hero}
              alt="EinsSein Sommercamp – Lagerfeuer in Heilsberg, Bad Vilbel"
              fill
              priority
              sizes="(min-width: 1180px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
