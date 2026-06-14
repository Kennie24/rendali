import { Home } from "@/components/rendalli/home";
import { getAllPostsMeta } from "@/lib/journal";

export default function HomePage() {
  const posts = getAllPostsMeta();
  return <Home posts={posts} />;
}
