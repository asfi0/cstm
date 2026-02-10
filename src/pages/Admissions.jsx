import React from "react";
import { motion } from "framer-motion";
import {
  School,
  FileText,
  ClipboardList,
  CheckCircle,
  MapPin,
  CalendarDays,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Admissions() {
  return (
    <main className="max-w-7xl mx-auto py-16 space-y-24">

      {/* INTRO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Admissions Process
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Government College for Girls, Daudkhel follows a transparent and
          merit-based admission process. All online admissions are processed
          through the official Punjab Higher Education Department portal (OCAS).
        </p>
      </motion.section>

      {/* ELIGIBILITY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
          <School className="text-primary" />
          Eligibility Criteria
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Intermediate / FA / FSC as per program requirement",
            "Minimum marks as prescribed by BISE",
            "Age limit according to government policy",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-primary border-2 p-6 rounded-lg"
            >
              <CheckCircle className="text-primary mb-3" />
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* REQUIRED DOCUMENTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
          <FileText className="text-primary" />
          Required Documents
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>Matric / Intermediate Result Card (Original + Copy)</li>
          <li>Character Certificate</li>
          <li>B-Form / CNIC Copy</li>
          <li>Passport Size Photographs</li>
          <li>Domicile (if required)</li>
        </ul>
      </motion.section>

      {/* ADMISSION STEPS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-10 flex items-center gap-3">
          <ClipboardList className="text-primary" />
          Admission Process
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Apply Online via OCAS",
              desc: "Students must submit their online admission application through the official OCAS portal."
            },
            {
              step: "02",
              title: "Merit Evaluation",
              desc: "Applications are reviewed by the authorities according to merit and government policy."
            },
            {
              step: "03",
              title: "Merit List Announcement",
              desc: "Selected candidates are notified through the OCAS system and college notice board."
            },
            {
              step: "04",
              title: "Visit College for Verification",
              desc: "Shortlisted students must visit the college for document verification."
            },
            {
              step: "05",
              title: "Fee Submission",
              desc: "After verification, students complete admission by submitting the prescribed fees."
            },
            {
              step: "06",
              title: "Enrollment Confirmation",
              desc: "Admission is confirmed after successful fee submission and record verification."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="border border-primary border-2 rounded-lg p-6 bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* IMPORTANT NOTES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary/10 hover:shadow-lg p-10 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <CalendarDays className="text-primary" />
          Important Information
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Admissions are strictly based on merit.</li>
          <li>
            • All online admissions are processed through the official
            OCAS (Online College Admission System) portal.
          </li>
          <li>• Students must visit the college for document verification.</li>
          <li>• Incomplete or incorrect applications may be rejected.</li>
        </ul>
      </motion.section>

      {/* APPLY NOW */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <a
          href="https://ocas.punjab.gov.pk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition"
        >
          Apply Now via OCAS
        </a>
        <p className="text-sm text-gray-600 mt-3">
          You will be redirected to the official Punjab Government admission portal.
        </p>
      </motion.section>

      {/* LOCATION NOTE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <MapPin className="mx-auto text-primary mb-4" size={32} />
        <p className="text-gray-700 leading-relaxed">
          Physical presence at the college is required for document verification
          and final admission confirmation after applying through OCAS.
        </p>
      </motion.section>

    </main>
  );
}
