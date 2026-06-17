"use client";

import {
  Menu,
  Search,
  MapPin,
  Fish,
  ChefHat,
  Newspaper,
  Sparkles,
  Leaf,
  Briefcase,
  Users,
} from "lucide-react";
import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedNavigationTabs } from "@/components/ui/animated-navigation-tabs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  cta?: {
    text: string;
    url: string;
  };
}

const DEFAULT_MENU: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "Discover",
    url: "#",
    items: [
      {
        title: "Products",
        description: "Fresh Tilapia raised with care",
        icon: <Fish className="size-5 shrink-0" />,
        url: "/products",
      },
      {
        title: "About Us",
        description: "Who we are and what guides us",
        icon: <Users className="size-5 shrink-0" />,
        url: "/about",
      },
      {
        title: "Our Story",
        description: "From Lake Victoria to your table",
        icon: <Leaf className="size-5 shrink-0" />,
        url: "/story",
      },
      {
        title: "Find a Shop",
        description: "Bulenga Fish Shop and beyond",
        icon: <MapPin className="size-5 shrink-0" />,
        url: "/contact",
      },
    ],
  },
  {
    title: "Journal",
    url: "/journal",
    items: [
      {
        title: "Recipes",
        description: "Three ways to cook tilapia",
        icon: <ChefHat className="size-5 shrink-0" />,
        url: "/journal/three-ways-to-cook-tilapia",
      },
      {
        title: "Sustainability",
        description: "Why we farm the right way",
        icon: <Sparkles className="size-5 shrink-0" />,
        url: "/journal/why-we-farm-the-right-way",
      },
      {
        title: "On the farm",
        description: "How we make 24 hours happen",
        icon: <Newspaper className="size-5 shrink-0" />,
        url: "/journal/fresh-from-the-lake",
      },
    ],
  },
  { title: "Careers", url: "/careers" },
  { title: "Contact", url: "/contact" },
];

const DESKTOP_TABS = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Products", href: "/products" },
  { id: 3, title: "About", href: "/about" },
  { id: 4, title: "Story", href: "/story" },
  { id: 5, title: "Journal", href: "/journal" },
  { id: 6, title: "Careers", href: "/careers" },
  { id: 7, title: "Contact", href: "/contact" },
];

export default function Navbar({
  logo = {
    url: "/",
    src: "https://res.cloudinary.com/dcnbho9c9/image/upload/v1776718425/RUBBER_STAMP_rrhy81.png",
    alt: "Rendalli",
    title: "Rendalli",
  },
  menu = DEFAULT_MENU,
  mobileExtraLinks = [
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Story", url: "/story" },
    { name: "Journal", url: "/journal" },
    { name: "Careers", url: "/careers" },
    { name: "Contact", url: "/contact" },
  ],
  cta = { text: "Where to find us", url: "/contact" },
}: NavbarProps) {
  const [openSearch, setOpenSearch] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="w-full px-4 md:px-8 py-3">
        {/* Desktop Navbar */}
        <nav className="hidden items-center justify-between gap-6 lg:flex">
          <Link href={logo.url} className="flex items-center gap-2 shrink-0">
            <Image
              width={64}
              height={64}
              src={logo.src}
              className="h-12 w-12 object-contain"
              alt={logo.alt}
              priority
            />
            <span className="sr-only">{logo.title}</span>
          </Link>

          <div className="flex flex-1 justify-center">
            <AnimatedNavigationTabs items={DESKTOP_TABS} />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenSearch(true)}
              aria-label="Search"
            >
              <Search className="size-4" />
            </Button>
            <Link href={cta.url}>
              <Button size="sm" className="gap-2 px-7 py-5 rounded-full">
                <MapPin className="size-4" />
                {cta.text}
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                width={48}
                height={48}
                src={logo.src}
                className="h-10 w-10 object-contain"
                alt={logo.alt}
                priority
              />
              <span className="sr-only">{logo.title}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenSearch(true)}
                aria-label="Search"
              >
                <Search className="size-4" />
              </Button>

              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                      <Menu className="size-4" />
                    </Button>
                  }
                />
                <SheetContent className="overflow-y-auto p-6">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href={logo.url} className="flex items-center gap-2">
                        <Image
                          width={48}
                          height={48}
                          src={logo.src}
                          className="h-10 w-10 object-contain"
                          alt={logo.alt}
                        />
                        <span>{logo.title}</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-1"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t border-border py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link) => (
                          <Link
                            key={link.url}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            href={link.url}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link href={cta.url}>
                      <Button className="w-full gap-2 py-5">
                        <MapPin className="size-4" />
                        {cta.text}
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Search products, recipes, journal..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Links">
            <CommandItem onSelect={() => (window.location.href = "/products")}>
              <Fish className="size-4" /> Products
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = "/about")}>
              <Users className="size-4" /> About Us
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = "/story")}>
              <Leaf className="size-4" /> Our Story
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = "/journal")}>
              <Newspaper className="size-4" /> Journal
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = "/careers")}>
              <Briefcase className="size-4" /> Careers
            </CommandItem>
            <CommandItem onSelect={() => (window.location.href = "/contact")}>
              <MapPin className="size-4" /> Contact
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-2 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-foreground"
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block py-2 font-semibold text-foreground"
    >
      {item.title}
    </Link>
  );
};
