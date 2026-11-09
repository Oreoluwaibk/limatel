import Link from "next/link";
import { company, nav } from "@/lib/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" aria-label="Limatel Nigeria Limited, home">
            <Logo light />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-6 text-paper/65">{company.tagline}.</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Pages</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-paper" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Call</p>
          <ul className="mt-3 space-y-1 text-sm text-paper/75">
            {company.phones.map((phone) => (
              <li key={phone.tel}>
                <a className="hover:text-paper" href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-paper" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-paper/65">
            {company.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-5 py-5 text-xs leading-5 text-paper/45 sm:px-8 md:flex-row md:justify-between">
          <p>
            {company.name} · RC {company.rc} · Incorporated {company.incorporated}
          </p>
          <p>
            Banker: {company.banker} · Insurer: {company.insurer}
          </p>
        </div>
      </div>
    </footer>
  );
}
