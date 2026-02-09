import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/Clg-front.jpeg";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      {/* HERO CONTAINER */}
      <div className="relative min-h-[85vh] overflow-hidden rounded-3xl shadow-lg">
        
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />

        {/* LEFT GRADIENT OVERLAY (100px fade) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0px, rgba(0,0,0,0.5) 60px, rgba(0,0,0,0.2) 100px, rgba(0,0,0,0) 160px)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center min-h-[85vh] px-6 md:px-12">
          <div className="max-w-2xl text-white">
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empowering Minds at{" "}
              <span className="font-bold block">
                ILMI MAiDAN
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A place where knowledge, discipline, and character come together
              to shape the leaders of tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/admissions">
                <button className="px-8 py-3 border-2 border-white font-semibold text-white hover:bg-white hover:text-black transition rounded-lg">
                  View Admissions
                </button>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
