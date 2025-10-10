import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/lib/models/Job";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  await Job.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Job deleted" });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const updatedData = await req.json();
  const job = await Job.findByIdAndUpdate(params.id, updatedData, {
    new: true,
  });
  return NextResponse.json(job);
}
