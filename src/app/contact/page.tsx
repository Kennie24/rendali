"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/lib/rendalli";
import { MapPin, Mail, Phone, Send, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* HERO — split screen with drift-in headline and floating label reveal */}
      <section className="relative min-h-[100dvh] grid md:grid-cols-2 pt-28">
        <div className="relative overflow-hidden bg-night-leaf text-white flex items-center">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: EASE }}
            className="absolute inset-0"
          >
            <Image src={IMAGES.heroBg} alt="Ugandan market" fill sizes="50vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-night-leaf/70 via-night-leaf/50 to-night-leaf" />
          <div className="relative z-10 px-6 md:px-14 py-16 w-full">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-8"
            >
              Come say hello
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
              <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: EASE }} className="block">
                Let&apos;s build
              </motion.span>
              <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: EASE }} className="block italic text-fresh-lemon">
                something
              </motion.span>
              <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: EASE }} className="block">
                delicious.
              </motion.span>
            </h1>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
              className="mt-12 space-y-5 text-leaf-mist"
            >
              {[
                { Icon: MapPin, label: "Bulenga Fish Shop, Kampala, Uganda" },
                { Icon: Mail, label: "hello@rendalli.co.ug" },
                { Icon: Phone, label: "+256 700 000 000" },
              ].map(({ Icon, label }, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                  className="flex items-center gap-4"
                >
                  <span className="w-10 h-10 rounded-full bg-rendalli-green/20 text-rendalli-green flex items-center justify-center">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm md:text-base">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-background flex items-center">
          <div className="w-full px-6 md:px-14 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-3">Drop us a line</p>
              <h2 className="text-3xl md:text-4xl font-light text-night-leaf tracking-tight mb-8">Fresh Nile Tilapia, farmed with care. Pick yours up today.</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-leaf-mist border border-rendalli-green/30 flex items-center gap-4"
                >
                  <span className="w-12 h-12 rounded-full bg-rendalli-green text-white flex items-center justify-center">
                    <Check size={22} />
                  </span>
                  <div>
                    <p className="font-medium text-night-leaf">Asante! We got it.</p>
                    <p className="text-sm text-deep-forest/80">We&apos;ll be in touch within one business day.</p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <FloatingField id="name" label="Your name" />
                  <FloatingField id="email" label="Email address" type="email" />
                  <FloatingField id="message" label="What&rsquo;s on your plate?" as="textarea" />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center gap-3 bg-night-leaf text-white px-8 py-4 rounded-full font-medium hover:bg-rendalli-green transition-colors"
                  >
                    Send message <Send size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISIT BAND */}
      <section className="relative bg-fresh-lemon py-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap text-5xl md:text-8xl font-light text-night-leaf/90"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-16">
              Come &amp; Taste <span className="w-3 h-3 rounded-full bg-night-leaf" />
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
}

function FloatingField({
  id,
  label,
  type = "text",
  as = "input",
}: {
  id: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);
  const active = focus || val.length > 0;

  const common = {
    id,
    name: id,
    value: val,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setVal(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required: true,
    className:
      "peer w-full bg-transparent border-0 border-b-2 border-border focus:border-rendalli-green outline-none pt-6 pb-2 text-night-leaf placeholder-transparent transition-colors",
    placeholder: label,
  };

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea rows={3} {...common} />
      ) : (
        <input type={type} {...common} />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 pointer-events-none transition-all duration-200 ${
          active ? "top-0 text-xs text-rendalli-green tracking-[0.2em] uppercase" : "top-6 text-base text-deep-forest/60"
        }`}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}
