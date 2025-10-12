import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } // TS expects a Promise here
) {
  const { id } = await context.params; // await because TS thinks it's a Promise

  if (!id) {
    return NextResponse.json(
      { success: false, message: "ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
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
