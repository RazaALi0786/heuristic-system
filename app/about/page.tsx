import ReusableCardGrid from "@/components/ReusableCardGrid";
import { Target, Users, Award, Lightbulb, Eye } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-orange-500" />,
      title: "Excellence",
      description:
        "Delivering exceptional results with attention to detail and a commitment to quality.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      title: "Innovation",
      description:
        "Embracing cutting-edge technologies and creative solutions to solve challenges.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Collaboration",
      description:
        "Partnering closely with clients to achieve shared success and sustainable growth.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Integrity",
      description:
        "Operating with transparency, trust, and the highest ethical standards.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="py-20 mx-auto">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          About <span className="text-orange-500">Heuristic System</span>
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
          We are a leading consulting and technology solutions company dedicated
          to helping businesses navigate the complexities of digital
          transformation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="grid grid-cols-1 gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="p-10 text-center transition bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl">
            <Target className="mx-auto mb-6 text-orange-500 h-14 w-14" />
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              To empower businesses of all sizes with innovative technology
              solutions that drive growth, enhance efficiency, and create
              sustainable competitive advantages in an ever-evolving digital
              landscape.
            </p>
          </div>

          <div className="p-10 text-center transition bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl">
            <Eye className="mx-auto mb-6 text-orange-500 h-14 w-14" />
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              To be the leading technology consulting partner that transforms
              businesses worldwide, creating a future where innovation and
              strategic thinking drive unprecedented success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our <span className="text-orange-500">Core Values</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            The principles that guide our work and define our commitment to
            excellence
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {/* {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 text-center transition transition-shadow bg-white border border-gray-300 shadow-lg rounded-2xl hover:shadow-xl group border-1px hover:border-orange-200"
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 transform group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="my-3 text-xl font-semibold text-gray-600">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-800">{value.description}</p>
            </div>
          ))} */}
          <ReusableCardGrid values={values} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Numbers that reflect our commitment to delivering exceptional
            results
          </p>
        </div>
        <div className="grid max-w-6xl grid-cols-2 gap-10 px-6 mx-auto text-center sm:grid-cols-2 md:grid-cols-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 transition bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg"
            >
              <span className="text-4xl font-extrabold text-orange-500 md:text-5xl">
                {item.number}
              </span>
              <p className="mt-2 font-medium text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-orange-500">Story</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-center text-gray-600 md:text-left">
            <p>
              Heuristic System emerged from a simple yet powerful belief: that
              every business, regardless of size or industry, deserves access to
              world-class technology consulting that drives meaningful
              transformation.
            </p>
            <p>
              Our journey began when our founders, seasoned technology
              professionals with decades of combined experience, recognized a
              gap in the market for personalized, strategic technology guidance.
              Traditional consulting firms often provided one-size-fits-all
              solutions, but we knew that every business is unique and requires
              tailored approaches.
            </p>
            <p>
              Today, we pride ourselves on being more than just consultants –
              we're strategic partners who invest in our clients' long-term
              success. Our team of experts brings deep industry knowledge,
              cutting-edge technical skills, and a passion for innovation to
              every project we undertake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
