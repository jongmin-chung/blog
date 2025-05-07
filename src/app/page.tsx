import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";
import { getPublishedPosts, getTags } from "@/lib/notion";
import Posts from "@/components/features/blog/client/Posts";
import HeaderSection from "@/app/_components/HeaderSection";

interface Props {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function RootPage({ searchParams }: Readonly<Props>) {
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
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Posts posts={posts} />
        </div>
        {/* 우측 사이드바 */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
