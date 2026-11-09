import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { company, specialty } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Limatel Nigeria Limited began in 1984 as Limatel Enterprises and was incorporated in 2002. The company builds and maintains telecommunications cable routes from Abule Egba, Lagos.",
};

const facts = [
  { label: "Began", value: `${company.formerName}, ${company.established}` },
  { label: "Incorporated", value: company.incorporated },
  { label: "Registration", value: `RC ${company.rc}` },
  { label: "Office", value: "Abule Egba, Lagos" },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHeading
        eyebrow="Who we are"
        title="The company that stays on the route."
        image="/services/expansion.jpg"
      >
        <p>
          Limatel is a telecommunications infrastructure company. Crews build the cable routes
          operators depend on, then stay with those routes for maintenance and restoration.
        </p>
      </PageHeading>
      <section className="px-6 pb-20 sm:px-12 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="grid gap-8 text-lg leading-8 text-ink/78 lg:grid-cols-12">
              <p className="lg:col-span-6">
                The work covers optical fibre, copper, coaxial and RF cable, the civil works around
                them, and the fault response that brings a cut route back into service. It runs
                underground, overhead and between cities.
              </p>
              <p className="lg:col-span-6">
                The business began in {company.established} as {company.formerName}. It was
                incorporated as {company.name} in {company.incorporated}. Direction sits with the
                office in Jibowu Estate, Abule Egba.
              </p>
            </div>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-ink/78">{company.positioning}</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/78">
              From a business history that dates to {company.established}, Limatel supports operators,
              infrastructure providers, government bodies and corporate organisations through dependable
              engineering, disciplined project execution and responsive network maintenance.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line lg:grid-cols-2">
              <div className="bg-white px-7 py-8 sm:px-10 sm:py-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">Mission</p>
                <p className="mt-4 font-serif text-2xl leading-snug sm:text-[1.7rem]">{company.mission}</p>
              </div>
              <div className="bg-sand px-7 py-8 sm:px-10 sm:py-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">Vision</p>
                <p className="mt-4 font-serif text-2xl leading-snug sm:text-[1.7rem]">{company.vision}</p>
              </div>
            </div>
            <div className="mt-14">
              <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">Specialty</p>
              <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {specialty.map((item) => (
                  <li key={item} className="border-t border-line pt-3 text-lg leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-[22px] bg-line sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-sand px-5 py-5">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/50">{fact.label}</dt>
                  <dd className="mt-2 font-serif text-xl leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/leadership"
              className="mt-10 inline-flex text-sm underline decoration-peri decoration-2 underline-offset-[6px]"
            >
              Meet the leadership
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
