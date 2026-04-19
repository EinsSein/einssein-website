import type { Metadata } from "next";
import { Hanken_Grotesk, Lustria, Allison } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lustria = Lustria({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const allison = Allison({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://einssein.de"),
  title: "EinsSein e.V. – In Vielfalt vereint für eine bessere Zukunft",
  description:
    "EinsSein e.V. stärkt ein wertschätzendes und lebendiges Miteinander in der Nachbarschaft Heilsberg – Bad Vilbel und verbindet Menschen unabhängig von Herkunft oder Hintergrund.",
  openGraph: {
    title: "EinsSein e.V. – In Vielfalt vereint für eine bessere Zukunft",
    description:
      "Sommercamps, Kinder- und Jugendangebote sowie Nachbarschaftsprojekte in Bad Vilbel.",
    url: "https://einssein.de",
    siteName: "EinsSein e.V.",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: "/images/logo-einssein.png",
    apple: "/images/logo-einssein.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${hankenGrotesk.variable} ${lustria.variable} ${allison.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
