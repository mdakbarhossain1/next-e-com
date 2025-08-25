import AddToCartBtn from "@/components/layout/product/AddToCartBtn";
import { connectDB } from "@/lib/db";
import Product from "@/models/product.model";
// import AddToCartBtn from "@/components/product/AddToCartBtn";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();
  interface ProductType {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    // add other fields as needed
  }

  const p = (await Product.findOne({
    slug: params.slug,
    active: true,
  }).lean()) as ProductType | null;
  if (!p) return notFound();
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-4 md:grid-cols-2">
      <div className="aspect-square w-full rounded-2xl bg-gray-100" />
      <div>
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <p className="mt-2 text-gray-600">{p.description}</p>
        <div className="mt-4 text-xl">৳ {p.price}</div>
        <div className="mt-6 max-w-sm">
          <AddToCartBtn
            product={{
              _id: String(p._id),
              title: p.title,
              price: p.price,
              images: p.images,
            }}
          />
        </div>
      </div>
    </div>
  );
}
