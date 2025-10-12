"use client";
import React from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  Dot,
  Briefcase,
} from "lucide-react";

interface Job {
  title: string;
  company: string;
  city: string;
  state?: string;
  country?: string;
  employmentType: string;
  salaryRange?: string;
  department?: string;
  experienceLevel?: string;
  postedDate: string;
  apply: string;
  description: string;
}

interface JobCardProps {
  jobs: Job[];
}

const JobCard: React.FC<JobCardProps> = ({ jobs }) => {
  return (
    <>
      {jobs?.map((job, index) => (
        <div
          key={index}
          className="flex flex-col p-6 mb-4 transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md hover:border-orange-100"
        >
          {/* Job Header */}
          <div className="flex flex-col items-start gap-1 mb-4 sm:flex-row sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h2>

              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Briefcase size={16} /> {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {job.city}{" "}
                  {job.state && `, ${job.state}`}{" "}
                  {job.country && `, ${job.country}`}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {job.employmentType}
                </span>
                {job.salaryRange && (
                  <span className="flex items-center gap-1">
                    <DollarSign size={16} /> {job.salaryRange}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
                {job.department && (
                  <div className="flex items-center gap-1">
                    <Dot size={22} className="text-gray-400" />
                    <span className="font-medium">
                      Department: {job.department}
                    </span>
                  </div>
                )}
                {job.experienceLevel && (
                  <div className="flex items-center gap-1">
                    <Dot size={22} className="text-gray-400" />
                    <span className="font-medium">
                      Experience: {job.experienceLevel}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="px-2 py-1 text-sm text-gray-500 bg-gray-200 rounded-full">
                {new Date(job.postedDate)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </span>

              <button
                onClick={() =>
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${job.apply}`,
                    "_blank"
                  )
                }
                className="items-center hidden gap-1 px-4 py-2 mt-2 font-medium text-white bg-orange-500 sm:flex rounded-xl hover:bg-orange-600"
              >
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Description */}
          <div
            className="mb-4 text-gray-600"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />

          {/* Mobile Apply Button */}
          <button
            onClick={() =>
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${job.apply}`,
                "_blank"
              )
            }
            className="flex items-center justify-center gap-1 px-4 py-2 mt-4 font-medium text-white bg-orange-500 sm:hidden rounded-xl hover:bg-orange-600"
          >
            Apply Now <ExternalLink size={16} />
          </button>
        </div>
      ))}
    </>
  );
};

export default JobCard;
