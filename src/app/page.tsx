import Link from "next/link";
import { PostCard } from "@/components/features/blog/PostCard";
import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";
import { getPublishedPosts, getTags } from "@/lib/notion";
import SortSelect from "@/app/_components/client/SortSelect";

interface SearchTagProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function RootPage({ searchParams }: Readonly<SearchTagProps>) {
  const { tag, sort } = await searchParams;

  const selectedTag = tag ?? "전체";
  const selectedSort = sort ?? "latest";

  const [posts, tags] = await Promise.all([
    getPublishedPosts(selectedTag, selectedSort),
    getTags(),
  ]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              {selectedTag === "전체" ? "블로그 목록" : `${selectedTag} 관련 글`}
            </h2>
            <SortSelect />
          </div>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {posts.map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} isFirst={idx === 0} />
              </Link>
            ))}
          </div>
        </div>
        {/* 우측 사이드바 */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
