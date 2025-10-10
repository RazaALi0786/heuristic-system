import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/lib/models/Job";

// DELETE job by ID
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    await Job.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Job deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT (Update job)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const updatedJob = await Job.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updatedJob);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
