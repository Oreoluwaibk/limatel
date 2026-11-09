import Image from "next/image";
import type { ReactNode } from "react";

export function PageHeading({
  eyebrow,
  title,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative mt-[5.5rem] mb-16 min-h-[46vh] overflow-hidden sm:mb-20 lg:mb-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="banner-photo object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/55 to-ink/20" />
      <div className="relative z-10 flex min-h-[46vh] flex-col justify-end px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div className="mx-auto w-full max-w-[1120px]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-paper/75">{eyebrow}</p>
          <h1 className="display mt-4 max-w-3xl text-4xl leading-[1.02] text-paper sm:text-6xl">{title}</h1>
          {children ? <div className="mt-5 max-w-2xl text-lg leading-8 text-paper/85">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
