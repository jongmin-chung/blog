import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";
import { getTags } from "@/lib/notion";
import HeaderSection from "@/app/_components/HeaderSection";
import { Suspense } from "react";
import PostsSkeleton from "@/components/features/blog/PostsSkeleton";
import PostsSuspense from "@/components/features/blog/PostsSuspense";
import TagSectionSkeleton from "@/app/_components/TagSectionSkeleton";

interface Props {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function RootPage({ searchParams }: Readonly<Props>) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag ?? "전체";
  const selectedSort = sort ?? "latest";

  const tags = getTags();
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSection tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Suspense fallback={<PostsSkeleton />}>
            <PostsSuspense selectedTag={selectedTag} selectedSort={selectedSort} />
          </Suspense>
        </div>
        {/* 우측 사이드바 */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
