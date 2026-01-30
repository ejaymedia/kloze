import shield from "../assets/benefits/shield.png";
import gear from "../assets/benefits/gear.png";
import file from "../assets/benefits/file.png";
import money from "../assets/benefits/money.png";
import eye from "../assets/benefits/eye.png";

const BenefitsCTA = () => {
  return (
    <section className="w-full bg-[#0b0b0f]">

      {/* Wrapper */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 pt-15 pb-26 border-t border-gray-800">

        {/* ================= BENEFITS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">

          <BenefitCard
            icon={shield}
            title="Lower Security Risk"
            text="Former employees never retain access to sensitive systems, dramatically reducing the risk of internal breaches or data exposure."
          />

          <BenefitCard
            icon={gear}
            title="Operational Efficiency"
            text="Offboarding that once took hours now happens in seconds, freeing IT operations teams to focus on higher-value work."
          />

          <BenefitCard
            icon={file}
            title="Always-On Compliance"
            text="Audit readiness becomes a default state, not a fire drill, giving founders confidence during fundraising and enterprise sales."
          />

          <BenefitCard
            icon={money}
            title="Reduced SaaS Spend"
            text="Unused licenses are identified and recovered automatically, preventing silent budget leaks as your team scales."
            wide
          />

          <BenefitCard
            icon={eye}
            title="Executive Visibility"
            text="Founders gain a clear, real-time understanding of what tools are in use, who owns them, and where risk exists."
            wide
          />

        </div>

        {/* ================= CTA ================= */}
        <div className="relative bg-[#0f0f12] border border-gray-800 rounded-[28px] px-6 sm:px-0 lg:px-20 py-16 overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-transparent pointer-events-none"></div>

          {/* Label */}
          <div className="relative z-10 flex justify-center mb-5">
            <div className="flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 text-lime-400 text-[11px] px-4 py-[6px] rounded-full">

              <span>
                Take the First Step Toward Efficiency
              </span>

            </div>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-center text-white text-[28px] sm:text-[34px] md:text-[40px] font-semibold max-w-3xl mx-auto leading-tight mb-5">

            Secure Your Spot for Early Access

          </h2>

          {/* Text */}
          <p className="relative z-10 text-center text-gray-400 text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed mb-12">

            Join our waitlist to be among the first to automate offboarding, reduce risk, and save money. Early users get priority onboarding and direct influence over product features.

          </p>

          {/* Form */}
          <div className="relative z-10 max-w-4xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">

              {/* Name */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder=""
                  className="w-full bg-[#0b0b0f] border border-gray-700 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder=""
                  className="w-full bg-[#0b0b0f] border border-gray-700 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-lime-400"
                />
              </div>

            </div>

            {/* Button */}
            <div className="flex justify-center">

              <button className="bg-lime-400 hover:bg-lime-300 text-black px-10 py-3 rounded-full text-sm font-medium transition shadow-lg shadow-lime-400/20">

                ⚡ Join Waitlist

              </button>

            </div>

            {/* Footer */}
            <p className="text-center text-gray-500 text-[11px] mt-3">
              Your information is secured
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

/* ================= Benefit Card ================= */
const BenefitCard = ({ icon, title, text, wide }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-[#111216] to-[#0c0c0f] border border-gray-800 rounded-2xl p-8 min-h-[240px] ${
        wide ? "lg:col-span-1" : ""
      }`}
    >

      {/* Icon Container */}
      <div className="w-16 h-16 rounded-xl bg-[#0b0b0f] border border-gray-700 flex items-center justify-center mb-6 shadow-inner">

        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain"
        />

      </div>

      {/* Title */}
      <h3 className="text-white text-[17px] font-semibold mb-3">

        {title}

      </h3>

      {/* Text */}
      <p className="text-gray-400 text-[13px] leading-relaxed">

        {text}

      </p>

    </div>
  );
};

export default BenefitsCTA;