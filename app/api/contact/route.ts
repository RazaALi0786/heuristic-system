import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

// 📨 POST — Save a new contact message
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({ name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully!",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Error saving contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// 📄 GET — Fetch all contact messages
export async function GET() {
  try {
    await connectToDatabase();

    const messages = await Contact.find().sort({ createdAt: -1 }); // newest first

    return NextResponse.json(
      { success: true, count: messages.length, data: messages },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error fetching contacts:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch messages",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
