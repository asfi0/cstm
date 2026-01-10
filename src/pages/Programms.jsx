import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  Users,
  Award,
  Code,
  Globe,
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Academic Courses",
    description:
      "Structured courses to strengthen academic foundations and exam performance.",
  },
  {
    icon: Rocket,
    title: "STEM Programs",
    description:
      "Hands-on science and technology programs fostering innovation.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Programs focused on confidence, communication, and leadership.",
  },
  {
    icon: Award,
    title: "Scholarship Tracks",
    description:
      "Merit-based programs encouraging academic excellence.",
  },
  {
    icon: Code,
    title: "Computer & IT",
    description:
      "Programming, web development, and digital skills training.",
  },
  {
    icon: Globe,
    title: "Global Studies",
    description:
      "Courses exploring culture, society, and global perspectives.",
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
          Our Programs
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
        {programs.map((program, index) => {
          const Icon = program.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Icon size={38} className="text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-2">
                {program.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
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
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          How to Apply
        </a>
      </motion.section>
    </main>
  );
}
