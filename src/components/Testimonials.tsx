import Image from "next/image";
import { images } from "@/lib/images";

const quotes = [
  {
    quote:
      "„Betrachte den Menschen als ein Bergwerk, reich an Edelsteinen von unschätzbarem Wert.“",
    author: "Bahá'u'lláh",
    role: "Ährenlese 122:1",
    image: images.gradientBubble,
    surface: "var(--support-200)",
  },
  {
    quote:
      "„Die Camps sind das Highlight des Jahres – für die Kinder, die Jugendlichen und alle, die mitwirken.“",
    author: "Helferteam",
    role: "Sommercamp Heilsberg",
    image: images.gradientShapes,
    surface: "var(--support-500)",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.author}
              className="card-hover relative overflow-hidden rounded-[28px] border border-[var(--dash)]/50 bg-[var(--wrapped-fill)] p-8 md:p-10"
            >
              <div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-60 blur-2xl"
                style={{ backgroundColor: q.surface }}
              />
              <div className="relative">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-6 text-[var(--support-120)]"
                >
                  <path
                    d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6.83H4.5A2.67 2.67 0 0 1 7.17 8.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6v-6.83h-3.5A2.67 2.67 0 0 1 17.17 8.5V6Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="t-quote font-serif text-[var(--text)]">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center overflow-hidden rounded-full"
                    style={{ backgroundColor: q.surface }}
                  >
                    <Image
                      src={q.image}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 object-cover"
                    />
                  </span>
                  <span>
                    <span className="t-body-14 block font-medium text-[var(--text)]">
                      {q.author}
                    </span>
                    <span className="t-body-14 block text-[var(--support-120)]">
                      {q.role}
                    </span>
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
