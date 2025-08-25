"use client";
import { useCart } from "@/context/CartContext";

export default function AddToCartBtn({
  product,
}: {
  product: { _id: string; title: string; price: number; images?: string[] };
}) {
  const { dispatch } = useCart();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD",
          payload: {
            productId: product._id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.images?.[0],
          },
        })
      }
      className="w-full rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
    >
      Add to Cart
    </button>
  );
}
