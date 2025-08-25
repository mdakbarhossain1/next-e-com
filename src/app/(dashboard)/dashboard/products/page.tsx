import { connectDB } from "@/lib/db";
import Product from "@/models/product.model";
import Link from "next/link";

export default async function AdminProductsPage() {
  await connectDB();
  const items = await Product.find({})
    .sort({ createdAt: -1 })
    .limit(100)
    .lean();
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Products</h2>
        <Link
          href="/dashboard/products/new"
          className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
        >
          Add Product
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Active</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p: any) => (
              <tr key={p._id} className="border-b">
                <td className="p-3">{p.title}</td>
                <td className="p-3">৳ {p.price}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3">{p.active ? "Yes" : "No"}</td>
                <td className="p-3">
                  <a
                    className="rounded-md border px-2 py-1 hover:bg-gray-50"
                    href={`/dashboard/products/${p._id}`}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
