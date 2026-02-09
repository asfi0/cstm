import React from "react";
import { motion } from "framer-motion";
import collegimg from "../assets/clg-1.jpeg";
import eduimage from "../assets/stnd.png";

const AboutPage = () => {
  return (
    <main className="bg-background text-foreground font-sans">

      {/* HERO */}
      <motion.section
        className="max-w-7xl mx-auto py-20 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Government Associate College for Women, Daudkhel
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          A leading public sector institution in District Mianwali, committed to
          providing quality education at Intermediate and Degree levels and
          promoting women’s education in underserved regions.
        </p>
      </motion.section>

      {/* INTRO & LOCATION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Introduction & Geographical Location
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Government Associate College for Women, Daudkhel, is the only
            government college for women serving a vast area of approximately
            forty square kilometers in District Mianwali. The college plays a
            vital role in expanding access to higher education for women.
            <br /><br />
            Located about 45 kilometers north of Mianwali city, near the historic
            town of Kalabagh, Daudkhel is a remote and underdeveloped area. The
            region is known for its patriotic population, many of whom have
            served with distinction in national institutions, particularly the
            Pakistan Armed Forces.
          </p>
        </div>

        <motion.img
          src={collegimg}
          alt="College Location"
          className="w-full rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.section>

      {/* SOCIAL & EDUCATIONAL BACKGROUND */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Social & Educational Background
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The residents of Daudkhel largely follow traditional tribal customs,
          which historically made educational opportunities for women more
          challenging. Despite these social constraints, awareness regarding
          the importance of girls’ education has increased significantly in
          recent years.
          <br /><br />
          Prior to the establishment of this college, there was no government
          institution for women in the area. Female students were forced to
          travel long distances to Mianwali city after matriculation, making
          higher education inaccessible for many due to transportation and
          financial constraints. As a result, numerous capable students were
          deprived of continuing their education.
        </p>
      </motion.section>

      {/* ESTABLISHMENT & IMPACT */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={eduimage}
          alt="College Campus"
          className="w-full rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Establishment & Educational Impact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In 2012, the Government of Punjab established Government Associate
            College for Women, Daudkhel, to address the educational needs of girls
            in this remote region. Since its inception, the college has brought
            a positive educational transformation and fostered academic
            awareness throughout the area.
            <br /><br />
            Thousands of students have successfully completed their Intermediate
            and Degree education from this institution. Many alumnae are now
            serving in public and private sector organizations, contributing
            meaningfully to national and social development.
          </p>
        </div>
      </motion.section>

      {/* ACADEMIC ENVIRONMENT */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Academic Environment & Institutional Services
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The college provides a disciplined, supportive, and academically
          enriching environment under effective administrative supervision.
          Qualified and experienced faculty members work diligently to meet
          modern educational standards and guide students toward academic
          excellence.
          <br /><br />
          Alongside academics, the institution promotes co-curricular
          activities, including literary, scientific, cultural, and academic
          programs. These initiatives help students develop confidence,
          leadership qualities, and positive thinking.
        </p>
      </motion.section>

      {/* CONCLUSION */}
      <motion.section
        className="max-w-6xl mx-auto py-16 px-6 text-center bg-primary/10 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Our Commitment to the Future
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Government Associate College for Women, Daudkhel, stands as a symbol of
          progress, empowerment, and educational development. With growing trust
          from parents and the community, the college remains committed to
          shaping a progressive, educated, and dignified society for future
          generations.
        </p>
      </motion.section>

    </main>
  );
};

export default AboutPage;
