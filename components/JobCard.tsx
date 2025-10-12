import React from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  Dot,
  Briefcase,
} from "lucide-react";

const JobCard = ({ jobs }) => {
  return (
    <>
      {jobs?.map((job, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-orange-100 transition-shadow p-6 mb-4"
        >
          {/* Job Header */}
          <div className="flex flex-col sm:flex-row gap-1 sm:justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h2>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <Briefcase size={16} /> {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {job.city} {job.state} {job.country}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {job.employmentType}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign size={16} /> {job.salaryRange}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Dot size={22} className="text-gray-400" />
                  <span className="font-medium">Department : {job.department}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Dot size={22} className="text-gray-400" />
                  <span className="font-medium">Experience : {job.experienceLevel}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
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
                className="hidden sm:flex mt-2 bg-orange-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-orange-600  items-center gap-1"
              >
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Description */}
          <div
            className="text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />

          <button className="flex sm:hidden mt-4 bg-orange-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-orange-600  items-center justify-center gap-1">
            Apply Now <ExternalLink size={16} />
          </button>
        </div>
      ))}
    </>
  );
};

export default JobCard;
