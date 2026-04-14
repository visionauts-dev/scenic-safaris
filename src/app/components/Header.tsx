import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, X, Menu } from "lucide-react";
// @ts-ignore
import logo from "../assets/logo.png";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 md:flex-none">
            <img src={logo} alt="ScenicSafaris Logo" className="h-10 sm:h-12" />
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-base sm:text-xl font-semibold text-[var(--deep-blue)] leading-tight truncate">
                Scenic Safaris
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 leading-tight whitespace-normal max-w-[170px] sm:max-w-[220px] md:max-w-[360px] lg:max-w-none">
                Travelling - It leaves you speechless, then turns you into a storyteller
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`transition-colors ${
                  isActive(to)
                    ? "text-[var(--saffron)]"
                    : "text-gray-700 hover:text-[var(--saffron)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center gap-2 text-[var(--deep-blue)]">
            <Phone className="size-5" />
            <div>
              <div className="text-xs text-gray-600">Call us</div>
              <div className="font-semibold">+91 9947 091445</div>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 ml-2 flex-shrink-0 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-3 rounded-md text-base font-medium transition-colors ${
                  isActive(to)
                    ? "text-[var(--saffron)] bg-orange-50"
                    : "text-gray-700 hover:text-[var(--saffron)] hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            {/* Phone in mobile menu */}
            <a
              href="tel:+919947091445"
              className="flex items-center gap-3 py-3 px-3 mt-1 rounded-md text-[var(--deep-blue)] hover:bg-blue-50 transition-colors"
            >
              <Phone className="size-5" />
              <span className="font-semibold">+91 9947 091445</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
