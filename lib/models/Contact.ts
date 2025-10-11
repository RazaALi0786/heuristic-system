import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true }
);

const Contact = models.Contact || mongoose.model("Contact", ContactSchema);
export default Contact;
