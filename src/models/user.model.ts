import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, index: true, sparse: true },
    image: { type: String },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
      index: true,
    },
  },
  { timestamps: true }
);

export type IUser = {
  _id: string;
  name?: string;
  email?: string;
  image?: string;
  role: "customer" | "admin";
};

export default models.User || model("User", UserSchema);
