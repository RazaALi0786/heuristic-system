"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo_final.png";

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 h-20">
      <div className="w-full h-full flex justify-between items-center px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src={Logo}
            alt="Heuristic System Logo"
            className="h-full w-auto max-h-36 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-gray-700 font-medium">
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
      </div>
    </nav>
  );
}
