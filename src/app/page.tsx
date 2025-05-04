import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Github from "@/lib/lucide-react/Github";
import Gitlab from "@/lib/lucide-react/Gitlab";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PostCard } from "@/components/features/blog/PostCard";

const mockTags = [
  { name: "전체", count: 30 },
  { name: "React", count: 10 },
  { name: "Next.js", count: 5 },
  { name: "Typescript", count: 8 },
  { name: "CSS", count: 12 },
  { name: "HTML", count: 15 },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/jongmin-chung",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/jongmin-chung",
  },
];

const mockPosts = [
  {
    id: "1",
    title: "Next.js 블로그",
    description: "Next.js Notion API를 활용하여 개인 블로그를..",
    coverImage: "https://picsum.photos/800/400",
    tags: [
      { id: "1", name: "Next.js" },
      { id: "2", name: "React" },
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
      { id: "3", name: "TypeScript" },
      { id: "4", name: "JavaScript" },
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
          <Card>
            <CardHeader>
              <CardTitle>태그 목록</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {mockTags.map((tag) => (
                  <Link href={`?tag=${tag.name}`} key={tag.name}>
                    <div className="hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors">
                      <span>{tag.name}</span>
                      <span>{tag.count}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        {/* 우측 사이드바 */}
        <aside>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-muted rounded-full p-2">
                    <div className="h-36 w-36 overflow-hidden rounded-full">
                      <Image
                        src="/images/profile-light.png"
                        alt="Jamie's profile"
                        width={144}
                        height={144}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold">Jamie</h3>
                  <p className="text-primary text-sm">Software Engineer</p>
                </div>

                <div className="flex justify-center gap-2">
                  {socialLinks.map((item, index) => (
                    <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
