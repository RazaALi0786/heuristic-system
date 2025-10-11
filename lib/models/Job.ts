import mongoose, { Schema, models } from "mongoose";

const JobSchema = new Schema(
  {
    title: String,
    company: String,
    department: String,
    employmentType: String,
    salaryRange: String,
    experienceLevel: String,
    description: String,
    apply: String,
    city: String,
    state: String,
    country: String,
    postedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Job = models.Job || mongoose.model("Job", JobSchema);
export default Job;
