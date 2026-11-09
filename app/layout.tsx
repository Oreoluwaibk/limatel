import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  email: company.email,
  telephone: company.phones.map((phone) => phone.tel),
  foundingDate: company.established,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block 7, Ebole Street, U-Turn B/Stop, Jibowu Estate",
    addressLocality: "Abule Egba",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Limatel Nigeria Limited",
    template: "%s · Limatel",
  },
  description:
    "Limatel Nigeria Limited surveys, builds and maintains telecommunications cable routes. Optical fibre, copper, coaxial and RF cable, civil works, and network maintenance from Abule Egba, Lagos.",
  openGraph: {
    title: "Limatel Nigeria Limited",
    description:
      "Building, connecting and maintaining telecommunications infrastructure across Nigeria since 1984.",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
