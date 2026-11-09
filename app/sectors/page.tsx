import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { sectors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Limatel works for network operators, broadband providers, fibre companies, security teams, public works and corporate sites.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Who it is for"
        title="The people who own the network."
        image="/services/copper.jpg"
      >
        <p>
          Named project references are shared when a client asks, and when the contract allows it.
          These are the sectors the work already sits in.
        </p>
      </PageHeading>
      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <ul className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, index) => (
                <li key={sector.title} className="border-t border-line py-8 pr-8">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-peri-deep">0{index + 1}</p>
                  <h2 className="mt-3 font-serif text-[1.65rem] leading-tight">{sector.title}</h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-ink/68">{sector.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
