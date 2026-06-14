"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative bg-night-leaf text-leaf-mist overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_center,_var(--color-rendalli-green),_transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4"
        >
          Stay close to the lake
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-4xl md:text-6xl font-light tracking-tight text-white text-balance"
        >
          Recipes, stories &amp; first word on new batches — <em className="not-italic text-fresh-lemon">in your inbox.</em>
        </motion.h2>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 inline-flex items-center gap-3 bg-rendalli-green text-white px-6 py-3 rounded-full"
          >
            <Check size={18} /> Asante! Keep an eye on your inbox.
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-leaf-mist/60" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@family.com"
                className="w-full bg-white/5 border border-leaf-mist/20 rounded-full pl-12 pr-4 py-4 text-white placeholder-leaf-mist/40 focus:outline-none focus:border-rendalli-green focus:bg-white/10 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-fresh-lemon text-night-leaf px-7 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        )}
        <p className="text-xs text-leaf-mist/50 mt-5">No spam. One note a month. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
