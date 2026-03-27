import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";
// @ts-ignore
import logo from "../assets/LogoScenic.png";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="ScenicSafaris Logo" className="h-12" />
              <div className="flex flex-col justify-between h-12">
                <div className="text-xl font-semibold text-white mt-2">
                  Scenic Safaris
                </div>
                {/* <div className="text-xs text-gray-300">Sacred Journeys</div> */}
              </div>
            </div>
            <p className="text-sm text-gray-300 italic">
              "Every journey is more than just travel"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[var(--saffron)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[var(--saffron)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[var(--saffron)] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[var(--saffron)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pilgrimage Tours</li>
              <li>Cultural & Heritage</li>
              <li>Hill Station Retreats</li>
              <li>Customized Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <span>+91 95449 68931</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <span>travel.scenicsafaris@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>123 Temple Road, New Delhi, India 110001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Scenic Safaris. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
