import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/lib/models/Job";

// GET all jobs
export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
