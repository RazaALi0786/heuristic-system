"use client";
import { motion } from "framer-motion";
import ReusableCardGrid from "@/components/ReusableCardGrid";
import ReviewCard from "@/components/ReviewCard";
import { useRouter } from "next/navigation";
import { ChartNoAxesCombined, MoveRight, Settings, Users } from "lucide-react";

const values = [
  {
    icon: <Settings className="h-10 w-10 text-orange-500" />,
    title: "Technology Consulting",
    description:
      "Delivering exceptional results with attention to detail and a commitment to quality.",
  },
  {
    icon: <Users className="h-10 w-10 text-orange-500" />,
    title: "Digital Transformation",
    description:
      "Embracing cutting-edge technologies and creative solutions to solve challenges.",
  },
  {
    icon: <ChartNoAxesCombined className="h-10 w-10 text-orange-500" />,
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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 
               bg-[url('./assets/homepage-img.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center relative z-10 max-w-5xl px-4"
        >
          <h1 className="text-5xl font-bold text-gray-600">
            Empowering Business Success Through <br />
            <span className="text-orange-500">Innovative Technology</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl text-gray-700">
            Transform your organization with cutting-edge technology solutions
            and expert consulting. We deliver strategic insights that drive
            growth and operational excellence.
          </p>

          <div className="flex space-x-4 sm:flex-row flex-col">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-orange-500 w-[10rem] text-white px-6 py-3 rounded-lg 
                     hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              View Jobs
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 border border-gray-400 w-[10rem] text-gray-700 px-6 py-3 rounded-lg 
                     hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[4rem] z-10 gap-4 mb-4"
      >
        <h1 className="text-4xl font-bold text-black-800">Our Services</h1>
        <h3 className="text-xl text-gray-600">
          Comprehensive technology solutions tailored to your business needs
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]"
          variants={fadeUp}
        >
          <ReusableCardGrid values={values} />
        </motion.div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[2rem] sm:p-[4rem] pb-[6rem] z-10 gap-4 bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-black-800 ">
          What Our Clients Say
        </h1>
        <h3 className="text-xl text-gray-600">
          Success stories from businesses we've helped transform
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]"
          variants={fadeUp}
        >
          <ReviewCard values={reviews} />
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-[2rem] sm:p-[4rem] pb-[6rem] z-10 gap-4"
      >
        <h1 className="text-4xl font-bold text-black-800 ">
          Ready to Transform Your Business?
        </h1>
        <h3 className="text-xl text-gray-600">
          Join hundreds of successful companies that trust Heuristic System with
          their technology needs.
        </h3>
        <div className="flex space-x-4 sm:flex-row flex-col py-6">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#EA580C" }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 bg-orange-500 w-[17rem] text-white px-6 py-3 rounded-lg 
                 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            Start Your Transformation <MoveRight />
          </motion.button>

          <motion.button
            onClick={goToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 border border-gray-400 w-[17rem] text-gray-700 px-6 py-3 rounded-lg 
                     hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            View Career Opportunities
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
