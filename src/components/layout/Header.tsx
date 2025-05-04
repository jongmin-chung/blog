import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center px-4">
        <Link href="/" className="text-xl font-semibold">
          <span className="font-bold">Hello World</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/" className="hover:bg-muted/50 rounded px-2 py-1 font-medium transition-colors">
            홈
          </Link>
          <Link href="/blog" className="hover:bg-muted/50 rounded px-2 py-1 font-medium transition-colors">
            블로그
          </Link>
          <Link href="/about" className="hover:bg-muted/50 rounded px-2 py-1 font-medium transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
