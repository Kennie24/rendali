import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-night-leaf mt-12 mb-6 text-balance">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-night-leaf mt-14 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium tracking-tight text-night-leaf mt-10 mb-3">{children}</h3>
    ),
    p: ({ children }) => <p className="text-lg text-deep-forest/85 leading-relaxed my-5 max-w-2xl">{children}</p>,
    a: ({ href = "#", children }) => (
      <Link href={href} className="text-rendalli-green underline-offset-4 hover:underline">
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 my-5 space-y-2 text-deep-forest/85">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 my-5 space-y-2 text-deep-forest/85">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-rendalli-green pl-6 my-8 text-xl italic text-night-leaf">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-border" />,
    img: (props) => (
      <Image
        className="rounded-2xl my-8"
        sizes="(min-width: 768px) 768px, 100vw"
        width={1600}
        height={900}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
