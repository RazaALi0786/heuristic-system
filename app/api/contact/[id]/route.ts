import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 👈 await the params (important)
  await connectToDatabase();

  try {
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Contact deleted" });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
