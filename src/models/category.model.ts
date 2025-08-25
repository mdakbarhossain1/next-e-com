import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true }
);

export default models.Category || model("Category", CategorySchema);
