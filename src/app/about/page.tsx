import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish, Leaf, ShieldCheck, Truck } from "lucide-react";

import { Reveal, SectionHeader, Stat } from "@/components/rendalli/primitives";
import { SplitHero } from "@/components/rendalli/split-hero";

export const metadata = {
  title: "About Us — Rendalli",
  description:
    "Learn about Rendalli, a Ugandan fish brand raising fresh Tilapia with care, traceability, and a farm-to-table promise.",
};

const PRINCIPLES = [
  {
    Icon: Leaf,
    title: "Raised with care",
    body: "Our fish are raised in monitored waters with responsible aquaculture practices and a long-term commitment to Lake Victoria.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality you can trust",
    body: "Every batch is handled with discipline — from harvest to cold chain to the counter — so families and partners get consistent quality.",
  },
  {
    Icon: Truck,
    title: "Freshness first",
    body: "We work around a simple promise: harvest, handle, and deliver quickly so the fish reaches your table at its best.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SplitHero
        eyebrow="About Us · Rendalli"
        titleLines={["Rooted in Uganda.", "Raised with care."]}
        description="Rendalli is a modern, family-rooted fish brand built around fresh Tilapia, responsible farming, and dependable supply for East African tables."
        image="/images/farm.JPG"
        imageAlt="Rendalli fish farm"
        actions={
          <>
            <Link href="/products" className="inline-flex items-center gap-2 bg-night-leaf text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              Explore our fish
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              Contact us
            </Link>
          </>
        }
      />

      <section className="bg-background border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <Stat value={2024} label="Founded in Uganda" />
          <Stat value={24} suffix="h" label="Farm to table" delay={0.1} />
          <Stat value={100} suffix="%" label="Traceable supply" delay={0.2} />
          <Stat value={1} label="Fish done right" delay={0.3} />
        </div>
      </section>

      <section className="grid md:grid-cols-2 bg-[color:var(--color-steel)]">
        <Reveal y={0} className="flex items-center">
          <div className="w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 max-w-xl mx-auto md:mx-0">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">Who we are</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-night-leaf tracking-tight leading-[1.05] text-balance mb-6">
              A Ugandan brand built from <em className="not-italic text-rendalli-green">the water up.</em>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-[color:var(--color-slate)] leading-relaxed">
              <p>
                Rendalli exists to make excellent fish simple: farmed carefully, handled properly, and delivered with the discipline modern families and businesses expect.
              </p>
              <p>
                Our work connects the lake, the farm, the shop, restaurants, retailers, and family kitchens through one clear promise — fresh Tilapia raised the right way.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="relative min-h-[55vh] md:min-h-[80vh]">
          <Image src="/images/01 — Character.JPG" alt="Fresh Rendalli Tilapia" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="What guides us"
            title={<>Good food starts with <em className="not-italic text-rendalli-green">good fish.</em></>}
            description="These principles shape how we farm, handle, sell, and serve every Rendalli customer."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {PRINCIPLES.map(({ Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="rounded-3xl bg-[color:var(--color-steel)] border border-[color:var(--color-mist)] p-8 h-full hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-rendalli-green/10 text-rendalli-green flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium text-night-leaf mb-3">{title}</h3>
                  <p className="text-sm text-[color:var(--color-slate)] leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] min-h-[480px] overflow-hidden bg-night-leaf text-white bg-[url('/images/fixed.JPG')] bg-cover bg-center md:bg-fixed flex items-center justify-center">
        <div className="absolute inset-0 bg-night-leaf/75" />
        <div className="absolute inset-0 corp-grid-bg opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-3xl text-center px-6">
          <Reveal>
            <Fish size={34} className="text-fresh-lemon mx-auto mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-balance mb-6">
              Fresh fish, handled <em className="not-italic text-fresh-lemon">properly.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              From families to wholesale partners, our promise stays the same: dependable Tilapia, clear provenance, and service that respects your table.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-8 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                Talk to us <ArrowRight size={18} />
              </Link>
              <Link href="/story" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
                Read our story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
