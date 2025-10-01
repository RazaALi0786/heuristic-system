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
        {/* <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          At <span className="font-semibold">HEURISTIC SYSTEM</span>, we empower
          ambitious businesses to thrive in a rapidly changing world. By
          blending industry expertise with innovative solutions, we specialize
          in{" "}
          <span className="text-orange-500 font-semibold">
            Insurtech, BFSI, IT, AI/ML, Healthcare, and Engineering
          </span>
          —delivering exceptional talent, transformative consulting strategies,
          and workforce solutions tailored to your unique needs.
        </p> */}
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg border p-6 border-gray-300 shadow-medium">
              <div className="flex flex-col space-y-1.5  text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4 text-orange-500" />
                <div className="text-xl font-semibold pt-3 leading-none tracking-tight ">
                  Our Mission
                </div>
              </div>
              <div>
                <div className="text-gray-500 p-6 text-center text-lg">
                  To empower businesses of all sizes with innovative technology
                  solutions that drive growth, enhance efficiency, and create
                  sustainable competitive advantages in an ever-evolving digital
                  landscape.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6 border-gray-300 shadow-medium">
              <div className="flex flex-col space-y-1.5  text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4 text-orange-500" />
                <div className="text-xl font-semibold pt-3 leading-none tracking-tight ">
                  Our Vision
                </div>
              </div>
              <div>
                <div className="text-gray-500 p-6 text-center text-lg">
                  To be the leading technology consulting partner that
                  transforms businesses worldwide, creating a future where
                  innovation and strategic thinking drive unprecedented success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-10 p-10 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-5">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide our work and define our commitment to
            excellence
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow group border border-1px border-gray-300"
            >
              <div className="flex justify-center mb-2 transform transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="my-4 text-xl font-semibold text-gray-600">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-800">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className=" py-16 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-orange-500">
                {item.number}
              </span>
              <span className="mt-2 text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
