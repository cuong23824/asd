import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", user_schema);
