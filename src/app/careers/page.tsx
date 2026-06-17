"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, Leaf, Users, Award } from "lucide-react";
import { Reveal, SectionHeader, EASE } from "@/components/rendalli/primitives";
import { SplitHero } from "@/components/rendalli/split-hero";

const OPENINGS = [
  {
    title: "Aquaculture Technician",
    location: "Lake Victoria, Uganda",
    type: "Full-time",
    department: "Operations",
    body: "Daily cage monitoring, feeding cycles, and water-quality checks. Hands-on, lake-based role.",
  },
  {
    title: "Cold-Chain Logistics Lead",
    location: "Kampala",
    type: "Full-time",
    department: "Logistics",
    body: "Own the route from harvest to customer. Optimise delivery cadence and traceability records.",
  },
  {
    title: "Retail Shop Associate",
    location: "Bulenga Fish Shop",
    type: "Full-time",
    department: "Retail",
    body: "Welcome customers, manage stock, and represent the Rendalli promise at the counter.",
  },
  {
    title: "Wholesale Account Manager",
    location: "Kampala (hybrid)",
    type: "Full-time",
    department: "Sales / B2B",
    body: "Build long-term relationships with restaurants, hotels, and export partners.",
  },
  {
    title: "Marketing & Content Lead",
    location: "Kampala (hybrid)",
    type: "Full-time",
    department: "Marketing",
    body: "Tell the Rendalli story across channels — from the farm to the dinner table.",
  },
  {
    title: "Internships",
    location: "Various",
    type: "3–6 months",
    department: "Operations · Marketing",
    body: "Rolling internships for Ugandan students in aquaculture, logistics, and storytelling.",
  },
];

const VALUES = [
  {
    Icon: Leaf,
    title: "Care, always.",
    body: "Care for the fish, the lake, the team, and the table. It's the through-line of every decision.",
  },
  {
    Icon: Users,
    title: "Family-first culture.",
    body: "Built like a family — long-term thinking, real loyalty, room to grow.",
  },
  {
    Icon: Award,
    title: "Quality over volume.",
    body: "We'd rather do one fish brilliantly than ten things at half-strength.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <SplitHero
        eyebrow="Careers · Rendalli"
        titleLines={["Build the future", "of East African food."]}
        description="We're hiring across the farm, the shop, logistics, and the office. Help us bring sustainably-raised fish to every table."
        image="/images/farm.JPG"
        imageAlt="Rendalli farm on Lake Victoria"
        actions={
          <>
            <a href="mailto:careers@rendalli.co.ug" className="inline-flex items-center gap-2 bg-night-leaf text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              careers@rendalli.co.ug
            </a>
            <Link href="#openings" className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5">
              See open roles
            </Link>
          </>
        }
      />

      {/* VALUES */}
      <section className="bg-background py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="Why Rendalli"
            title={<>Work that <em className="not-italic text-rendalli-green">means something.</em></>}
            description="We're a small, ambitious team — building a brand from the lake up. If you care about food, people, and doing things properly, you'll fit right in."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="rounded-3xl bg-[color:var(--color-steel)] border border-[color:var(--color-mist)] p-8 h-full hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-rendalli-green/10 text-rendalli-green flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium text-night-leaf mb-3">{title}</h3>
                  <p className="text-sm text-[color:var(--color-slate)] leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SPLIT */}
      <section className="grid md:grid-cols-2 bg-[color:var(--color-steel)]">
        <div className="relative min-h-[60vh] md:min-h-[70vh]">
          <Image
            src="/images/01%20%E2%80%94%20Character.JPG"
            alt="Rendalli team at work"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <Reveal y={0} className="flex items-center">
          <div className="w-full px-6 py-16 md:px-16 md:py-24 lg:px-24 lg:py-32 max-w-xl mx-auto md:mx-0">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rendalli-green mb-4">Our people</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-night-leaf tracking-tight leading-[1.05] text-balance mb-6">
              Built by Ugandans, <em className="not-italic text-rendalli-green">for East Africa.</em>
            </h2>
            <p className="text-base md:text-lg text-[color:var(--color-slate)] leading-relaxed mb-4">
              From the cages on Lake Victoria to the counters in Kampala — every Rendalli role plays a direct part in feeding the region well.
            </p>
            <p className="text-base md:text-lg text-[color:var(--color-slate)] leading-relaxed">
              We invest in our people: skills, certifications, real responsibility from day one, and a culture you'll actually look forward to.
            </p>
          </div>
        </Reveal>
      </section>

      {/* OPENINGS */}
      <section className="bg-background py-24 md:py-32">
        <div className="w-full px-6 md:px-10">
          <SectionHeader
            eyebrow="Open roles"
            title={<>Roles we're <em className="not-italic text-rendalli-green">hiring for.</em></>}
            description="Don't see your role? Send us your CV anyway — we're always looking for sharp, caring people."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {OPENINGS.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.06}>
                <div className="group rounded-3xl bg-[color:var(--color-steel)] border border-[color:var(--color-mist)] p-7 h-full hover-lift">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-rendalli-green">{role.department}</p>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-night-leaf bg-fresh-lemon px-2 py-1 rounded-full">
                      {role.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-night-leaf mb-2">{role.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[color:var(--color-slate)] mb-4">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {role.type}
                    </span>
                  </div>
                  <p className="text-sm text-[color:var(--color-slate)] leading-relaxed mb-6">{role.body}</p>
                  <a
                    href={`mailto:careers@rendalli.co.ug?subject=Application — ${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-night-leaf group-hover:text-rendalli-green underline-offset-4 group-hover:underline transition-colors"
                  >
                    Apply now <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden bg-[url('/images/fixed.JPG')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-night-leaf/75 pointer-events-none" />
        <div className="absolute inset-0 corp-grid-bg opacity-20 pointer-events-none" />
        <div className="relative w-full px-6 md:px-10 text-center">
          <Reveal>
            <Briefcase size={32} className="text-fresh-lemon mx-auto mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-balance max-w-3xl mx-auto">
              Want to join the <em className="not-italic text-fresh-lemon">Rendalli team?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-white/75 max-w-xl mx-auto">
              Send your CV and a short note about why you'd be a great fit.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:careers@rendalli.co.ug"
                className="inline-flex items-center gap-3 bg-fresh-lemon text-night-leaf px-8 py-4 rounded-full font-medium hover:bg-white transition-all hover:-translate-y-0.5"
              >
                careers@rendalli.co.ug <ArrowRight size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-night-leaf transition-all hover:-translate-y-0.5"
              >
                Where to find us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
