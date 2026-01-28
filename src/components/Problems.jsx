import {
  FaEyeSlash,
  FaClock,
  FaFileAlt,
  FaUserTimes,
} from "react-icons/fa";

const Problems = () => {
  return (
    <section className="w-full bg-[#0b0b0f] border-t border-gray-800">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-28">

        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="bg-green-500/10 text-green-400 text-[11px] px-4 py-[5px] rounded-full">
            Problems
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold max-w-3xl mx-auto leading-tight">

          Every Departing Employee Leaves
          <br />
          a Risk Behind

        </h2>

        {/* Divider */}
        <div className="w-full max-w-xl mx-auto my-6 h-[1px] bg-gray-800"></div>

        {/* Description */}
        <p className="text-center text-gray-400 text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed mb-16">

          When you fire or lose a critical staff, you are at risk of losing
          access to sensitive systems and data. Poor offboarding increases
          your exposure.

        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <Card
            icon={<FaEyeSlash />}
            title="Hidden Access"
            text="Employees often keep access to apps you don’t even know about. This is a real security and compliance risk."
          />

          {/* Card 2 */}
          <Card
            icon={<FaClock />}
            title="Manual Offboarding Costs Time"
            text="Your IT team spends hours per departure clicking through dozens of apps, slowing your business."
            accent="red"
          />

          {/* Card 3 */}
          <Card
            icon={<FaFileAlt />}
            title="Compliance Exposure"
            text="Auditors require proof of offboarding. Without it, your company is vulnerable."
          />

          {/* Card 4 */}
          <Card
            icon={<FaUserTimes />}
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
    <div className="relative bg-[#111216] border border-gray-800 rounded-2xl p-6 overflow-hidden">

      {/* Icon Box */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
          accent === "red"
            ? "bg-red-500/10 text-red-400"
            : "bg-indigo-500/10 text-indigo-400"
        }`}
      >

        {icon}

      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mb-3">

        {title}

      </h3>

      {/* Text */}
      <p className="text-gray-400 text-sm leading-relaxed">

        {text}

      </p>

    </div>
  );
};

export default Problems;