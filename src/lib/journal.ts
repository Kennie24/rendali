import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "journal");

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}

export function getAllPosts(): JournalPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.(md|mdx)$/.test(f));
  const posts = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      excerpt: String(data.excerpt ?? ""),
      date: String(data.date ?? ""),
      readTime: String(data.readTime ?? "3 min read"),
      category: String(data.category ?? "Journal"),
      cover: String(data.cover ?? ""),
      content,
    } satisfies JournalPost;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): JournalPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** Serializable, lightweight shape (no body) for lists. */
export type JournalMeta = Omit<JournalPost, "content">;
export function getAllPostsMeta(): JournalMeta[] {
  return getAllPosts().map(({ content: _c, ...meta }) => ({ ...meta, date: formatDate(meta.date) }));
}
