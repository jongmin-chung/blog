export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-10 items-center justify-center">
        <p className="text-muted-foreground text-sm">
          Copyright ©{" "}
          <a href="#" className="rounded px-1 py-1 font-medium underline hover:bg-gray-100">
            제이미
          </a>
        </p>
      </div>
    </footer>
  );
}
