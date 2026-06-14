import { getAllPosts, getPost } from "@/lib/journal";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/rendalli/post-layout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: `${p.title} — Rendalli Journal`, description: p.excerpt };
}

export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-GB", {
    year: "numeric", month: "long", day: "numeric",
  });

  const components = useMDXComponents({});

  return (
    <PostLayout
      title={post.title}
      date={date}
      readTime={post.readTime}
      category={post.category}
      cover={post.cover}
    >
      <MDXRemote source={post.content} components={components} />
    </PostLayout>
  );
}
