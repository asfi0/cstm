import React from "react";
import { motion } from "framer-motion";

// Dummy faculty data
const scienceFaculty = [
  { name: "Dr. Ayesha Khan", subject: "Mathematics", qualification: "PhD Mathematics", image: "/images/faculty/ayesha.webp" },
  { name: "Dr. Sana Ali", subject: "Physics", qualification: "MPhil Physics", image: "/images/faculty/sana.webp" },
  { name: "Ms. Hina Farooq", subject: "Chemistry", qualification: "MSc Chemistry", image: "/images/faculty/hina.webp" },
];

const socialFaculty = [
  { name: "Ms. Fatima Iqbal", subject: "English", qualification: "MA English", image: "/images/faculty/fatima.webp" },
  { name: "Mr. Ali Raza", subject: "Pakistan Studies", qualification: "MPhil History", image: "/images/faculty/ali.webp" },
  { name: "Ms. Sara Khan", subject: "Economics", qualification: "MA Economics", image: "/images/faculty/sara.webp" },
];

const FacultyCard = ({ faculty, index }) => (
  <motion.div
    className="bg-card rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <img
      src={faculty.image}
      alt={faculty.name}
      className="w-32 h-32 object-cover rounded-full mb-4"
    />
    <h3 className="text-lg font-bold text-foreground">{faculty.name}</h3>
    <p className="text-primary font-semibold mt-1">{faculty.subject}</p>
    <p className="text-gray-700 text-sm mt-1">{faculty.qualification}</p>
  </motion.div>
);

const FacultySection = ({ title, data }) => (
  <section className="py-16 max-w-10xl mx-auto px-6 md:px-12">
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {data.map((faculty, index) => (
        <FacultyCard key={index} faculty={faculty} index={index} />
      ))}
    </div>
  </section>
);

const Faculty = () => {
  return (
    <main className="bg-background text-foreground font-sans">
      {/* Page Hero */}
      <motion.section
        className="bg-card py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Our Faculty
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Dedicated educators shaping the future of young women at Govt College
          for Girls DaudKhel
        </p>
      </motion.section>

      {/* Faculty of Science */}
      <FacultySection title="Faculty of Science" data={scienceFaculty} />

      {/* Faculty of Social Sciences */}
      <FacultySection title="Faculty of Social Sciences" data={socialFaculty} />

      {/* Message from Head of Faculty */}
      <motion.section
        className="py-16 max-w-10xl mx-auto px-6 md:px-12 bg-card rounded-2xl mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">
          Message from Head of Faculty
        </h2>
        <p className="text-gray-700 font-semibold max-w-3xl mx-auto text-center text-lg leading-relaxed">
          Our faculty members are committed to providing quality education, nurturing curiosity,
          and guiding students to excel academically and personally. We aim to create an environment
          where every student feels empowered to achieve their full potential.
        </p>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Explore our programs and see what we have to offer.
        </p>
        <a
          href="/programs"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition"
        >
          View Programs
        </a>
      </motion.section>
    </main>
  );
};

export default Faculty;
