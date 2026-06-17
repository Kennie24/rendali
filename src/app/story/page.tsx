"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/rendalli";
import { Reveal, SectionHeader, Stat, EASE } from "@/components/rendalli/primitives";
import { SplitHero } from "@/components/rendalli/split-hero";

const TIMELINE = [
  { year: "2024", title: "Founded in Uganda", body: "Rendalli begins on the shores of Lake Victoria — a family, a boat, a promise." },
  { year: "2025", title: "First harvests", body: "Sustainable cages yield premium Nile Tilapia for Ugandan families." },
  { year: "2026", title: "Bulenga Fish Shop", body: "Our first retail home opens in Kampala — farm-to-shop in 24 hours." },
  { year: "Next", title: "East Africa & beyond", body: "Scaling responsibly — bringing Rendalli to the wider region and international kitchens." },
];

export default function StoryPage() {
  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pathY } = useScroll({ target: pathRef, offset: ["start end", "end start"] });
  const pathLength = useTransform(pathY, [0.1, 0.9], [0, 1]);

  return (
    <>
      {/* HERO */}
      <SplitHero
        eyebrow="Our Story · Rendalli"
        titleLines={["Our story", "starts here."]}
        description="A modern, family-rooted brand built on Ugandan waters — engineered for the next generation of East African food."
        image={IMAGES.heroBg}
        imageAlt="Rendalli — Lake Victoria"
      />

      {/* STATS */}
      <section className="bg-background border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <Stat value={2024} label="Founded" />
          <Stat value={3} label="Years of operation" delay={0.1} />
          <Stat value={1} label="Retail home — and growing" delay={0.2} />
          <Stat value={3} label="East African markets" delay={0.3} />
        </div>
      </section>

      {/* TIMELINE */}
      <section ref={pathRef} className="relative bg-[color:var(--color-steel)] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow="The journey"
            title={<>A farm, a lake, a <em className="not-italic text-rendalli-green">family.</em></>}
          />
          <div className="relative">
            <svg className="absolute left-6 md:left-10 top-0 h-full w-[2px]" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <motion.line x1="1" y1="0" x2="1" y2="1000" stroke="#4DB848" strokeWidth="2" style={{ pathLength }} />
            </svg>
            <div className="space-y-16 md:space-y-24">
              {TIMELINE.map((t) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: EASE }}
                  className="pl-16 md:pl-24 relative">
                  <span className="absolute left-[14px] md:left-[30px] top-2 w-5 h-5 rounded-full bg-rendalli-green ring-4 ring-[color:var(--color-steel)]" />
                  <p className="text-fresh-lemon bg-night-leaf inline-block px-3 py-1 rounded-full text-xs tracking-[0.2em] uppercase mb-3">{t.year}</p>
                  <h3 className="text-3xl md:text-5xl font-light text-night-leaf mb-3 tracking-tight">{t.title}</h3>
                  <p className="text-[color:var(--color-slate)] max-w-xl leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5, ease: EASE }} className="absolute inset-0">
          <Image src="https://res.cloudinary.com/dcnbho9c9/image/upload/v1776756373/Image_20260421_102501_wq2baq.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night-leaf/85 to-transparent" />
        <div className="relative z-10 h-full flex items-center w-full px-6 md:px-10">
          <Reveal>
            <blockquote className="text-white max-w-2xl">
              <p className="text-3xl md:text-5xl font-light leading-tight text-balance">
                &ldquo;Your table, your family, your fish.&rdquo;
              </p>
              <footer className="mt-6 text-sm tracking-[0.25em] uppercase text-fresh-lemon">— The Rendalli promise</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="bg-background py-24 md:py-32">
        <div className="w-full px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Sustainability"
              title={<>Grown the <em className="not-italic text-rendalli-green">right</em> way.</>}
              description="Clean monitored waters, no hormones, low-density cages — and a long-term commitment to the lake and the communities around it."
            />
            <Reveal delay={0.2}>
              <Link href="/journal/why-we-farm-the-right-way" className="inline-flex items-center gap-3 bg-night-leaf text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rendalli-green transition-all hover:-translate-y-0.5">
                Read our commitments <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden hover-lift">
              <Image src={IMAGES.farm} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white py-24 md:py-32 relative overflow-hidden bg-[url('/images/fixed.JPG')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-night-leaf/75 pointer-events-none" />
        <div className="absolute inset-0 corp-grid-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-balance">
              Want to be part of <em className="not-italic text-fresh-lemon">what comes next?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-8 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                Partner with us <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
                See products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
