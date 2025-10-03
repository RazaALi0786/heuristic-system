"use client";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - in a real app, this would submit to /api/contact
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
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
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in ">
              Get In <span className="text-orange-500 ">Touch</span>
            </h1>
            <p className="text-xl text-muted-gray-900 mb-8 max-w-3xl mx-auto animate-fade-in text-gray-500">
              Ready to transform your business? Let's discuss how our innovative
              technology solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-gray-200 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact <span className="text-orange-500">Information</span>
                </h2>
                <p className="text-lg text-gray-500 mb-8">
                  We're here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-gray-200 shadow-soft">
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
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently{" "}
              <span className="text-orange-500">Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-500">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How long does a typical consulting project take?
                </h3>
                <p className="text-gray-500">
                  Project timelines vary based on scope and complexity. Most
                  consulting engagements range from 3-12 months, with initial
                  assessments typically completed within 2-4 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you work with companies of all sizes?
                </h3>
                <p className="text-gray-500">
                  Yes, we work with organizations ranging from startups to
                  Fortune 500 companies. Our solutions are tailored to meet the
                  specific needs and budget of each client.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What industries do you specialize in?
                </h3>
                <p className="text-gray-500">
                  We have experience across various industries including
                  healthcare, finance, retail, manufacturing, and technology.
                  Our consultants bring deep expertise in multiple sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do you ensure project success?
                </h3>
                <p className="text-gray-500">
                  We follow proven methodologies, maintain regular communication
                  with stakeholders, set clear milestones, and provide ongoing
                  support throughout the implementation process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
