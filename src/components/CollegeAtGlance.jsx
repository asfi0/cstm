import React from "react";
import { GraduationCap, Building2, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CollegeAtAGlance() {
  const stats = [
    {
      icon: <GraduationCap className="text-primary mb-3" size={28} />,
      title: "Academic Focus",
      desc: "Intermediate & Degree Programs",
    },
    {
      icon: <BookOpen className="text-primary mb-3" size={28} />,
      title: "Faculties",
      desc: "Science & Social Sciences",
    },
    {
      icon: <Building2 className="text-primary mb-3" size={28} />,
      title: "Campus",
      desc: "Safe & Disciplined Environment",
    },
    {
      icon: <Users className="text-primary mb-3" size={28} />,
      title: "Community",
      desc: "Students, Faculty & Staff",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            College <span className="text-primary">At a Glance</span>
          </h2>

          <div className="w-16 h-1 bg-primary mt-4 mb-6" />

          <p className="text-gray-600 leading-relaxed mb-4">
            Govt. College for Girls Daudkhel is committed to providing a
            supportive academic environment that encourages intellectual
            growth, discipline, and responsible citizenship.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Through quality education and dedicated faculty, the college plays
            a vital role in empowering young women to pursue higher education
            and meaningful careers.
          </p>
        </motion.div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.icon}
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
