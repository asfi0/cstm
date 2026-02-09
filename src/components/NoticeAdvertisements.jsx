import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notices = [
  {
    id: 1,
    title: "Admissions Open 2025",
    type: "Advertisement",
    banner: "/banners/admission.jpg",
    description: "Online admissions are now open for Intermediate & BS programs.",
  },
  {
    id: 2,
    title: "CTI Jobs Announced",
    type: "Notice",
    banner: "/banners/cti.jpg",
    description: "Walk-in interviews for College Teaching Interns (CTI).",
  },
  {
    id: 3,
    title: "Merit List Uploaded",
    type: "Notice",
    banner: "/banners/merit.jpg",
    description: "First merit list has been uploaded on the notice board.",
  },
];

const NoticesAdvertisements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % notices.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeItem = notices[activeIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* SECTION TITLE */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-primary">
          Notices & Advertisements
        </h2>
        <p className="mt-2 text-gray-600">
          Stay updated with the latest announcements
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT: LIST */}
        <div className="space-y-4">
          {notices.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-xl p-5 border transition-all
                  ${
                    isActive
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold text-lg ${
                      isActive ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        item.type === "Advertisement"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {item.type}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT: BANNER PREVIEW */}
        <div className="relative rounded-2xl overflow-hidden min-h-75">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={activeItem.banner}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />

              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm text-gray-200 max-w-md">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NoticesAdvertisements;
