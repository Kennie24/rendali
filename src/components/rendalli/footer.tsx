import Link from "next/link";
import { SiInstagram, SiFacebook, SiYoutube, SiX } from "@icons-pack/react-simple-icons";
import { MapPin, Mail, Phone } from "lucide-react";
import { RendalliLogo } from "./logo";
import { NAV_ITEMS } from "@/lib/rendalli";

export function SiteFooter() {
  return (
    <footer className="relative bg-night-leaf text-leaf-mist mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <RendalliLogo tone="dark" />
          <p className="text-leaf-mist/70 text-sm leading-relaxed max-w-sm">
            Fresh from the lake, straight to your table. Farmed with care in the waters of East Africa.
          </p>
          <div className="flex gap-4 pt-2 text-leaf-mist/80">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-rendalli-green transition"><SiInstagram size={20} /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-rendalli-green transition"><SiFacebook size={20} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-rendalli-green transition"><SiYoutube size={20} /></a>
            <a href="https://x.com" aria-label="X" className="hover:text-rendalli-green transition"><SiX size={18} /></a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.25em] uppercase text-rendalli-green mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition">{item.heading}</Link>
              </li>
            ))}
            <li><Link href="/journal" className="hover:text-white transition">Journal</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] tracking-[0.25em] uppercase text-rendalli-green mb-4">Visit & talk</p>
          <ul className="space-y-3 text-sm text-leaf-mist/80">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5 text-rendalli-green" /> Bulenga Fish Shop, Kampala, Uganda</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5 text-rendalli-green" /> hello@rendalli.co.ug</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5 text-rendalli-green" /> +256 700 000 000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-leaf-mist/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-leaf-mist/60">
          <p>© {new Date().getFullYear()} Rendalli Ltd. Farm-to-shop within 24 hours · Est. 2024</p>
          <p className="tracking-[0.2em] uppercase">Natural · Organic · Tasty · Together</p>
        </div>
      </div>
    </footer>
  );
}
