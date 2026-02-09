import React from "react";
import { GraduationCap, Users, BookOpen, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <GraduationCap size={28} />,
    title: "Qualified Faculty",
    description:
      "Learn from experienced and dedicated teachers committed to academic excellence.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Modern Curriculum",
    description:
      "Updated syllabi designed to meet current academic and professional standards.",
  },
  {
    icon: <Users size={28} />,
    title: "Student-Centered Environment",
    description:
      "A supportive campus culture that encourages growth, discipline, and confidence.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Well-Established Institution",
    description:
      "A trusted college with a strong foundation in education and community values.",
  },
];

export default function WhyChooseCollege() {
  // Motion variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.h2
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Why Choose <br />
            <span className="text-primary">Our College</span>
          </motion.h2>

          <motion.p
            variants={textVariant}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md leading-relaxed"
          >
            We are committed to providing quality education, strong academic
            foundations, and an environment where students can grow intellectually
            and personally.
          </motion.p>

          <motion.div
            variants={lineVariant}
            className="h-1 w-20 bg-primary"
          />
        </motion.div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="border border-primary border-2 p-6 hover:shadow-lg hover:shadow-primary/20 transition rounded-xl bg-white"
            >
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
