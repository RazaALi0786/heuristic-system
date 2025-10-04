import ReusableCardGrid from "@/components/ReusableCardGrid";
import { Target, Users, Award, Lightbulb, Eye } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-orange-500" />,
      title: "Excellence",
      description:
        "Delivering exceptional results with attention to detail and a commitment to quality.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      title: "Innovation",
      description:
        "Embracing cutting-edge technologies and creative solutions to solve challenges.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Collaboration",
      description:
        "Partnering closely with clients to achieve shared success and sustainable growth.",
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
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
    <div className="mx-auto py-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About <span className="text-orange-500">Heuristic System</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          We are a leading consulting and technology solutions company dedicated
          to helping businesses navigate the complexities of digital
          transformation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition p-10 text-center">
            <Target className="h-14 w-14 text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower businesses of all sizes with innovative technology
              solutions that drive growth, enhance efficiency, and create
              sustainable competitive advantages in an ever-evolving digital
              landscape.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition p-10 text-center">
            <Eye className="h-14 w-14 text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading technology consulting partner that transforms
              businesses worldwide, creating a future where innovation and
              strategic thinking drive unprecedented success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
            Our <span className="text-orange-500">Core Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to
            excellence
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          {/* {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow group border border-1px border-gray-300 hover:border-orange-200 transition"
            >
              <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional
            results
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto px-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-orange-500">
                {item.number}
              </span>
              <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-orange-500">Story</span>
            </h2>
          </div>
          <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-center md:text-left">
            <p>
              Founded in 2014, Heuristic System emerged from a simple yet
              powerful belief: that every business, regardless of size or
              industry, deserves access to world-class technology consulting
              that drives meaningful transformation.
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
