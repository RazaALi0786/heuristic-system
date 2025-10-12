import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

// DELETE — remove a contact by id
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // await the params Promise for type compatibility
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
