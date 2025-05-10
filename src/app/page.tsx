import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";
import { getPublishedPosts, getTags } from "@/lib/notion";
import HeaderSection from "@/app/_components/HeaderSection";
import { Suspense } from "react";
import PostsSkeleton from "@/components/features/blog/PostsSkeleton";
import PostsSuspense from "@/components/features/blog/PostsSuspense";
import TagSectionSkeleton from "@/app/_components/TagSectionSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈",
  description: "제이미의 블로그입니다. 개발과 관련된 다양한 주제를 다룹니다.",
  alternates: {
    canonical: "/",
  },
};

interface Props {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function RootPage({ searchParams }: Readonly<Props>) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag ?? "전체";
  const selectedSort = sort ?? "latest";

  const tagsPromise = getTags();
  const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr_220px]">
        {/* 좌측 사이드바 */}
        <aside className="order-2 md:order-none">
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSection tagsPromise={tagsPromise} selectedTag={selectedTag} />
          </Suspense>
        </aside>
        <div className="order-3 space-y-8 md:order-none">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Suspense fallback={<PostsSkeleton />}>
            <PostsSuspense postsPromise={postsPromise} />
          </Suspense>
        </div>
        {/* 우측 사이드바 */}
        <aside className="order-1 flex flex-col gap-6 md:order-none">
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
