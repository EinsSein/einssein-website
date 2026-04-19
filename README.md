# EinsSein e.V. – Website

Nachbau der bisherigen Framer-Seite [einssein.framer.website](https://einssein.framer.website/) als eigenständige Next.js-Anwendung. Die Seite ist für Vercel optimiert und kann mit einer Custom Domain verbunden werden.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- `next/font` für Hanken Grotesk, Lustria, Allison

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft danach unter [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx        # Root Layout, Fonts, Metadata
│   ├── page.tsx          # Startseite – komponiert alle Sections
│   └── globals.css       # Globale Styles & Designtokens
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx
│   ├── Projects.tsx
│   ├── CalendarSection.tsx
│   ├── InstagramSection.tsx
│   ├── Process.tsx
│   ├── Stats.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
└── lib/
    └── images.ts         # Zentrale Bild-Pfade
public/
└── images/               # Alle aus Framer übernommenen Assets + Logo
```

## Deployment auf Vercel

1. Repository zu GitHub pushen (siehe unten).
2. Auf [vercel.com/new](https://vercel.com/new) das Repo importieren – Vercel erkennt Next.js automatisch.
3. Deployment ohne weitere Konfiguration starten.
4. Unter **Settings → Domains** die eigene Domain (z. B. `einssein.de`) hinzufügen und die DNS-Records gemäß Vercel-Anleitung beim Domain-Provider eintragen.

## Inhalte anpassen

- **Texte / Daten:** Direkt in den jeweiligen Komponenten (`src/components/*.tsx`).
- **Bilder:** Neue Dateien in `public/images/` ablegen und in `src/lib/images.ts` referenzieren.
- **Kalender:** In `CalendarSection.tsx` die Demo-`src` durch die Embed-URL des echten Google-Kalenders ersetzen.
- **Instagram:** In `InstagramSection.tsx` den Account/Verlinkung anpassen oder durch ein offizielles Embed-Widget ersetzen.

## TODO / nächste Schritte

- Unterseiten anlegen (`/ueber-uns`, `/kontakt`, `/sommercamp`, `/unterstuetzen`).
- Echte Inhalte / Texte gegenlesen und ersetzen.
- Impressum & Datenschutz ergänzen.
- Eigenes Open-Graph-Bild unter `/public/images/` hinterlegen und in `layout.tsx` verlinken.
