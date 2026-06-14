"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Check, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { TILAPIA } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pageProg } = useScroll({ target: pageRef });

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProg } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroFishY = useTransform(heroProg, [0, 1], ["0%", "-25%"]);
  const heroTextY = useTransform(heroProg, [0, 1], ["0%", "60%"]);
  const heroFade = useTransform(heroProg, [0, 0.8], [1, 0]);

  // Section 2 — split parallax
  const splitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: splitProg } = useScroll({ target: splitRef, offset: ["start end", "end start"] });
  const imgUp = useTransform(splitProg, [0, 1], ["20%", "-20%"]);
  const copyDown = useTransform(splitProg, [0, 1], ["-15%", "15%"]);
  const bigWord = useTransform(splitProg, [0, 1], ["-30%", "30%"]);

  // Section 3 — full-bleed fixed image
  const fullRef = useRef<HTMLDivElement>(null);

  // Gallery parallax
  const galRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: galProg } = useScroll({ target: galRef, offset: ["start end", "end start"] });
  const g1 = useTransform(galProg, [0, 1], ["10%", "-10%"]);
  const g2 = useTransform(galProg, [0, 1], ["-15%", "15%"]);
  const g3 = useTransform(galProg, [0, 1], ["5%", "-20%"]);

  // Progress bar
  const progress = useSpring(pageProg, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div ref={pageRef}>
      {/* progress bar */}
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-rendalli-green z-50"
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[110dvh] overflow-hidden bg-night-leaf text-white flex items-center justify-center"
      >
        <Image
          src="/images/products.%20page.JPG"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-night-leaf/60 via-night-leaf/40 to-night-leaf" />
        </div>

        <motion.div style={{ y: heroFishY }} className="absolute right-[-8%] md:right-[-4%] top-1/2 -translate-y-1/2 w-[75vw] md:w-[45vw] aspect-square">
          <div className="absolute inset-0 rounded-full overflow-hidden border-[10px] border-fresh-lemon/80 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <Image src="/images/product%20image.JPG" alt={TILAPIA.name} fill sizes="(min-width: 768px) 45vw, 75vw" className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div style={{ y: heroTextY, opacity: heroFade }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-fresh-lemon mb-6"
          >
            The fish · The only one we raise
          </motion.p>
          <h1 className="font-light leading-[0.88] tracking-tight text-balance">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: EASE }}
              className="block text-6xl md:text-[9rem]"
            >
              Fresh
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="block italic text-rendalli-green text-6xl md:text-[10rem]"
            >
              Tilapia.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 italic text-leaf-mist/80"
          >
            {TILAPIA.latin}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-leaf-mist/70 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO — typographic parallax */}
      <section ref={splitRef} className="relative bg-background py-32 md:py-48 overflow-hidden">
        <motion.p
          style={{ x: bigWord }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-light text-[22vw] leading-none text-rendalli-green/5 pointer-events-none select-none tracking-tight"
          aria-hidden
        >
          tilapia
        </motion.p>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            style={{ y: imgUp }}
            aria-label="Fresh Tilapia character image"
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/01%20%E2%80%94%20Character.JPG"
              alt="Fresh Tilapia character"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div style={{ y: copyDown }} className="space-y-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green">01 — Character</p>
            <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight text-balance">
              Mild. Flaky. <em className="not-italic text-rendalli-green">Honest.</em>
            </h2>
            {TILAPIA.longCopy.map((p, i) => (
              <p key={i} className="text-lg text-deep-forest/85 leading-relaxed max-w-md">{p}</p>
            ))}
            <ul className="pt-4 space-y-3 text-sm text-night-leaf">
              {TILAPIA.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-rendalli-green/10 text-rendalli-green inline-flex items-center justify-center">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FULL-BLEED FIXED IMAGE */}
      <section
        ref={fullRef}
        aria-label="Fresh Tilapia from the farm to your table"
        className="relative h-[90vh] overflow-hidden bg-night-leaf"
      >
        <Image
          src="/images/table.JPG"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-night-leaf via-night-leaf/30 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 md:px-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-4xl md:text-7xl font-light tracking-tight text-white text-balance"
            >
              From the farm to <em className="not-italic text-fresh-lemon">your table</em> — in 24 hours.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="text-lg text-leaf-mist/85 leading-relaxed max-w-md"
            >
              Harvested in the morning, on ice by midday, at your door by dinner. No middlemen. No guesswork.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative bg-rendalli-green text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-fresh-lemon mb-3">02 — Daily pricing</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-balance">
                Three sizes. <em className="not-italic text-fresh-lemon">One fish.</em>
              </h2>
            </div>
            <a href="tel:+256706609808" className="self-start inline-flex items-center gap-2 bg-fresh-lemon text-night-leaf px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors">
              <Phone size={16} /> 0706 609 808
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TILAPIA.prices.map((pr, i) => (
              <motion.div
                key={pr.size}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-8 hover:bg-white/15 transition-colors"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-fresh-lemon mb-6">{pr.note}</p>
                <p className="text-5xl md:text-6xl font-light tracking-tight">
                  <span className="text-fresh-lemon text-2xl md:text-3xl align-top mr-2">UGX</span>{pr.price}
                </p>
                <p className="mt-3 text-sm tracking-[0.25em] uppercase text-leaf-mist/80">{pr.size}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">03 — On the plate</p>
          <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-2xl text-balance mb-14">
            However you cook it. <em className="not-italic text-rendalli-green">It works.</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <motion.div style={{ y: g1 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-0">
              <Image src={TILAPIA.gallery[0]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: g2 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-24">
              <Image src={TILAPIA.gallery[1]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: g3 }} className="relative aspect-[3/4] rounded-3xl overflow-hidden md:mt-0">
              <Image src={TILAPIA.gallery[3]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night-leaf text-leaf-mist py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-4xl md:text-7xl font-light tracking-tight text-white text-balance"
          >
            Ready for <em className="not-italic text-fresh-lemon">fresh Tilapia</em> tonight?
          </motion.h2>
          <p className="mt-6 text-leaf-mist/80 max-w-xl mx-auto">
            Call the sales helpline for same-day delivery, or drop by the shop.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+256706609808" className="inline-flex items-center gap-2 bg-fresh-lemon text-night-leaf px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors">
              <Phone size={16} /> 0706 609 808
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-night-leaf transition-colors">
              Visit our shop <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
