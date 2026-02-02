import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import logo from "../assets/logo.png";

/* Animation Variants */

const navVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const menuContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const menuItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  /* Scroll Effect */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg py-2"
            : "bg-black/80 backdrop-blur-md py-4"
        }
        border-b border-gray-800
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="KloZe Logo"
            className="w-7 h-7 object-contain"
          />

          <span className="text-white text-lg font-semibold">
            KloZe
          </span>
        </div>

        {/* Desktop Menu */}

        <motion.ul
          variants={menuContainer}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8 text-gray-300 text-sm"
        >
          {[
            "Product",
            "Pages",
            "Integrations",
            "Blog",
            "Pricing",
          ].map((item) => (
            <motion.li
              key={item}
              variants={menuItem}
              className="relative cursor-pointer group"
            >
              <span className="group-hover:text-white transition">
                {item}
              </span>

              {/* Underline */}

              <motion.span
                variants={underlineVariants}
                initial="hidden"
                whileHover="visible"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute left-0 -bottom-1 h-[2px] bg-lime-400"
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA */}

        <div className="hidden md:block">

          <motion.button
            whileHover={
              shouldReduceMotion
                ? {}
                : { scale: 1.05 }
            }
            whileTap={
              shouldReduceMotion
                ? {}
                : { scale: 0.95 }
            }
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-gray-800 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition"
          >
            Get Started
          </motion.button>

        </div>

        {/* Mobile Button */}

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

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="md:hidden overflow-hidden mt-1 bg-black border-t border-gray-800"
      >
        <motion.ul
          variants={menuContainer}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="flex flex-col px-6 py-4 space-y-4 text-gray-300 text-sm"
        >
          {[
            "Product",
            "Pages",
            "Integrations",
            "Blog",
            "Pricing",
          ].map((item) => (
            <motion.li
              key={item}
              variants={menuItem}
              className="cursor-pointer hover:text-white transition"
            >
              {item}
            </motion.li>
          ))}

          {/* Mobile CTA */}

          <motion.button
            whileHover={
              shouldReduceMotion
                ? {}
                : { scale: 1.05 }
            }
            whileTap={
              shouldReduceMotion
                ? {}
                : { scale: 0.95 }
            }
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="mt-3 bg-gray-800 text-white py-2 rounded-full hover:bg-gray-700 transition"
          >
            Get Started
          </motion.button>

        </motion.ul>
      </motion.div>

    </motion.nav>
  );
};

export default Navbar;