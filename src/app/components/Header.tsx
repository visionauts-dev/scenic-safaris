import { Link, useLocation } from "react-router-dom";
import { Phone, Mountain } from "lucide-react";
// @ts-ignore
import logo from "../assets/logo.png";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ScenicSafaris Logo" className="h-12" />
            <div className="flex flex-col justify-between h-12">
              <div className="text-xl font-semibold text-[var(--deep-blue)]">
                Scenic Safaris
              </div>
              <div className="text-xs text-gray-600">Every journey is more than just travel</div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[var(--saffron)]"
                  : "text-gray-700 hover:text-[var(--saffron)]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-[var(--saffron)]"
                  : "text-gray-700 hover:text-[var(--saffron)]"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services")
                  ? "text-[var(--saffron)]"
                  : "text-gray-700 hover:text-[var(--saffron)]"
              }`}
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-[var(--saffron)]"
                  : "text-gray-700 hover:text-[var(--saffron)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Number */}
          <div className="hidden md:flex items-center gap-2 text-[var(--deep-blue)]">
            <Phone className="size-5" />
            <div>
              <div className="text-xs text-gray-600">Call us</div>
              <div className="font-semibold">+91 95449 68931</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
