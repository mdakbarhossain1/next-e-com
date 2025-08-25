import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold">
          Ecom
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="text-sm hover:underline">
            Products
          </Link>
          <Link href="/cart" className="text-sm hover:underline">
            Cart
          </Link>
          <Link
            href="/dashboard"
            className="text-sm rounded-lg border px-3 py-1 hover:bg-gray-50"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
