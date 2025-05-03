import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="text-xl font-semibold">
          <span className="font-bold">Hello World</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            홈
          </Link>
          <Link href="/blog" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            블로그
          </Link>
          <Link href="/about" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
