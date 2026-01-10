import React from "react";
import { motion } from "framer-motion";
import collegeImg from "../assets/arabicadult.webp"; // update path if needed

const AboutPage = () => {
  return (
    <main className="bg-background text-foreground font-sans">
      
      {/* Hero Section */}
      <motion.section
        className="bg-primary/10 rounded-4xl py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          About Govt College for Girls DaudKhel
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Dedicated to nurturing young women into confident, educated, and empowered citizens, 
          we provide quality education, modern facilities, and a supportive learning environment.
        </p>
      </motion.section>

      {/* College Mission */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to empower girls through education, instill strong values, and 
            provide a safe, inclusive environment where each student can excel academically 
            and personally. We strive to create leaders of tomorrow who are confident, capable, 
            and socially responsible.
          </p>
        </div>
        <motion.img
          src={collegeImg}
          alt="College Building"
          className="w-full rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Academic Excellence", desc: "Providing high-quality education and guidance." },
            { title: "Integrity", desc: "Upholding honesty, ethics, and responsibility." },
            { title: "Empowerment", desc: "Encouraging confidence and leadership in every student." },
            { title: "Community", desc: "Building a caring and collaborative learning environment." },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={collegeImg}
          alt="College Students"
          className="w-full rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Established to provide quality education for girls in DaudKhel, our college has a rich legacy 
            of academic excellence and community service. Over the years, we have nurtured generations 
            of young women who have gone on to excel in higher education, careers, and social contributions.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 mb-6">
          Join us and be part of a nurturing academic environment for girls.
        </p>
        <a
          href="/admission"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition"
        >
          How to Apply
        </a>
      </motion.section>

    </main>
  );
};

export default AboutPage;
