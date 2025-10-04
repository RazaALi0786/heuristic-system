"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email Us",
      content: "contact@heuristicsystem.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Visit Us",
      content: "123 Tech Street, Innovation City, IC 12345",
      description: "Our headquarters",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "EST timezone",
    },
  ];

  // ✨ Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-20 pb-0 bg-white text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1 }}
          >
            Ready to transform your business? Let's discuss how our innovative
            technology solutions can help you achieve your goals.
          </motion.p>
        </div>
      </motion.section>

      {/* CONTACT FORM + INFO */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <motion.div variants={fadeInUp}>
            <Card className="border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project or how we can help you..."
                      className="mt-1 min-h-[120px]"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      variant="hero"
                      className="w-full cursor-pointer flex items-center justify-center"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Contact <span className="text-orange-500">Information</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              We're here to help and answer any question you might have.
            </p>

            <motion.div variants={staggerContainer} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-gray-100 p-2 rounded-md">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-700 mb-1">{info.content}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
            Frequently <span className="text-orange-500">Asked Questions</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-500">
            Quick answers to common questions about our services
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} className="max-w-4xl mx-auto px-6 space-y-6">
          {[
            {
              q: "How long does a typical consulting project take?",
              a: "Project timelines vary based on scope and complexity. Most engagements range from 3-12 months.",
            },
            {
              q: "Do you work with companies of all sizes?",
              a: "Yes, we partner with startups to Fortune 500s, adapting our services to each client’s scale and budget.",
            },
            {
              q: "What industries do you specialize in?",
              a: "We work across healthcare, finance, retail, manufacturing, and technology sectors.",
            },
            {
              q: "How do you ensure project success?",
              a: "We follow proven methodologies, maintain communication, and provide ongoing support.",
            },
          ].map((faq, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500">{faq.a}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
