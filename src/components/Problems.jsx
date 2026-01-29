import chat from "../assets/chat.png";

import hidden from "../assets/problems/hidden.png";
import time from "../assets/problems/time.png";
import compliance from "../assets/problems/compliance.png";
import licenses from "../assets/problems/licenses.png";

const Problems = () => {
  return (
    <section className="w-full bg-[#0b0b0f] border-t border-gray-800 overflow-x-hidden">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-24 sm:pb-28">

        {/* Label */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] px-3 py-1 rounded-full">

            <img
              src={chat}
              alt="Chat"
              className="w-3 h-3"
            />

            <span>
              Problem
            </span>

          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-[24px] sm:text-[32px] md:text-[38px] font-semibold max-w-3xl mx-auto leading-tight">

          Every Departing Employee Leaves
          <br />
          a Risk Behind

        </h2>

        {/* Divider */}
        <div className="w-full max-w-xl mx-auto my-5 sm:my-6 h-[1px] bg-gray-800"></div>

        {/* Description */}
        <p className="text-center text-gray-400 text-[12px] sm:text-sm max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">

          "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.

        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

          {/* Card 1 */}
          <Card
            icon={hidden}
            title="Hidden Access"
            text="Employees often keep access to apps you don’t even know about. This is a real security and compliance risk."
          />

          {/* Card 2 */}
          <Card
            icon={time}
            title="Manual Offboarding Costs Time"
            text="Your IT team spends hours per departure clicking through dozens of apps, slowing your business."
            accent="red"
          />

          {/* Card 3 */}
          <Card
            icon={compliance}
            title="Compliance Exposure"
            text="Auditors require proof of offboarding. Without it, your company is vulnerable."
          />

          {/* Card 4 */}
          <Card
            icon={licenses}
            title="Wasted Licenses"
            text="Paying for unused seats month after month drains cash."
          />

        </div>

      </div>
    </section>
  );
};

/* Card Component */
const Card = ({ icon, title, text, accent }) => {
  return (
    <div className="relative bg-[#111216] border border-gray-800 rounded-2xl p-5 sm:p-6 overflow-hidden
      flex flex-col items-center text-center
      sm:items-start sm:text-left">

      {/* Icon Box */}
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-5 ${
          accent === "red"
            ? "bg-red-500/10 text-red-400"
            : "bg-indigo-500/10 text-indigo-400"
        }`}
      >

        <img
          src={icon}
          alt={title}
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
        />

      </div>

      {/* Title */}
      <h3 className="text-white text-base sm:text-lg font-semibold mb-2">

        {title}

      </h3>

      {/* Text */}
      <p className="text-gray-400 text-[13px] sm:text-sm leading-relaxed max-w-sm">

        {text}

      </p>

    </div>
  );
};

export default Problems;