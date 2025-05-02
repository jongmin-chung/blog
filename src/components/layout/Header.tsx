export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-14 items-center px-4">
        <a href="#" className="text-xl font-semibold">
          <span className="font-bold">Hello World</span>
        </a>
        <nav className="ml-auto flex items-center gap-4">
          <a href="#" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            홈
          </a>
          <a href="#" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            블로그
          </a>
          <a href="#" className="rounded px-2 py-1 font-medium hover:bg-gray-200">
            소개
          </a>
        </nav>
      </div>
    </header>
  );
}
