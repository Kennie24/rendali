"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiYoutube, SiX } from "@icons-pack/react-simple-icons";

interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
}

interface iHeaderProps {
  navItems: iNavItem[];
  footer?: React.ReactNode;
}

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
};

const DefaultFooter: React.FC = () => (
  <div className="flex w-full text-sm justify-between text-night-leaf px-10 md:px-24 py-5">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SiInstagram size={20} /></a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><SiFacebook size={20} /></a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><SiYoutube size={20} /></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><SiX size={18} /></a>
  </div>
);

const NavLink: React.FC<iNavLinkProps> = ({ heading, href, subheading, setIsActive, index }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleClick = () => setIsActive(false);

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-night-leaf/20 py-4 transition-colors duration-500 md:py-6 uppercase"
    >
      <Link ref={ref} onMouseMove={handleMouseMove} href={href} className="w-full">
        <div className="relative flex items-start">
          <span className="text-night-leaf/50 transition-colors duration-500 text-3xl md:text-4xl font-thin mr-3 tabular-nums">
            {String(index).padStart(2, "0")}.
          </span>
          <div className="flex flex-col">
            <motion.span
              variants={{ initial: { x: 0 }, whileHover: { x: -12 } }}
              transition={{ type: "spring", staggerChildren: 0.04, delayChildren: 0.1 }}
              className="relative z-10 block text-3xl md:text-5xl font-light text-night-leaf tracking-tight"
            >
              {heading.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{ initial: { x: 0 }, whileHover: { x: 12 } }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            {subheading && (
              <span className="text-[11px] tracking-[0.2em] text-deep-forest/70 mt-1 normal-case">
                {subheading}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Curve: React.FC = () => {
  const [h, setH] = useState(900);
  useEffect(() => {
    const update = () => setH(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
    exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full" style={{ fill: "#ffffff" }}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  );
};

const CurvedNavbar: React.FC<iCurvedNavbarProps & { footer?: React.ReactNode }> = ({ setIsActive, navItems, footer }) => (
  <motion.div
    variants={MENU_SLIDE_ANIMATION}
    initial="initial"
    animate="enter"
    exit="exit"
    className="h-[100dvh] w-screen max-w-[34rem] fixed right-0 top-0 z-[90] bg-white"
  >
    <div className="h-full pt-14 flex flex-col justify-between">
      <div className="flex flex-col gap-3 mt-0 px-10 md:px-24">
        <div className="text-night-leaf/60 border-b border-night-leaf/20 uppercase text-[11px] tracking-[0.25em] pb-2 flex justify-between">
          <span>Navigation</span>
          <span>Rendalli · 2026</span>
        </div>
        <section className="bg-transparent mt-2">
          <div className="mx-auto max-w-7xl">
            {navItems.map((item, index) => (
              <NavLink key={item.href} {...item} setIsActive={setIsActive} index={index + 1} />
            ))}
          </div>
        </section>
      </div>
      {footer}
    </div>
    <Curve />
  </motion.div>
);

const Header: React.FC<iHeaderProps> = ({ navItems, footer = <DefaultFooter /> }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsActive((v) => !v)}
          className="fixed right-4 top-4 z-[100] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-rendalli-green shadow-lg shadow-rendalli-green/25 hover:scale-105 transition-transform"
          role="button"
          aria-label={isActive ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-4 flex flex-col justify-between items-center">
            <span className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${isActive ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${isActive ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <CurvedNavbar setIsActive={setIsActive} navItems={navItems} footer={footer} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
