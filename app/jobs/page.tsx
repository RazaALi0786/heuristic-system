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

// const jobs = [
//   {
//     title: "Senior Data Scientist",
//     location: "San Francisco, CA",
//     type: "Full-time",
//     salary: "$120,000 - $160,000",
//     posted: "2 days ago",
//     description:
//       "Join our data team to build advanced analytics solutions for Fortune 500 clients. Work with cutting-edge ML technologies and drive business insights through data.",
//     requirements: [
//       "PhD/MS in Data Science, Statistics, or related field",
//       "5+ years of experience in data science",
//       "Proficiency in Python, R, and SQL",
//       "Experience with ML frameworks (TensorFlow, PyTorch)",
//       "Strong communication skills",
//     ],
//   },
//   {
//     title: "Frontend Developer",
//     location: "New York, NY",
//     type: "Full-time",
//     salary: "$90,000 - $120,000",
//     posted: "4 days ago",
//     description:
//       "We are looking for a creative Frontend Developer to build engaging user interfaces using modern web technologies and ensure exceptional user experiences.",
//     requirements: [
//       "Bachelor’s degree in Computer Science or related field",
//       "3+ years of experience with ReactJS and Tailwind CSS",
//       "Proficiency in JavaScript, HTML, and CSS",
//       "Experience with RESTful APIs and version control (Git)",
//       "Strong eye for UI/UX design details",
//     ],
//   },
//   {
//     title: "Backend Engineer",
//     location: "Austin, TX",
//     type: "Full-time",
//     salary: "$100,000 - $140,000",
//     posted: "1 week ago",
//     description:
//       "Seeking a skilled Backend Engineer to design scalable APIs, manage databases, and build robust server-side logic to support our growing platform.",
//     requirements: [
//       "Bachelor’s degree in Computer Science or Engineering",
//       "4+ years of experience in backend development",
//       "Strong knowledge of Node.js, Express, and MongoDB",
//       "Experience with cloud services (AWS or Azure)",
//       "Proficient in writing unit and integration tests",
//     ],
//   },
//   {
//     title: "Machine Learning Engineer",
//     location: "Seattle, WA",
//     type: "Hybrid",
//     salary: "$110,000 - $150,000",
//     posted: "3 days ago",
//     description:
//       "We’re looking for a Machine Learning Engineer to design, build, and deploy intelligent systems that enhance our data-driven decision-making processes.",
//     requirements: [
//       "MS in Computer Science, Data Science, or related field",
//       "3+ years of hands-on experience with ML model development",
//       "Proficiency in Python, Pandas, and Scikit-learn",
//       "Experience with TensorFlow or PyTorch",
//       "Understanding of data pipelines and MLOps tools",
//     ],
//   },
//   {
//     title: "UI/UX Designer",
//     location: "Remote",
//     type: "Contract",
//     salary: "$60,000 - $90,000",
//     posted: "5 days ago",
//     description:
//       "Join our design team to create beautiful, user-centered digital experiences. You’ll collaborate closely with developers and product managers to bring ideas to life.",
//     requirements: [
//       "Bachelor’s degree in Design or related discipline",
//       "2+ years of experience in UI/UX design",
//       "Proficiency in Figma, Adobe XD, or Sketch",
//       "Strong understanding of responsive design principles",
//       "Excellent communication and collaboration skills",
//     ],
//   },
// ];

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  // 🔍 Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
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
        <div className="relative z-10 text-center max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-6xl font-bold text-orange-600"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black">Join</span> Our Team
          </motion.h1>

          <motion.h5
            className="text-xl text-gray-500 mt-2 max-w-2xl p-4"
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
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
        <h5 className="text-md text-gray-400 mb-6">
          {jobs.length} opportunities available.
        </h5>
        <div className="grid gap-6 md:grid-cols-1">
          <JobCard jobs={jobs} />
        </div>
      </div>

      {/* ===== JOB FOOTER SECTION ===== */}
      <motion.div
        className="bg-gray-100 h-auto p-16 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-700 text-center"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          Don't See a Perfect Match?
        </motion.h1>

        <motion.h5
          className="text-xl text-gray-500 mt-2 text-center max-w-2xl p-4"
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
          className="flex mt-2 border border-gray-200 bg-white hover:shadow-md 
               transition-all duration-300 ease-in-out 
               font-medium px-4 py-2 rounded-xl text-gray-600
               hover:border-orange-200 hover:text-orange-400 
               items-center gap-1 font-semibold"
        >
          Send General Application <ExternalLink size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
}
