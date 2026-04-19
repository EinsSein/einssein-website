import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-[var(--dash)]/50 bg-[var(--support-100)]">
      <div className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={images.logo}
                alt="EinsSein e.V."
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="t-menu font-semibold tracking-tight">
                EinsSein <span className="text-[var(--support-120)]">e.V.</span>
              </span>
            </Link>
            <p className="t-body-14 mt-5 max-w-sm text-[var(--support-120)]">
              In Vielfalt vereint für eine bessere Zukunft. Begegnung, Bildung
              und Engagement in Heilsberg – Bad Vilbel.
            </p>
          </div>

          <FooterCol
            title="Verein"
            links={[
              { href: "/ueber-uns", label: "Über uns" },
              { href: "#projekte", label: "Projekte" },
              { href: "/kontakt", label: "Kontakt" },
            ]}
          />
          <FooterCol
            title="Mitmachen"
            links={[
              { href: "/sommercamp", label: "Sommercamp" },
              { href: "/helfer", label: "Helfer:in werden" },
              { href: "/unterstuetzen", label: "Unterstützen" },
            ]}
          />
          <FooterCol
            title="Folgen"
            links={[
              {
                href: "https://www.instagram.com/einssein.bv",
                label: "Instagram",
                external: true,
              },
              {
                href: "https://youtube.com/@einssein-bv",
                label: "YouTube",
                external: true,
              },
            ]}
          />
        </div>

        <div className="t-body-14 mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--dash)]/60 pt-6 text-[var(--support-120)] md:flex-row md:items-center">
          <p>© 2026 EinsSein e.V. – Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="hover:text-[var(--text)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[var(--text)]">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="t-badge uppercase tracking-[0.18em] text-[var(--support-120)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="t-body-16 text-[var(--text)] transition-colors hover:text-[var(--support-120)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
