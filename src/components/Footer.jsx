import { motion, useReducedMotion } from "framer-motion";

import twitter from "../assets/footer-socials/twitter.png";
import facebook from "../assets/footer-socials/facebook.png";
import instagram from "../assets/footer-socials/instagram.png";
import github from "../assets/footer-socials/github.png";

import logo from "../assets/logo.png";

/* ================= VARIANTS ================= */

const footerVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ================= FOOTER ================= */

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full bg-[#0b0b0f] border-t border-gray-800"
    >

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-8">


        {/* Top Section */}
        <motion.div
          variants={footerVariant}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14"
        >

          {/* Brand */}
          <motion.div variants={itemVariant}>


            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">

              <img
                src={logo}
                alt="Kloze"
                className="w-7 h-7"
              />

              <span className="text-white text-xl font-semibold">
                KloZe
              </span>

            </div>


            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">

              KloZe is a security-first SaaS platform that automates employee offboarding by revoking access to SaaS applications, shadow IT tools, and internal systems.

            </p>


            {/* Socials */}
            <div className="flex items-center gap-3">

              <Social icon={twitter} reduceMotion={reduceMotion} />
              <Social icon={facebook} reduceMotion={reduceMotion} />
              <Social icon={instagram} reduceMotion={reduceMotion} />
              <Social icon={github} reduceMotion={reduceMotion} />

            </div>

          </motion.div>


          {/* Company */}
          <motion.div variants={itemVariant}>

            <h4 className="text-white text-sm font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              {["Service", "Resources", "About us"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>


          {/* Help */}
          <motion.div variants={itemVariant}>

            <h4 className="text-white text-sm font-semibold mb-5">
              Help
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              {[
                "Customer Support",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>


          {/* Newsletter */}
          <motion.div variants={itemVariant}>

            <h4 className="text-white text-sm font-semibold mb-5">
              Subscribe to Newsletter
            </h4>


            <div className="relative group max-w-sm">


              {/* Animated Border */}
              <div
                className="
                  absolute inset-0 rounded-lg
                  bg-gradient-to-r from-lime-400/40 via-green-400/40 to-lime-400/40
                  opacity-0 group-focus-within:opacity-100
                  blur-md transition duration-500
                "
              />


              <div className="relative flex w-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700 group-focus-within:border-lime-400 transition">


                <input
                  type="email"
                  placeholder="Enter email address"
                  className="
                    flex-1 bg-transparent px-4 py-3 text-sm
                    text-gray-300 placeholder-gray-500
                    focus:outline-none
                  "
                />


                <motion.button
                  whileHover={!reduceMotion ? { scale: 1.05 } : {}}
                  whileTap={!reduceMotion ? { scale: 0.95 } : {}}
                  className="bg-lime-400 hover:bg-lime-300 text-black px-6 text-sm font-medium transition"
                >

                  Join

                </motion.button>

              </div>

            </div>

          </motion.div>

        </motion.div>


        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-6" />


        {/* Bottom */}
        <motion.p
          variants={itemVariant}
          className="text-center text-gray-500 text-xs"
        >

          © Copyright 2026, All Rights Reserved by KloZe

        </motion.p>

      </div>

    </motion.footer>
  );
};


/* ================= SOCIAL ================= */

const Social = ({ icon, reduceMotion }) => {
  return (
    <motion.div
      whileHover={
        reduceMotion
          ? {}
          : {
              scale: 1.15,
              rotate: 8,
              boxShadow: "0 0 15px rgba(132,204,22,0.5)",
            }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center hover:border-lime-400 transition cursor-pointer"
    >

      <img
        src={icon}
        alt="Social"
        className="w-4 h-4 object-contain"
      />

    </motion.div>
  );
};

export default Footer;