import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-xl font-bold text-black">
                <span className="text-orange-500">Heuristic</span> System
              </span>
            </div>
            <p className="max-w-md mb-6 text-gray-600">
              Empowering Business Success Through Innovative Technology
              Solutions and Expert Consulting. We help organizations transform
              their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/heuristic-system/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-orange-500 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-black">Quick Links</h3>
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
            <h3 className="mb-4 font-semibold text-black">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@heuristicsystem.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+1.7329642870</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-9 h-9" />
                <span>
                  Organizat Edison New Jersey, USA, New Jersy, New Jersey,
                  United States 08817
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-300 md:flex-row">
          <p className="text-sm text-gray-600">
            © {currentYear} Heuristic System. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-orange-500 transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-orange-500 transition-smooth"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
