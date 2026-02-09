import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Cpu,
  Calculator,
  Palette,
  BookText,
  Monitor,
  HeartPulse,
  HandHelping
} from "lucide-react";


const interPrograms = [
  {
    icon: Stethoscope,
    title: "FSc Pre Medical",
    description:
      "Structured courses to strengthen academic foundations and exam performance.",
  },
  {
    icon: Calculator,
    title: "FSc Pre Engineering",
    description:
      "Hands-on science and technology programs fostering innovation.",
  },
  {
    icon: Cpu,
    title: "ICS",
    description:
      "Programs focused on confidence, communication, and leadership.",
  },
  {
    icon: Palette,
    title: "Arts",
    description:
      "Merit-based programs encouraging academic excellence.",
  },
];
const AssDegPrograms = [
  {
    icon: BookText,
    title: "AD English",
    description:
      "Structured courses to strengthen academic foundations and exam performance.",
  },
  {
    icon: Monitor,
    title: "AD Information Technology",
    description:
      "Hands-on science and technology programs fostering innovation.",
  },
  {
    icon: HeartPulse,
    title: "AD Health & Physical Education",
    description:
      "Programs focused on confidence, communication, and leadership.",
  },
  {
    icon: HandHelping,
    title: "AD Social Work",
    description:
      "Merit-based programs encouraging academic excellence.",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProgramsPage() {
  return (
    <main className="bg-white font-sans text-gray-800">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Intermediate Level Programs
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          A diverse range of programs designed to empower, educate, and inspire.
        </p>
      </motion.section>

      {/* PROGRAMS GRID */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {interPrograms.map((program, index) => {
          const Icon = program.icon;
          return (
           <motion.div
  key={index}
  variants={cardVariants}
  className="bg-primary rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
>
  <div className="flex justify-center mb-4">
    <Icon size={34} className="text-white/90" />
  </div>

  <h3 className="text-lg font-bold text-white mb-2">
    {program.title}
  </h3>

  <p className="text-sm text-white/80 leading-relaxed">
    {program.description}
  </p>
</motion.div>

          );
        })}
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Associate Degree Programs
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          A diverse range of programs designed to empower, educate, and inspire.
        </p>
      </motion.section>

      {/* PROGRAMS GRID */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {AssDegPrograms.map((program, index) => {
          const Icon = program.icon;
          return (
            <motion.div
  key={index}
  variants={cardVariants}
  className="bg-primary rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
>
  <div className="flex justify-center mb-4">
    <Icon size={34} className="text-white/90" />
  </div>

  <h3 className="text-lg font-bold text-white mb-2">
    {program.title}
  </h3>

  <p className="text-sm text-white/80 leading-relaxed">
    {program.description}
  </p>
</motion.div>

          );
        })}
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto my-20 px-6 py-16 text-center rounded-3xl bg-primary"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Begin Your Academic Journey
        </h2>
        <p className="text-white/90 max-w-3xl mx-auto text-lg mb-6">
          Choose a program that aligns with your passion and future goals.
        </p>

        <a
          href="/apply"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg border-2 border-white hover:bg-white  hover:text-primary transition"
        >
          How to Apply
        </a>
      </motion.section>
    </main>
  );
}
