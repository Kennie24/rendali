"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const PHONE = "256706609808"; // international format, no +
const AGENT_NAME = "Rendalli Sales";
const QUICK_REPLIES = [
  "I'd like to place an order 🐟",
  "What sizes are available today?",
  "Wholesale / B2B enquiry",
  "Where is your shop?",
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function WhatsAppBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Open the bubble once on first visit after a small delay
    setMounted(true);
    const seen = sessionStorage.getItem("rendalli-wa-seen");
    if (!seen) {
      const t = window.setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("rendalli-wa-seen", "1");
      }, 4000);
      return () => window.clearTimeout(t);
    }
  }, []);

  function send(text: string) {
    const body = text.trim();
    if (!body) return;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
      {/* CHAT PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="w-[340px] max-w-[calc(100vw-2.5rem)] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 bg-white border border-black/5"
            role="dialog"
            aria-label="Chat with Rendalli on WhatsApp"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-start gap-3">
              <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <SiWhatsapp size={22} className="text-white" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#075E54]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm leading-tight">{AGENT_NAME}</p>
                <p className="text-[11px] text-white/80 mt-0.5">
                  Typically replies in minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/80 hover:text-white transition-colors -mt-1 -mr-1 p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#E5DDD5] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><circle cx=%221%22 cy=%221%22 r=%221%22 fill=%22%23d4cabf%22/></svg>')] p-4 max-h-[260px] overflow-y-auto">
              <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] shadow-sm">
                <p className="text-sm text-night-leaf leading-relaxed">
                  👋 Hi! Welcome to Rendalli. How can we help you today?
                </p>
                <p className="text-[10px] text-night-leaf/50 mt-1 text-right">
                  now
                </p>
              </div>

              {/* Quick reply chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="text-[12px] bg-white text-night-leaf rounded-full px-3 py-1.5 shadow-sm hover:bg-rendalli-green hover:text-white transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(message);
                setMessage("");
              }}
              className="flex items-center gap-2 bg-[#F0F0F0] p-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-white rounded-full px-4 py-2 text-sm outline-none placeholder:text-night-leaf/40"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebe57] transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 flex items-center justify-center"
      >
        {!open && (
          <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        )}
        <span className="relative">
          {open ? <X size={22} /> : <SiWhatsapp size={26} />}
        </span>
      </motion.button>
    </div>
  );
}
