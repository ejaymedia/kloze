import twitter from "../assets/footer-socials/twitter.png";
import facebook from "../assets/footer-socials/facebook.png";
import instagram from "../assets/footer-socials/instagram.png";
import github from "../assets/footer-socials/github.png";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0f] border-t border-gray-800">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>

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

              <Social icon={twitter} />
              <Social icon={facebook} />
              <Social icon={instagram} />
              <Social icon={github} />

            </div>

          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="hover:text-white cursor-pointer">
                Service
              </li>

              <li className="hover:text-white cursor-pointer">
                Resources
              </li>

              <li className="hover:text-white cursor-pointer">
                About us
              </li>

            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Help
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="hover:text-white cursor-pointer">
                Customer Support
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">
              Subscribe to Newsletter
            </h4>

            <div className="flex w-full max-w-sm bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700">

              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
              />

              <button className="bg-lime-400 hover:bg-lime-300 text-black px-6 text-sm font-medium transition">

                Join

              </button>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-xs">

          © Copyright 2026, All Rights Reserved by KloZe

        </p>

      </div>
    </footer>
  );
};

/* Social Button */
const Social = ({ icon }) => {
  return (
    <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center hover:border-lime-400 transition cursor-pointer">

      <img
        src={icon}
        alt="Social"
        className="w-4 h-4 object-contain"
      />

    </div>
  );
};

export default Footer;