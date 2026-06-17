"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck, Award, Leaf, Truck, Fish, Globe2 } from "lucide-react";
import { Reveal, SectionHeader, Stat, Marquee, EASE } from "@/components/rendalli/primitives";

const HERO_SLIDES = [
  { src: "/images/1.jpg", alt: "Rendalli — Lake Victoria", eyebrow: "Lake Victoria", title: "Fresh from the lake" },
  { src: "/images/2.jpg", alt: "Rendalli — farm raised", eyebrow: "Farm raised", title: "Handled with care" },
  { src: "/images/3.JPG", alt: "Rendalli — family tables", eyebrow: "Ready to cook", title: "On every table" },
] as const;

import type { JournalMeta } from "@/lib/journal";

export function Home({ posts }: { posts: JournalMeta[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tagWords = "Fresh from the lake,\nstraight to your table.".split(" ");
  const activeHero = HERO_SLIDES[activeSlide];

  useEffect(() => {
    const id = window.setInterval(() => setActiveSlide((c) => (c + 1) % HERO_SLIDES.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  const prev = () => setActiveSlide((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setActiveSlide((c) => (c + 1) % HERO_SLIDES.length);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="sticky top-0 h-[78dvh] min-h-[560px] overflow-hidden bg-night-leaf text-white -z-10">
        <motion.div style={{ scale }} className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeHero.src}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ opacity: { duration: 1.6, ease: EASE }, scale: { duration: 9, ease: "linear" } }}
              className="absolute inset-0 will-change-transform"
            >
              <Image src={activeHero.src} alt={activeHero.alt} fill priority={activeSlide === 0} sizes="100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-leaf/70 via-night-leaf/10 to-night-leaf/20" />

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end w-full px-6 md:px-10 pb-24 md:pb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}
            className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-rendalli-green mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-rendalli-green" /> Rendalli · Uganda · East Africa
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.p key={activeHero.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }} className="mb-4 text-sm md:text-base text-white/85">
              {activeHero.eyebrow} · {activeHero.title}
            </motion.p>
          </AnimatePresence>

          <h1 className="font-light text-4xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl text-balance">
            {tagWords.map((word, i) => (
              <motion.span key={i} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: EASE }}
                className="inline-block mr-[0.25em]">
                {word.includes("\n") ? (<>{word.replace("\n", "")}<br /></>) : word}
              </motion.span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap gap-4 items-center">
            <Link href="/products" className="group inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-7 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
              Explore our products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="text-white/85 hover:text-white text-sm tracking-wide underline-offset-4 hover:underline">
              Partner with us →
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between gap-5 md:left-10 md:right-10">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, index) => (
              <button key={slide.title} type="button" onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`} aria-current={activeSlide === index}
                className="group flex h-5 items-center">
                <span className={`block h-1 rounded-full transition-all ${activeSlide === index ? "w-10 bg-fresh-lemon" : "w-5 bg-white/40 group-hover:bg-white/75"}`} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={prev} aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-night-leaf hover:-translate-y-0.5">
              <ChevronLeft size={19} />
            </button>
            <button type="button" onClick={next} aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-night-leaf hover:-translate-y-0.5">
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-background border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <Stat value={24} suffix="h" label="Farm to table" />
          <Stat value={100} suffix="%" label="Sustainable cages" delay={0.1} />
          <Stat value={3} label="East African markets" delay={0.2} />
          <Stat value={0} label="Hormones · ever" delay={0.3} />
        </div>
      </section>

      {/* ABOUT — full-bleed split */}
      <section className="grid md:grid-cols-2 bg-[color:var(--color-steel)]">
        <Reveal y={0} className="flex items-center">
          <div className="w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 max-w-xl mx-auto md:mx-0">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">About Rendalli</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-night-leaf tracking-tight leading-[1.05] text-balance mb-6">
              Rooted in Uganda. <em className="not-italic text-rendalli-green">Raised with care.</em>
            </h2>
            <p className="text-base md:text-lg text-[color:var(--color-slate)] leading-relaxed mb-8">
              Rendalli farms premium Nile Tilapia on the shores of Lake Victoria — sustainably, transparently, and at scale.
              We serve families, retailers, and partners across East Africa with one promise: fresh fish, raised the right way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/story" className="inline-flex items-center gap-3 bg-night-leaf text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rendalli-green transition-all hover:-translate-y-0.5">
                Read our story <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-3 text-night-leaf px-6 py-3 rounded-full text-sm font-medium hover:text-rendalli-green transition-colors underline-offset-4 hover:underline">
                Explore our fish
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="relative min-h-[60vh] md:min-h-[80vh]">
          <Image src="/images/farm.JPG" alt="Rendalli farm on Lake Victoria" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* PRODUCTS — full-bleed split, mirrored */}
      <section className="grid md:grid-cols-2 bg-background">
        <div className="relative min-h-[60vh] md:min-h-[80vh] order-1 md:order-1">
          <Image src="/images/01%20%E2%80%94%20Character.JPG" alt="Fresh Nile Tilapia" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <Reveal y={0} className="flex items-center order-2 md:order-2">
          <div className="w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 max-w-xl mx-auto md:mx-0">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">Our Products</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-night-leaf tracking-tight leading-[1.05] text-balance mb-6">
              Fresh Tilapia. <em className="not-italic text-rendalli-green">One fish. Done right.</em>
            </h2>
            <p className="text-base md:text-lg text-[color:var(--color-slate)] leading-relaxed mb-8">
              Mild, flaky, firm Nile Tilapia — raised in clean monitored waters, harvested by hand.
              Whole, filleted, or ready for the grill.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { size: "Medium", note: "Whole" },
                { size: "Large", note: "Whole" },
                { size: "Fillet", note: "500g" },
              ].map((p) => (
                <div key={p.size} className="rounded-2xl bg-[color:var(--color-steel)] border border-[color:var(--color-mist)] p-4 text-center hover-lift">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-rendalli-green mb-1">{p.note}</p>
                  <p className="text-lg font-medium text-night-leaf">{p.size}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="inline-flex items-center gap-3 bg-rendalli-green text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-night-leaf transition-all hover:-translate-y-0.5">
                See products <ArrowRight size={16} />
              </Link>
              <a href="tel:+256706609808" className="inline-flex items-center gap-3 text-night-leaf px-6 py-3 rounded-full text-sm font-medium hover:text-rendalli-green transition-colors underline-offset-4 hover:underline">
                Call to order
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FIXED IMAGE BAND */}
      <section
        aria-label="Fresh from the lake"
        className="relative h-[80vh] min-h-[480px] overflow-hidden bg-night-leaf text-white bg-[url('/images/1.jpg')] bg-cover bg-center md:bg-fixed flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-night-leaf/70 via-night-leaf/55 to-night-leaf/75" />
        <div className="relative z-10 max-w-3xl text-center px-6">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-fresh-lemon mb-6">From Lake Victoria</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-balance mb-6">
              Fresh from the lake.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Sustainably farmed in the clean waters of Lake Victoria — harvested by hand,
              delivered to your kitchen in under 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* B2B / CAPABILITIES */}
      <section className="relative bg-[#2E7D32] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 corp-grid-bg opacity-30 pointer-events-none" />
        <div className="relative w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="For partners"
            invert
            title={<>Built for <em className="not-italic text-fresh-lemon">scale</em>. <br className="hidden md:block" />Delivered with <em className="not-italic text-fresh-lemon">care.</em></>}
            description="Retailers, restaurants, and exporters trust Rendalli for consistent supply, traceable provenance, and uncompromising quality control."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { Icon: Truck, title: "Daily logistics", body: "Cold-chain delivery across Kampala and beyond. Same-day for major partners." },
              { Icon: ShieldCheck, title: "Traceable supply", body: "Every batch tracked from cage to client. Documentation provided." },
              { Icon: Globe2, title: "Wholesale & export", body: "Bulk volumes and white-label arrangements for trusted partners." },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="group relative rounded-3xl border border-white/15 bg-white/5 p-8 hover-lift backdrop-blur">
                  <div className="w-12 h-12 rounded-xl bg-fresh-lemon/15 text-fresh-lemon flex items-center justify-center mb-6 group-hover:bg-fresh-lemon group-hover:text-night-leaf transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-14 flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-7 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                Request a quote <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="text-white/85 hover:text-white text-sm tracking-wide underline-offset-4 hover:underline">
                See product specs →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="bg-background py-14 border-b border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 mb-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-slate)]">Trusted across East Africa</p>
        </div>
        <Marquee
          items={[
            "Bulenga Fish Shop",
            "Kampala Restaurants",
            "Hotels & Resorts",
            "Retail Partners",
            "Export Buyers",
            "Catering Services",
          ]}
        />
      </section>

      {/* CERTIFICATIONS / COMMITMENTS */}
      <section className="bg-[color:var(--color-steel)] py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="Standards & commitments"
            title={<>Quality you can <em className="not-italic text-rendalli-green">verify.</em></>}
            description="We follow strict aquaculture standards and document every step of our process."
          />
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { Icon: Leaf, title: "Sustainable aquaculture", body: "Low-density cages, water-quality monitored daily." },
              { Icon: ShieldCheck, title: "Hormone-free", body: "No artificial growth, no antibiotics in production." },
              { Icon: Fish, title: "Traceable batches", body: "Cage → harvest → cold chain → client, fully tracked." },
              { Icon: Award, title: "Food-safety compliant", body: "HACCP-aligned handling and processing." },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="rounded-3xl bg-white border border-[color:var(--color-mist)] p-7 h-full hover-lift">
                  <div className="w-10 h-10 rounded-xl bg-rendalli-green/10 text-rendalli-green flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-medium text-night-leaf mb-2">{title}</h3>
                  <p className="text-sm text-[color:var(--color-slate)] leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="bg-background py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeader eyebrow="Insights" title="Notes from the water." description={null} />
            <Reveal>
              <Link href="/journal" className="text-sm text-night-leaf hover:text-rendalli-green underline-offset-4 hover:underline">
                Read all entries →
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/journal/${p.slug}`} className="group block hover-lift rounded-2xl">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <Image src={p.cover} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-night-leaf">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-[color:var(--color-slate)] tracking-wider mt-4">{p.date}</p>
                  <h3 className="text-xl font-medium text-night-leaf mt-1 group-hover:text-rendalli-green transition-colors flex items-start gap-2">
                    {p.title}
                    <ArrowUpRight size={16} className="shrink-0 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden bg-[url('/images/fixed.JPG')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-night-leaf/75 pointer-events-none" />
        <div className="absolute inset-0 corp-grid-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-balance">
              Ready when <em className="not-italic text-fresh-lemon">you are.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/75 max-w-xl mx-auto">
              Whether you&apos;re a family of four or a regional buyer, we&apos;re built to deliver.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-8 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5">
                Get in touch <ArrowRight size={18} />
              </Link>
              <a href="tel:+256706609808" className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
                Call 0706 609 808
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
