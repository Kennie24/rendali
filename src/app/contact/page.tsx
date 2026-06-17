"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Mail, Phone, Send, Check, Building2, Truck, ShoppingBag } from "lucide-react";
import { Reveal, SectionHeader, EASE } from "@/components/rendalli/primitives";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [inquiryType, setInquiryType] = useState<"retail" | "wholesale" | "press">("retail");

  return (
    <>
      {/* HERO — 2 column */}
      <section aria-label="Contact Rendalli" className="grid md:grid-cols-2 bg-[#2E7D32] text-white md:h-[78dvh] md:min-h-[560px]">
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
              Contact · Rendalli
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance overflow-hidden">
              <span className="block overflow-hidden">
                {"Let's talk fish.".split(" ").map((word, i) => (
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
                {"And good business.".split(" ").map((word, i) => (
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 text-lg text-white/90 max-w-md"
            >
              Retail orders, wholesale enquiries, or partnership questions — we&apos;re always close to the water.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm"
            >
              <a
                href="tel:+256706609808"
                className="inline-flex items-center gap-2 bg-night-leaf text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5"
              >
                <Phone size={15} /> 0706 609 808
              </a>
              <a
                href="mailto:hello@rendalli.co.ug"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5"
              >
                <Mail size={15} /> hello@rendalli.co.ug
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="relative min-h-[50vh] md:min-h-0 md:h-full order-first md:order-last">
          <Image
            src="/images/contact%20hero.jpg"
            alt="Rendalli — close to the water"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-background border-y border-[color:var(--color-mist)]">
        <div className="w-full px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8">
          {[
            { Icon: MapPin, title: "Visit", body: "Bulenga Fish Shop, Kampala" },
            { Icon: Phone, title: "Call sales", body: "+256 706 609 808" },
            { Icon: Mail, title: "Email", body: "hello@rendalli.co.ug" },
          ].map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-rendalli-green/10 text-rendalli-green flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-slate)]">{title}</p>
                  <p className="text-base text-night-leaf font-medium">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[color:var(--color-steel)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow="Get in touch"
            title={<>Tell us what you <em className="not-italic text-rendalli-green">need.</em></>}
            description="Pick the inquiry type so we can route you to the right team."
          />

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: "retail", label: "Retail order", Icon: ShoppingBag },
                { id: "wholesale", label: "Wholesale / B2B", Icon: Truck },
                { id: "press", label: "Press / partner", Icon: Building2 },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setInquiryType(id as typeof inquiryType)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:-translate-y-0.5 ${
                    inquiryType === id
                      ? "bg-night-leaf text-white border-night-leaf"
                      : "bg-white text-night-leaf border-[color:var(--color-mist)] hover:border-rendalli-green"
                  }`}
                >
                  <Icon size={15} /> {label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-white border border-[color:var(--color-mist)] p-8 md:p-12 hover-lift">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-rendalli-green text-white flex items-center justify-center">
                    <Check size={22} />
                  </span>
                  <div>
                    <p className="font-medium text-night-leaf text-lg">Asante! We got it.</p>
                    <p className="text-sm text-[color:var(--color-slate)]">We&apos;ll be in touch within one business day.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingField id="name" label="Your name" />
                    <FloatingField id="email" label="Email address" type="email" />
                  </div>
                  {inquiryType !== "retail" && (
                    <div className="grid md:grid-cols-2 gap-5">
                      <FloatingField id="company" label="Company / organisation" />
                      <FloatingField id="phone" label="Phone" type="tel" />
                    </div>
                  )}
                  <FloatingField id="message" label={inquiryType === "wholesale" ? "Volumes, cadence, location" : "What's on your plate?"} as="textarea" />
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex items-center gap-3 bg-night-leaf text-white px-8 py-4 rounded-full font-medium hover:bg-rendalli-green transition-colors"
                    >
                      Send message <Send size={16} />
                    </motion.button>
                    <p className="text-xs text-[color:var(--color-slate)]">Typical response: under 24 hours.</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE / CTA */}
      <section className="relative bg-fresh-lemon py-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap text-5xl md:text-8xl font-light text-night-leaf/90"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-16">
              Come & Taste <span className="w-3 h-3 rounded-full bg-night-leaf" />
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
      "peer w-full bg-transparent border-0 border-b-2 border-[color:var(--color-mist)] focus:border-rendalli-green outline-none pt-6 pb-2 text-night-leaf placeholder-transparent transition-colors",
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
          active ? "top-0 text-xs text-rendalli-green tracking-[0.2em] uppercase" : "top-6 text-base text-[color:var(--color-slate)]"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
