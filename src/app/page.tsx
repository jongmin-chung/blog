import Link from "next/link";
import { PostCard } from "@/components/features/blog/PostCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";
import { getPublishedPosts } from "@/lib/notion";

const mockTags = [
  { id: "all", name: "전체", count: 20 },
  { id: "html", name: "HTML", count: 10 },
  { id: "css", name: "CSS", count: 5 },
  { id: "typescript", name: "Typescript", count: 3 },
  { id: "nextjs", name: "Next.js", count: 3 },
];

export default async function RootPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <TagSection tagFilters={mockTags} />
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 방식 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="oldest">오래된순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} />
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
