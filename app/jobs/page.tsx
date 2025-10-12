"use client";
import JobCard from "@/components/JobCard";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import jobImg from "../assets/jobImg.jpg";

// animation variants for reusability
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Jobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      const jobsArray = Array.isArray(data) ? data : [];
      setJobs(jobsArray);
    } catch (err: any) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {/* ===== JOB HEADER SECTION ===== */}
      <motion.div
        className="relative h-auto p-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('./assets/jobImg.jpg')]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        {/* Faded overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Content stays on top of overlay */}
        <div className="relative z-10 max-w-3xl text-center">
          <motion.h1
            className="text-3xl font-bold text-orange-600 sm:text-6xl"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black">Join</span> Our Team
          </motion.h1>

          <motion.h5
            className="max-w-2xl p-4 mt-2 text-xl text-gray-500"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Build your career with us and help shape the future of technology
            consulting. We're looking for talented individuals who are
            passionate about innovation.
          </motion.h5>
        </div>
      </motion.div>

      {/* ===== JOB CARDS SECTION ===== */}
      <div className="max-w-6xl px-4 py-16 mx-auto">
        <h2 className="mb-2 text-3xl font-bold">Open Positions</h2>
        <h5 className="mb-6 text-gray-400 text-md">
          {jobs.length} opportunities available.
        </h5>
        <div className="grid gap-6 md:grid-cols-1">
          <JobCard jobs={jobs} />
        </div>
      </div>

      {/* ===== JOB FOOTER SECTION ===== */}
      <motion.div
        className="flex flex-col items-center justify-center h-auto p-16 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center text-gray-700 sm:text-4xl"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          Don't See a Perfect Match?
        </motion.h1>

        <motion.h5
          className="max-w-2xl p-4 mt-2 text-xl text-center text-gray-500"
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We're always interested in meeting talented individuals. Send us your
          resume and let us know how you'd like to contribute.
        </motion.h5>

        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@example.com&su=General%20Application"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1 px-4 py-2 mt-2 font-medium font-semibold text-gray-600 transition-all duration-300 ease-in-out bg-white border border-gray-200 hover:shadow-md rounded-xl hover:border-orange-200 hover:text-orange-400"
        >
          Send General Application <ExternalLink size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
}
