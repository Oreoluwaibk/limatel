import { Reveal } from "./reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">Testimonials</p>
              <h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">Words from the route.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-ink/60">
              Placeholders for now. Each card will be replaced when a real quote, name and company
              arrive.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.slot}
                className="flex min-h-72 flex-col rounded-[24px] border border-dashed border-peri/70 bg-sand/70 p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-peri-deep">
                  Placeholder {item.slot}
                </p>
                <blockquote className="mt-5 font-serif text-[1.45rem] italic leading-snug text-ink/80">
                  “{item.quote}”
                </blockquote>
                <div className="mt-auto pt-8">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-ink/50">{item.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
