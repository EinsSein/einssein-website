import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-black/5 bg-[var(--bg-soft)]">
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
              <span className="text-[16px] font-semibold tracking-tight">
                EinsSein <span className="text-[var(--fg-muted)]">e.V.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[var(--fg-muted)]">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-6 text-[13px] text-[var(--fg-muted)] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} EinsSein e.V. – Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="hover:text-[var(--fg)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[var(--fg)]">
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
      <h4 className="text-[13px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-[14.5px] text-[var(--fg)] transition-colors hover:text-[var(--fg-muted)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
