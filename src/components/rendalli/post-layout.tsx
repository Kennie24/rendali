"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, Check, Share2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function PostLayout({
  title,
  date,
  readTime,
  category,
  cover,
  children,
}: {
  title: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.1 });

  async function sharePost() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // Fall back to copying if sharing is cancelled or unavailable.
      }
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article ref={ref}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-rendalli-green origin-left z-30"
        aria-hidden
      />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-deep-forest hover:text-rendalli-green transition mb-10">
              <ArrowLeft size={16} /> Back to journal
            </Link>
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">{category}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-4xl md:text-6xl font-light tracking-tight text-night-leaf text-balance leading-[1.05]"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-deep-forest/70"
          >
            <p className="tracking-wider">{date} · {readTime}</p>
            <button
              type="button"
              onClick={sharePost}
              className="inline-flex items-center gap-2 rounded-full border border-rendalli-green/20 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-rendalli-green transition hover:border-rendalli-green hover:bg-rendalli-green hover:text-white"
              aria-label="Share this journal post"
            >
              {copied ? <Check size={15} /> : <Share2 size={15} />}
              {copied ? "Copied" : "Share article"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* COVER */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="max-w-5xl mx-auto px-6 md:px-10"
      >
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
          <Image src={cover} alt={title} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" priority />
        </div>
      </motion.div>

      {/* BODY */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    </article>
  );
}
