import Header from "@/components/ui/curved-menu";
import { NAV_WITH_JOURNAL as NAV_ITEMS } from "@/lib/rendalli";
import { SiteFooter } from "./footer";
import { RendalliLogo } from "./logo";
import { Cursor } from "./cursor";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Cursor />
      <div className="fixed top-3 left-4 md:top-4 md:left-8 z-[100]">
        <RendalliLogo tone="light" />
      </div>
      <Header navItems={NAV_ITEMS} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
