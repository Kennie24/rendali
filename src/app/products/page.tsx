"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Check, Phone, ArrowRight, ShieldCheck, Truck, Award } from "lucide-react";
import { TILAPIA } from "@/lib/products";
import { Reveal, SectionHeader, Stat, Marquee, EASE } from "@/components/rendalli/primitives";
import { SplitHero } from "@/components/rendalli/split-hero";

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pageProg } = useScroll({ target: pageRef });

  const splitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: splitProg } = useScroll({ target: splitRef, offset: ["start end", "end start"] });
  const imgUp = useTransform(splitProg, [0, 1], ["20%", "-20%"]);
  const copyDown = useTransform(splitProg, [0, 1], ["-15%", "15%"]);

  const galRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: galProg } = useScroll({ target: galRef, offset: ["start end", "end start"] });
  const g1 = useTransform(galProg, [0, 1], ["10%", "-10%"]);
  const g2 = useTransform(galProg, [0, 1], ["-15%", "15%"]);
  const g3 = useTransform(galProg, [0, 1], ["5%", "-20%"]);

  const progress = useSpring(pageProg, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div ref={pageRef}>
      <motion.div style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-rendalli-green z-50" />

      {/* HERO */}
      <SplitHero
        eyebrow="Products · Rendalli"
        titleLines={["Fresh", "Tilapia."]}
        description="Premium Nile Tilapia, raised in the clean waters of Lake Victoria. Whole, filleted, or ready for the grill."
        image="/images/product%20image.JPG"
        imageAlt={TILAPIA.name}
        actions={
          <>
            <a href="tel:+256706609808" className="inline-flex items-center gap-2 bg-night-leaf text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              <Phone size={15} /> 0706 609 808
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              Request a quote
            </Link>
          </>
        }
      />

      {/* STATS */}
      <section className="bg-background border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <Stat value={3} label="Size grades" />
          <Stat value={24} suffix="h" label="From harvest to client" delay={0.1} />
          <Stat value={500} suffix="g" label="Standard fillet" delay={0.2} />
          <Stat value={100} suffix="%" label="Traceable" delay={0.3} />
        </div>
      </section>

      {/* CHARACTER */}
      <section ref={splitRef} className="relative bg-[color:var(--color-steel)] py-24 md:py-32 overflow-hidden">
        <div className="relative w-full px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div style={{ y: imgUp }} className="relative aspect-[4/5] rounded-3xl overflow-hidden hover-lift">
            <Image src="/images/01%20%E2%80%94%20Character.JPG" alt="Fresh Tilapia character" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <motion.div style={{ y: copyDown }}>
            <SectionHeader
              eyebrow="01 — Character"
              title={<>Mild. Flaky. <em className="not-italic text-rendalli-green">Honest.</em></>}
              description={TILAPIA.longCopy[0]}
            />
            <Reveal delay={0.2}>
              <ul className="space-y-3 text-sm text-night-leaf">
                {TILAPIA.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-rendalli-green/10 text-rendalli-green inline-flex items-center justify-center">
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* FULL-BLEED */}
      <section className="relative h-[90vh] overflow-hidden bg-night-leaf">
        <Image src="/images/table.JPG" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-leaf via-night-leaf/30 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 md:px-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-end">
            <Reveal>
              <h2 className="text-4xl md:text-7xl font-light tracking-tight text-white text-balance">
                From farm to <em className="not-italic text-fresh-lemon">your table</em> — in 24 hours.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-leaf-mist/85 leading-relaxed max-w-md">
                Harvested at dawn, iced by midday, delivered by dinner. No middlemen. No guesswork.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SIZES */}
      <section className="bg-[color:var(--color-steel)] py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="02 — Sizes"
            title={<>Three sizes. <em className="not-italic text-rendalli-green">One fish.</em></>}
            description="Pick the cut that suits your kitchen, retail counter, or banquet line."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {TILAPIA.prices.map((pr, i) => (
              <Reveal key={pr.size} delay={i * 0.1}>
                <div className="rounded-3xl bg-white border border-[color:var(--color-mist)] p-8 hover-lift">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-rendalli-green mb-6">{pr.note}</p>
                  <p className="text-5xl md:text-6xl font-light tracking-tight text-night-leaf">{pr.size}</p>
                  <div className="mt-6 pt-6 border-t border-[color:var(--color-mist)]">
                    <a href="tel:+256706609808" className="inline-flex items-center gap-2 text-sm text-night-leaf hover:text-rendalli-green">
                      <Phone size={14} /> Call for pricing
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden bg-[url('/images/fixed.JPG')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-night-leaf/75 pointer-events-none" />
        <div className="absolute inset-0 corp-grid-bg opacity-20 pointer-events-none" />
        <div className="relative w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="Wholesale & B2B"
            invert
            title={<>Built for <em className="not-italic text-fresh-lemon">restaurants, retailers, & exporters.</em></>}
            description="Consistent volume, cold-chain logistics, and documented quality controls."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { Icon: Truck, title: "Logistics", body: "Daily cold-chain delivery across Kampala. Bulk arrangements available." },
              { Icon: ShieldCheck, title: "Quality", body: "HACCP-aligned handling. Documented batch records on request." },
              { Icon: Award, title: "Reliability", body: "Consistent supply for high-volume buyers. Long-term contracts welcome." },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-8 hover-lift backdrop-blur">
                  <div className="w-12 h-12 rounded-xl bg-fresh-lemon/15 text-fresh-lemon flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-14 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-7 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                Request a quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+256706609808" className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
                Call sales line
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="03 — On the plate"
            title={<>However you cook it. <em className="not-italic text-rendalli-green">It works.</em></>}
          />
          <div className="grid md:grid-cols-3 gap-5">
            <motion.div style={{ y: g1 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-0 hover-lift">
              <Image src={TILAPIA.gallery[0]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: g2 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-24 hover-lift">
              <Image src={TILAPIA.gallery[1]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: g3 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-0 hover-lift">
              <Image src={TILAPIA.gallery[3]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="bg-[color:var(--color-steel)] py-14 border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 mb-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-slate)]">Serving</p>
        </div>
        <Marquee items={["Restaurants", "Hotels", "Supermarkets", "Catering", "Export Buyers", "Bulenga Shop"]} />
      </section>

      {/* CTA */}
      <section className="bg-night-leaf text-leaf-mist py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-white text-balance">
              Ready for <em className="not-italic text-fresh-lemon">fresh Tilapia?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-leaf-mist/80 max-w-xl mx-auto">
              Call the sales line for same-day delivery, or visit the shop.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+256706609808" className="inline-flex items-center gap-2 bg-fresh-lemon text-night-leaf px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                <Phone size={16} /> 0706 609 808
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
                Visit our shop <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
