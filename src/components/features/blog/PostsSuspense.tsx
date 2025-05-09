"use client";

import Link from "next/link";
import { PostCard } from "@/components/features/blog/PostCard";
import { GetPublishedPostsResponse } from "@/lib/notion";
import { use } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  postsPromise: Promise<GetPublishedPostsResponse>;
}

export default function PostsSuspense({ postsPromise }: Readonly<Props>) {
  const { posts } = use(postsPromise);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <PostCard post={post} isFirst={index === 0} />
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outline" size="lg" className="w-full">
          더보기
        </Button>
      </div>
    </div>
  );
}
