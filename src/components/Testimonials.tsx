import Image from "next/image";
import { images } from "@/lib/images";

const quotes = [
  {
    quote:
      "„Betrachte den Menschen als ein Bergwerk, reich an Edelsteinen von unschätzbarem Wert.“",
    author: "Bahá'u'lláh",
    role: "Ährenlese 122:1",
    image: images.gradientBubble,
  },
  {
    quote:
      "„Die Camps sind das Highlight des Jahres – für die Kinder, die Jugendlichen und alle, die mitwirken.“",
    author: "Helferteam",
    role: "Sommercamp Heilsberg",
    image: images.gradientShapes,
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
              className="card-hover relative overflow-hidden rounded-[28px] border border-black/5 bg-[var(--bg-card)] p-8 md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-2xl">
                <Image
                  src={q.image}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-6 text-[var(--fg-soft)]"
              >
                <path
                  d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6.83H4.5A2.67 2.67 0 0 1 7.17 8.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6v-6.83h-3.5A2.67 2.67 0 0 1 17.17 8.5V6Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="font-serif text-[22px] leading-snug tracking-[-0.01em] sm:text-[26px]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--bg-soft)] text-[14px] font-semibold">
                  {q.author.slice(0, 1)}
                </span>
                <span>
                  <span className="block text-[14px] font-medium text-[var(--fg)]">
                    {q.author}
                  </span>
                  <span className="block text-[13px] text-[var(--fg-muted)]">
                    {q.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
