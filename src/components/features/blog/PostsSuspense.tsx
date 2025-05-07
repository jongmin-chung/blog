import Link from "next/link";
import { PostCard } from "@/components/features/blog/PostCard";
import { getPublishedPosts } from "@/lib/notion";

interface Props {
  selectedTag: string;
  selectedSort: string;
}

export default async function PostsSuspense({ selectedTag, selectedSort }: Readonly<Props>) {
  const { posts } = await getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return (
    <div className="grid gap-4">
      {posts.map((post, idx) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={idx === 0} />
        </Link>
      ))}
    </div>
  );
}
