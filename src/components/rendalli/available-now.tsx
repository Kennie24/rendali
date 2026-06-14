"use client";
import { motion } from "framer-motion";
import { Phone, Truck, Store } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SIZES = [
  { size: "Medium", note: "Whole fish" },
  { size: "Large", note: "Whole fish" },
  { size: "Fillet", note: "500g fillets" },
];

export function AvailableNow() {
  return (
    <section className="relative bg-rendalli-green text-white py-24 md:py-32 overflow-hidden">
      {/* decorative swoosh */}
      <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fresh-lemon/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-night-leaf/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* HEADLINE */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-fresh-lemon mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-fresh-lemon opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-fresh-lemon" />
              </span>
              Available Now
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-balance"
            >
              Fresh Tilapia.
              <br />
              <em className="not-italic text-night-leaf">Farmed with care.</em>
              <br />
              Pick yours up today.
            </motion.h2>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/85">
              <span className="inline-flex items-center gap-2"><Truck size={16} className="text-fresh-lemon" /> Daily deliveries</span>
              <span className="inline-flex items-center gap-2"><Store size={16} className="text-fresh-lemon" /> Supermarket offer</span>
            </div>

            <motion.a
              href="tel:+256706609808"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 inline-flex items-center gap-4 bg-fresh-lemon text-night-leaf pl-4 pr-6 py-3 rounded-full hover:bg-white transition-colors group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-night-leaf text-fresh-lemon group-hover:bg-rendalli-green group-hover:text-white transition-colors">
                <Phone size={18} />
              </span>
              <span className="text-left">
                <span className="block text-[10px] tracking-[0.25em] uppercase opacity-70">Sales helpline</span>
                <span className="block text-xl font-semibold tracking-tight tabular-nums">0706 609 808</span>
              </span>
            </motion.a>
          </div>

          {/* SIZE CARDS */}
          <div className="space-y-4">
            {SIZES.map((p, i) => (
              <motion.div
                key={p.size}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="group relative bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 md:p-7 hover:bg-white hover:text-night-leaf transition-colors"
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-fresh-lemon group-hover:text-rendalli-green mb-1">{p.note}</p>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight">{p.size}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
