"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check, Share2 } from "lucide-react";
import type { JournalMeta } from "@/lib/journal";
import { IMAGES } from "@/lib/rendalli";
import { SplitHero } from "@/components/rendalli/split-hero";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function JournalList({ posts }: { posts: JournalMeta[] }) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  async function sharePost(post: JournalMeta) {
    const url = `${window.location.origin}/journal/${post.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
        return;
      } catch {
        // Fall back to copying if sharing is cancelled or unavailable.
      }
    }

    await navigator.clipboard.writeText(url);
    setCopiedSlug(post.slug);
    window.setTimeout(() => setCopiedSlug(null), 1800);
  }

  return (
    <>
      <SplitHero
        eyebrow="Journal · Rendalli"
        titleLines={["Notes from", "the water."]}
        description="Recipes, field stories and the people behind every catch."
        image={IMAGES.heroBg}
        imageAlt="Rendalli journal"
      />

      <section className="py-10 md:py-20 bg-background">
        <div className="w-full px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              className="hover-lift rounded-3xl"
            >
              <Link href={`/journal/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5 bg-muted">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] tracking-[0.2em] uppercase text-night-leaf">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-night-leaf flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="text-xs text-[color:var(--color-slate)] tracking-wider mb-2">{p.date} · {p.readTime}</p>
                <h2 className="text-2xl md:text-3xl font-light text-night-leaf leading-tight tracking-tight group-hover:text-rendalli-green transition-colors text-balance">
                  {p.title}
                </h2>
                <p className="text-[color:var(--color-slate)] mt-3 text-sm leading-relaxed">{p.excerpt}</p>
              </Link>
              <button
                type="button"
                onClick={() => sharePost(p)}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-rendalli-green/20 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-rendalli-green transition hover:border-rendalli-green hover:bg-rendalli-green hover:text-white"
                aria-label={`Share ${p.title}`}
              >
                {copiedSlug === p.slug ? <Check size={15} /> : <Share2 size={15} />}
                {copiedSlug === p.slug ? "Copied" : "Share"}
              </button>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
