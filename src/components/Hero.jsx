import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import studentImg1 from "../assets/student.jpg"; // replace with actual image paths

const slides = [
  {
    image: studentImg1,
    title: "Learn Anytime, Anywhere",
    highlight: "ILMI MAiDAN",
    description:
      "Empower your future with expert-led online courses designed to fit your goals.",
  },
  {
    image: studentImg1,
    title: "Quality Education for Everyone",
    highlight: "Online Academy",
    description:
      "From technology to personal growth, learn skills that matter in today’s world.",
  },
  {
    image: studentImg1,
    title: "Build Skills That Matter",
    highlight: "Your Future",
    description:
      "Learn at your own pace with structured courses and expert guidance.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Motion variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  const bgVariant = {
    hidden: { scale: 1 },
    visible: { scale: 1.05, transition: { duration: 5, ease: "easeOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      {/* HERO CARD */}
      <div className="relative min-h-[85vh] overflow-hidden rounded-3xl shadow-lg">
        {/* Background Image with zoom animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            variants={bgVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 flex items-center min-h-[85vh]">
          <div className="w-full md:w-[70%] lg:w-[60%] text-white">
            <AnimatePresence mode="wait">
              <motion.h2
                key={current + "-title"}
                className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 leading-snug"
                variants={textVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {slides[current].title}{" "}
                <motion.span
                  key={current + "-highlight"}
                  className="font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
                >
                  {slides[current].highlight}
                </motion.span>
              </motion.h2>

              <motion.p
                key={current + "-desc"}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8"
                variants={descVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                key={current + "-btn"}
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link to="/apply">
                  <button className="px-8 py-3 border-2 border-white font-bold text-white hover:bg-white hover:text-[#005662] transition rounded-lg">
                    Start Learning
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
