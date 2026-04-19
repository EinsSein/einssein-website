import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative isolate pt-32 pb-12 md:pt-36 md:pb-16">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center px-6 text-center">
        <span className="t-badge mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--dash)] bg-[var(--wrapped-fill)] px-4 py-1.5 text-[var(--support-120)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--support-330)]" />
          Heilsberg – Bad Vilbel
        </span>

        <h1 className="t-h1 font-serif text-[var(--text)]">
          In Vielfalt vereint
          <br />
          für eine{" "}
          <span className="font-script text-[1.45em] leading-[0.55] text-[var(--support-510)] align-[-0.18em]">
            bessere
          </span>{" "}
          Zukunft!
        </h1>

        <p className="t-body-18 mt-7 max-w-2xl text-[var(--support-120)]">
          Willkommen bei EinsSein e.V. – wir stärken ein wertschätzendes und
          lebendiges Miteinander in unserer Nachbarschaft und verbinden Menschen
          – unabhängig von Herkunft oder Hintergrund.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/sommercamp/kleine-taten-grosse-wirkung-2026"
            className="t-menu group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3.5 font-medium text-[var(--background)] transition-transform hover:scale-[1.02]"
          >
            Zum Sommercamp 2026
            <Arrow />
          </Link>
          <Link
            href="/helfer"
            className="t-menu inline-flex items-center gap-2 rounded-full border border-[var(--dash)] bg-[var(--wrapped-fill)] px-6 py-3.5 font-medium text-[var(--text)] transition-colors hover:bg-[var(--support-100)]"
          >
            Dabei sein als Helfer
          </Link>
        </div>

        <div className="mt-14 w-full overflow-hidden rounded-[28px] border border-[var(--dash)]/60 bg-[var(--wrapped-fill)] shadow-[0_30px_80px_-40px_rgba(17,16,17,0.25)] md:mt-16">
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

function Arrow() {
  return (
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
  );
}
