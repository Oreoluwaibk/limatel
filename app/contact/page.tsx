import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeading } from "@/components/page-heading";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Limatel Nigeria Limited at Block 7, Ebole Street, Jibowu Estate, Abule Egba, Lagos. Call 0803 334 8441 or email limatelx@yahoo.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeading eyebrow="Contact" title="Tell us where the route is." image="/services/cctv.jpg">
        <p>
          The office is in Jibowu Estate, Abule Egba. Call, or send the route and when you need a
          crew on it.
        </p>
      </PageHeading>
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <address className="text-lg leading-8 not-italic text-ink/80">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              className="mt-3 inline-block text-sm underline decoration-peri decoration-2 underline-offset-[6px]"
              href="https://www.google.com/maps/search/?api=1&query=Block+7+Ebole+Street+Jibowu+Estate+Abule+Egba+Lagos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the office on a map
            </a>
            <ul className="mt-8 space-y-2">
              {company.phones.map((phone) => (
                <li key={phone.tel}>
                  <a className="font-serif text-2xl transition-colors hover:text-peri-deep" href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-4 inline-block text-lg text-ink/80 underline decoration-peri/70 underline-offset-4"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
