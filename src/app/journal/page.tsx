import { JournalList } from "@/components/rendalli/journal-list";
import { getAllPostsMeta } from "@/lib/journal";

export const metadata = {
  title: "Journal — Rendalli",
  description: "Recipes, field stories and the people behind every catch.",
};

export default function JournalPage() {
  const posts = getAllPostsMeta();
  return <JournalList posts={posts} />;
}
