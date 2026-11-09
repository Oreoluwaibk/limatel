"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";

export function ContactForm() {
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [`Name: ${name}`, `Organisation: ${organisation}`, `Phone: ${phone}`, "", message].join(
      "\n",
    );
    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Route enquiry from the Limatel website",
    )}&body=${encodeURIComponent(body)}`;
    setNote(`Opening your email app, addressed to ${company.email}.`);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate={false}>
      <Field label="Your name" name="name" autoComplete="name" required />
      <Field label="Organisation" name="organisation" autoComplete="organization" />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      <label className="block">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ink/55">
          What needs doing
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="field"
          placeholder="Route, location, and whether this is a build or a fault."
        />
      </label>
      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          className="link-arrow inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-peri-deep"
        >
          Send the enquiry
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-sm leading-6 text-ink/60" aria-live="polite">
          {note || `This opens an email to ${company.email}. For a faster reply, call any of the numbers.`}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ink/55">
        {label}
      </span>
      <input className="field" name={name} type={type} autoComplete={autoComplete} required={required} />
    </label>
  );
}
