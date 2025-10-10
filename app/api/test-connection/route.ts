import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({
      success: true,
      message: "MongoDB connection successful 🎉",
    });
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    return Response.json({
      success: false,
      message: "Connection failed",
      error,
    });
  }
}
