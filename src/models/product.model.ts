import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    images: [{ type: String }],
    price: { type: Number, required: true, index: true },
    compareAtPrice: { type: Number },
    stock: { type: Number, default: 0, index: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", index: true },
    active: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

ProductSchema.index({ title: "text", description: "text" });

export default models.Product || model("Product", ProductSchema);
