"use client";
import { motion } from "framer-motion";
import ReusableCardGrid from "@/components/ReusableCardGrid";
import ReviewCard from "@/components/ReviewCard";
import { useRouter } from "next/navigation";
import { ChartNoAxesCombined, MoveRight, Settings, Users } from "lucide-react";

const values = [
  {
    icon: <Settings className="w-10 h-10 text-orange-500" />,
    title: "Technology Consulting",
    description:
      "Delivering exceptional results with attention to detail and a commitment to quality.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Digital Transformation",
    description:
      "Embracing cutting-edge technologies and creative solutions to solve challenges.",
  },
  {
    icon: <ChartNoAxesCombined className="w-10 h-10 text-orange-500" />,
    title: "Business Intelligence",
    description:
      "Partnering closely with clients to achieve shared success and sustainable growth.",
  },
];

const reviews = [
  {
    rating: 5,
    description:
      "Heuristic System transformed our operations completely. Their expertise in digital transformation helped us increase efficiency by 300%.",
    name: "Sarah Johnson",
    position: "CEO, TechFlow Inc.",
  },
  {
    rating: 4,
    description:
      "Working with Heuristic System was seamless. Their team understood our requirements quickly and delivered a scalable solution that boosted our customer engagement.",
    name: "Michael Lee",
    position: "Product Manager, InnovateX",
  },
  {
    rating: 5,
    description:
      "The dedication and professionalism shown by Heuristic System were outstanding. They exceeded our expectations and delivered results ahead of schedule.",
    name: "Priya Sharma",
    position: "CTO, Nexora Solutions",
  },
];

export default function Home() {
  const router = useRouter();
  const goToAbout = () => router.push("/jobs");

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-28
               bg-[url('./assets/homepage-img.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center max-w-5xl px-4"
        >
          <motion.h1
            className="text-5xl font-semibold leading-tight text-gray-700 sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Business Success Through <br />
            <span className="font-bold text-orange-500">
              Innovative Technology
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mt-6 text-lg text-gray-700 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            Transform your organization with cutting-edge technology solutions
            and expert consulting. We deliver strategic insights that drive
            growth and operational excellence.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 mt-10 sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.button
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#EA580C",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-500 w-[10rem] text-white px-6 py-3 rounded-lg shadow-md 
              transition-all duration-300"
            >
              View Jobs
            </motion.button>

            <motion.button
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#f9fafb",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-400 w-[10rem] text-gray-700 px-6 py-3 rounded-lg shadow-sm"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[4rem] gap-4 mb-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800"
        >
          Our Services
        </motion.h1>
        <motion.h3 variants={fadeInUp} className="text-xl text-gray-600">
          Comprehensive technology solutions tailored to your business needs
        </motion.h3>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]"
        >
          <ReusableCardGrid values={values} />
        </motion.div>
      </motion.section>

      {/* REVIEWS SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[2rem] sm:p-[4rem] pb-[6rem] gap-4 bg-gray-100"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800"
        >
          What Our Clients Say
        </motion.h1>
        <motion.h3 variants={fadeInUp} className="text-xl text-gray-600">
          Success stories from businesses we've helped transform
        </motion.h3>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]"
        >
          <ReviewCard values={reviews} />
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[2rem] sm:p-[4rem] pb-[6rem] gap-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800"
        >
          Ready to Transform Your Business?
        </motion.h1>
        <motion.h3 variants={fadeInUp} className="text-xl text-gray-600">
          Join hundreds of successful companies that trust Heuristic System with
          their technology needs.
        </motion.h3>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 mt-8 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#EA580C" }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-500 w-[17rem] text-white px-6 py-3 rounded-lg shadow-md 
              flex items-center justify-center gap-2"
          >
            Start Your Transformation <MoveRight />
          </motion.button>

          <motion.button
            onClick={goToAbout}
            whileHover={{ scale: 1.03, backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-400 w-[17rem] text-gray-700 px-6 py-3 rounded-lg shadow-sm"
          >
            View Career Opportunities
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
}
