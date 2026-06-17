"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Section wrapper with consistent spacing */
export function Section({
  children,
  className = "",
  bg = "default",
}: {
  children: ReactNode;
  className?: string;
  bg?: "default" | "steel" | "navy" | "leaf";
}) {
  const bgClass = {
    default: "bg-background",
    steel: "bg-[color:var(--color-steel)]",
    navy: "bg-[color:var(--color-navy)] text-white",
    leaf: "bg-leaf-mist",
  }[bg];
  return (
    <section className={`relative py-20 md:py-28 ${bgClass} ${className}`}>{children}</section>
  );
}

/** Scroll-triggered fade/slide reveal */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow + headline + optional description */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const eyebrowColor = invert ? "text-fresh-lemon" : "text-rendalli-green";
  const titleColor = invert ? "text-white" : "text-night-leaf";
  const descColor = invert ? "text-white/70" : "text-[color:var(--color-slate)]";
  return (
    <div className={`max-w-3xl ${alignCls} mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal>
          <p className={`text-[11px] tracking-[0.3em] uppercase ${eyebrowColor} mb-4`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light ${titleColor} tracking-tight text-balance leading-[1.05]`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-6 text-lg leading-relaxed max-w-2xl ${descColor} ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Animated counter — counts up to value when in view */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        ref.current.textContent = `${prefix}${rounded.toLocaleString()}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}

/** Stat block */
export function Stat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="text-left">
        <div className="text-5xl md:text-7xl font-light tracking-tight text-night-leaf tabular-nums">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <p className="mt-3 text-sm tracking-[0.2em] uppercase text-[color:var(--color-slate)]">{label}</p>
      </div>
    </Reveal>
  );
}

/** Infinite horizontal marquee */
export function Marquee({
  items,
  speed = 30,
  invert = false,
}: {
  items: string[];
  speed?: number;
  invert?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-12 text-xl md:text-2xl font-light tracking-wide ${
              invert ? "text-white/80" : "text-[color:var(--color-slate)]"
            }`}
          >
            {item}
            <span className={`w-2 h-2 rounded-full ${invert ? "bg-fresh-lemon" : "bg-rendalli-green"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Parallax container — children slide based on scroll progress */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
