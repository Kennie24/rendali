"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export type AnimatedNavigationTabItem = {
  id: number;
  title: string;
  href: string;
};

export function AnimatedNavigationTabs({ items }: { items: AnimatedNavigationTabItem[] }) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<AnimatedNavigationTabItem | null>(null);

  const active = useMemo(() => {
    const exact = items.find((item) => item.href === pathname);
    if (exact) return exact;

    return (
      items
        .filter((item) => item.href !== "/" && pathname.startsWith(item.href))
        .sort((a, b) => b.href.length - a.href.length)[0] ?? items[0]
    );
  }, [items, pathname]);

  return (
    <nav aria-label="Primary navigation" className="relative">
      <ul className="flex items-center justify-center gap-1 rounded-full border border-border/60 bg-white/70 p-1 shadow-sm backdrop-blur">
        {items.map((item) => {
          const isActive = active.id === item.id;
          const isHovered = hovered?.id === item.id;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-rendalli-green",
                  isActive ? "text-rendalli-green" : "text-muted-foreground"
                )}
              >
                <span className="relative z-10">{item.title}</span>
                {isHovered && (
                  <motion.span
                    layoutId="navbar-hover-bg"
                    className="absolute inset-0 rounded-full bg-rendalli-green/10"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-line"
                    className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-rendalli-green"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden
                  />
                )}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="navbar-hover-line"
                    className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-rendalli-green/60"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    aria-hidden
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
