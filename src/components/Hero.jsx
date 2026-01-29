import people from "../assets/people.png";

/* App Icons */
import whatsapp from "../assets/apps/whatsapp.png";
import telegram from "../assets/apps/telegram.png";
import slack from "../assets/apps/slack.png";
import email from "../assets/apps/email.png";
import outlook from "../assets/apps/outlook.png";

import docs from "../assets/apps/docs.png";
import office from "../assets/apps/office.png";
import calendar from "../assets/apps/calendar.png";
import meet from "../assets/apps/meet.png";
import crm from "../assets/apps/crm.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#0b0b0f] overflow-x-hidden">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 pt-28 sm:pt-32 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-7">
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] px-3 py-1 rounded-full">

            <span className="bg-green-500 text-black px-2 py-[2px] rounded-full text-[10px] font-medium">
              New
            </span>

            <span>
              Introducing KloZe
            </span>

            <span className="text-green-400 text-sm">
              →
            </span>

          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-[26px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-semibold leading-[1.2] text-white">

          Stop Losing Control of Your SaaS. Automate Offboarding. Secure Your Company.

        </h1>

        {/* Sub Text */}
        <p className="mt-6 max-w-2xl text-[13px] sm:text-[15px] md:text-[16px] text-gray-400 leading-[1.7]">

          Kloze automatically revokes access for departing employees across every SaaS tool your team uses including apps no one tracks and generates audit-ready logs so your business is secure, compliant, and efficient

        </p>

        {/* Email + Button */}
        <div className="mt-9 w-full max-w-xl flex items-center bg-[#1a1a1a] rounded-full p-2">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-4 text-[14px] text-gray-300 placeholder-gray-500 focus:outline-none"
          />

          <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full text-[14px] font-medium transition whitespace-nowrap">

            Join Waitlist

          </button>

        </div>

        {/* People */}
        <div className="mt-7 flex flex-col items-center gap-2 text-gray-400 text-[12px] sm:text-[13px]">

          <img
            src={people}
            alt="Users"
            className="h-8 sm:h-9"
          />

          <span className="max-w-md">

            Join{" "}
            <span className="text-green-400 font-medium">
              1,200+ SMB & Founders
            </span>{" "}
            on waitlist & get early access before launch and influence the product

          </span>

        </div>

        {/* Apps */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 w-full max-w-5xl">

          <App icon={whatsapp} name="WhatsApp" />
          <App icon={telegram} name="Telegram" />
          <App icon={slack} name="Slack" />
          <App icon={email} name="Email" />
          <App icon={outlook} name="Outlook" />

          <App icon={docs} name="Google Docs" />
          <App icon={office} name="Microsoft Office" />
          <App icon={calendar} name="Calendar" />
          <App icon={meet} name="Google Meet" />
          <App icon={crm} name="CRM Tools" />

        </div>

      </div>
    </section>
  );
};

/* App Button */
const App = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-[#111216] border border-gray-800 rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:border-green-500/40 transition">

      <img
        src={icon}
        alt={name}
        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
      />

      <span className="text-[13px] sm:text-[14px] text-gray-300 whitespace-nowrap">
        {name}
      </span>

    </div>
  );
};

export default Hero;