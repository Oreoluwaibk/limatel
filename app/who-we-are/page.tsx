import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/content";

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
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
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
            <p className="mt-10 max-w-3xl font-serif text-2xl italic leading-snug sm:text-3xl">
              {company.tagline}.
            </p>
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
