import { connectDB } from "@/lib/db";
import Product from "@/models/product.model";
import Link from "next/link";

export default async function HomePage() {
  await connectDB();
  const products = await Product.find({ active: true })
    .sort({ createdAt: -1 })
    .limit(8)
    .lean();
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="mb-6 text-2xl font-semibold">New Arrivals</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((p: any) => (
          <Link
            key={p._id}
            href={`/products/${p.slug}`}
            className="rounded-2xl border p-3 hover:shadow"
          >
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100" />
            <div className="mt-3 text-sm font-medium">{p.title}</div>
            <div className="text-sm">৳ {p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
