import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/lib/models/Job";

// GET all jobs
export async function GET() {
  await connectToDatabase();
  const jobs = await Job.find().sort({ createdAt: -1 });
  return NextResponse.json(jobs);
}

// POST new job
export async function POST(request: Request) {
  await connectToDatabase();
  const data = await request.json();
  const newJob = await Job.create(data);
  return NextResponse.json(newJob);
}
