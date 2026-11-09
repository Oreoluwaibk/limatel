"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "bg-paper/75 backdrop-blur-sm"
      }`}
    >
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="mx-auto flex h-[5.5rem] max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Limatel Nigeria Limited, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] transition-colors ${
                  active
                    ? "font-medium text-ink underline decoration-2 underline-offset-[10px]"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="link-arrow hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] text-paper transition-colors hover:bg-peri-deep lg:inline-flex"
        >
          Request a survey
          <span aria-hidden="true">→</span>
        </Link>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div
        id="mobile-nav"
        inert={!open}
        className={`overflow-hidden bg-paper transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[32rem] border-t border-line opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {nav.map((item, index) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                className={`border-b border-line/80 py-3 font-serif text-3xl ${
                  active ? "text-ink underline decoration-2 underline-offset-8" : "text-ink/45"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper"
            onClick={() => setOpen(false)}
          >
            Request a survey
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
