import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-12">
      <aside className="col-span-3 border-r p-4">
        <div className="mb-6 text-lg font-semibold">Admin</div>
        <ul className="space-y-2">
          <li>
            <Link
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              href="/dashboard"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              href="/dashboard/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              href="/dashboard/orders"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              href="/dashboard/categories"
            >
              Categories
            </Link>
          </li>
        </ul>
      </aside>
      <main className="col-span-9 p-6">{children}</main>
    </div>
  );
}
