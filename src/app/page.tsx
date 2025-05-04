import Link from "next/link";
import { PostCard } from "@/components/features/blog/PostCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TagSection from "@/app/_components/TagSection";
import ProfileSection from "@/app/_components/ProfileSection";

const mockTags = [
  { id: "all", name: "전체", count: 20 },
  { id: "html", name: "HTML", count: 10 },
  { id: "css", name: "CSS", count: 5 },
  { id: "typescript", name: "Typescript", count: 3 },
  { id: "nextjs", name: "Next.js", count: 3 },
];

const mockPosts = [
  {
    id: "1",
    title: "Next.js 블로그",
    description: "Next.js Notion API를 활용하여 개인 블로그를..",
    coverImage: "https://picsum.photos/800/400",
    tags: [
      { id: "1", name: "Next.js", count: 1 },
      { id: "2", name: "React", count: 1 },
    ],
    authors: "Jamie",
    date: "2025-05-04",
  },
  {
    id: "2",
    title: "TypeScript 기초 다지기",
    description: "TypeScript의 기본 문법과 실전에서 자주 사용되는 패턴들을...",
    coverImage: "https://picsum.photos/800/401",
    tags: [
      { id: "3", name: "TypeScript", count: 1 },
      { id: "4", name: "JavaScript", count: 1 },
    ],
    authors: "Jamie",
    date: "2025-05-04",
  },
];

export default function RootPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <TagSection tags={mockTags} />
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
            {mockPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
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
