import chat from "../assets/chat.png";

const Solutions = () => {
  return (
    <section className="w-full bg-[#0b0b0f]">

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-15 sm:px-30">

        {/* Label */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] px-3 py-1 rounded-full">

            <img
              src={chat}
              alt="Chat"
              className="w-3 h-3"
            />

            <span>
              Solution
            </span>

          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold max-w-3xl mx-auto leading-tight mb-4">

          Kloze Protects Your Business
          <br />
          From Day One

        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 text-[13px] sm:text-sm max-w-3xl mx-auto leading-relaxed mb-14">

          Kloze works by discovering every tool your company uses, automating access removal, and continuously proving control over who can access your systems.

        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-16"></div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-12 mb-24">

          {/* Item 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Discover Every App
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Kloze continuously identifies every SaaS application in use across your organization, including unapproved and forgotten tools, creating a complete and accurate SaaS inventory.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Automate Offboarding
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              When an employee leaves, Kloze instantly revokes access across all connected tools from a single action, ensuring consistency and eliminating manual errors.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Enforce Access Control
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Kloze applies standardized access policies so users only retain access they’re authorized to have, reducing internal risk as teams change and grow.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Generate Audit Logs
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Every access change is automatically logged with timestamps, creating a permanent audit trail available on demand.
            </p>
          </div>

          {/* Item 5 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Reclaim Unused Licenses
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Kloze identifies unused or orphaned licenses and flags them for recovery, keeping your SaaS stack clean and controlled.
            </p>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-20"></div>

        {/* Bottom Heading */}
        <h2 className="text-center text-white text-[24px] sm:text-[30px] md:text-[36px] font-semibold max-w-4xl mx-auto leading-tight mb-4">

          How does this make my company stronger, safer, and more efficient?

        </h2>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed">

          By automating access control and eliminating blind spots, Kloze delivers tangible business value from day one.

        </p>

      </div>

    </section>
  );
};

export default Solutions;