import JobCard from "@/components/JobCard";

const jobs = [
  {
    title: "Frontend Developer",
    description: "Work with Next.js and Tailwind to build modern UIs.",
    location: "Remote",
  },
  {
    title: "Backend Engineer",
    description: "Develop APIs and database integrations for business apps.",
    location: "Bangalore, India",
  },
  {
    title: "Consultant",
    description: "Guide clients on digital transformation strategies.",
    location: "On-site",
  },
];

export default function Jobs() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">
        Open Positions
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </div>
  );
}
