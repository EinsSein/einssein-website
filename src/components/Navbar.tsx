"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";

const links = [
  { href: "#projekte", label: "Projekte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "w-[min(96%,1100px)]" : "w-[min(96%,1180px)]"
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-6 rounded-full border border-black/5 px-3 py-2 backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "bg-white/80 shadow-[0_8px_32px_-12px_rgba(20,20,20,0.18)]"
            : "bg-white/60"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 pl-1">
          <Image
            src={images.logo}
            alt="EinsSein e.V."
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
            EinsSein <span className="text-[var(--fg-muted)]">e.V.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-[14px] text-[var(--fg)] transition-colors hover:bg-black/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/unterstuetzen"
            className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-[14px] font-medium text-[var(--accent-foreground)] transition-transform hover:scale-[1.02] sm:inline-block"
          >
            Unterstützen!
          </Link>
          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-black/5 md:hidden"
          >
            <span className="sr-only">Menü</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-[var(--fg)]" />
              <span className="block h-0.5 w-4 bg-[var(--fg)]" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 rounded-3xl border border-black/5 bg-white/95 p-4 shadow-xl backdrop-blur md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[15px] hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/unterstuetzen"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-[15px] font-medium text-[var(--accent-foreground)]"
              >
                Unterstützen!
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
