import React from "react";
import principalImg from "../assets/quaid-pt.png"; // update if needed
import { motion } from "framer-motion";

const FamousQuotes = () => {
  // Variants for animations
  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imagePopVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const boxVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 0.4, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="max-w-7xl bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: IMAGE WITH OFFSET BOX */}
        <div className="relative flex justify-end">
          
          {/* OFFSET BACKGROUND BOX (RIGHT SIDE) */}
          <motion.div
            className="absolute -right-6 top-6 w-[80%] h-[85%] bg-primary rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={boxVariant}
          />

          {/* IMAGE POP-IN */}
          <motion.img
            src={principalImg}
            alt="Principal"
            className="relative z-10 w-[85%] scale-x-[-1] rounded-3xl object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imagePopVariant}
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          className="text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          <h2 className="mb-6">
            <span className="block text-3xl md:text-4xl font-semibold text-gray-700">
              Quaid-e-Azam
            </span>
            <span className="block text-5xl md:text-6xl font-extrabold text-primary">
              Muhammad Ali Jinnah
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            Education is a <span className="font-semibold"> matter of life and death </span>for our nation. The world is moving so fast that without education, it is not possible to keep pace with it.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FamousQuotes;
