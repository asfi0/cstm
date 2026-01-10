import React from "react";
import facultyBg from "../assets/arabicadult.webp"; // replace later if needed
import { Link } from "react-router-dom";

const FacultyCard = () => {
  return (
    <section className="max-w-10xl mx-auto px-6 md:px-12 py-20">
      
      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-primary">Faculties</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Dedicated departments committed to academic excellence and holistic
          development of our students.
        </p>
      </div>

      {/* FACULTY CARD */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-lg min-h-[320px] flex items-center"
        style={{
          backgroundImage: `url(${facultyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax effect
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content */}
        <div className="relative z-10 w-full text-center px-6 py-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Explore Our Academic Faculties
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            Our college offers a balanced academic structure through specialized
            faculties that nurture scientific thinking, social awareness, and
            leadership.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/faculty/science">
              <button className="px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100 transition">
                Faculty of Sciences
              </button>
            </Link>

            <Link to="/faculty/social-sciences">
              <button className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition">
                Faculty of Social Sciences
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* VERTICAL RHYTHM GAP — easy to remove */}
      <div className="h-24"></div>
    </section>
  );
};

export default FacultyCard;
