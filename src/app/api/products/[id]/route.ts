import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/product.model";
import { updateProductSchema } from "@/schemas/product.schema";
import { requireAdmin } from "@/lib/auth";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const prod = await Product.findById(params.id).lean();
  if (!prod) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(prod);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await requireAdmin();
  await connectDB();
  const body = await req.json();
  const parsed = updateProductSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });

  const updated = await Product.findByIdAndUpdate(params.id, parsed.data, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await requireAdmin();
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
