import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-black">
                <span className="text-orange-500">Heuristic</span> System
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering Business Success Through Innovative Technology
              Solutions and Expert Consulting. We help organizations transform
              their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-orange-500 transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-orange-500 transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-600 hover:text-orange-500 transition-smooth"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-orange-500 transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-black mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>contact@heuristicsystem.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Heuristic System. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-orange-500 text-sm transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-orange-500 text-sm transition-smooth"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
