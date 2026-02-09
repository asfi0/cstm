import React from "react";
import { motion } from "framer-motion";

// Faculty Data (no images)
const scienceFaculty = [
  {
    name: "Mrs. Raza Fatima",
    designation: "Assistant Professor",
    department: "Physics",
    qualification: "MSc Physics",
  },
  {
    name: "Mrs. Fozia Hassan",
    designation: "Lecturer",
    department: "Mathematics",
    qualification: "M.Phil Mathematics",
  },
  {
    name: "Ms. Fozia Noreen",
    designation: "Lecturer",
    department: "Zoology",
    qualification: "M.Phil Zoology",
  },
];

const socialFaculty = [
  {
    name: "Ms. Fatima Iqbal",
    designation: "Lecturer",
    department: "English",
    qualification: "MA English",
  },
  {
    name: "Mr. Ali Raza",
    designation: "Lecturer",
    department: "Pakistan Studies",
    qualification: "M.Phil History",
  },
  {
    name: "Ms. Sara Khan",
    designation: "Lecturer",
    department: "Economics",
    qualification: "MA Economics",
  },
];

// Faculty Card (New Split Design)
const FacultyCard = ({ faculty, index }) => (
  <motion.div
    className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {/* Top Section */}
    <div className="bg-primary px-6 py-5">
      <h3 className="text-white text-lg font-bold text-center">
        {faculty.name}
      </h3>
    </div>

    {/* Bottom Section */}
    <div className="px-6 py-6 text-center space-y-2">
      <p className="text-gray-900 font-semibold">
        {faculty.designation}
      </p>
      <p className="text-gray-700 text-sm">
        {faculty.department}
      </p>
      {faculty.qualification && (
        <p className="text-gray-500 text-sm">
          {faculty.qualification}
        </p>
      )}
    </div>
  </motion.div>
);

// Faculty Section
const FacultySection = ({ title, data }) => (
  <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
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
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Our Faculty
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Dedicated educators shaping the future of young women at
          Government College for Girls, Daudkhel
        </p>
      </motion.section>

      {/* Faculty of Science */}
      <FacultySection title="Faculty of Science" data={scienceFaculty} />

      {/* Faculty of Social Sciences */}
      <FacultySection title="Faculty of Social Sciences" data={socialFaculty} />

      {/* Message from Head of Faculty */}
      <motion.section
        className="py-16 max-w-7xl mx-auto px-6 md:px-12 bg-card rounded-2xl mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">
          Message from Head of Faculty
        </h2>
        <p className="text-gray-700 font-semibold max-w-3xl mx-auto text-center text-lg leading-relaxed">
          Our faculty members are committed to academic excellence, ethical
          values, and holistic development. We strive to create a supportive
          learning environment where students grow intellectually and personally.
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
          Learn more about our academic offerings.
        </p>
        <a
          href="/programs"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition"
        >
          View Programs
        </a>
      </motion.section>

    </main>
  );
};

export default Faculty;
