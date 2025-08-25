import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/order.model";
import { createOrderSchema } from "@/schemas/order.schema";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });

  const order = await Order.create(parsed.data);
  // TODO: integrate payment gateway (Stripe/SSLCommerz) and set paymentRef
  return NextResponse.json(order, { status: 201 });
}
