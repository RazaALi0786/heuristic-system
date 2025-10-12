import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } // ✅ matches RouteHandlerConfig
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    await Contact.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Contact deleted" });
  } catch (error: any) {
    console.error("Delete failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete contact",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
