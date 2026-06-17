"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function SplitHero({
  eyebrow,
  titleLines,
  description,
  image,
  imageAlt,
  actions,
}: {
  eyebrow: string;
  /** Two-line title — second line renders italic in night-leaf */
  titleLines: [string, string];
  description?: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
}) {
  const [line1, line2] = titleLines;

  return (
    <section aria-label={eyebrow} className="grid md:grid-cols-2 bg-[#2E7D32] text-white md:h-[78dvh] md:min-h-[560px]">
      {/* LEFT — green bg with copy */}
      <div className="relative flex items-center min-h-[60vh] md:min-h-0 md:h-full overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fresh-lemon/20 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-night-leaf/40 blur-3xl" />
        <div className="relative w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 max-w-xl mx-auto md:mx-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-[11px] tracking-[0.3em] uppercase text-fresh-lemon mb-6"
          >
            {eyebrow}
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance overflow-hidden">
            <span className="block overflow-hidden">
              {line1.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden italic text-night-leaf">
              {line2.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 + i * 0.08, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
              className="mt-5 block h-[3px] w-24 bg-fresh-lemon origin-left"
              aria-hidden
            />
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 text-lg text-white/90 max-w-md"
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm"
            >
              {actions}
            </motion.div>
          )}
        </div>
      </div>

      {/* RIGHT — photo */}
      <div className="relative min-h-[50vh] md:min-h-0 md:h-full order-first md:order-last">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
