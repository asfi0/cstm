import React from "react";
import { BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "01",
    title: "Academic Excellence",
    description:
      "We are committed to delivering quality education that builds strong academic foundations and encourages critical thinking among young women.",
    icon: <BookOpen size={36} />,
  },
  {
    id: "02",
    title: "Empowerment & Growth",
    description:
      "Our institution empowers female students with confidence, skills, and opportunities to grow intellectually, socially, and personally.",
    icon: <Users size={36}  />,
  },
  {
    id: "03",
    title: "Leadership & Values",
    description:
      "We nurture future leaders by promoting discipline, ethics, responsibility, and a strong sense of purpose in every student.",
    icon: <Award size={36} />,
  },
];

export default function KnowledgeSection() {
  // Variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const boxVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section className="px-6 py-16 bg-white max-w-7xl mx-auto flex flex-col items-center">
      {/* MATCH MAIN LAYOUT WIDTH */}
      <motion.div
        className="max-w-10xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Educating <span className="text-primary">Women</span>, Shaping the Future
        </h1>

        <p className="mt-4 text-lg text-gray-700 text-center">
          At <strong>Govt College For Girls DaudKhel</strong>, we believe that
          educating women is the foundation of a progressive and empowered society.
        </p>

        <p className="mt-4 text-lg text-gray-700 text-center font-normal">
          Our mission is to provide a nurturing academic environment where young
          women gain knowledge, confidence, and values that prepare them for
          higher education, professional careers, and responsible citizenship.
          This vision stands on three core pillars:
        </p>
      </motion.div>

      {/* PILLARS */}
      <div className="mt-14 flex flex-col md:flex-row gap-10 items-stretch justify-center">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            className="group bg-gray-50 w-full max-w-[300px] p-8 rounded-2xl transition hover:bg-primary/80 hover:backdrop-blur-md cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={boxVariant}
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-primary group-hover:text-white">{pillar.id}</div>
              <div className="text-primary group-hover:text-white">{pillar.icon}</div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-white">
              {pillar.title}
            </h3>

            <p className="mt-3 text-gray-700 text-sm leading-relaxed group-hover:text-white">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CONCLUSION */}
      <motion.div
        className="mt-14 max-w-10xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 text-center">
          By focusing on education, empowerment, and leadership, we aim to build
          a generation of women who are confident, capable, and ready to shape
          the future of our nation.
        </p>
      </motion.div>

      {/* VERTICAL RHYTHM GAP */}
      <div className="h-20"></div>
    </section>
  );
}
