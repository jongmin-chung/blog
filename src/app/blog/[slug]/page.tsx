import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import { getPostBySlug } from "@/lib/notion";
import { formatDate } from "@/lib/date";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxOptions from "../../../../mdx.config";
import { compile } from "@mdx-js/mdx";
import withSlugs from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import rehypeSanitize from "rehype-sanitize";
import Utterances from "@/components/Utterances";

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

function TableOfContentsLink({ item }: { item: TocEntry }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.value}
      </Link>
      {item.children && item.children.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.children.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Readonly<BlogPostProps>) {
  const { slug } = await params;
  const { markdown, post } = await getPostBySlug(slug);

  const { data } = await compile(markdown, {
    rehypePlugins: [withSlugs, rehypeSanitize, withToc, withTocExport],
  });

  return (
    <div className="container py-12">
      <div className="grid grid-cols-[240px_1fr_240px] gap-8">
        <aside>{/* 추후 콘텐츠 추가 */}</aside>
        <section>
          {/* 블로그 헤더 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {post.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
            </div>

            {/* 메타 정보 */}
            <div className="text-muted-foreground flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              {/*<div className="flex items-center gap-1">*/}
              {/*  <Clock className="h-4 w-4" />*/}
              {/*  <span>5분 읽기</span>*/}
              {/*</div>*/}
            </div>
          </div>

          <Separator className="my-8" />

          {/* 블로그 본문 */}
          <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-[var(--header-height)] max-w-none">
            {/* 동적 MDX 파일 Option */}
            <MDXRemote source={markdown} options={{ mdxOptions }} />
          </div>

          <Separator className="my-16" />

          <Utterances />
        </section>
        <aside className="relative">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/60 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">목차</h3>
              <nav className="space-y-3 text-sm">
                {data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
