import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Optical fibre, copper, coaxial and RF cable, CCTV routes, civil works, network expansion, and operations and maintenance.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeading eyebrow="What we do" title="Six kinds of work. One route." image="/services/fibre.jpg">
        <p>
          Every job is a cable path: surveyed, built, tested, and then looked after. These are the
          kinds of work the crews carry.
        </p>
      </PageHeading>
      <div className="px-6 pb-24 sm:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-20 lg:gap-28">
        {services.map((service, index) => (
          <article id={service.id} key={service.id} className="scroll-mt-32">
            <Reveal>
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={index % 2 === 1 ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-sand">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
                  <p className="font-serif text-lg text-peri-deep">{service.num}</p>
                  <h2 className="display mt-3 text-4xl leading-[1.05]">{service.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-ink/75">{service.text}</p>
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
      </div>
    </>
  );
}
