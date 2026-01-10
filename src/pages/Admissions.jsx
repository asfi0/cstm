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
          merit-based physical admission process. This page guides students
          and parents through every step.
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
              className="border border-gray-200 p-6 rounded-lg"
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
    <ClipboardList className="text-[#ac2b49]" />
    Admission Process
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        step: "01",
        title: "Visit the College",
        desc: "Students must visit Government College for Girls, Daudkhel during official admission dates."
      },
      {
        step: "02",
        title: "Collect Admission Form",
        desc: "Admission forms are available from the college administration office."
      },
      {
        step: "03",
        title: "Complete Documentation",
        desc: "Fill the form carefully and attach all required documents."
      },
      {
        step: "04",
        title: "Submit for Merit Review",
        desc: "Forms are reviewed according to merit and government regulations."
      },
      {
        step: "05",
        title: "Check Merit List",
        desc: "Selected candidates are announced via notice board."
      },
      {
        step: "06",
        title: "Fee Submission",
        desc: "After selection, students complete the admission by submitting fees."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        transition={{ delay: i * 0.05 }}
        className="border border-gray-200 rounded-lg p-6 bg-white"
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
        className="bg-gray-50 p-10 rounded-xl"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <CalendarDays className="text-[#ac2b49]" />
          Important Information
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Admissions are strictly based on merit.</li>
          <li>• No online admission facility is available.</li>
          <li>• Parents/guardians are encouraged to visit the college.</li>
          <li>• Incomplete forms will not be accepted.</li>
        </ul>
      </motion.section>

      {/* PHYSICAL VISIT EMPHASIS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <MapPin className="mx-auto text-[#ac2b49] mb-4" size={32} />
        <p className="text-gray-700 leading-relaxed">
          All admissions are processed <strong>physically on campus</strong>.
          Students and parents must visit Government College for Girls,
          Daudkhel during official admission hours.
        </p>
      </motion.section>

    </main>
  );
}
