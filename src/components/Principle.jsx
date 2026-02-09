import React from "react";
import { motion } from "framer-motion";

const PrincipleSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto bg-white px-4 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        {/* HEADING */}
        <h2 className="mb-6">
          <span className="block text-3xl md:text-4xl font-semibold text-gray-700">
            Message from the Principal
          </span>
          <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">
            Mrs. Shaheen Akhtar
          </span>
        </h2>

        {/* MESSAGE */}
        <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
          <span className="font-semibold">
            Welcome to our college,
          </span>

          an institution committed to academic excellence, character building, and the holistic development of our students.

          Education is not merely the acquisition of knowledge; it is the cultivation of values, critical thinking and responsible citizenship. Our college strives to provide a learning environment that encourages intellectual curiosity, discipline, creativity, and ethical conduct. We aim to equip our students with the skills and confidence required to meet the challenges of a rapidly changing world.

          Our dedicated faculty members play a vital role in mentoring students and nurturing their potential through innovative teaching methods and a supportive academic atmosphere. Alongside academics, we place great emphasis on co-curricular activities, leadership development, and community engagement to ensure balanced growth.

          We firmly believe that collaboration between students, parents, teachers, and administration is the key to success. Together, we endeavor to uphold high standards of education and to prepare our students to become productive, responsible, and enlightened members of society.

          I invite you to explore our website to learn more about our academic programs, facilities, and achievements. We look forward to your association and support in our mission of educational excellence.

          With best wishes,
          <span className="block mt-4 font-semibold text-primary">Mrs Shaheen Akhtar</span>
          <span className="block">Principal</span>
          Government College for Women, DaudKhel
        </p>
      </motion.div>
    </section>
  );
};

export default PrincipleSection;
