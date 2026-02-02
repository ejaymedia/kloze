import { motion, useReducedMotion } from "framer-motion";

import chat from "../assets/chat.png";

/* ---------------- Variants ---------------- */

const sectionVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

const lineVariant = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const stepVariant = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};

const iconVariant = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

/* ---------------- Data ---------------- */

const steps = [
  {
    title: "Discover Every App",
    text: "Kloze continuously identifies every SaaS application in use across your organization, including unapproved and forgotten tools, creating a complete and accurate SaaS inventory.",
  },
  {
    title: "Automate Offboarding",
    text: "When an employee leaves, Kloze instantly revokes access across all connected tools from a single action, ensuring consistency and eliminating manual errors.",
  },
  {
    title: "Enforce Access Control",
    text: "Kloze applies standardized access policies so users only retain access they’re authorized to have, reducing internal risk as teams change and grow.",
  },
  {
    title: "Generate Audit Logs",
    text: "Every access change is automatically logged with timestamps, creating a permanent audit trail available on demand.",
  },
  {
    title: "Reclaim Unused Licenses",
    text: "Kloze identifies unused or orphaned licenses and flags them for recovery, keeping your SaaS stack clean and controlled.",
  },
];

/* ---------------- Component ---------------- */

const Solutions = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#0b0b0f] overflow-x-hidden">

      {/* Wrapper */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-4 pt-12 pb-15 sm:px-30"
      >

        {/* Label */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center mb-4"
        >

          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] px-3 py-1 rounded-full">

            <img
              src={chat}
              alt="Chat"
              className="w-3 h-3"
            />

            <span>Solution</span>

          </div>

        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold max-w-3xl mx-auto leading-tight mb-4"
        >

          Kloze Protects Your Business
          <br />
          From Day One

        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-center text-gray-400 text-[13px] sm:text-sm max-w-3xl mx-auto leading-relaxed mb-14"
        >

          Kloze works by discovering every tool your company uses, automating access removal, and continuously proving control over who can access your systems.

        </motion.p>

        {/* Divider */}
        <motion.div
          variants={lineVariant}
          className="w-full h-[1px] bg-gray-800 mb-16 origin-left"
        />

        {/* Steps Timeline */}
        <motion.div
          variants={sectionVariant}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-12 mb-24 relative"
        >

          {steps.map((item, index) => (
            <Step
              key={index}
              index={index}
              title={item.title}
              text={item.text}
              reduceMotion={shouldReduceMotion}
            />
          ))}

        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          variants={lineVariant}
          className="w-full h-[1px] bg-gray-800 mb-20 origin-left"
        />

        {/* Bottom Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-white text-[24px] sm:text-[30px] md:text-[36px] font-semibold max-w-4xl mx-auto leading-tight mb-4"
        >

          How does this make my company stronger, safer, and more efficient?

        </motion.h2>

        {/* Bottom Text */}
        <motion.p
          variants={fadeUp}
          className="text-center text-gray-400 text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed"
        >

          By automating access control and eliminating blind spots, Kloze delivers tangible business value from day one.

        </motion.p>

      </motion.div>

    </section>
  );
};

/* ---------------- Step ---------------- */

const Step = ({ index, title, text }) => {
  return (
    <motion.div
      variants={stepVariant}
      className="relative flex flex-col items-start"
    >

      {/* Connector Line (Desktop Only) */}
      <motion.div
        variants={lineVariant}
        className="hidden md:block absolute -top-10 left-5 w-[1px] h-10 bg-green-500/30 origin-top"
      />

      {/* Icon */}
      <motion.div
        variants={iconVariant}
        className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-semibold mb-4 relative z-10"
      >
        {index + 1}
      </motion.div>

      {/* Content */}
      <motion.h3
        variants={fadeUp}
        className="text-white text-lg font-semibold mb-3"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={fadeUp}
        className="text-gray-400 text-sm leading-relaxed"
      >
        {text}
      </motion.p>

    </motion.div>
  );
};

export default Solutions;