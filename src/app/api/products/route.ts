import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/product.model";
import { createProductSchema } from "@/schemas/product.schema";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";

export async function GET(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 12);

  const filter = q ? { $text: { $search: q }, active: true } : { active: true };
  const [items, total] = await Promise.all([
    Product.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    Product.countDocuments(filter),
  ]);

  return NextResponse.json({
    items,
    total,
    page,
    pages: Math.ceil(total / limit),
  });
}

export async function POST(req: Request) {
  await requireAdmin();
  await connectDB();
  const body = await req.json();
  const parsed = createProductSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });

  const exists = await Product.findOne({ slug: parsed.data.slug });
  if (exists)
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });

  const created = await Product.create({
    title: parsed.data.title,
    slug: parsed.data.slug,
    description: parsed.data.description,
    images: parsed.data.images,
    price: parsed.data.price,
    compareAtPrice: parsed.data.compareAtPrice,
    stock: parsed.data.stock,
    category: parsed.data.categoryId,
    active: parsed.data.active,
  });
  return NextResponse.json(created, { status: 201 });
}
