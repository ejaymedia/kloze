import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import chat from "../assets/chat.png";

import hidden from "../assets/problems/hidden.png";
import time from "../assets/problems/time.png";
import compliance from "../assets/problems/compliance.png";
import licenses from "../assets/problems/licenses.png";

/* ---------------- Variants ---------------- */

const sectionVariant = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const headingVariant = {
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

const dividerVariant = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* Card Entry */
const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};

/* Icon Animation */
const iconVariant = {
  hidden: {
    scale: 0.8,
    rotate: -5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.12,
    rotate: 6,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

/* ---------------- Component ---------------- */

const Problems = () => {
  return (
    <section className="w-full bg-[#0b0b0f] border-t border-gray-800 overflow-x-hidden">

      {/* Wrapper */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-12 sm:pb-14"
      >

        {/* Label */}
        <motion.div
          variants={headingVariant}
          className="flex justify-center mb-4"
        >

          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] px-3 py-1 rounded-full">

            <img
              src={chat}
              alt="Chat"
              className="w-3 h-3"
            />

            <span>Problem</span>

          </div>

        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={headingVariant}
          className="text-center text-white text-[24px] sm:text-[32px] md:text-[38px] font-semibold max-w-3xl mx-auto leading-tight"
        >

          Every Departing Employee Leaves
          <br />
          a Risk Behind

        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={dividerVariant}
          className="max-w-xl mx-auto my-5 sm:my-6 h-[1px] bg-gray-800"
        />

        {/* Description */}
        <motion.p
          variants={headingVariant}
          className="text-center text-gray-400 text-[12px] sm:text-sm max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16"
        >

          "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.

        </motion.p>

        {/* Cards */}
        <motion.div
          variants={cardsContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
        >

          <Card
            icon={hidden}
            title="Hidden Access"
            text="Employees often keep access to apps you don’t even know about. This is a real security and compliance risk."
          />

          <Card
            icon={time}
            title="Manual Offboarding Costs Time"
            text="Your IT team spends hours per departure clicking through dozens of apps, slowing your business."
            accent="red"
          />

          <Card
            icon={compliance}
            title="Compliance Exposure"
            text="Auditors require proof of offboarding. Without it, your company is vulnerable."
          />

          <Card
            icon={licenses}
            title="Wasted Licenses"
            text="Paying for unused seats month after month drains cash."
          />

        </motion.div>

      </motion.div>

    </section>
  );
};

/* ---------------- Card ---------------- */

const Card = ({ icon, title, text, accent }) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  /* 3D Tilt */
  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -6;
    const rotateY = ((x - midX) / midX) * 6;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariant}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              borderColor: "rgba(34,197,94,0.4)",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative bg-[#111216] border border-gray-800 rounded-2xl p-5 sm:p-6 overflow-hidden
      flex flex-col items-center text-center
      sm:items-start sm:text-left
      transition-transform duration-300"
    >

      {/* Icon Box */}
      <motion.div
        variants={iconVariant}
        whileHover="hover"
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

      </motion.div>

      {/* Title */}
      <h3 className="text-white text-base sm:text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Text */}
      <p className="text-gray-400 text-[13px] sm:text-sm leading-relaxed max-w-sm">
        {text}
      </p>

    </motion.div>
  );
};

export default Problems;