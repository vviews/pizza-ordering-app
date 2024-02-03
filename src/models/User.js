const { Schema, model, models } = require("mongoose");
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    streetAddress: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = models?.User || model("User", UserSchema);
