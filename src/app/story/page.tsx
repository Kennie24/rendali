"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { IMAGES } from "@/lib/rendalli";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TIMELINE = [
  { year: "2024", title: "Founded in Uganda", body: "Rendalli begins on the shores of Lake Victoria — a family, a boat, a promise." },
  { year: "2025", title: "First harvests", body: "Our sustainable cages yield premium Nile Tilapia and Perch for Ugandan families." },
  { year: "2026", title: "Bulenga Fish Shop", body: "Our first retail home opens in Kampala — farm-to-shop in 24 hours." },
  { year: "Next", title: "East Africa & beyond", body: "Scaling responsibly — bringing Rendalli to the wider region and international kitchens." },
];

export default function StoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(heroY, [0, 1], [0, 200]);

  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pathY } = useScroll({ target: pathRef, offset: ["start end", "end start"] });
  const pathLength = useTransform(pathY, [0.1, 0.9], [0, 1]);

  return (
    <>
      {/* HERO — masked image reveal with diagonal cut */}
      <section ref={heroRef} className="relative min-h-[100dvh] bg-night-leaf text-white flex items-end pt-28 pb-16 overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <Image src={IMAGES.heroBg} alt="Fishing boat at dawn" fill sizes="100vw" priority className="object-cover opacity-60" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-night-leaf via-night-leaf/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-[11px] uppercase text-rendalli-green mb-8"
          >
            From Lake Victoria
          </motion.p>

          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] tracking-tighter overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="block"
            >
              Our story
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
              className="block italic text-rendalli-green"
            >
              starts here.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-10 max-w-xl text-lg text-leaf-mist/80 leading-relaxed"
          >
            A young, modern, family-oriented brand rooted in Ugandan soil and East African waters.
          </motion.p>
        </div>
      </section>

      {/* TIMELINE — scroll-drawn path */}
      <section ref={pathRef} className="relative bg-leaf-mist py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-deep-forest mb-3">The journey</p>
          <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight max-w-2xl mb-20 text-balance">
            A farm, a lake, a family.
          </h2>

          <div className="relative">
            {/* vertical line */}
            <svg className="absolute left-6 md:left-10 top-0 h-full w-[2px]" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="#4DB848"
                strokeWidth="2"
                style={{ pathLength }}
              />
            </svg>

            <div className="space-y-16 md:space-y-24">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="pl-16 md:pl-24 relative"
                >
                  <span className="absolute left-[14px] md:left-[30px] top-2 w-5 h-5 rounded-full bg-rendalli-green ring-4 ring-leaf-mist" />
                  <p className="text-fresh-lemon bg-night-leaf inline-block px-3 py-1 rounded-full text-xs tracking-[0.2em] uppercase mb-3">{t.year}</p>
                  <h3 className="text-3xl md:text-5xl font-light text-night-leaf mb-3 tracking-tight">{t.title}</h3>
                  <p className="text-deep-forest/80 max-w-xl leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY IMAGE — full bleed */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: EASE }}
          className="absolute inset-0"
        >
          <Image src="https://res.cloudinary.com/dcnbho9c9/image/upload/v1776756373/Image_20260421_102501_wq2baq.jpg" alt="Family at the dinner table" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night-leaf/80 to-transparent" />
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="text-white max-w-2xl"
          >
            <p className="text-3xl md:text-5xl font-light leading-tight text-balance">
              &ldquo;Your table, your family, your fish.&rdquo;
            </p>
            <footer className="mt-6 text-sm tracking-[0.25em] uppercase text-fresh-lemon">— Rendalli promise</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">Sustainability</p>
            <h2 className="text-4xl md:text-6xl font-light text-night-leaf tracking-tight text-balance mb-6">
              Grown the <em className="not-italic text-rendalli-green">right</em> way.
            </h2>
            <p className="text-deep-forest/80 text-lg leading-relaxed max-w-md">
              We farm responsibly — clean, monitored waters, no hormones, and a commitment to the lake and the community that raised us.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image src={IMAGES.farm} alt="Ugandan farm" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
