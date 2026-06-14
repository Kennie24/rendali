import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const LOGO_SRC = "https://res.cloudinary.com/dcnbho9c9/image/upload/v1776718425/RUBBER_STAMP_rrhy81.png";

export function RendalliLogo({
  className,
  tone: _tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  void _tone;
  return (
    <Link href="/" className={cn("inline-flex items-center group", className)} aria-label="Rendalli — home">
      <Image
        src={LOGO_SRC}
        alt="Rendalli"
        width={256}
        height={256}
        sizes="(min-width: 768px) 128px, 80px"
        className="shrink-0 object-contain h-20 w-20 md:h-32 md:w-32"
        priority
      />
    </Link>
  );
}
