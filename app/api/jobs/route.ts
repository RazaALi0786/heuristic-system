import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/lib/models/Job";

// GET all jobs
export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await Job.find().sort({ createdAt: -1 });
    // Ensure we return an array (Mongoose should return one, but be defensive).
    return NextResponse.json(Array.isArray(jobs) ? jobs : []);
  } catch (error: any) {
    // Log the error for server-side visibility and return an empty array so
    // client code that does `jobs.map(...)` doesn't crash when the DB is
    // misconfigured (for example, missing MONGODB_URI in deployment).
    console.error("GET /api/jobs failed:", error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST new job
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const newJob = await Job.create(data);
    return NextResponse.json(newJob, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
