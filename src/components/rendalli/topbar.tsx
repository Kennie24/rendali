"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiX,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const SOCIALS = [
  { Icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: SiYoutube, href: "https://youtube.com", label: "YouTube" },
  { Icon: SiX, href: "https://twitter.com", label: "X (Twitter)" },
  { Icon: SiWhatsapp, href: "https://wa.me/256706609808", label: "WhatsApp" },
];

export function Topbar() {
  return (
    <div className="hidden md:block bg-night-leaf text-white/90 text-xs">
      <div className="w-full px-6 md:px-10 flex items-center justify-between h-10">
        {/* LEFT — contact info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+256706609808"
            className="inline-flex items-center gap-2 hover:text-fresh-lemon transition-colors"
          >
            <Phone size={13} className="text-fresh-lemon" />
            <span className="tabular-nums tracking-wide">+256 706 609 808</span>
          </a>
          <a
            href="mailto:hello@rendalli.co.ug"
            className="hidden lg:inline-flex items-center gap-2 hover:text-fresh-lemon transition-colors"
          >
            <Mail size={13} className="text-fresh-lemon" />
            <span>hello@rendalli.co.ug</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-2 text-white/70">
            <MapPin size={13} className="text-fresh-lemon" />
            <span>Bulenga Fish Shop, Kampala</span>
          </span>
        </div>

        {/* RIGHT — socials */}
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline text-[10px] tracking-[0.25em] uppercase text-white/60 mr-2">
            Follow us
          </span>
          {SOCIALS.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-7 h-7 inline-flex items-center justify-center rounded-full text-white/80 hover:bg-rendalli-green hover:text-white transition-colors"
            >
              <Icon size={13} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
