import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-background text-foreground font-sans">

      {/* Hero Section */}
      <motion.section
        className=" py-20 text-center rounded-4xl max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We’d love to hear from you! Reach out to us for admissions, inquiries, or general questions.
        </p>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid sm:grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: <MapPin size={28} className="text-primary" />, title: "Address", desc: "Govt College for Girls DaudKhel, Punjab, Pakistan" },
          { icon: <Mail size={28} className="text-primary" />, title: "Email", desc: "info@gcgdaudkhel.edu.pk" },
          { icon: <Phone size={28} className="text-primary" />, title: "Phone", desc: "+92 300 1234567" },
        ].map((info, index) => (
          <motion.div
            key={index}
            className="bg-card p-8 rounded-2xl shadow-md text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{info.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
            <p className="text-gray-700 text-sm">{info.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="max-w-3xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Send Us a Message
        </h2>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

    </main>
  );
};

export default Contact;
