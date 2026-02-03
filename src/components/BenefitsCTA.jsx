import { motion, useReducedMotion } from "framer-motion";

import shield from "../assets/benefits/shield.png";
import gear from "../assets/benefits/gear.png";
import file from "../assets/benefits/file.png";
import money from "../assets/benefits/money.png";
import eye from "../assets/benefits/eye.png";

/* ================= VARIANTS ================= */

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const ctaVariant = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const buttonVariant = {
  idle: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

/* ================= MAIN ================= */

const BenefitsCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#0b0b0f] overflow-x-hidden">

      {/* Wrapper */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-28 border-t border-gray-800">


        {/* ================= BENEFITS ================= */}

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >

          <BenefitCard
            icon={shield}
            title="Lower Security Risk"
            text="Former employees never retain access to sensitive systems, dramatically reducing the risk of internal breaches or data exposure."
            reduceMotion={reduceMotion}
          />

          <BenefitCard
            icon={gear}
            title="Operational Efficiency"
            text="Offboarding that once took hours now happens in seconds, freeing IT operations teams to focus on higher-value work."
            reduceMotion={reduceMotion}
          />

          <BenefitCard
            icon={file}
            title="Always-On Compliance"
            text="Audit readiness becomes a default state, not a fire drill, giving founders confidence during fundraising and enterprise sales."
            reduceMotion={reduceMotion}
          />

          <BenefitCard
            icon={money}
            title="Reduced SaaS Spend"
            text="Unused licenses are identified and recovered automatically, preventing silent budget leaks as your team scales."
            reduceMotion={reduceMotion}
          />

          <BenefitCard
            icon={eye}
            title="Executive Visibility"
            text="Founders gain a clear, real-time understanding of what tools are in use, who owns them, and where risk exists."
            reduceMotion={reduceMotion}
          />

        </motion.div>


        {/* ================= CTA ================= */}

        <motion.div
          variants={ctaVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-[#0f0f12] border border-gray-800 rounded-[28px] px-6 sm:px-10 lg:px-20 py-16 overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-transparent pointer-events-none" />


          {/* Label */}
          <div className="relative z-10 flex justify-center mb-5">
            <div className="bg-lime-500/10 border border-lime-500/30 text-lime-400 text-[11px] px-4 py-[6px] rounded-full">

              Take the First Step Toward Efficiency

            </div>
          </div>


          {/* Heading */}
          <h2 className="relative z-10 text-center text-white text-[26px] sm:text-[34px] md:text-[40px] font-semibold max-w-3xl mx-auto leading-tight mb-5">

            Secure Your Spot for Early Access

          </h2>


          {/* Text */}
          <p className="relative z-10 text-center text-gray-400 text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed mb-12">

            Join our waitlist to be among the first to automate offboarding, reduce risk, and save money. Early users get priority onboarding and direct influence over product features.

          </p>


          {/* Form */}
          <div className="relative z-10 max-w-4xl mx-auto">


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">

              <FloatingInput label="Name" type="text" />
              <FloatingInput label="Email" type="email" />

            </div>


            {/* Button */}
            <div className="flex justify-center">

              <motion.button
                variants={buttonVariant}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        scale: [1, 1.05, 1],
                        transition: {
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        },
                      }
                }
                className="bg-lime-400 hover:bg-lime-300 text-black px-10 py-3 rounded-full text-sm font-medium transition shadow-lg shadow-lime-400/30"
              >

                ⚡ Join Waitlist

              </motion.button>

            </div>


            {/* Footer */}
            <p className="text-center text-gray-500 text-[11px] mt-3">

              Your information is secured

            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};


/* ================= BENEFIT CARD ================= */

const BenefitCard = ({ icon, title, text, reduceMotion }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -8,
              rotateX: 6,
              rotateY: -6,
              boxShadow: "0 0 30px rgba(132,204,22,0.25)",
            }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative bg-gradient-to-b from-[#111216] to-[#0c0c0f] border border-gray-800 rounded-2xl p-8 min-h-[240px] group perspective-1000"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/0 via-transparent to-transparent group-hover:from-green-400/10 transition duration-500 pointer-events-none" />


      {/* Icon */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="relative z-10 w-16 h-16 rounded-xl bg-[#0b0b0f] border border-gray-700 flex items-center justify-center mb-6 shadow-inner"
      >

        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain"
        />

      </motion.div>


      {/* Title */}
      <h3 className="relative z-10 text-white text-[17px] font-semibold mb-3">

        {title}

      </h3>


      {/* Text */}
      <p className="relative z-10 text-gray-400 text-[13px] leading-relaxed">

        {text}

      </p>

    </motion.div>
  );
};


/* ================= FLOATING INPUT ================= */

const FloatingInput = ({ label, type }) => {
  return (
    <div className="relative group">

      <input
        type={type}
        required
        className="peer w-full bg-[#0b0b0f] border border-gray-700 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-lime-400 focus:shadow-[0_0_15px_rgba(132,204,22,0.3)] transition"
      />

      <label
        className="
          absolute left-5 top-1/2 -translate-y-1/2
          text-gray-500 text-sm
          transition-all duration-300
          peer-focus:top-2
          peer-focus:text-[11px]
          peer-focus:text-lime-400
          peer-valid:top-2
          peer-valid:text-[11px]
        "
      >

        {label}

      </label>

    </div>
  );
};

export default BenefitsCTA;