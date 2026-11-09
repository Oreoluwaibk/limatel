import Image from "next/image";
import Link from "next/link";
import { RouteArt } from "@/components/route-art";
import { Testimonials } from "@/components/testimonials";
import { company, services } from "@/lib/content";

const facts = [
  { label: "Began as", value: company.formerName, note: company.established },
  { label: "Incorporated", value: "Limatel Nigeria Limited", note: company.incorporated },
  { label: "Registration", value: `RC ${company.rc}`, note: "Corporate Affairs Commission" },
  { label: "Head office", value: "Abule Egba", note: "Lagos State" },
];

export default function Home() {
  return (
    <>
      <section className="relative mt-[5.5rem] min-h-[78vh] overflow-hidden">
        <Image
          src="/services/fibre.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="banner-photo object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="relative z-10 flex min-h-[78vh] flex-col justify-end px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col justify-end">
          <p className="text-[11px] uppercase tracking-[0.22em] text-paper/75">
            Since {company.established} · Lagos
          </p>
          <h1 className="display mt-5 max-w-[12ch] text-[3.1rem] leading-[0.96] text-paper sm:text-6xl lg:text-[4.7rem]">
            Laid in the ground.
            <span className="mt-1 block italic text-[#d5def8]">Kept in service.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-paper/85">
            {company.name} surveys, builds and maintains the cable routes that carry telecom and
            CCTV networks. Underground, overhead, and between cities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="link-arrow inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm text-ink transition-colors hover:bg-white"
            >
              Request a route survey
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/what-we-do"
              className="text-sm text-paper underline decoration-[#d5def8] decoration-2 underline-offset-[6px]"
            >
              See the work
            </Link>
          </div>
        </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <RouteArt />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">The route</p>
            <h2 className="display mt-4 text-4xl leading-[1.05]">
              Survey, lay, prove, then stay.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              A cable path is one job from the first peg to the last test. The same crews come back
              when a route is cut.
            </p>
            <Link
              href="/how-we-deliver"
              className="link-arrow mt-6 inline-flex items-center gap-2 text-sm underline decoration-peri decoration-2 underline-offset-[6px]"
            >
              How a job runs
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <dl className="mx-auto mt-14 grid max-w-[1120px] gap-px overflow-hidden rounded-[22px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-sand px-5 py-5">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/50">{fact.label}</dt>
              <dd className="mt-2 font-serif text-xl leading-snug">{fact.value}</dd>
              <dd className="mt-1 text-sm text-ink/55">{fact.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">Who we are</p>
            <h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">
              The company that stays on the route.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-ink/78">
              Crews build the cable routes operators depend on, then stay with those routes for
              maintenance and restoration. The business began in {company.established} as{" "}
              {company.formerName}, and was incorporated in {company.incorporated}.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink/78">{company.mission}</p>
            <Link
              href="/who-we-are"
              className="link-arrow mt-6 inline-flex items-center gap-2 text-sm underline decoration-peri decoration-2 underline-offset-[6px]"
            >
              Read the company story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-12 lg:px-16 lg:pb-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-peri-deep">What we do</p>
              <h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl">Six kinds of work.</h2>
            </div>
            <Link
              href="/what-we-do"
              className="text-sm underline decoration-peri decoration-2 underline-offset-[6px]"
            >
              All services
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/what-we-do#${service.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-sand">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 font-serif text-sm text-peri-deep">{service.num}</p>
                  <h3 className="mt-1 font-serif text-2xl leading-tight group-hover:text-peri-deep">
                    {service.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="px-6 pb-20 sm:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-6 rounded-[28px] bg-ink px-7 py-10 text-paper sm:px-10 sm:py-12 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-peri">Next step</p>
            <h2 className="display mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">
              Tell us where the route is.
            </h2>
          </div>
          <Link
            href="/contact"
            className="link-arrow inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm text-ink"
          >
            Contact the office
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
