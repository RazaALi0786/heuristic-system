"use client";
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

  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <>
      {/* First Section with faded background */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 
               bg-[url('./assets/homepage-img.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Faded Overlay (only inside this section) */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center relative z-10 max-w-5xl px-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Empowering Business Success Through <br />
            <span className="text-orange-500">Innovative Technology</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl text-gray-500">
            Transform your organization with cutting-edge technology solutions
            and expert consulting. We deliver strategic insights that drive
            growth and operational excellence.
          </p>

          <div className="flex space-x-4 sm:flex-row flex-col">
            {/* Primary Button */}
            <button
              className="mt-8 bg-orange-500 w-[10rem] text-white px-6 py-3 rounded-lg 
                     hover:bg-orange-600 hover:scale-105 
                     transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
            >
              View Jobs
            </button>

            {/* Secondary Button */}
            <button
              className="mt-8 border border-gray-400 w-[10rem] text-gray-700 px-6 py-3 rounded-lg 
                     hover:bg-gray-100 hover:scale-105 
                     transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Next Section (no fade applied) */}
      <div className="flex flex-col items-center justify-center p-[4rem] z-10 gap-4 mb-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <h3 className="text-xl text-gray-500">
          Comprehensive technology solutions tailored to your business needs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]">
          <ReusableCardGrid values={values} />
        </div>
      </div>

      {/* Story section */}
      <div className="flex flex-col items-center justify-center p-[2rem]  sm:p-[4rem] pb-[6rem] z-10 gap-4  bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 ">
          What Our <span className="text-orange-500">Clients Say</span>
        </h1>
        <h3 className="text-xl text-gray-500">
          Success stories from businesses we've helped transform
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[4rem]">
          <ReviewCard values={reviews} />
        </div>
      </div>

      {/* Last Section */}
      <div className="flex flex-col items-center justify-center p-[2rem] sm:p-[4rem] pb-[6rem] z-10 gap-4">
        <h1 className="text-4xl font-bold text-gray-900 ">
          Ready to{" "}
          <span className="text-orange-500">Transform Your Business?</span>
        </h1>
        <h3 className="text-xl text-gray-500">
          Join hundreds of successful companies that trust Heuristic System with
          their technology needs.
        </h3>
        <div className="flex space-x-4 sm:flex-row flex-col py-6">
          {/* Primary Button */}
          <button
            className="mt-8 bg-orange-500 w-[17rem] text-white px-6 py-3 rounded-lg 
                 hover:bg-orange-600 hover:scale-105 
                 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            Start Your Transformation <MoveRight />
          </button>

          {/* Secondary Button */}
          <button
            onClick={goToAbout}
            className="mt-8 border border-gray-400 w-[17rem] text-gray-700 px-6 py-3 rounded-lg 
                     hover:bg-gray-100 hover:scale-105 
                     transition-all duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer "
          >
            View Career Opportunities
          </button>
        </div>
      </div>
    </>
  );
}
