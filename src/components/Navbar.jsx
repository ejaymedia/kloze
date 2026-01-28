import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="KloZe Logo" className="w-7 h-7" />
          <span className="text-white text-lg font-semibold">
            KloZe
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <li className="hover:text-white cursor-pointer transition">
            Product
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Pages
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Integrations
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Blog
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Pricing
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-300 text-sm">

            <li className="hover:text-white cursor-pointer">
              Product
            </li>
            <li className="hover:text-white cursor-pointer">
              Pages
            </li>
            <li className="hover:text-white cursor-pointer">
              Integrations
            </li>
            <li className="hover:text-white cursor-pointer">
              Blog
            </li>
            <li className="hover:text-white cursor-pointer">
              Pricing
            </li>

            <button className="mt-3 bg-gray-800 text-white py-2 rounded-full hover:bg-gray-700 transition">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;