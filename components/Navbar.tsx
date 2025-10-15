"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
// Use the public URL path for assets in the `public/` folder instead of importing
// them as modules. Importing from `public` can trigger webpack resolution errors.

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-white border-b border-gray-200 shadow-md">
      <div className="flex items-center justify-between w-full h-full px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/Logo_final.png"
            alt="Heuristic System Logo"
            width={64}
            height={64}
            className="object-contain w-auto h-9 max-h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 font-medium text-gray-700 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-orange-600 font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-orange-600"
                    : "hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-200 shadow-sm md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-center py-2 transition-colors ${
                    isActive
                      ? "text-orange-600 font-bold"
                      : "hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
