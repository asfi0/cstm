import React from "react";
import principalImg from "../assets/teacherimg.webp"; // update if needed
import { motion } from "framer-motion";

const PrincipleSection = () => {
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
            className="relative z-10 w-[85%] rounded-3xl object-cover"
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
              Principal
            </span>
            <span className="block text-5xl md:text-6xl font-extrabold text-primary">
              Shaheen
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            At <span className="font-semibold">Govt College For Girls DaudKhel</span>,
            our vision is to nurture confident, educated, and empowered young
            women who are prepared to contribute meaningfully to society.
            We are committed to academic excellence, character building, and
            providing an inclusive environment where students can grow
            intellectually, socially, and ethically. Our goal is to shape
            future leaders through quality education, discipline, and values
            that last a lifetime.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PrincipleSection;
