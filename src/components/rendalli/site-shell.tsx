import Navbar from "@/components/ui/navbar";
import { SiteFooter } from "./footer";
import { Cursor } from "./cursor";
import { Topbar } from "./topbar";
import { WhatsAppBot } from "./whatsapp-bot";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Cursor />
      <Topbar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppBot />
    </div>
  );
}
