import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { controls, stages } from "@/lib/content";

export const metadata: Metadata = {
  title: "How we deliver",
  description:
    "Limatel takes a cable route from survey and civil works through laying, testing, commissioning and maintenance.",
};

export default function HowWeDeliverPage() {
  return (
    <>
      <PageHeading
        eyebrow="How we deliver"
        title="From the peg to the last test."
        image="/services/maintenance.jpg"
      >
        <p>
          A job moves through the same sequence, whether it is a new intercity fibre route or a
          chamber that needs opening. Each stage is checked against the client’s specification, with
          field safety supervision and a record of tests and handover.
        </p>
      </PageHeading>
      <section className="px-6 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-[1120px] rounded-[28px] bg-white px-6 py-12 sm:px-12 sm:py-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">On every job</p>
            <h2 className="display mt-4 max-w-xl text-4xl leading-[1.05]">
              The sequence stays. So does the standard.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
              A new intercity fibre route and a chamber that needs opening go through the same
              checks. The size of the job does not change what has to be true before the crew leaves.
            </p>
            <ul className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {controls.map((item) => (
                <li key={item.title}>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="mt-16 bg-ink text-paper lg:mt-24">
        <div className="px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="relative">
              <div className="route-rule absolute top-[7px] right-0 left-0 hidden h-px bg-peri/80 lg:block" />
              <ol className="stagger grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
                {stages.map((stage, index) => (
                  <li key={stage.title} style={{ transitionDelay: `${140 + index * 90}ms` }}>
                    <span className="relative z-10 grid h-4 w-4 place-items-center rounded-full bg-ink ring-1 ring-peri">
                      <span className="h-1.5 w-1.5 rounded-full bg-peri" />
                    </span>
                    <h2 className="mt-5 font-serif text-2xl">{stage.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-paper/65">{stage.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <Link
              href="/contact"
              className="link-arrow mt-16 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm text-ink"
            >
              Start with a survey
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        </div>
      </section>
    </>
  );
}
