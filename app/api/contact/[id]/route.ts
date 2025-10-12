// app/api/contact/[id]/route.ts
import { NextResponse } from "next/server";
import Contact from "@/lib/models/Contact";
import mongoose from "mongoose";

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }
}

// DELETE /api/contact/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  try {
    const deleted = await Contact.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || err });
  }
}

// GET /api/contact/:id
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  try {
    const contact = await Contact.findById(params.id);
    if (!contact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, contact });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || err });
  }
}
