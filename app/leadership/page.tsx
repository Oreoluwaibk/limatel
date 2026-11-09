import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Limatel Nigeria Limited is led by Mustapha Lola Alhaji, Chairman and Chief Executive Officer, and Mustapha Babatunde Ahmed, General Manager.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeading
        eyebrow="Leadership"
        title="Directed from the Lagos office."
        image="/services/civil.jpg"
      >
        <p>Day-to-day direction of survey, construction and maintenance sits in Abule Egba.</p>
      </PageHeading>
      <section className="bg-sand px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-280 mb-20">
          <Reveal>
            <ul className="grid gap-12 md:grid-cols-2">
              {company.leaders.map((leader) => (
                <li key={leader.name} className="border-t border-ink/15 pt-6">
                  <p className="font-serif text-3xl leading-tight sm:text-4xl">{leader.name}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-ink/60">{leader.role}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
