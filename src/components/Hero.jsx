import people from "../assets/people.png";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSlack,
  FaEnvelope,
  FaMicrosoft,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";

import { SiGoogledocs, SiGooglemeet } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full bg-[#0b0b0f]">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 pt-40 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-7">
          <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-[11px] px-4 py-[5px] rounded-full">

            <span className="w-[6px] h-[6px] bg-green-400 rounded-full"></span>

            Introducing KloZe

          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-semibold leading-[1.2] text-white">

          Stop Losing Control of Your SaaS. Automate Offboarding. Secure Your Company.

        </h1>

        {/* Sub Text */}
        <p className="mt-6 max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 leading-[1.7]">

          KloZe automatically revokes access for departing employees across your SaaS tools, ensuring secure and compliant offboarding for your business.

        </p>

        {/* Email + Button */}
        <div className="mt-9 w-full max-w-xl flex bg-[#111216] border border-gray-700 rounded-full overflow-hidden">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-6 py-[14px] text-[14px] text-white placeholder-gray-500 focus:outline-none"
          />

          <button className="bg-green-500 text-black px-8 text-[14px] font-medium hover:bg-green-400 transition">

            Join Waitlist

          </button>

        </div>

        {/* People */}
        <div className="mt-7 flex flex-col items-center gap-2 text-gray-400 text-[13px]">

          <img
            src={people}
            alt="Users"
            className="h-9"
          />

          <span>
            Join 1,200+ founders already using KloZe
          </span>

        </div>

        {/* Integrations */}
        <div className="mt-16 mb-6">
          <span className="bg-green-500/10 text-green-400 text-[11px] px-4 py-[5px] rounded-full">

            Integrations

          </span>
        </div>

        {/* Apps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-5xl">

          <App icon={<FaWhatsapp />} name="WhatsApp" />
          <App icon={<FaTelegramPlane />} name="Telegram" />
          <App icon={<FaSlack />} name="Slack" />
          <App icon={<FaEnvelope />} name="Email" />
          <App icon={<FaMicrosoft />} name="Outlook" />

          <App icon={<SiGoogledocs />} name="Google Docs" />
          <App icon={<FaMicrosoft />} name="Microsoft Drive" />
          <App icon={<FaCalendarAlt />} name="Calendar" />
          <App icon={<SiGooglemeet />} name="Google Meet" />
          <App icon={<FaTools />} name="CRM Tools" />

        </div>

      </div>
    </section>
  );
};

/* App Button */
const App = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-4 bg-[#111216] border border-gray-800 rounded-xl px-6 py-4 hover:border-green-500/40 transition">

      <span className="text-[20px] text-white">
        {icon}
      </span>

      <span className="text-[14px] text-gray-300 whitespace-nowrap">
        {name}
      </span>

    </div>
  );
};

export default Hero;